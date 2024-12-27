import { useRouter } from 'next/router';
import Navigation from '../../components/Navigation';
import { projects } from '../../data/projects';

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-32">
          <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
            <h1 className="text-2xl">프로젝트를 찾을 수 없습니다.</h1>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-32">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-light mb-4">{project.title}</h1>
            <div className="flex justify-between items-center mb-8">
              <div className="flex gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="text-sm text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500">{project.date}</p>
            </div>
            <p className="text-lg text-gray-600 mb-8">{project.description}</p>
            <div className="aspect-video bg-gray-100 mb-8 flex items-center justify-center">
              <span className="text-gray-400">Project Image</span>
            </div>
            <div className="prose max-w-none">
              {/* 추후 상세 내용이 추가될 영역 */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 