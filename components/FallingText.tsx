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

const BASE_FONT_SIZE = '7rem';

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

  // 단어 클릭 핸들러
  const handleWordClick = async (index: number) => {
    // 새로운 폰트와 크기 생성
    const newFont = ALL_FONTS[Math.floor(Math.random() * ALL_FONTS.length)];
    const newSize = getRandomSize();

    // 상태 업데이트
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

    // 폰트 로딩 대기
    const fontName = newFont.split(',')[0].replace(/['"]/g, '');
    await document.fonts.load(`bold ${BASE_FONT_SIZE} ${fontName}`);

    // 크기 재측정
    if (!measureRef.current) return;

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

    // 물리 엔진 바디 크기 업데이트
    if (engineRef.current && bodiesRef.current[index]) {
      const body = bodiesRef.current[index];
      const currentPos = { ...body.position };
      const currentVel = { ...body.velocity };
      const currentAngle = body.angle;
      const currentAngularVel = body.angularVelocity;

      // 새 크기의 바디 생성
      const newBody = Matter.Bodies.rectangle(
        currentPos.x,
        currentPos.y,
        newSize2D.width,
        newSize2D.height,
        {
          friction: 0.3,
          restitution: 0.6,
          render: {
            fillStyle: 'transparent',
            strokeStyle: '#000',
            lineWidth: 1
          }
        }
      );

      // 이전 상태 복원
      Matter.Body.setPosition(newBody, currentPos);
      Matter.Body.setVelocity(newBody, currentVel);
      Matter.Body.setAngle(newBody, currentAngle);
      Matter.Body.setAngularVelocity(newBody, currentAngularVel);

      // 바디 교체
      Matter.World.remove(engineRef.current.world, body);
      Matter.World.add(engineRef.current.world, newBody);
      bodiesRef.current[index] = newBody;
    }

    // 크기 상태 업데이트
    setTextSizes(prev => {
      const next = [...prev];
      next[index] = newSize2D;
      return next;
    });
  };

  // 텍스트 크기 측정
  useEffect(() => {
    if (!measureRef.current) return;

    const measureText = async () => {
      // 폰트 로딩 대기
      await document.fonts.ready;
      
      const allWords = [...secondLine, ...firstLine];
      const sizes = await Promise.all(allWords.map(async (word, i) => {
        // 폰트 로딩 체크
        const fontName = fonts[i].split(',')[0].replace(/['"]/g, '');
        const isFontLoaded = document.fonts.check(`bold ${BASE_FONT_SIZE} ${fontName}`);
        console.log(`Font ${fontName} loaded:`, isFontLoaded);

        // 측정용 div 생성
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
        
        // 폰트 로딩 완료 대기
        if (!isFontLoaded) {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        const rect = div.getBoundingClientRect();
        const size = {
          width: Math.ceil(rect.width) + 20,
          height: Math.ceil(rect.height) + 16
        };
        
        document.body.removeChild(div);
        console.log(`Measured "${word.text}" with font ${fontName}:`, size);
        
        return size;
      }));

      console.log('All text sizes measured:', sizes);
      setTextSizes(sizes);
      setIsReady(true); // 측정 완료 후 ready 상태 설정
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
          render: {
            fillStyle: 'transparent',
            strokeStyle: '#000',
            lineWidth: 1
          }
        }
      )
    ];

    Matter.World.add(engine.world, walls);

    // 텍스트 물리 객체 생성
    const allWords = [...secondLine, ...firstLine];
    bodiesRef.current = allWords.map((word, i) => {
      const size = textSizes[i];
      const isSecondLine = i < secondLine.length;
      
      return Matter.Bodies.rectangle(
        word.x * window.innerWidth,
        isSecondLine ? -100 : -300,
        size.width,
        size.height,
        {
          friction: 0.3,
          restitution: 0.6,
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
          
          const delay = currentIndex === secondLine.length ? 1000 : 300;
          setTimeout(addNextWord, delay);
        }
      };
      
      setTimeout(addNextWord, 500);
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
  }, [isReady]); // isReady 상태에 의존

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
          const allWords = [...secondLine, ...firstLine];
          return (
            <div
              key={i}
              className="absolute font-bold text-black cursor-pointer"
              onClick={() => handleWordClick(i)}
              style={{
                left: `${pos.x}px`,
                top: `${pos.y}px`,
                transform: `translate(-50%, -50%) rotate(${pos.angle}rad)`,
                mixBlendMode: 'multiply',
                fontSize: `calc(${BASE_FONT_SIZE} * ${fontSizes[i]})`,
                fontFamily: fonts[i],
                transition: 'font-size 0.3s'
              }}
            >
              {allWords[i].text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FallingText; 