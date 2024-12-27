export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  client: string;
  thumbnail: string;
}

export const projects: Project[] = [
  {
    id: 'web-application',
    title: '웹 애플리케이션 개발',
    description: '현대적인 UI/UX를 갖춘 반응형 웹 애플리케이션',
    tags: ['Web Development', 'Frontend', 'React', 'TypeScript'],
    date: '2024.01',
    client: 'Tech Company',
    thumbnail: '/images/projects/web-application.jpg'
  },
  {
    id: 'ecommerce-platform',
    title: '이커머스 플랫폼',
    description: '확장 가능한 온라인 쇼핑몰 플랫폼',
    tags: ['E-Commerce', 'Frontend', 'Backend', 'Next.js'],
    date: '2023.12',
    client: 'Retail Brand',
    thumbnail: '/images/projects/ecommerce-platform.jpg'
  },
  {
    id: 'enterprise-dashboard',
    title: '기업용 대시보드',
    description: '실시간 데이터 시각화 대시보드',
    tags: ['Dashboard', 'Frontend', 'React', 'API Integration'],
    date: '2023.11',
    client: 'Enterprise Solution',
    thumbnail: '/images/projects/enterprise-dashboard.jpg'
  },
  {
    id: 'mobile-app',
    title: '모바일 앱 개발',
    description: '크로스 플랫폼 모바일 애플리케이션',
    tags: ['Mobile App', 'React', 'TypeScript', 'API Integration'],
    date: '2023.09',
    client: 'Startup',
    thumbnail: '/images/projects/mobile-app.jpg'
  },
  {
    id: 'brand-website',
    title: '브랜드 웹사이트 리뉴얼',
    description: '글로벌 브랜드 웹사이트 디자인 및 개발',
    tags: ['Web Development', 'UI/UX Design', 'Branding'],
    date: '2023.08',
    client: 'Global Brand',
    thumbnail: '/images/projects/brand-website.jpg'
  },
  {
    id: 'payment-system',
    title: '결제 시스템 통합',
    description: '안전한 결제 시스템 구축 및 통합',
    tags: ['E-Commerce', 'Backend', 'API Integration'],
    date: '2023.06',
    client: 'Financial Tech',
    thumbnail: '/images/projects/payment-system.jpg'
  },
  {
    id: 'chat-platform',
    title: '실시간 채팅 플랫폼',
    description: '실시간 통신이 가능한 채팅 서비스 개발',
    tags: ['Web Development', 'Backend', 'Node.js'],
    date: '2023.04',
    client: 'Communication Platform',
    thumbnail: '/images/projects/chat-platform.jpg'
  },
  {
    id: 'admin-dashboard',
    title: '관리자 대시보드 개발',
    description: '데이터 기반 의사결정을 위한 관리자 도구',
    tags: ['Dashboard', 'Frontend', 'TypeScript'],
    date: '2022.11',
    client: 'Enterprise Client',
    thumbnail: '/images/projects/admin-dashboard.jpg'
  },
  {
    id: 'social-platform',
    title: '소셜 미디어 플랫폼',
    description: '사용자 중심의 소셜 네트워크 서비스',
    tags: ['Web Development', 'Frontend', 'Backend'],
    date: '2022.08',
    client: 'Social Media Startup',
    thumbnail: '/images/projects/social-platform.jpg'
  },
  {
    id: 'healthcare-app',
    title: '헬스케어 앱 개발',
    description: '개인 맞춤형 건강 관리 애플리케이션',
    tags: ['Mobile App', 'UI/UX Design', 'React'],
    date: '2022.05',
    client: 'Healthcare Provider',
    thumbnail: '/images/projects/healthcare-app.jpg'
  }
]; 