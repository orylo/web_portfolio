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
    "'Homemade Apple', cursive"
  ],
  sansSerif: [
    "'Bebas Neue', sans-serif",
    "'Oswald', sans-serif",
    "'Anton', sans-serif",
    "'Teko', sans-serif",
    "'Archivo Black', sans-serif"
  ],
  display: [
    "'Bungee Shade', display",
    "'Rubik Mono One', display",
    "'Monoton', display",
    "'Bungee Inline', display",
    "'Faster One', display",
    "'Righteous', display",
    "'Russo One', display",
    "'Black Ops One', display"
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
  const [positions, setPositions] = useState<Array<{x: number; y: number; angle: number}>>([]);
  const [textSizes, setTextSizes] = useState<Array<{width: number; height: number}>>([]);
  const [fonts] = useState(() => getUniqueRandomFonts([...secondLine, ...firstLine].length));
  const [fontSizes] = useState(() => [...secondLine, ...firstLine].map(() => getRandomSize()));

  // 텍스트 크기 측정
  useEffect(() => {
    if (!measureRef.current) return;

    const allWords = [...secondLine, ...firstLine];
    const sizes = allWords.map((word, i) => {
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
      const rect = div.getBoundingClientRect();
      document.body.removeChild(div);
      
      return {
        width: Math.ceil(rect.width) + 20,
        height: Math.ceil(rect.height) + 16
      };
    });

    console.log('Measured text sizes:', sizes);
    setTextSizes(sizes);
  }, [fonts, fontSizes]);

  // 물리 엔진 초기화
  useEffect(() => {
    if (!containerRef.current || textSizes.length === 0) return;

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
    const bodies = allWords.map((word, i) => {
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
        if (currentIndex < bodies.length) {
          Matter.World.add(engine.world, [bodies[currentIndex]]);
          currentIndex++;
          
          // 다음 단어 추가 예약
          const delay = currentIndex === secondLine.length ? 1000 : 300;
          setTimeout(addNextWord, delay);
        }
      };
      
      // 첫 단어 추가 시작
      setTimeout(addNextWord, 500);
    };

    addWordsSequentially();

    let frameId: number;
    const animate = () => {
      Matter.Engine.update(engine, 1000 / 60);
      
      const newPositions = bodies.map(body => ({
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
  }, [textSizes]);

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
              className="absolute font-bold text-black"
              style={{
                left: `${pos.x}px`,
                top: `${pos.y}px`,
                transform: `translate(-50%, -50%) rotate(${pos.angle}rad)`,
                pointerEvents: 'none',
                mixBlendMode: 'multiply',
                fontSize: `calc(${BASE_FONT_SIZE} * ${fontSizes[i]})`,
                fontFamily: fonts[i]
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