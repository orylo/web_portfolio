import { ProjectDetail } from './types';
import { projectResults } from './projectResults';

const basePath = process.env.NODE_ENV === 'production' ? '/web_portfolio' : '';

export const projectDetails: Record<string, ProjectDetail> = {
  
  "brand-identity-cosmetic": {
    id: "brand-identity-cosmetic",
    title: "화장품 브랜드 아이덴티티",
    description: "자연주의 화장품 브랜드의 비주얼 아이덴티티 디자인",
    thumbnail: `${basePath}/images/projects/brand-identity-cosmetic.jpg`,
    slogan: "자연주의 화장품 브랜드의 새로운 비주얼 아이덴티티를 디자인했습니다.\n브랜드의 핵심 가치를 시각적 언어로 표현했습니다.",
    client: "Natural Cosmetics",
    location: "Seoul, Republic of Korea",
    industry: "Beauty & Cosmetics",
    category: ["Brand Design", "Visual Identity", "Packaging"],
    date: "2024.01",
    role: "Communication Designer",
    introduction: "자연주의 화장품 브랜드의 새로운 비주얼 아이덴티티 디자인 프로젝트를 진행했습니다. 브랜드의 자연 친화적 가치와 현대적인 감��을 조화롭게 표현하는 것을 목표로 했습니다.",
    mainImage: `${basePath}/images/brand-identity-cosmetic/main.jpg`
  },

  "editorial-magazine": {
    id: "editorial-magazine",
    title: "라이프스타일 매거진",
    description: "계간 라이프스타일 매거진의 편집 디자인",
    thumbnail: `${basePath}/images/projects/editorial-magazine.jpg`,
    slogan: "계간 라이프스타일 매거진의 편집 디자인을 진행했습니다.\n현대적인 감성과 가독성을 고려한 타이포그래피를 구현했습니다.",
    client: "Lifestyle Magazine",
    location: "Seoul, Republic of Korea",
    industry: "Publishing",
    category: ["Editorial", "Typography", "Print"],
    date: "2023.12",
    role: "Editorial Designer",
    introduction: "라이프스타일 매거진의 편집 디자인 프로젝트를 진행했습니다. 독자들에게 새로운 영감을 주는 동시에 정보의 효과적인 전달을 목표로 했습니다.",
    mainImage: `${basePath}/images/editorial-magazine/main.jpg`
  },
  "campaign-sustainability": {
    id: "campaign-sustainability",
    title: "지속가능성 캠페인",
    description: "환경 보호를 위한 브랜드 캠페인 디자인",
    thumbnail: `${basePath}/images/projects/campaign-sustainability.jpg`,
    slogan: "환경 보호를 위한 브랜드 캠페인을 디자인했습니다.\n시각적 임팩트와 메시지의 전달력을 극대화했습니다.",
    client: "Eco Brand",
    location: "Seoul, Republic of Korea",
    industry: "Environmental",
    category: ["Campaign", "Art Direction", "Motion Graphics"],
    date: "2023.11",
    role: "Art Director",
    introduction: "환경 보호의 중요성을 알리는 브랜드 캠페인을 기획했습니다. 강력한 시각적 메시지를 통해 환경 문제에 대한 인식을 제고하고자 했습니다.",
    mainImage: `${basePath}/images/campaign-sustainability/main.jpg`
  },
  "social-media-content": {
    id: "social-media-content",
    title: "소셜 미디어 콘텐츠",
    description: "브랜드 소셜 미디어 채널의 비주얼 콘텐츠 디자인",
    thumbnail: `${basePath}/images/projects/social-media-content.jpg`,
    slogan: "패션 브랜드의 소셜 미디어 콘텐츠를 디자인했습니다.\n브랜드의 아이덴티티를 디지털 환경에 맞게 재해석했습니다.",
    client: "Fashion Brand",
    location: "Seoul, Republic of Korea",
    industry: "Fashion",
    category: ["Social Media", "Digital Design", "Motion Graphics"],
    date: "2023.09",
    role: "Digital Designer",
    introduction: "패션 브랜드의 소셜 미디어 채널을 위한 비주얼 콘텐츠를 제작했습니다. 브랜드의 정체성을 유지하면서도 소셜 미디어 플랫폼의 특성을 고려한 디자인을 목표로 했습니다.",
    mainImage: `${basePath}/images/social-media-content/main.jpg`
  },
  "exhibition-design": {
    id: "exhibition-design",
    title: "전시 공간 디자인",
    description: "아티스트 회고전 전시 공간 및 그래픽 디자인",
    thumbnail: `${basePath}/images/projects/exhibition-design.jpg`,
    slogan: "현대 미술 작가의 회고전을 위한 전시 공간을 디자인했습니다.\n작품과 공간이 조화를 이루는 경험을 창출했습니다.",
    client: "Art Gallery",
    location: "Seoul, Republic of Korea",
    industry: "Art & Culture",
    category: ["Exhibition", "Visual Identity", "Typography"],
    date: "2023.08",
    role: "Exhibition Designer",
    introduction: "현대 미술 작가의 30년 작품 세계를 조명하는 회고전 전시 공간을 디자인했습니다. 작품의 특성을 고려한 공간 구성과 동선 설계를 진행했습니다.",
    mainImage: `${basePath}/images/exhibition-design/main.jpg`
  },
  "package-design": {
    id: "package-design",
    title: "프리미엄 패키지 디자인",
    description: "럭셔리 브랜드의 시즌 한정판 패키지 디자인",
    thumbnail: `${basePath}/images/projects/package-design.jpg`,
    slogan: "럭셔리 브랜드의 시즌 한정판 패키지를 디자인했습니다.\n브랜드의 프리미엄 가치를 패키지에 담아냈습니다.",
    client: "Luxury Brand",
    location: "Seoul, Republic of Korea",
    industry: "Luxury Goods",
    category: ["Packaging", "Brand Design", "Print"],
    date: "2023.06",
    role: "Package Designer",
    introduction: "럭셔리 브랜드의 시즌 한정판 제품을 위한 패키지 디자인을 진행했습니다. 브랜드의 럭셔리한 이미지와 시즌성을 동시에 표현하는 것을 목표로 했습니다.",
    mainImage: `${basePath}/images/package-design/main.jpg`
  },
  "brand-campaign": {
    id: "brand-campaign",
    title: "브랜드 리포지셔닝",
    description: "브랜드 가치 재정립을 위한 통합 캠페인 디자인",
    thumbnail: `${basePath}/images/projects/brand-campaign.jpg`,
    slogan: "테크 기업의 브랜드 리포지셔닝 캠페인을 디자인했습니다.\n혁신적인 기업 가치를 새로운 시각으로 전달했습니다.",
    client: "Tech Company",
    location: "Seoul, Republic of Korea",
    industry: "Technology",
    category: ["Campaign", "Brand Design", "Art Direction"],
    date: "2023.04",
    role: "Art Director",
    introduction: "테크 기업의 새로운 브랜드 가치를 정립하고 이를 효과적으로 전달하기 위한 통합 캠페인을 기획했습니다. 기업의 혁신성과 미래 비전을 강조하는 것을 목표로 했습니다.",
    mainImage: `${basePath}/images/brand-campaign/main.jpg`
  },
  "motion-graphics": {
    id: "motion-graphics",
    title: "브랜드 모션그래픽",
    description: "브랜드 스토리텔링을 위한 모션그래픽 디자인",
    thumbnail: `${basePath}/images/projects/motion-graphics.jpg`,
    slogan: "엔터테인먼트 기업의 브랜드 스토리를 모션그래픽으로 표현했습니다.\n역동적인 비주얼로 브랜드의 에너지를 전달했습니다.",
    client: "Entertainment Company",
    location: "Seoul, Republic of Korea",
    industry: "Entertainment",
    category: ["Motion Graphics", "Digital Design", "Art Direction"],
    date: "2022.11",
    role: "Motion Designer",
    introduction: "엔터테인먼트 기업의 브랜드 스토리를 효과적으로 전달하기 위한 모션그래픽을 제작했습니다. 브랜드의 역동적인 이미지를 시각적으로 표현하는 것을 목표로 했습니다.",
    mainImage: `${basePath}/images/motion-graphics/main.jpg`
  },
  "annual-report": {
    id: "annual-report",
    title: "연간 보고서 디자인",
    description: "기업의 연간 성과 보고서 편집 디자인",
    thumbnail: `${basePath}/images/projects/annual-report.jpg`,
    slogan: "기업의 연간 성과와 비전을 담은 보고서를 디자인했습니다.\n데이터를 시각적으로 명확하게 전달했습니다.",
    client: "Corporate Client",
    location: "Seoul, Republic of Korea",
    industry: "Corporate",
    category: ["Editorial", "Typography", "Print"],
    date: "2022.08",
    role: "Editorial Designer",
    introduction: "기업의 연간 성과와 미래 비전을 효과적으로 전달하는 보고서를 디자인했습니다. 복잡한 정보를 명확하고 시각적으로 전달하는 것을 목표로 했습니다.",
    mainImage: `${basePath}/images/annual-report/main.jpg`
  },
  "brand-guidelines": {
    id: "brand-guidelines",
    title: "브랜드 가이드라인",
    description: "스타트업 브랜드의 디자인 시스템 구축",
    thumbnail: `${basePath}/images/projects/brand-guidelines.jpg`,
    slogan: "스타트업의 브랜드 디자인 시스템을 구축했습니다.\n일관된 브랜드 경험을 위한 기준을 제시했습니다.",
    client: "Tech Startup",
    location: "Seoul, Republic of Korea",
    industry: "Technology",
    category: ["Brand Design", "Visual Identity", "Typography"],
    date: "2022.05",
    role: "Brand Designer",
    introduction: "빠르게 성장하는 스타트업의 브랜드 아이덴티티 시스템을 구축했습니다. 확장 가능하면서도 일관된 브랜드 경험을 제공하는 것을 목표로 했습니다.",
    mainImage: `${basePath}/images/brand-guidelines/main.jpg`
  }
};

// 프로젝트의 전체 정보를 가져오는 헬퍼 함수
export function getFullProjectDetails(id: string) {
  const details = projectDetails[id];
  const result = projectResults[id];

  if (!details || !result) {
    return null;
  }

  return {
    ...details,
    result
  };
} 