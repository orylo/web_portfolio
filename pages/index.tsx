import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-32">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 transition-all duration-300 ease-in-out">
          <div className="space-y-4">
            <h1 className="text-7xl font-light text-black transition-all duration-300 ease-in-out">
              Creative
              <br />
              Web Developer
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl transition-all duration-300 ease-in-out">
              안녕하세요, 혁신적인 웹 경험을 만드는 개발자입니다.
              사용자 중심의 디자인과 효율적인 개발을 추구합니다.
            </p>
          </div>
          <div className="mt-20 transition-all duration-300 ease-in-out">
            <img
              src="/hero-image.jpg"
              alt="Hero Image"
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
