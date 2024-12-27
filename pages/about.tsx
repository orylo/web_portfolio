import Navigation from '../components/Navigation';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-32">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 transition-all duration-300 ease-in-out">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 transition-all duration-300 ease-in-out">
            <div className="transition-all duration-300 ease-in-out">
              <h1 className="text-5xl font-light mb-8">About Me</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                웹 개발에 대한 열정을 가진 개발자입니다. 사용자 경험을 최우선으로 생각하며,
                최신 기술 트렌드를 항상 연구하고 적용하려 노력합니다.
                클린 코드와 효율적인 개발 프로세스를 추구합니다.
              </p>
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-light mb-4">기술 스택</h2>
                  <div className="grid grid-cols-2 gap-4 transition-all duration-300 ease-in-out">
                    <div className="space-y-2">
                      <p className="text-gray-600">React</p>
                      <p className="text-gray-600">TypeScript</p>
                      <p className="text-gray-600">Next.js</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-600">Node.js</p>
                      <p className="text-gray-600">Tailwind CSS</p>
                      <p className="text-gray-600">Git</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-light mb-4">경력</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-900">시니어 웹 개발자</p>
                      <p className="text-gray-600">2020 - 현재</p>
                    </div>
                    <div>
                      <p className="text-gray-900">풀스택 개발자</p>
                      <p className="text-gray-600">2018 - 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="transition-all duration-300 ease-in-out">
              <img
                src="/about-image.jpg"
                alt="About Image"
                className="w-full h-[800px] object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 