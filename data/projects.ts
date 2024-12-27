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
    id: 'brand-identity-cosmetic',
    title: '화장품 브랜드 아이덴티티',
    description: '자연주의 화장품 브랜드의 비주얼 아이덴티티 디자인',
    tags: ['Brand Design', 'Visual Identity', 'Packaging'],
    date: '2024.01',
    client: 'Natural Cosmetics',
    thumbnail: './images/projects/brand-identity-cosmetic.jpg'
  },
  {
    id: 'editorial-magazine',
    title: '라이프스타일 매거진',
    description: '계간 라이프스타일 매거진의 편집 디자인',
    tags: ['Editorial', 'Typography', 'Print'],
    date: '2023.12',
    client: 'Lifestyle Magazine',
    thumbnail: './images/projects/editorial-magazine.jpg'
  },
  {
    id: 'campaign-sustainability',
    title: '지속가능성 캠페인',
    description: '환경 보호를 위한 브랜드 캠페인 디자인',
    tags: ['Campaign', 'Art Direction', 'Motion Graphics'],
    date: '2023.11',
    client: 'Eco Brand',
    thumbnail: './images/projects/campaign-sustainability.jpg'
  },
  {
    id: 'social-media-content',
    title: '소셜 미디어 콘텐츠',
    description: '브랜드 소셜 미디어 채널의 비주얼 콘텐츠 디자인',
    tags: ['Social Media', 'Digital Design', 'Motion Graphics'],
    date: '2023.09',
    client: 'Fashion Brand',
    thumbnail: './images/projects/social-media-content.jpg'
  },
  {
    id: 'exhibition-design',
    title: '전시 공간 디자인',
    description: '아티스트 회고전 전시 공간 및 그래픽 디자인',
    tags: ['Exhibition', 'Visual Identity', 'Typography'],
    date: '2023.08',
    client: 'Art Gallery',
    thumbnail: './images/projects/exhibition-design.jpg'
  },
  {
    id: 'package-design',
    title: '프리미엄 패키지 디자인',
    description: '럭셔리 브랜드의 시즌 한정판 패키지 디자인',
    tags: ['Packaging', 'Brand Design', 'Print'],
    date: '2023.06',
    client: 'Luxury Brand',
    thumbnail: './images/projects/package-design.jpg'
  },
  {
    id: 'brand-campaign',
    title: '브랜드 리포지셔닝',
    description: '브랜드 가치 재정립을 위한 통합 캠페인 디자인',
    tags: ['Campaign', 'Brand Design', 'Art Direction'],
    date: '2023.04',
    client: 'Tech Company',
    thumbnail: './images/projects/brand-campaign.jpg'
  },
  {
    id: 'motion-graphics',
    title: '브랜드 모션그래픽',
    description: '브랜드 스토리텔링을 위한 모션그래픽 디자인',
    tags: ['Motion Graphics', 'Digital Design', 'Art Direction'],
    date: '2022.11',
    client: 'Entertainment Company',
    thumbnail: './images/projects/motion-graphics.jpg'
  },
  {
    id: 'annual-report',
    title: '연간 보고서 디자인',
    description: '기업의 연간 성과 보고서 편집 디자인',
    tags: ['Editorial', 'Typography', 'Print'],
    date: '2022.08',
    client: 'Corporate Client',
    thumbnail: './images/projects/annual-report.jpg'
  },
  {
    id: 'brand-guidelines',
    title: '브랜드 가이드라인',
    description: '스타트업 브랜드의 디자인 시스템 구축',
    tags: ['Brand Design', 'Visual Identity', 'Typography'],
    date: '2022.05',
    client: 'Tech Startup',
    thumbnail: './images/projects/brand-guidelines.jpg'
  }
]; 