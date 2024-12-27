import { useRouter } from 'next/router';
import Navigation from '../../components/Navigation';
import { getFullProjectDetails } from '../../data/projectDetails';
import { resultSection } from '../../data/projectResults';
import type { ResultComponent as ResultComponentType } from '../../data/types';
import Link from 'next/link';
import Image from 'next/image';

const ResultTitle = ({ content }: { content: string }) => (
  <h3 className="text-2xl mb-8">{content}</h3>
);

const ResultDescription = ({ content }: { content: string }) => (
  <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-20">
    {content}
  </p>
);

const ResultFullImage = ({ src }: { src: string }) => (
  <div className="w-full relative mb-20 min-h-[160px] bg-gray-100">
    <Image
      src={src}
      alt=""
      width={0}
      height={0}
      sizes="100vw"
      className="w-full h-auto"
      style={{ display: 'block' }}
      loading="lazy"
    />
  </div>
);

const ResultTwoImages = ({ images }: { images: string[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-20">
    {images.map((image, index) => (
      <div key={index} className="w-full relative min-h-[160px] bg-gray-100">
        <Image
          src={image}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          style={{ display: 'block' }}
          loading="lazy"
        />
      </div>
    ))}
  </div>
);

const ResultThreeImages = ({ images }: { images: string[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-20">
    {images.map((image, index) => (
      <div key={index} className="w-full relative min-h-[160px] bg-gray-100">
        <Image
          src={image}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          style={{ display: 'block' }}
          loading="lazy"
        />
      </div>
    ))}
  </div>
);

const ResultFourImages = ({ images }: { images: string[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20">
    {images.map((image, index) => (
      <div key={index} className="w-full relative min-h-[160px] bg-gray-100">
        <Image
          src={image}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          style={{ display: 'block' }}
          loading="lazy"
        />
      </div>
    ))}
  </div>
);

const ResultComponent = ({ component }: { component: ResultComponentType }) => {
  switch (component.type) {
    case 'title':
      return <ResultTitle content={component.content} />;
    case 'description':
      return <ResultDescription content={component.content} />;
    case 'fullImage':
      return <ResultFullImage src={component.src} />;
    case 'twoImages':
      return <ResultTwoImages images={component.images} />;
    case 'threeImages':
      return <ResultThreeImages images={component.images} />;
    case 'fourImages':
      return <ResultFourImages images={component.images} />;
    default:
      return null;
  }
};

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  const project = id ? getFullProjectDetails(id as string) : null;

  if (!project) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPath="/works" />
      
      <main>
        {/* Back Button */}
        <div className="fixed top-[96px] left-0 right-0 z-40">
          <div className="back-button-wrapper bg-white">
            <div className="back-button-container border-b border-black">
              <div className="max-w-[1728px] mx-auto px-4 md:px-16">
                <div className="py-6">
                  <button
                    onClick={() => {
                      router.push('/works');
                    }}
                    className="text-base hover:opacity-50 transition-opacity"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="w-full aspect-[16/9] relative bg-gray-100">
          <Image
            src={project.mainImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-[1728px] mx-auto px-4 md:px-16">
          {/* Project Title & Info */}
          <div className="py-20 border-b border-black">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <h3 className="text-lg mb-4">{project.title}</h3>
                <p className="text-4xl font-light leading-relaxed whitespace-pre-line">
                  {project.slogan}
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base mb-2 border border-black rounded-full px-4 py-1 inline-block">PROJECT DURATION</h3>
                  <p className="text-lg text-gray-600 leading-tight">{project.projectDuration}</p>
                </div>
                <div>
                  <h3 className="text-base mb-2 border border-black rounded-full px-4 py-1 inline-block">PROJECT PURPOSE</h3>
                  <p className="text-lg text-gray-600 leading-tight">{project.projectPurpose}</p>
                </div>
                <div>
                  <h3 className="text-base mb-2 border border-black rounded-full px-4 py-1 inline-block">MY ROLE - {project.myRole}</h3>
                  <p className="text-lg text-gray-600 leading-tight">{project.roleDescription}</p>
                </div>
                <div>
                  <h3 className="text-base mb-2 border border-black rounded-full px-4 py-1 inline-block">CATEGORY</h3>
                  <p className="text-lg text-gray-600 leading-tight">
                    {project.category.join(', ')}
                  </p>
                </div>
                <div>
                  <h3 className="text-base mb-2 border border-black rounded-full px-4 py-1 inline-block">TOOLS USED</h3>
                  <p className="text-lg text-gray-600 leading-tight">
                    {project.toolsUsed.join(', ')}
                  </p>
                </div>
                <div>
                  <h3 className="text-base mb-2 border border-black rounded-full px-4 py-1 inline-block">PROJECT HIGHLIGHTS</h3>
                  <p className="text-lg text-gray-600 leading-tight">{project.projectHighlights}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction Section */}
          <div className="pt-[50px] mb-40">
            <h2 className="text-2xl mb-8">Introduction</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              {project.introduction}
            </p>
          </div>

          {/* Result Section */}
          <div className="border-t border-black pt-[50px] mb-40">
            <h2 className="text-2xl mb-8">{resultSection.title}</h2>
            {project.result.components.map((component, index) => {
              switch (component.type) {
                case 'title':
                  return <ResultTitle key={index} content={component.content} />;
                case 'description':
                  return <ResultDescription key={index} content={component.content} />;
                case 'fullImage':
                  return <ResultFullImage key={index} src={component.src} />;
                case 'twoImages':
                  return <ResultTwoImages key={index} images={component.images} />;
                case 'threeImages':
                  return <ResultThreeImages key={index} images={component.images} />;
                case 'fourImages':
                  return <ResultFourImages key={index} images={component.images} />;
                default:
                  return null;
              }
            })}
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
} 