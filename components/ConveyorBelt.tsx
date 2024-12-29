import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Matter from 'matter-js';

interface Gift {
  id: number;
  width: number;
  height: number;
  color: string;
  shape: 'square' | 'rectangle' | 'tall' | 'wide' | 'tiny' | 'huge';
  surprise: {
    type: 'shape';
    shape: 'circle' | 'star' | 'triangle' | 'heart' | 'diamond';
    color: string;
  };
  body?: Matter.Body;
}

const generateRandomGift = (index: number): Gift => {
  const shapes = ['square', 'rectangle', 'tall', 'wide', 'tiny', 'huge'] as const;
  const surpriseShapes = ['circle', 'star', 'triangle', 'heart', 'diamond'] as const;
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#D4A5A5',
    '#FFB6B9', '#61C0BF', '#BBE1FA', '#D4E157', '#FFD93D', '#FF8B94'
  ];
  
  const shape = shapes[Math.floor(Math.random() * shapes.length)];
  let width = 0;
  let height = 0;

  switch (shape) {
    case 'square':
      width = Math.random() * 40 + 80; // 80-120px
      height = width;
      break;
    case 'rectangle':
      width = Math.random() * 60 + 100; // 100-160px
      height = width * 0.75;
      break;
    case 'tall':
      width = Math.random() * 40 + 60; // 60-100px
      height = width * 1.8;
      break;
    case 'wide':
      width = Math.random() * 80 + 140; // 140-220px
      height = width * 0.5;
      break;
    case 'tiny':
      width = Math.random() * 20 + 40; // 40-60px
      height = width;
      break;
    case 'huge':
      width = Math.random() * 60 + 160; // 160-220px
      height = width * 0.9;
      break;
  }

  return {
    id: index,
    width,
    height,
    color: colors[Math.floor(Math.random() * colors.length)],
    shape,
    surprise: {
      type: 'shape',
      shape: surpriseShapes[Math.floor(Math.random() * surpriseShapes.length)],
      color: colors[Math.floor(Math.random() * colors.length)]
    }
  };
};

// 도형 렌더링 컴포넌트
const ShapeRenderer = ({ shape, color, size }: { shape: string; color: string; size: number }) => {
  const scale = size * 16; // rem to px 변환 및 크기 조정

  switch (shape) {
    case 'circle':
      return (
        <svg width={scale} height={scale} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill={color} />
        </svg>
      );
    case 'star':
      return (
        <svg width={scale} height={scale} viewBox="0 0 100 100">
          <path
            d="M50 0 L61 35 L98 35 L68 57 L79 91 L50 70 L21 91 L32 57 L2 35 L39 35 Z"
            fill={color}
          />
        </svg>
      );
    case 'triangle':
      return (
        <svg width={scale} height={scale} viewBox="0 0 100 100">
          <path d="M50 10 L90 90 L10 90 Z" fill={color} />
        </svg>
      );
    case 'heart':
      return (
        <svg width={scale} height={scale} viewBox="0 0 100 100">
          <path
            d="M50 80 C0 40 20 0 50 20 C80 0 100 40 50 80"
            fill={color}
          />
        </svg>
      );
    case 'diamond':
      return (
        <svg width={scale} height={scale} viewBox="0 0 100 100">
          <path d="M50 10 L90 50 L50 90 L10 50 Z" fill={color} />
        </svg>
      );
    default:
      return null;
  }
};

