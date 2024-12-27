import { ProjectDetail } from './types';
import { projectResults } from './projectResults';

const basePath = process.env.NODE_ENV === 'production' ? '/web_portfolio' : '';

export const projectDetails: Record<string, ProjectDetail> = {
  "brand-identity-cosmetic": {
    id: "brand-identity-cosmetic",
    title: "별주부전 컨셉 미니앨범",
    thumbnail: `${basePath}/images/projects/brand-identity-cosmetic.jpg`,
    slogan: "한국 전래동화를 모티브로 한 컨셉추얼 미니앨범을 디자인했습니다.\n전통적 서사를 현대적 감각으로 재해석했습니다.",
    projectDuration: "2024. 01 - 2024. 03",
    projectPurpose: "전통 서사를 현대적으로 재해석한 컨셉추얼 앨범 디자인 프로젝트",
    myRole: "100%",
    roleDescription: "전체적인 아트 디렉팅을 맡아 진행했으며, 앨범 패키지 디자인부터 SNS 홍보 콘텐츠 기획 및 제작까지 전반적인 작업을 수행함.",
    category: ["BRANDING", "PACKAGE DESIGN", "VISUAL IDENTITY"],
    toolsUsed: ["PHOTOSHOP", "ILLUSTRATOR", "PREMIERE PRO", "AFTER EFFECT", "MIDJOURNEY", "RUNWAY", "STABLE DIFFUSION"],
    projectHighlights: "전통과 현대가 만나 탄생한 신비로운 음악의 세계. 별주부전이 들려주는 새로운 이야기",
    introduction: "한국의 전래동화 '별주부전'을 모티브로 한 컨셉추얼 미니앨범 프로젝트를 진행했습니다. 전통적인 서사를 현대적인 록 사운드와 비주얼로 재해석하여, 동양적 신비로움과 현대적 감성의 조화를 추구했습니다.",
    mainImage: `${basePath}/images/brand-identity-cosmetic/main.jpg`
  },

  "editorial-magazine": {
    id: "editorial-magazine",
    title: "라이프스타일 매거진",
    thumbnail: `${basePath}/images/projects/editorial-magazine.jpg`,
    slogan: "계간 라이프스타일 매거진의 편집 디자인을 진행했습니다.\n현대적인 감성과 가독성을 고려한 타이포그래피를 구현했습니다.",
    projectDuration: "2023. 12",
    projectPurpose: "현대적 감성의 라이프스타일 매거진 편집 디자인 개발",
    myRole: "100%",
    roleDescription: "매거진의 전반적인 편집 디자인을 담당했으며, 타이포그래피 디자인과 인쇄물 ���작 과정을 주도적으로 진행함.",
    category: ["EDITORIAL", "TYPOGRAPHY", "PRINT"],
    toolsUsed: ["INDESIGN", "PHOTOSHOP", "ILLUSTRATOR"],
    projectHighlights: "일상의 영감을 담은 페이지를 넘길 때마다 펼쳐지는 새로운 라이프스타일의 발견",
    introduction: "라이프스타일 매거진의 편집 디자인 프로젝트를 진행했습니다. 독자들에게 새로운 영감을 주는 동시에 정보의 효과적인 전달을 목표로 했습니다.",
    mainImage: `${basePath}/images/editorial-magazine/main.jpg`
  },
  
  "campaign-sustainability": {
    id: "campaign-sustainability",
    title: "지속가능성 캠페인",
    thumbnail: `${basePath}/images/projects/campaign-sustainability.jpg`,
    slogan: "환경 보호를 위한 브랜드 캠페인을 디자인했습니다.\n시각적 임팩트와 메시지의 전달력을 극대화했습니다.",
    projectDuration: "2023. 11 - 2024. 01",
    projectPurpose: "환경 보호의 중요성을 알리는 브랜드 캠페인 디자인",
    myRole: "100%",
    roleDescription: "캠페인의 아트 디렉팅을 맡아 전체적인 방향성을 설정했으며, 캠페인 디자인과 모션그래픽 제작을 통해 메시지를 효과적으로 전달함.",
    category: ["CAMPAIGN", "ART DIRECTION", "MOTION GRAPHICS"],
    toolsUsed: ["PHOTOSHOP", "ILLUSTRATOR", "AFTER EFFECT", "PREMIERE PRO"],
    projectHighlights: "지구를 위한 작은 실천이 만드는 큰 변화. 우리가 함께 그리는 지속 가능한 미래",
    introduction: "환경 보호의 중요성을 알리는 브랜드 캠페인을 기획했습니다. 강력한 시각적 메시지를 통해 환경 문제에 대한 인식을 제고하고자 했습니다.",
    mainImage: `${basePath}/images/campaign-sustainability/main.jpg`
  },
  "social-media-content": {
    id: "social-media-content",
    title: "소셜 미디어 콘텐츠",
    thumbnail: `${basePath}/images/projects/social-media-content.jpg`,
    slogan: "패션 브랜드의 소셜 미디어 콘텐츠를 디자인했습니다.\n브랜드의 아이덴티티를 디지털 환경에 맞게 재해석했습니다.",
    projectDuration: "2023. 09 - 2023. 12",
    projectPurpose: "패션 브랜드의 디지털 채널 콘텐츠 디자인 및 전략 수립",
    myRole: "100%",
    roleDescription: "콘셜 미디어 채널의 콘텐츠 디자인과 전략을 기획했으며, 브랜드 아이덴티티를 살린 모션그래픽 콘텐츠를 제작함.",
    category: ["SOCIAL MEDIA", "DIGITAL DESIGN", "MOTION GRAPHICS"],
    toolsUsed: ["PHOTOSHOP", "ILLUSTRATOR", "AFTER EFFECT", "PREMIERE PRO"],
    projectHighlights: "스크롤 한 번에 시선을 사로잡는 매력. 당신의 일상에 스며드는 패션 브랜드 이야기",
    introduction: "패션 브랜드의 소셜 미디어 채널을 위한 비주얼 콘텐츠를 제작했습니다. 브랜드의 정체성을 유지하면서도 소셜 미디어 플랫폼의 특성을 고려한 디자인을 목표로 했습니다.",
    mainImage: `${basePath}/images/social-media-content/main.jpg`
  },
  "exhibition-design": {
    id: "exhibition-design",
    title: "전시 공간 디자인",
    thumbnail: `${basePath}/images/projects/exhibition-design.jpg`,
    slogan: "현대 미술 작가의 회고전을 위한 전시 공간을 디자인했습니다.\n작품과 공간이 조화를 이루는 경험을 창출했습니다.",
    projectDuration: "2023. 08",
    projectPurpose: "현대 미술 작가의 30년 회고전을 위한 전시 공간 디자인",
    myRole: "100%",
    roleDescription: "전시 공간의 전체적인 디자인과 동선을 기획했으며, 작품의 특성을 고려한 시각적 아이덴티티 개발을 주도함.",
    category: ["EXHIBITION", "VISUAL IDENTITY", "TYPOGRAPHY"],
    toolsUsed: ["AUTOCAD", "SKETCHUP", "PHOTOSHOP", "ILLUSTRATOR"],
    projectHighlights: "30년의 예술 여정이 만드는 감동의 순간. 작품과 공간이 전하는 특별한 경험",
    introduction: "현대 미술 작가의 30년 작품 세계를 조명하는 회고전 전시 공간을 디자인했습니다. 작품의 특성을 고려한 공간 구성과 동선 설계를 진행했습니다.",
    mainImage: `${basePath}/images/exhibition-design/main.jpg`
  },
  "package-design": {
    id: "package-design",
    title: "프리미엄 패키지 디자인",
    thumbnail: `${basePath}/images/projects/package-design.jpg`,
    slogan: "럭셔리 브랜드의 시즌 한정판 패키지를 디자인했습니다.\n브랜드의 프리미엄 가치를 패키지에 담았습니다.",
    projectDuration: "2023. 06 - 2023. 08",
    projectPurpose: "럭셔리 브랜드의 시즌 한정판 제품 패키지 디자인",
    myRole: "100%",
    roleDescription: "패리미엄 패키지 디자인을 주도적으로 진행했으며, 브랜드 디자인 요소 개발과 인쇄물 제작 과정을 총괄함.",
    category: ["PACKAGE DESIGN", "BRANDING", "PRINT"],
    toolsUsed: ["ILLUSTRATOR", "PHOTOSHOP", "DIMENSION"],
    projectHighlights: "손끝에서 느껴지는 프리미엄의 가치. 시선을 사로잡는 패키지에 담긴 특별한 감동",
    introduction: "럭셔리 브랜드의 시즌 한정판 제품을 위한 패키지 디자인을 진행했습니다. 브랜드의 럭셔리한 이미지와 시즌성을 동시에 표현하는 것을 목표로 했습니다.",
    mainImage: `${basePath}/images/package-design/main.jpg`
  },
  "brand-campaign": {
    id: "brand-campaign",
    title: "브랜드 리포지셔닝",
    thumbnail: `${basePath}/images/projects/brand-campaign.jpg`,
    slogan: "테크 기업의 브랜드 리포지셔닝 캠페인을 디자인했습니다.\n혁신적인 기업 가치를 새로운 시각으로 전달했습니다.",
    projectDuration: "2023. 04 - 2023. 07",
    projectPurpose: "테크 기업의 새로운 브랜드 가치 전달을 위한 캠페인 기획",
    myRole: "100%",
    roleDescription: "캠페인의 아트 디렉팅을 맡아 브랜드 전략을 수립했으며, 통합 캠페인 디자인을 통해 새로운 브랜드 가치를 전달함.",
    category: ["CAMPAIGN", "BRANDING", "ART DIRECTION"],
    toolsUsed: ["PHOTOSHOP", "ILLUSTRATOR", "AFTER EFFECT"],
    projectHighlights: "기술을 넘어 감성을 전하는 혁신. 새로운 시각으로 그려낸 미래 기업의 이야기",
    introduction: "테크 기업의 새로운 브랜드 가치를 정립하고 이를 효과적으로 전달하기 위한 통합 캠페인을 기획했습니다. 기업의 혁신성과 미래 비전을 강조하는 것을 목표로 했습니다.",
    mainImage: `${basePath}/images/brand-campaign/main.jpg`
  },
  "motion-graphics": {
    id: "motion-graphics",
    title: "브랜드 모션그래픽",
    thumbnail: `${basePath}/images/projects/motion-graphics.jpg`,
    slogan: "엔터테인먼트 기업의 브랜드 스토리를 모션그래픽으로 표현했습니다.\n역동적인 비주얼로 브랜드의 에너지를 전달했습니다.",
    projectDuration: "2023. 02 - 2023. 04",
    projectPurpose: "엔터테인먼트 기업의 브랜드 스토리텔링 영상 제작",
    myRole: "100%",
    roleDescription: "모랜드 스토리를 담은 모션그래픽을 기획하고 제작했으며, 애니메이션과 사운드 디자인을 통해 브랜드의 감성을 표현함.",
    category: ["MOTION GRAPHICS", "DIGITAL DESIGN", "ART DIRECTION"],
    toolsUsed: ["AFTER EFFECT", "CINEMA 4D", "PREMIERE PRO"],
    projectHighlights: "역동적인 움직임 속에 숨쉬는 브랜드의 생명력. 보는 것만으로 전해지는 강렬한 에너지",
    introduction: "엔터테인먼트 기업의 브랜드 스토리를 효과적으로 전달하기 위한 모션그래픽을 제작했습니다. 브랜드의 역동적인 이미지를 시각적으로 표현하는 것을 목표로 했습니다.",
    mainImage: `${basePath}/images/motion-graphics/main.jpg`
  },
  "annual-report": {
    id: "annual-report",
    title: "연간 보고서 디자인",
    thumbnail: `${basePath}/images/projects/annual-report.jpg`,
    slogan: "기업의 연간 성과와 비전을 담은 보고서를 디자인했습니다.\n데이터를 시각적으로 명확하게 전달했습니다.",
    projectDuration: "2023. 01 - 2023. 03",
    projectPurpose: "기업의 연간 성과와 비전을 담은 리포트 디자인",
    myRole: "100%",
    roleDescription: "연간 보고서의 편집 디자인을 총괄했으며, 복잡한 데이터를 시각화하고 인쇄물 제작 과정을 관리함.",
    category: ["EDITORIAL", "TYPOGRAPHY", "PRINT"],
    toolsUsed: ["INDESIGN", "ILLUSTRATOR", "PHOTOSHOP"],
    projectHighlights: "숫자 너머에 담�� 진정한 가치. 데이터가 들려주는 한 해의 감동적인 스토리",
    introduction: "기업의 연간 성과와 미래 비전을 효과적으로 전달하는 보고서를 디자인했습니다. 복잡한 정보를 명확하고 시각적으로 전달하는 것을 목표로 했습니다.",
    mainImage: `${basePath}/images/annual-report/main.jpg`
  },
  "brand-guidelines": {
    id: "brand-guidelines",
    title: "브랜드 가이드라인",
    thumbnail: `${basePath}/images/projects/brand-guidelines.jpg`,
    slogan: "스타트업의 브랜드 디자인 시스템을 구축했습니다.\n일관된 브랜드 경험을 위한 기준을 제시했습니다.",
    projectDuration: "2023. 05 - 2023. 07",
    projectPurpose: "스타트업의 확장 가능한 브랜드 디자인 시스템 구축",
    myRole: "100%",
    roleDescription: "브랜드 디자인 시스템을 설계하고 구축했으며, 확장 가능한 가이드라인을 개발하여 일관된 브랜드 경험을 제시함.",
    category: ["BRANDING", "VISUAL IDENTITY", "TYPOGRAPHY"],
    toolsUsed: ["ILLUSTRATOR", "PHOTOSHOP", "INDESIGN", "FIGMA"],
    projectHighlights: "브랜드의 정수를 담아낸 디자인 시스템. 일관된 경험이 만드는 특별한 브랜드 세계",
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