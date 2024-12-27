import { useRouter } from 'next/router';
import Navigation from '../../components/Navigation';
import { projectDetails } from '../../data/projectDetails';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  const project = id ? projectDetails[id as string] : null;

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
              <div className="max-w-[1728px] mx-auto px-16">
                <div className="py-6">
                  <button
                    onClick={() => {
                      const wrapper = document.querySelector('.back-button-wrapper');
                      if (wrapper) {
                        wrapper.classList.add('hiding');
                        setTimeout(() => {
                          const savedTag = localStorage.getItem('selectedTag');
                          if (savedTag) {
                            router.push('/works').then(() => {
                              document.body.classList.add('from-project-detail');
                              setTimeout(() => {
                                document.body.classList.remove('from-project-detail');
                              }, 300);
                            });
                          } else {
                            router.back();
                          }
                        }, 200);
                      }
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
        <div className="mt-[144px]">
          <div className="aspect-[16/9] bg-gray-200 w-full relative">
            <Image
              src={project.mainImage}
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className="max-w-[1728px] mx-auto px-16">
          {/* Project Title & Info */}
          <div className="py-20 border-b border-black">
            <h3 className="text-lg mb-4">{project.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <p className="text-4xl font-light leading-relaxed whitespace-pre-line">
                  {project.slogan}
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm mb-2">Clients</h4>
                  <p className="text-gray-600">{project.client}</p>
                </div>
                <div>
                  <h4 className="text-sm mb-2">Location</h4>
                  <p className="text-gray-600">{project.location}</p>
                </div>
                <div>
                  <h4 className="text-sm mb-2">Industry</h4>
                  <p className="text-gray-600">{project.industry}</p>
                </div>
                <div>
                  <h4 className="text-sm mb-2">Category</h4>
                  <p className="text-gray-600">{project.category.join(', ')}</p>
                </div>
                <div>
                  <h4 className="text-sm mb-2">Year</h4>
                  <p className="text-gray-600">{project.date}</p>
                </div>
                <div>
                  <h4 className="text-sm mb-2">Role</h4>
                  <p className="text-gray-600">{project.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction Section */}
          <div className="py-20 border-b border-black">
            <h2 className="text-2xl mb-8">Introduction</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              {project.introduction}
            </p>
          </div>

          {/* Solution Section */}
          <div className="py-20 border-b border-black">
            <h2 className="text-2xl mb-8">Solution</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-20">
              {project.solution.description}
            </p>
            
            {/* Solution Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.solution.gridImages.map((image, index) => (
                <div key={index} className="aspect-square bg-gray-200 relative">
                  <Image
                    src={image}
                    alt={`Solution ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Result Section */}
          <div className="py-20 border-b border-black">
            <h2 className="text-2xl mb-8">Result</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-20">
              {project.result.description}
            </p>
            
            {/* Result Images */}
            <div className="space-y-8">
              {project.result.fullImages.map((image, index) => (
                <div key={index} className="aspect-[16/9] bg-gray-200 w-full relative">
                  <Image
                    src={image}
                    alt={`Result ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center py-20">
            <Link href="/works" className="text-gray-600 hover:text-black transition-colors">
              ← Back to Works
            </Link>
            <div className="flex gap-8">
              <button className="text-gray-600 hover:text-black transition-colors">
                Prev Project
              </button>
              <button className="text-gray-600 hover:text-black transition-colors">
                Next Project
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200">
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