import Navigation from '../components/Navigation';
import { useState } from 'react';
import { tags } from '../data/tags';
import { projects, Project } from '../data/projects';
import Link from 'next/link';
import Image from 'next/image';

export default function Works() {
  const [selectedTag, setSelectedTag] = useState('All');

  const filteredProjects = selectedTag === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(selectedTag));

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-32">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 transition-all duration-300 ease-in-out">
          {/* Tags */}
          <div className="mb-16">
            <div className="flex flex-wrap gap-4 text-sm">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`${
                    selectedTag === tag
                      ? 'text-black'
                      : 'text-gray-400 hover:text-black'
                  } transition-colors duration-200`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-300 ease-in-out">
            {filteredProjects.map((project, index) => (
              <Link 
                href={`/works/${project.id}`} 
                key={project.id}
                className="group cursor-pointer"
              >
                {/* Square Thumbnail Container */}
                <div className="relative aspect-square overflow-hidden mb-4">
                  <div className="w-full h-full bg-gray-100 transition-all duration-300 group-hover:bg-gray-200">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                {/* Project Info */}
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg text-black">{project.title}</h3>
                    <p className="text-xs text-gray-500">{project.date}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs text-gray-500"
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
      </main>
    </div>
  );
} 