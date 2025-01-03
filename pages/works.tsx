import Navigation from '../components/Navigation';
import { useState, useEffect, useRef } from 'react';
import { tags } from '../data/tags';
import { projectDetails } from '../data/projectDetails';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Works() {
  const [selectedTag, setSelectedTag] = useState('ALL');
  const [isTagsOpen, setIsTagsOpen] = useState(false);
  const [tagsHeight, setTagsHeight] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [filteredProjects, setFilteredProjects] = useState(Object.values(projectDetails));
  const [isAnimating, setIsAnimating] = useState(false);
  const tagsRef = useRef<HTMLDivElement>(null);
  const tagsContentRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    // 페이지 로드 시 모든 프로젝트 표시
    setSelectedTag('ALL');
    setFilteredProjects(Object.values(projectDetails));
    localStorage.setItem('selectedTag', 'ALL');
  }, []);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  useEffect(() => {
    const updateTagsHeight = () => {
      if (tagsContentRef.current) {
        const height = tagsContentRef.current.offsetHeight;
        setTagsHeight(height);
        if (tagsRef.current) {
          (tagsRef.current as HTMLElement).style.setProperty('--tags-height', `${height}px`);
        }
      }
    };

    updateTagsHeight();
    window.addEventListener('resize', updateTagsHeight);
    const resizeObserver = new ResizeObserver(updateTagsHeight);
    if (tagsContentRef.current) {
      resizeObserver.observe(tagsContentRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateTagsHeight);
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url === '/works') {
        if (router.asPath.includes('/works/')) {
          // 프로젝트 상세 페이지에서 돌아올 때
          setIsTagsOpen(false);
          if (window.innerWidth >= 768) {  // 태블릿/데스크톱 사이즈에서만 애니메이션 적용
            document.body.classList.add('from-project-detail');
            if (tagsRef.current && tagsContentRef.current) {
              const height = tagsContentRef.current.offsetHeight;
              (tagsRef.current as HTMLElement).style.setProperty('--tags-height', `${height}px`);
            }
            setTimeout(() => {
              document.body.classList.remove('from-project-detail');
            }, 500);
          }
        } else {
          // 다른 페이지에서 Works로 처음 진입할 때
          if (window.innerWidth >= 768) {  // 태블릿/데스크톱 사이즈에서만 애니메이션 적용
            document.body.classList.add('initial-entry');
            if (tagsRef.current && tagsContentRef.current) {
              const height = tagsContentRef.current.offsetHeight;
              (tagsRef.current as HTMLElement).style.setProperty('--tags-height', `${height}px`);
            }
            setTimeout(() => {
              document.body.classList.remove('initial-entry');
            }, 500);
          }
        }
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  const handleTagChange = async (tag: string) => {
    setIsAnimating(true);
    setSelectedTag(tag);
    setIsTagsOpen(false);

    // 선택된 태그를 로컬 스토리지에 저장
    localStorage.setItem('selectedTag', tag);

    // 현재 프로젝트들을 페이드 아웃
    const newProjects = tag === 'ALL' 
      ? Object.values(projectDetails) 
      : Object.values(projectDetails).filter(project => project.category.includes(tag));
    
    // 약간의 딜레이 후 새 프로젝트들로 업데이트
    await new Promise(resolve => setTimeout(resolve, 300));
    setFilteredProjects(newProjects);
    
    // 페이드 인 애니메이션을 위한 상태 리셋
    setTimeout(() => {
      setIsAnimating(false);
    }, 100);
  };

  const toggleTags = () => {
    setIsTagsOpen(!isTagsOpen);
    if (tagsContentRef.current) {
      const height = tagsContentRef.current.offsetHeight;
      setTagsHeight(height);
      if (tagsRef.current) {
        (tagsRef.current as HTMLElement).style.setProperty('--tags-height', `${height}px`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <Navigation />
      {/* Fixed Tags Section */}
      <div className="fixed top-[96px] left-0 right-0 bg-white z-30">
        {/* Mobile Tags Toggle */}
        <button
          className="w-full py-6 text-left px-16 md:hidden border-b border-black"
          onClick={toggleTags}
        >
          <div className="flex justify-between items-center">
            <span className="text-base text-black font-normal">{selectedTag}</span>
            <span className="text-base text-black font-normal">{isTagsOpen ? 'Close' : 'Filter'}</span>
          </div>
        </button>

        {/* Tags Content */}
        <div 
          ref={tagsRef}
          className={`
            tags-section
            overflow-hidden transition-[height] duration-500 ease-in-out
            md:border-b md:border-black
            relative
          `}
          style={{ 
            height: isDesktop ? 'auto' : isTagsOpen ? `${tagsHeight}px` : '0',
            pointerEvents: isDesktop || isTagsOpen ? 'auto' : 'none'
          }}
        >
          <div 
            ref={tagsContentRef}
            className="max-w-[1728px] mx-auto px-[30px]"
          >
            <div className="py-6">
              <div className="flex flex-wrap gap-4 text-base uppercase">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagChange(tag)}
                    className={`${
                      selectedTag === tag
                        ? 'text-black'
                        : 'text-gray-500 hover:text-black'
                    } transition-colors duration-200`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Mobile Border Bottom */}
          <div className={`
            absolute bottom-0 left-0 right-0 h-[1px] bg-black
            md:hidden
            transition-opacity duration-500
            ${isTagsOpen ? 'opacity-100' : 'opacity-0'}
          `} />
        </div>
      </div>

      <main>
        <div 
          className="relative z-20"
          style={{ 
            paddingTop: isDesktop
              ? `${tagsHeight + 1}px` 
              : isTagsOpen 
                ? `${tagsHeight + 74}px`
                : '74px'
          }}
        >
          <div className="max-w-[1728px] mx-auto px-[30px]">
            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-[10px]">
              {filteredProjects.map((project) => (
                <Link 
                  href={`/works/${project.id}`} 
                  key={project.id}
                  className={`project-thumbnail group cursor-pointer`}
                >
                  {/* Square Thumbnail Container */}
                  <div className="relative aspect-square overflow-hidden">
                    <div className="w-full h-full bg-gray-100 transition-all duration-500 group-hover:scale-90 md:group-hover:scale-90">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700"
                      />
                      {/* Hover Overlay - Desktop & Tablet */}
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:flex flex-col justify-center items-center text-white p-6">
                        <h3 className="text-lg mb-2">{project.title}</h3>
                        <p className="text-xs mb-4 whitespace-nowrap">{project.projectDuration}</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {project.category.map((tag, tagIndex) => (
                            <span key={tagIndex} className="text-xs">
                              {tag}{tagIndex < project.category.length - 1 ? ", " : ""}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Project Info - Mobile Only */}
                  <div className="space-y-2 mt-4 md:hidden">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-lg text-black">{project.title}</h3>
                      <p className="text-xs text-black whitespace-nowrap">{project.projectDuration}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.category.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs text-gray-600">
                          {tag}{tagIndex < project.category.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-[50px] border-t border-black">
        <div className="max-w-[1728px] mx-auto px-[30px] py-20">
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