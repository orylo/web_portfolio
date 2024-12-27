import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-32">
        <div className="max-w-[1728px] mx-auto px-16">
          <div className="space-y-4">
            <h1 className="text-7xl font-light text-black">
              Communication
              <br />
              Designer
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl">
              브랜드의 가치를 시각적 언어로 표현하는 커뮤니케이션 디자이너입니다.
              전략적 사고와 창의적인 디자인으로 브랜드 스토리를 전달합니다.
            </p>
          </div>
          <div className="mt-20">
            <img
              src="./hero-image.jpg"
              alt="Hero Image"
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
