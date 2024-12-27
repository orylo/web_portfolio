import Navigation from '../components/Navigation';
import { useState, useEffect, useRef } from 'react';
import { tags } from '../data/tags';
import { projects } from '../data/projects';
import Link from 'next/link';
import Image from 'next/image';

export default function Works() {
  const [selectedTag, setSelectedTag] = useState('All');
  const [isTagsOpen, setIsTagsOpen] = useState(false);
  const [tagsHeight, setTagsHeight] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const tagsRef = useRef<HTMLDivElement>(null);
  const tagsContentRef = useRef<HTMLDivElement>(null);

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
      }
    };

    updateTagsHeight();
    const resizeObserver = new ResizeObserver(updateTagsHeight);
    if (tagsContentRef.current) {
      resizeObserver.observe(tagsContentRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const filteredProjects = selectedTag === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(selectedTag));

  const toggleTags = () => {
    setIsTagsOpen(!isTagsOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Fixed Tags Section */}
      <div className="fixed top-[96px] left-0 right-0 bg-white z-40">
        {/* Mobile Tags Toggle */}
        <button
          className="w-full py-4 text-left px-16 md:hidden border-b border-black"
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
            overflow-hidden transition-[height] duration-500 ease-in-out
            md:border-b md:border-black
            relative
          `}
          style={{ 
            height: isDesktop ? 'auto' : isTagsOpen ? `${tagsHeight}px` : '0'
          }}
        >
          <div 
            ref={tagsContentRef}
            className="max-w-[1728px] mx-auto px-16"
          >
            <div className="py-8">
              <div className="flex flex-wrap gap-4 text-base">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSelectedTag(tag);
                      setIsTagsOpen(false);
                    }}
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
          className="relative z-30 transition-[padding] duration-500 ease-in-out"
          style={{ 
            paddingTop: isDesktop
              ? `${tagsHeight + 96}px` 
              : isTagsOpen 
                ? `${tagsHeight + 160}px`
                : '160px'
          }}
        >
          <div className="max-w-[1728px] mx-auto px-16">
            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-[10px]">
              {filteredProjects.map((project) => (
                <Link 
                  href={`/works/${project.id}`} 
                  key={project.id}
                  className="group cursor-pointer"
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
                        <p className="text-xs mb-4">{project.date}</p>
                        <div className="flex gap-2">
                          {project.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span key={tagIndex} className="text-xs">
                              {tag}
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
                      <p className="text-xs text-black">{project.date}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs text-black"
                        >
                          {tag}
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