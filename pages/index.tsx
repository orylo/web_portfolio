import type { NextPage } from 'next';
import Navigation from '../components/Navigation';
import Image from 'next/image';

const Home: NextPage = () => {
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
            <Image
              src="/hero-image.jpg"
              alt="Hero Image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[600px] object-cover"
              priority
            />
          </div>
        </div>
      </main>

      <footer className="mt-[50px] border-t border-black">
        <div className="max-w-[1728px] mx-auto px-4 md:px-16 py-20">
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
};

export default Home;
