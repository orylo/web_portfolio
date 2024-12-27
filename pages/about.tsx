import Navigation from '../components/Navigation';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-32">
        <div className="max-w-[1728px] mx-auto px-16">
          {/* Main Introduction */}
          <div className="mb-40">
            <p className="text-2xl font-light leading-relaxed max-w-4xl text-black">
              <strong className="font-normal">서울에 기반을 둔 커뮤니케이션 디자이너입니다.</strong> 브랜드의 가치를 시각적 언어로 표현하며, 
              제품 디자인부터 웹사이트, SNS 피드, 패키지 등 모든 것이 브랜딩의 일부라고 믿습니다. 
              디지털 채널로의 전환이 가속화됨에 따라 디지털 프로덕트에도 큰 관심을 가지고 있으며, 
              물리적 경험에서 디지털 경험까지 브랜드 경험의 폭을 넓혀가고 있습니다.
            </p>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div>
              <h2 className="text-xs uppercase tracking-wider mb-8 text-black">WHO I AM</h2>
              <p className="text-lg text-black leading-relaxed">
                브랜딩에 대한 깊은 열정을 가진 크리에이티브 디자이너입니다. 
                물리적 제품에서 디지털 경험까지 모든 것에서 브랜딩을 볼 수 있는 능력이 저의 강점입니다. 
                고객의 메시지가 대상 청중과 공명할 수 있도록 일관된 브랜드 메시지를 만들어내는 것을 추구합니다.
              </p>
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-wider mb-8 text-black">DIGITAL EXPANSION</h2>
              <p className="text-lg text-black leading-relaxed">
                디지털 시대에 맞춰 브랜드 경험을 확장하고 있습니다. 
                사용자 경험을 최우선으로 생각하며, 최신 디지털 트렌드를 연구하고 적용합니다. 
                시각적 디자인과 기술적 구현 사이의 균형을 맞추어 최적의 결과물을 만들어냅니다.
              </p>
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-wider mb-8 text-black">MEANINGFUL CONNECTION</h2>
              <p className="text-lg text-black leading-relaxed">
                새로운 브랜드를 만들거나 기존 브랜드를 리프레시하는 것 모두를 돕습니다. 
                시각적 아이덴티티와 메시징에서 사용자 경험 디자인까지, 
                대상 청중과 의미 있는 연결을 만들어내는 전문성을 보유하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-40 border-t border-gray-200">
        <div className="max-w-[1728px] mx-auto px-16 py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xs uppercase mb-4">Tel.</h3>
              <p className="text-sm text-gray-600">
                +82 (0)10 5098 0424
              </p>
            </div>
            <div>
              <h3 className="text-xs uppercase mb-4">Contact</h3>
              <p className="text-sm text-gray-600">
                Communication Designer<br />
                orylo0424@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-xs uppercase mb-4">Copyright</h3>
              <p className="text-sm text-gray-600">
                orylo© 2024.<br />
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 