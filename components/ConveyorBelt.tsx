import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Matter from 'matter-js';

// debounce 유틸리티 함수
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  
  const debouncedFunction = (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
  
  debouncedFunction.cancel = () => {
    clearTimeout(timeout);
  };
  
  return debouncedFunction;
};

interface Gift {
  id: number;
  width: number;
  height: number;
  boxIndex: number;
  scale: number;
  surprise: {
    type: 'shape';
    shape: 'circle' | 'star' | 'triangle' | 'heart' | 'diamond';
    color: string;
  };
  body?: Matter.Body;
}

const TOTAL_GIFT_BOXES = 19;

const surpriseShapes = ['circle', 'star', 'triangle', 'heart', 'diamond'] as const;
const colors = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#D4A5A5',
  '#FFB6B9', '#61C0BF', '#BBE1FA', '#D4E157', '#FFD93D', '#FF8B94'
];

const generateRandomGift = (index: number): Gift => {
  const boxIndex = Math.floor(Math.random() * TOTAL_GIFT_BOXES) + 1;
  const scale = 1 + Math.random() * 0.3; // 100% ~ 130% 크기
  
  // 기본 크기를 2배로 증가
  const baseWidth = 160; // 기존 80의 2배
  const baseHeight = 160; // 정사각형 기준

  return {
    id: index,
    width: baseWidth * scale,
    height: baseHeight * scale,
    boxIndex,
    scale,
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

// 컨베이어 벨트 패턴 생성을 위한 컴포넌트
const ConveyorPattern = () => {
  const segmentWidth = 180;
  const segmentHeight = 180;
  const [containerWidth, setContainerWidth] = useState(0);
  
  useEffect(() => {
    const updateContainerWidth = () => {
      setContainerWidth(window.innerWidth);
    };

    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);
    return () => window.removeEventListener('resize', updateContainerWidth);
  }, []);

  const requiredSegments = Math.ceil((containerWidth * 3) / segmentWidth) + 4;
  const segments = Array.from({ length: requiredSegments });

  return (
    <div 
      style={{
        position: 'absolute',
        left: `-${segmentWidth}px`,
        width: `${containerWidth * 3 + segmentWidth * 2}px`,
        height: `${segmentHeight}px`,
        backgroundColor: '#2A2A2A',
        display: 'flex',
        fontSize: 0,
        lineHeight: 0
      }}
    >
      {segments.map((_, index) => (
        <img
          key={index}
          src="/patterns/conveyor-pattern.svg"
          alt=""
          style={{
            width: `${segmentWidth}px`,
            height: `${segmentHeight}px`,
            display: 'block',
            flexShrink: 0
          }}
        />
      ))}
    </div>
  );
};

const ConveyorBelt = () => {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [openedGifts, setOpenedGifts] = useState<Set<number>>(new Set());
  const [surprises, setSurprises] = useState<Map<number, Gift['surprise']>>(new Map());
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const mouseConstraintRef = useRef<Matter.MouseConstraint | null>(null);
  const conveyorSensorRef = useRef<Matter.Body | null>(null);
  const idCounterRef = useRef(0);
  const giftBodiesRef = useRef<Gift[]>([]);
  const giftTimerRef = useRef<NodeJS.Timeout | null>(null);
  const targetYRef = useRef(0);

  // window 크기 초기화 및 업데이트
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const updateDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
      targetYRef.current = window.innerHeight - 100;
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // 선물 생성 함수
  const createGift = useCallback(() => {
    if (!engineRef.current || windowDimensions.width === 0) {
      console.log('Engine not initialized or window dimensions not set');
      return;
    }

    const spawnX = -200;
    const spawnY = targetYRef.current - 200;

    const gift = generateRandomGift(idCounterRef.current++);
    const body = Matter.Bodies.rectangle(
      spawnX,
      spawnY,
      gift.width,
      gift.height,
      {
        mass: 1,
        restitution: 0.1,
        friction: 0.05,
        frictionAir: 0.001,
        chamfer: { radius: 5 },
        render: { visible: false },
        label: `gift-${gift.id}`
      }
    );

    Matter.Body.setVelocity(body, { x: 5, y: 0 });
    Matter.World.add(engineRef.current.world, body);
    
    const giftWithBody = { ...gift, body };
    giftBodiesRef.current.push(giftWithBody);
    setGifts(prev => [...prev, giftWithBody]);

    if (giftTimerRef.current) {
      clearTimeout(giftTimerRef.current);
    }
    giftTimerRef.current = setTimeout(createGift, 2000);
  }, [windowDimensions]);

  // Matter.js 엔진 초기화
  useEffect(() => {
    if (!sceneRef.current || typeof window === 'undefined' || windowDimensions.width === 0) {
      return;
    }
    
    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 0.5 }
    });
    engineRef.current = engine;

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: windowDimensions.width,
        height: windowDimensions.height,
        wireframes: false,
        background: 'transparent'
      }
    });

    // 마우스 컨트롤 설정
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });
    mouseConstraintRef.current = mouseConstraint;

    Matter.World.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // 드래그 관련 변수
    let dragStartTime = 0;
    let dragStartPosition = { x: 0, y: 0 };

    // 마우스 다운 이벤트
    Matter.Events.on(mouseConstraint, 'mousedown', (event) => {
      dragStartTime = Date.now();
      dragStartPosition = event.mouse.position;
      setIsDragging(false);
    });

    // 마우스 드래그 이벤트
    Matter.Events.on(mouseConstraint, 'mousemove', (event) => {
      if (mouseConstraint.body) {
        const dx = event.mouse.position.x - dragStartPosition.x;
        const dy = event.mouse.position.y - dragStartPosition.y;
        if (Math.sqrt(dx * dx + dy * dy) > 5) {
          setIsDragging(true);
        }
      }
    });

    // 마우스 업 이벤트
    Matter.Events.on(mouseConstraint, 'mouseup', () => {
      setIsDragging(false);
    });

    // 물리 엔진 업데이트 이벤트
    Matter.Events.on(engine, 'beforeUpdate', () => {
      const bodies = Matter.Composite.allBodies(engine.world);
      bodies.forEach(body => {
        if (!body.isStatic && body.label?.startsWith('gift-')) {
          // 화면 밖으로 나간 물체 제거
          if (body.position.x > windowDimensions.width + 100 || body.position.y > windowDimensions.height + 100) {
            Matter.World.remove(engine.world, body);
            const giftId = parseInt(body.label.split('-')[1]);
            giftBodiesRef.current = giftBodiesRef.current.filter(g => g.id !== giftId);
            return;
          }

          // 컨베이어 벨트 위에 있는 선물상자 처리
          if (!mouseConstraint.body && Matter.Query.collides(body, [conveyorSensorRef.current!]).length > 0) {
            Matter.Body.setVelocity(body, {
              x: 5,
              y: 0
            });
            Matter.Body.setPosition(body, {
              x: body.position.x,
              y: targetYRef.current - 40
            });
            Matter.Body.setAngle(body, 0);
          }
        }
      });
    });

    // 컨베이어 벨트 생성
    const conveyor = Matter.Bodies.rectangle(
      windowDimensions.width / 2,
      targetYRef.current,
      windowDimensions.width + 2000,
      20,
      { 
        isStatic: true,
        render: { visible: false },
        friction: 0.05,
        label: 'conveyor'
      }
    );

    const conveyorSensor = Matter.Bodies.rectangle(
      windowDimensions.width / 2,
      targetYRef.current - 20,
      windowDimensions.width + 2000,
      40,
      {
        isStatic: true,
        isSensor: true,
        render: { visible: false },
        label: 'conveyor-sensor'
      }
    );
    conveyorSensorRef.current = conveyorSensor;

    const entryGuide = Matter.Bodies.rectangle(
      -300,
      targetYRef.current - 80,
      600,
      10,
      {
        isStatic: true,
        render: { visible: false },
        friction: 0.02,
        label: 'entry-guide',
        angle: Math.PI * 0.08
      }
    );

    Matter.World.add(engine.world, [conveyor, conveyorSensor, entryGuide]);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    // 첫 선물 생성
    console.log('Starting gift creation...');
    setTimeout(() => {
      createGift();
    }, 1000);

    return () => {
      console.log('Cleaning up engine...');
      if (giftTimerRef.current) {
        clearTimeout(giftTimerRef.current);
      }
      Matter.Events.off(engine, 'beforeUpdate');
      Matter.Events.off(mouseConstraint, 'mousedown');
      Matter.Events.off(mouseConstraint, 'mousemove');
      Matter.Events.off(mouseConstraint, 'mouseup');
      Matter.Runner.stop(runner);
      Matter.Render.stop(render);
      Matter.World.clear(engine.world, false);
      Matter.Engine.clear(engine);
      engineRef.current = null;
      render.canvas.remove();
    };
  }, [windowDimensions.width, windowDimensions.height]);

  // Matter.js 업데이트 이벤트 수정
  useEffect(() => {
    if (!engineRef.current) return;

    const updateGifts = () => {
      setGifts(giftBodiesRef.current.filter(gift => 
        gift.body && 
        gift.body.position.x <= windowDimensions.width + 100 && 
        gift.body.position.y <= windowDimensions.height + 100
      ));
    };

    const interval = setInterval(updateGifts, 1000 / 60); // 60fps로 업데이트

    return () => clearInterval(interval);
  }, [windowDimensions]);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* 컨베이어 벨트 */}
      <div 
        className="absolute w-full pointer-events-none"
        style={{
          bottom: '0',
          height: '180px',
          zIndex: 1,
          backgroundColor: '#2A2A2A',
          overflow: 'hidden'
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#222222]" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#222222]" />

        {/* 패턴 애니메이션 */}
        <motion.div
          className="absolute inset-0"
          initial={{ x: -180 }}
          animate={{ x: 0 }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0
          }}
        >
          <ConveyorPattern />
        </motion.div>
      </div>

      {/* Matter.js 캔버스 */}
      <div 
        ref={sceneRef} 
        className="absolute inset-0" 
        style={{ zIndex: 2 }} 
        onClick={(e) => {
          const mousePosition = {
            x: e.clientX,
            y: e.clientY
          };
          
          const bodies = Matter.Query.point(
            Matter.Composite.allBodies(engineRef.current!.world),
            mousePosition
          );
          
          const clickedGift = bodies.find(body => body.label?.startsWith('gift-'));
          if (clickedGift && !isDragging) {
            const giftId = parseInt(clickedGift.label.split('-')[1]);
            const gift = giftBodiesRef.current.find(g => g.id === giftId);
            
            if (gift && !openedGifts.has(giftId)) {
              // 선물상자 열기
              setOpenedGifts(prev => new Set([...prev, giftId]));
              setSurprises(prev => new Map(prev).set(giftId, gift.surprise));
              
              // 선물상자 제거 및 서프라이즈 아이템 생성
              Matter.World.remove(engineRef.current!.world, clickedGift);
              
              const surpriseBody = Matter.Bodies.circle(
                clickedGift.position.x,
                clickedGift.position.y,
                24,
                {
                  label: `emoji-${giftId}`,
                  restitution: 0.8,
                  friction: 0.1,
                  frictionAir: 0.01,
                  mass: 1,
                  collisionFilter: {
                    category: 0x0002
                  }
                }
              );
              
              Matter.Body.setVelocity(surpriseBody, { 
                x: (Math.random() - 0.5) * 10,
                y: -20
              });
              Matter.World.add(engineRef.current!.world, surpriseBody);
            }
          }
        }}
      />

      {/* 선물상자 SVG 렌더링 */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ 
          zIndex: 3
        }}
      >
        {gifts.map(gift => {
          if (!gift.body || openedGifts.has(gift.id)) return null;

          return (
            <motion.div
              key={gift.id}
              className="absolute"
              style={{
                transform: `translate3d(${gift.body.position.x - gift.width/2}px, ${gift.body.position.y - gift.height/2}px, 0) rotate(${gift.body.angle}rad)`,
                width: gift.width,
                height: gift.height,
                transformOrigin: 'center',
                willChange: 'transform'
              }}
            >
              <img 
                src={`/giftboxes/box${gift.boxIndex}.svg`}
                alt="Gift Box"
                className="w-full h-full object-contain"
                draggable={false}
              />
            </motion.div>
          );
        })}
      </div>

      {/* 열린 선물 도형 표시 */}
      <AnimatePresence mode="sync">
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
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute"
              style={{
                transform: `translate3d(${shapeBody.position.x - (shapeSize * 8)}px, ${shapeBody.position.y - (shapeSize * 8)}px, 0) rotate(${shapeBody.angle}rad)`,
                width: shapeSize * 16,
                height: shapeSize * 16,
                transformOrigin: 'center',
                willChange: 'transform',
                zIndex: 4,
                pointerEvents: 'none'
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