const ConveyorBelt = () => {
  const [openedGifts, setOpenedGifts] = useState<Set<number>>(new Set());
  const [surprises, setSurprises] = useState<Map<number, Gift['surprise']>>(new Map());
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const idCounterRef = useRef(0);

  const createPhysicsBody = () => {
    if (!engineRef.current) return;

    const gift = generateRandomGift(idCounterRef.current++);
    
    // 선물 상자 본체
    const body = Matter.Bodies.rectangle(
      -100,
      window.innerHeight - 220,
      gift.width,
      gift.height,
      {
        mass: 10,
        restitution: 0.05,
        friction: 0.8,
        frictionAir: 0.002,
        chamfer: { radius: 5 },
        render: {
          fillStyle: gift.color,
          strokeStyle: '#FFFFFF',
          lineWidth: 2
        },
        label: `gift-${gift.id}`
      }
    );

    // 리본 추가
    const ribbonHorizontal = Matter.Bodies.rectangle(
      -100,
      window.innerHeight - 220,
      gift.width,
      4,
      {
        render: {
          fillStyle: '#FFFFFF',
          opacity: 0.7
        },
        isSensor: true,
        isStatic: false,
        label: `ribbon-h-${gift.id}`
      }
    );

    const ribbonVertical = Matter.Bodies.rectangle(
      -100,
      window.innerHeight - 220,
      4,
      gift.height,
      {
        render: {
          fillStyle: '#FFFFFF',
          opacity: 0.7
        },
        isSensor: true,
        isStatic: false,
        label: `ribbon-v-${gift.id}`
      }
    );

    // 선물 상자와 리본을 하나로 결합
    const compound = Matter.Body.create({
      parts: [body, ribbonHorizontal, ribbonVertical],
      label: `gift-${gift.id}`
    });

    Matter.Body.setVelocity(compound, { x: 5, y: 0 });
    Matter.World.add(engineRef.current.world, compound);

    return { body: compound, ...gift };
  };

  useEffect(() => {
    if (!sceneRef.current) return;

    // 엔진 생성
    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 1 }
    });
    engineRef.current = engine;

    // 렌더러 생성
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

    // 컨베이어 벨트 (보이지 않는 바닥)
    const conveyor = Matter.Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight - 140,
      window.innerWidth,
      10,
      { 
        isStatic: true,
        render: { visible: false },
        friction: 0,
        label: 'conveyor'
      }
    );

    Matter.World.add(engine.world, conveyor);

    // 마우스 컨트롤
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });
    Matter.World.add(engine.world, mouseConstraint);

    // 클릭 이벤트 처리
    const handleClick = (event: MouseEvent) => {
      const bodies = Matter.Query.point(
        Matter.Composite.allBodies(engine.world),
        { x: event.clientX, y: event.clientY }
      );

      const clickedGift = bodies.find(body => body.label.startsWith('gift-'));
      if (clickedGift) {
        const giftId = parseInt(clickedGift.label.split('-')[1]);
        
        if (!openedGifts.has(giftId)) {
          const position = { ...clickedGift.position };
          const giftSize = {
            width: clickedGift.bounds.max.x - clickedGift.bounds.min.x,
            height: clickedGift.bounds.max.y - clickedGift.bounds.min.y
          };
          
          const baseSize = 80;
          const scale = Math.max(giftSize.width, giftSize.height) / baseSize;
          const shapeSize = Math.max(2, Math.min(5, scale * 2));
          
          // 선물 내용 생성
          const gift = generateRandomGift(giftId);
          const surprise = gift.surprise;
          
          // 상태 업데이트
          setSurprises(prev => new Map(prev).set(giftId, surprise));
          setOpenedGifts(prev => new Set(prev).add(giftId));
          
          // 도형 생성 및 추가
          const shape = Matter.Bodies.circle(
            position.x,
            position.y,
            shapeSize * 8,
            {
              mass: 10,
              restitution: 0.05,
              friction: 0.8,
              frictionAir: 0.002,
              render: {
                visible: false
              },
              label: `emoji-${giftId}`
            }
          );
          
          Matter.Body.setVelocity(shape, { x: 5, y: 0 });
          Matter.World.add(engine.world, shape);
          Matter.World.remove(engine.world, clickedGift);
        }
      }
    };

    // 드래그 중인지 확인하기 위한 변수
    let isDragging = false;
    let dragStartTime = 0;

    render.canvas.addEventListener('mousedown', () => {
      dragStartTime = Date.now();
      isDragging = false;
    });

    render.canvas.addEventListener('mousemove', () => {
      if (Date.now() - dragStartTime > 100) {
        isDragging = true;
      }
    });

    render.canvas.addEventListener('mouseup', (event) => {
      if (!isDragging) {
        handleClick(event);
      }
      isDragging = false;
    });

    // 컨베이어 벨트 효과
    Matter.Events.on(engine, 'beforeUpdate', () => {
      const bodies = Matter.Composite.allBodies(engine.world);
      bodies.forEach(body => {
        if (!body.isStatic) {
          // 화면 밖으로 나간 물체 제거
          if (body.position.x > window.innerWidth + 100 || body.position.y > window.innerHeight + 100) {
            Matter.World.remove(engine.world, body);
            if (body.label.startsWith('emoji-')) {
              setOpenedGifts(prev => {
                const newSet = new Set(prev);
                newSet.delete(parseInt(body.label.split('-')[1]));
                return newSet;
              });
            }
            return;
          }
          
          // 컨베이어 벨트 위에 있는 물체 처리
          if (Math.abs(body.position.y - (window.innerHeight - 180)) < 50) {
            Matter.Body.setVelocity(body, {
              x: 5,
              y: body.velocity.y
            });
            
            // 드래그 중이 아닐 때만 회전 방지
            if (body !== mouseConstraint.body) {
              Matter.Body.setAngle(body, 0);
              Matter.Body.setAngularVelocity(body, 0);
            }
          }
        }
      });
    });

    // 엔진 실행
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    // 렌더러 업데이트 주기 설정
    let animationFrameId: number;
    
    const updatePositions = () => {
      setOpenedGifts(prev => new Set(prev)); // 강제 리렌더링
      animationFrameId = requestAnimationFrame(updatePositions);
    };
    
    updatePositions();

    // 선물 생성 시작
    const createGift = () => {
      createPhysicsBody();
      setTimeout(createGift, 2000);
    };
    
    createGift(); // 즉시 첫 선물 생성

    return () => {
      Matter.Runner.stop(runner);
      Matter.Render.stop(render);
      Matter.World.clear(engine.world, false);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* 컨베이어 벨트를 먼저 렌더링하여 하단 레이어에 위치 */}
      <div className="absolute bottom-40 left-0 right-0 h-20 bg-gray-300 pointer-events-none z-0">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gray-400" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-400" />
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 10px)'
          }}
          animate={{ x: [-20, 0] }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity
          }}
        />
      </div>
      
      {/* Matter.js 캔버스를 상단 레이어에 위치 */}
      <div ref={sceneRef} className="absolute inset-0 z-10" />

      {/* 열린 선물 도형 표시 */}
      <AnimatePresence>
        {Array.from(openedGifts).map(giftId => {
          const engine = engineRef.current;
          if (!engine) return null;
          
          const shapeBody = Matter.Composite.allBodies(engine.world)
            .find(body => body.label === `emoji-${giftId}`);
          
          if (!shapeBody) return null;

          const radius = (shapeBody as any).circleRadius || 24;
          const shapeSize = radius / 8;
          const surprise = surprises.get(giftId);
          
          if (!surprise) return null;

          return (
            <motion.div
              key={giftId}
              className="absolute pointer-events-none"
              style={{
                transform: `translate3d(${shapeBody.position.x}px, ${shapeBody.position.y}px, 0) rotate(${shapeBody.angle}rad)`,
                width: shapeSize * 16,
                height: shapeSize * 16,
                transformOrigin: 'center'
              }}
            >
              <ShapeRenderer
                shape={surprise.shape}
                color={surprise.color}
                size={shapeSize}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default ConveyorBelt; 