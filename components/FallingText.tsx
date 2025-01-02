import { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

// 폰트 그룹화
const FONTS = {
  handwriting: [
    "'Caveat', cursive",
    "'Shadows Into Light', cursive",
    "'Indie Flower', cursive",
    "'Permanent Marker', cursive",
    "'Satisfy', cursive",
    "'Dancing Script', cursive",
    "'Homemade Apple', cursive",
    "'Rock Salt', cursive",
    "'Covered By Your Grace', cursive"
  ],
  sansSerif: [
    "'Bebas Neue', sans-serif",
    "'Oswald', sans-serif",
    "'Anton', sans-serif",
    "'Teko', sans-serif",
    "'Archivo Black', sans-serif",
    "'Chau Philomene One', sans-serif",
    "'Big Shoulders Display', sans-serif"
  ],
  display: [
    "'Bungee Shade', display",
    "'Rubik Mono One', display",
    "'Monoton', display",
    "'Bungee Inline', display",
    "'Faster One', display",
    "'Righteous', display",
    "'Russo One', display",
    "'Black Ops One', display",
    "'Wallpoet', display",
    "'Sarpanch', display",
    "'Megrim', display",
    "'Stalinist One', display"
  ]
};

// 모든 폰트를 하나의 배열로 합치기
const ALL_FONTS = [...FONTS.handwriting, ...FONTS.sansSerif, ...FONTS.display];

// 이미 사용된 폰트를 제외하고 랜덤하게 선택
const getUniqueRandomFonts = (count: number) => {
  const shuffled = [...ALL_FONTS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// 90~120% 사이의 랜덤 크기 반환
const getRandomSize = () => {
  return 0.9 + (Math.random() * 0.3); // 0.9 ~ 1.2
};

// 기본 폰트 크기 설정 (반응형)
const getBaseFontSize = () => {
  if (typeof window === 'undefined') return '7rem';
  return window.innerWidth < 768 ? '4rem' : '7rem';
};

const BASE_FONT_SIZE = getBaseFontSize();

// 텍스트 크기가 화면 너비를 초과하는지 확인
const adjustTextSize = (size: number, width: number) => {
  if (typeof window === 'undefined') return size;
  const maxWidth = window.innerWidth * 0.9; // 화면 너비의 90%를 최대 너비로 설정
  return width > maxWidth ? (maxWidth / width) * size : size;
};

const firstLine = [
  { text: "DESIGNS", x: 0.15 },
  { text: "WRAPPED", x: 0.35 },
  { text: "IN", x: 0.5 },
  { text: "CREATIVITY", x: 0.8 }
];

const secondLine = [
  { text: "DELIVERED", x: 0.2 },
  { text: "WITH", x: 0.5 },
  { text: "CARE", x: 0.8 }
];

const FallingText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const bodiesRef = useRef<Matter.Body[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [positions, setPositions] = useState<Array<{x: number; y: number; angle: number}>>([]);
  const [textSizes, setTextSizes] = useState<Array<{width: number; height: number}>>([]);
  const [fonts, setFonts] = useState(() => getUniqueRandomFonts([...secondLine, ...firstLine].length));
  const [fontSizes, setFontSizes] = useState(() => [...secondLine, ...firstLine].map(() => getRandomSize()));
  const [orderedWords, setOrderedWords] = useState<typeof firstLine | typeof secondLine>([]);
  const allWords = [...secondLine, ...firstLine];

  // 단어 클릭 핸들러
  const handleWordClick = async (index: number) => {
    // 새로운 폰트와 크기 생성
    const newFont = ALL_FONTS[Math.floor(Math.random() * ALL_FONTS.length)];
    const newSize = getRandomSize();

    if (!engineRef.current || !bodiesRef.current[index]) return;

    const clickedBody = bodiesRef.current[index];
    const currentPos = clickedBody.position;
    const originalWidth = textSizes[index].width;
    const originalHeight = textSizes[index].height;
    const currentAngle = clickedBody.angle;

    // 팽창 애니메이션
    const expandDuration = 100; // 100ms
    const shrinkDuration = 200; // 200ms
    const maxScale = 1.1; // 10% 더 크게
    const startTime = Date.now();

    // 상태 업데이트 (폰트 변경은 애니메이션 완료 후에 적용)
    setFonts(prev => {
      const next = [...prev];
      next[index] = prev[index];
      return next;
    });
    setFontSizes(prev => {
      const next = [...prev];
      next[index] = fontSizes[index];
      return next;
    });

    const createScaledBody = (position: Matter.Vector, scale: number, angle: number) => {
      return Matter.Bodies.rectangle(
        position.x,
        position.y,
        originalWidth * scale,
        originalHeight * scale,
        {
          friction: 0.3,
          restitution: 0.4,
          render: {
            fillStyle: 'transparent',
            strokeStyle: '#000',
            lineWidth: 1
          },
          angle: angle
        }
      );
    };

    const expandAnimation = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / expandDuration, 1);
      // easeOutQuad 애니메이션 커브 적용
      const eased = 1 - (1 - progress) * (1 - progress);
      const scale = 1 + (maxScale - 1) * eased;

      if (engineRef.current && bodiesRef.current[index]) {
        const body = bodiesRef.current[index];
        const newBody = createScaledBody(body.position, scale, currentAngle);

        // 현재 상태 복사
        Matter.Body.setVelocity(newBody, body.velocity);
        Matter.Body.setAngularVelocity(newBody, body.angularVelocity);

        // 바디 교체
        Matter.World.remove(engineRef.current.world, body);
        Matter.World.add(engineRef.current.world, newBody);
        bodiesRef.current[index] = newBody;

        // 텍스트 크기 업데이트
        setFontSizes(prev => {
          const next = [...prev];
          next[index] = fontSizes[index] * scale;
          return next;
        });
        
        if (progress < 1) {
          requestAnimationFrame(expandAnimation);
        } else {
          // 축소 애니메이션 시작
          const shrinkStartTime = Date.now();
          const shrinkAnimation = () => {
            const shrinkElapsed = Date.now() - shrinkStartTime;
            const shrinkProgress = Math.min(shrinkElapsed / shrinkDuration, 1);
            // easeInOutQuad 애니메이션 커브 적용
            const eased = shrinkProgress < 0.5
              ? 2 * shrinkProgress * shrinkProgress
              : 1 - Math.pow(-2 * shrinkProgress + 2, 2) / 2;
            const currentScale = maxScale - (maxScale - 1) * eased;

            if (engineRef.current && bodiesRef.current[index]) {
              const body = bodiesRef.current[index];
              const newBody = createScaledBody(body.position, currentScale, currentAngle);

              // 현재 상태 복사
              Matter.Body.setVelocity(newBody, body.velocity);
              Matter.Body.setAngularVelocity(newBody, body.angularVelocity);

              // 바디 교체
              Matter.World.remove(engineRef.current.world, body);
              Matter.World.add(engineRef.current.world, newBody);
              bodiesRef.current[index] = newBody;

              // 텍스트 크기 업데이트
              setFontSizes(prev => {
                const next = [...prev];
                next[index] = fontSizes[index] * currentScale;
                return next;
              });

              if (shrinkProgress < 1) {
                requestAnimationFrame(shrinkAnimation);
              } else {
                // 애니메이션 완료 후 최종 폰트와 크기로 변경
                setFonts(prev => {
                  const next = [...prev];
                  next[index] = newFont;
                  return next;
                });
                setFontSizes(prev => {
                  const next = [...prev];
                  next[index] = newSize;
                  return next;
                });
                updateBodyWithNewFont();
              }
            }
          };
          requestAnimationFrame(shrinkAnimation);
        }
      }
    };

    requestAnimationFrame(expandAnimation);

    // 주변 단어들에 힘 가하기
    bodiesRef.current.forEach((body, i) => {
      if (i !== index) {
        const distance = Matter.Vector.magnitude(Matter.Vector.sub(body.position, currentPos));
        if (distance < 100) { // 100px 반경으로 줄임
          const force = Matter.Vector.mult(
            Matter.Vector.normalise(Matter.Vector.sub(body.position, currentPos)),
            0.01 * (100 - distance) // 힘도 약하게 조정
          );
          Matter.Body.applyForce(body, currentPos, force);
        }
      }
    });

    // 폰트 로딩 및 크기 측정
    const updateBodyWithNewFont = async () => {
      const fontName = newFont.split(',')[0].replace(/['"]/g, '');
      await document.fonts.load(`bold ${BASE_FONT_SIZE} ${fontName}`);

      if (!measureRef.current || !engineRef.current || !bodiesRef.current[index]) return;

      const div = document.createElement('div');
      const fontSize = `calc(${BASE_FONT_SIZE} * ${newSize})`;
      div.style.cssText = `
        position: absolute;
        visibility: hidden;
        font-size: ${fontSize};
        font-weight: bold;
        white-space: nowrap;
        font-family: ${newFont};
        letter-spacing: -0.02em;
        padding: 0;
        margin: 0;
        border: 0;
      `;
      const allWords = [...secondLine, ...firstLine];
      div.textContent = allWords[index].text;
      
      document.body.appendChild(div);
      const rect = div.getBoundingClientRect();
      document.body.removeChild(div);
      
      const newSize2D = {
        width: Math.ceil(rect.width) + 20,
        height: Math.ceil(rect.height) + 16
      };

      // 크기 상태 업데이트
      setTextSizes(prev => {
        const next = [...prev];
        next[index] = newSize2D;
        return next;
      });

      // 최종 크기로 바디 업데이트
      const body = bodiesRef.current[index];
      const newBody = Matter.Bodies.rectangle(
        body.position.x,
        body.position.y,
        newSize2D.width,
        newSize2D.height,
        {
          friction: 0.3,
          restitution: 0.4,
          render: {
            fillStyle: 'transparent',
            strokeStyle: '#000',
            lineWidth: 1
          },
          angle: body.angle
        }
      );

      // 현재 상태 복사
      Matter.Body.setVelocity(newBody, body.velocity);
      Matter.Body.setAngularVelocity(newBody, body.angularVelocity);

      // 바디 교체
      Matter.World.remove(engineRef.current.world, body);
      Matter.World.add(engineRef.current.world, newBody);
      bodiesRef.current[index] = newBody;
    };
  };

  // 텍스트 크기 측정
  useEffect(() => {
    if (!measureRef.current) return;

    const measureText = async () => {
      await document.fonts.ready;
      
      const allWords = [...secondLine, ...firstLine];
      const sizes = await Promise.all(allWords.map(async (word, i) => {
        const fontName = fonts[i].split(',')[0].replace(/['"]/g, '');
        const isFontLoaded = document.fonts.check(`bold ${BASE_FONT_SIZE} ${fontName}`);
        console.log(`Font ${fontName} loaded:`, isFontLoaded);

        const div = document.createElement('div');
        const fontSize = `calc(${BASE_FONT_SIZE} * ${fontSizes[i]})`;
        div.style.cssText = `
          position: absolute;
          visibility: hidden;
          font-size: ${fontSize};
          font-weight: bold;
          white-space: nowrap;
          font-family: ${fonts[i]};
          letter-spacing: -0.02em;
          padding: 0;
          margin: 0;
          border: 0;
        `;
        div.textContent = word.text;
        
        document.body.appendChild(div);
        
        if (!isFontLoaded) {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        const rect = div.getBoundingClientRect();
        const width = Math.ceil(rect.width) + 20;
        const height = Math.ceil(rect.height) + 16;
        
        // 텍스트 크기가 화면을 벗어나는 경우 크기 조정
        const adjustedSize = {
          width: width,
          height: height
        };
        
        const adjustedFontSize = adjustTextSize(fontSizes[i], width);
        if (adjustedFontSize !== fontSizes[i]) {
          // 크기가 조정된 경우 다시 측정
          div.style.fontSize = `calc(${BASE_FONT_SIZE} * ${adjustedFontSize})`;
          const newRect = div.getBoundingClientRect();
          adjustedSize.width = Math.ceil(newRect.width) + 20;
          adjustedSize.height = Math.ceil(newRect.height) + 16;
          
          // 폰트 크기 업데이트
          setFontSizes(prev => {
            const next = [...prev];
            next[i] = adjustedFontSize;
            return next;
          });
        }
        
        document.body.removeChild(div);
        console.log(`Measured "${word.text}" with font ${fontName}:`, adjustedSize);
        
        return adjustedSize;
      }));

      console.log('All text sizes measured:', sizes);
      setTextSizes(sizes);
      setIsReady(true);
    };

    measureText();
  }, [fonts, fontSizes]);

  // 물리 엔진 초기화
  useEffect(() => {
    if (!containerRef.current || !isReady) return;

    console.log('Initializing physics with text sizes:', textSizes);

    const engine = Matter.Engine.create({
      enableSleeping: false
    });
    engineRef.current = engine;

    const render = Matter.Render.create({
      element: containerRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: true,
        background: 'transparent',
        wireframeBackground: 'transparent',
        pixelRatio: window.devicePixelRatio || 1
      }
    });

    // @ts-ignore
    render.options.wireframeStrokeStyle = '#000000';
    render.canvas.style.opacity = '1';
    render.canvas.style.mixBlendMode = 'multiply';

    engine.gravity.y = 0.5;

    // 벽과 바닥 생성
    const walls = [
      Matter.Bodies.rectangle(
        window.innerWidth / 2,
        window.innerHeight,
        window.innerWidth,
        60,
        { 
          isStatic: true,
          restitution: 0.3,
          render: {
            fillStyle: 'transparent',
            strokeStyle: '#000',
            lineWidth: 1
          }
        }
      ),
      Matter.Bodies.rectangle(
        0,
        window.innerHeight / 2,
        60,
        window.innerHeight,
        { 
          isStatic: true,
          restitution: 0.3,
          render: {
            fillStyle: 'transparent',
            strokeStyle: '#000',
            lineWidth: 1
          }
        }
      ),
      Matter.Bodies.rectangle(
        window.innerWidth,
        window.innerHeight / 2,
        60,
        window.innerHeight,
        { 
          isStatic: true,
          restitution: 0.3,
          render: {
            fillStyle: 'transparent',
            strokeStyle: '#000',
            lineWidth: 1
          }
        }
      )
    ];

    Matter.World.add(engine.world, walls);

    // 모바일 여부 확인
    const isMobile = window.innerWidth < 768;
    
    // 모바일에서는 문장 순서대로 역순 정렬
    const words = isMobile 
      ? ["DESIGNS", "WRAPPED", "IN", "CREATIVITY", "DELIVERED", "WITH", "CARE"].reverse().map(text => 
          allWords.find(word => word.text === text)!
        )
      : allWords;
    
    setOrderedWords(words);

    // 순서에 맞는 크기와 폰트 매핑
    const orderedSizes = words.map(word => 
      textSizes[allWords.findIndex(w => w.text === word.text)]
    );
    
    bodiesRef.current = words.map((word, i) => {
      const size = orderedSizes[i];
      const isSecondLine = isMobile ? i >= 4 : i < secondLine.length;
      
      // 모바일에서는 항상 중앙에서 떨어지도록 x 좌표 설정
      const xPosition = isMobile 
        ? window.innerWidth / 2 
        : word.x * window.innerWidth;

      // 모바일에서는 순서대로 높이 설정
      const yPosition = isMobile
        ? -100 - (i * 200)
        : (isSecondLine ? -100 : -300);
      
      return Matter.Bodies.rectangle(
        xPosition,
        yPosition,
        size.width,
        size.height,
        {
          friction: 0.3,
          restitution: 0.4,
          angle: (Math.random() - 0.5) * 0.2,
          render: {
            fillStyle: 'transparent',
            strokeStyle: '#000',
            lineWidth: 1
          }
        }
      );
    });

    // 순차적으로 단어 추가
    const addWordsSequentially = () => {
      let currentIndex = 0;
      
      const addNextWord = () => {
        if (currentIndex < bodiesRef.current.length) {
          Matter.World.add(engine.world, [bodiesRef.current[currentIndex]]);
          currentIndex++;
          
          // 모바일에서는 더 긴 간격으로 추가
          const delay = isMobile ? 400 : (currentIndex === secondLine.length ? 1000 : 300);
          setTimeout(addNextWord, delay);
        }
      };
      
      // 모바일에서는 시작 딜레이를 더 길게
      setTimeout(addNextWord, isMobile ? 1000 : 500);
    };

    addWordsSequentially();

    let frameId: number;
    const animate = () => {
      Matter.Engine.update(engine, 1000 / 60);
      
      const newPositions = bodiesRef.current.map(body => ({
        x: body.position.x,
        y: body.position.y,
        angle: body.angle
      }));
      
      setPositions(newPositions);
      frameId = requestAnimationFrame(animate);
    };

    Matter.Render.run(render);
    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      Matter.Render.stop(render);
      Matter.World.clear(engine.world, false);
      Matter.Engine.clear(engine);
      render.canvas.remove();
    };
  }, [isReady]);

  return (
    <div className="fixed inset-0 bg-white">
      <div ref={measureRef} className="absolute top-0 left-0 opacity-0 pointer-events-none" />
      
      {/* 물리 엔진 캔버스 */}
      <div ref={containerRef} className="w-full h-full relative" style={{ zIndex: 1 }}>
        {/* 물리 엔진 캔버스가 여기에 렌더링됨 */}
      </div>

      {/* 텍스트 레이어 */}
      <div className="fixed inset-0" style={{ zIndex: 2, mixBlendMode: 'multiply' }}>
        {positions.map((pos, i) => {
          if (!orderedWords[i]) return null;
          const word = orderedWords[i];
          const originalIndex = allWords.findIndex(w => w.text === word.text);
          return (
            <div
              key={i}
              className="absolute font-bold text-black cursor-pointer"
              onClick={() => handleWordClick(originalIndex)}
              style={{
                left: `${pos.x}px`,
                top: `${pos.y}px`,
                transform: `translate(-50%, -50%) rotate(${pos.angle}rad)`,
                mixBlendMode: 'multiply',
                fontSize: `calc(${BASE_FONT_SIZE} * ${fontSizes[originalIndex]})`,
                fontFamily: fonts[originalIndex],
                transition: 'font-size 0.3s'
              }}
            >
              {word.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FallingText; 