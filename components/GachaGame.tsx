import { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

const GACHAPON_WIDTH = 300;
const GACHAPON_HEIGHT = 500;
const ITEM_SIZE = 50;

interface GachaItem {
  id: number;
  color: string;
  body: Matter.Body;
}

const GachaGame = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const gachaItemsRef = useRef<GachaItem[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!sceneRef.current) return;

    // Matter.js 초기화
    const engine = Matter.Engine.create();
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent'
      }
    });

    engineRef.current = engine;
    renderRef.current = render;

    // 벽 생성
    const ground = Matter.Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight,
      window.innerWidth,
      60,
      { isStatic: true }
    );

    const leftWall = Matter.Bodies.rectangle(
      0,
      window.innerHeight / 2,
      60,
      window.innerHeight,
      { isStatic: true }
    );

    const rightWall = Matter.Bodies.rectangle(
      window.innerWidth,
      window.innerHeight / 2,
      60,
      window.innerHeight,
      { isStatic: true }
    );

    Matter.World.add(engine.world, [ground, leftWall, rightWall]);

    Matter.Render.run(render);
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // 창 크기 변경 대응
    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
      Matter.Body.setPosition(ground, {
        x: window.innerWidth / 2,
        y: window.innerHeight
      });
      Matter.Body.setPosition(rightWall, {
        x: window.innerWidth,
        y: window.innerHeight / 2
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      render.canvas.remove();
    };
  }, []);

  const spawnGachaItem = () => {
    if (isAnimating || !engineRef.current) return;

    setIsAnimating(true);

    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#D4A5A5'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const item = Matter.Bodies.circle(
      window.innerWidth / 2,
      100,
      ITEM_SIZE / 2,
      {
        restitution: 0.6,
        render: {
          fillStyle: randomColor
        }
      }
    );

    const gachaItem: GachaItem = {
      id: Date.now(),
      color: randomColor,
      body: item
    };

    gachaItemsRef.current.push(gachaItem);
    Matter.World.add(engineRef.current.world, item);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div ref={sceneRef} className="w-full h-full" />
      
      {/* 가챠폰 머신 */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2">
        <div 
          className="w-[300px] h-[500px] relative cursor-pointer"
          onClick={spawnGachaItem}
        >
          {/* 가챠폰 머신 그래픽 */}
          <div className="absolute inset-0 bg-white border-4 border-black rounded-2xl">
            <div className="absolute bottom-[100px] left-1/2 -translate-x-1/2 w-[100px] h-[100px] bg-red-500 rounded-full border-4 border-black hover:scale-105 transition-transform">
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                PUSH
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GachaGame; 