interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  slogan: string;
  client: string;
  location: string;
  industry: string;
  category: string[];
  date: string;
  role: string;
  introduction: string;
  solution: {
    description: string;
    gridImages: string[];  // 2열 그리드 이미지
  };
  result: {
    description: string;
    fullImages: string[];  // 전체 너비 이미지
  };
  mainImage: string;
}

export const projectDetails: Record<string, ProjectDetail> = {
  "brand-identity-cosmetic": {
    id: "brand-identity-cosmetic",
    title: "화장품 브랜드 아이덴티티",
    description: "자연주의 화장품 브랜드의 비주얼 아이덴티티 디자인",
    thumbnail: "./images/projects/brand-identity-cosmetic.jpg",
    slogan: "자연주의 화장품 브랜드의 새로운 비주얼 아이덴티티를 디자인했습니다.\n브랜드의 핵심 가치를 시각적 언어로 표현했습니다.",
    client: "Natural Cosmetics",
    location: "Seoul, Republic of Korea",
    industry: "Beauty & Cosmetics",
    category: ["Brand Design", "Visual Identity", "Packaging"],
    date: "2024.01",
    role: "Communication Designer",
    introduction: "자연주의 화장품 브랜드의 새로운 비주얼 아이덴티티 디자인 프로젝트를 진행했습니다. 브랜드의 자연 친화적 가치와 현대적인 감성을 조화롭게 표현하는 것을 목표로 했습니다.",
    solution: {
      description: "자연에서 영감을 받은 컬러 팔레트와 유기적인 형태를 활용하여 브랜드의 정체성을 표현했습니다. 패키지 디자인에서도 지속가능성을 고려한 솔루션을 제안했습니다.",
      gridImages: [
        "/images/brand-identity-cosmetic/solution1.jpg",
        "/images/brand-identity-cosmetic/solution2.jpg"
      ]
    },
    result: {
      description: "새로운 브랜드 아이덴티티는 타겟 고객층으로부터 긍정적인 반응을 얻었으며, 브랜드의 시장 포지셔닝을 효과적으로 강화했습니다.",
      fullImages: [
        "/images/brand-identity-cosmetic/result1.jpg",
        "/images/brand-identity-cosmetic/result2.jpg"
      ]
    },
    mainImage: "/images/brand-identity-cosmetic/main.jpg"
  },
  "editorial-magazine": {
    id: "editorial-magazine",
    title: "라이프스타일 매거진",
    description: "계간 라이프스타일 매거진의 편집 디자인",
    thumbnail: "./images/projects/editorial-magazine.jpg",
    slogan: "계간 라이프스타일 매거진의 편집 디자인을 진행했습니다.\n현대적인 감성과 가독성을 고려한 타이포그래피를 구현했습니다.",
    client: "Lifestyle Magazine",
    location: "Seoul, Republic of Korea",
    industry: "Publishing",
    category: ["Editorial", "Typography", "Print"],
    date: "2023.12",
    role: "Editorial Designer",
    introduction: "라이프스타일 매거진의 편집 디자인 프로젝트를 진행했습니다. 독자들에게 새로운 영감을 주는 동시에 정보의 효과적인 전달을 목표로 했습니다.",
    solution: {
      description: "그리드 시스템을 기반으로 한 레이아웃과 현대적인 타이포그래피를 활용하여 매거진의 정체성을 구축했습니다. 시각적 요소와 텍스트의 균형을 고려했습니다.",
      gridImages: [
        "/images/editorial-magazine/solution1.jpg",
        "/images/editorial-magazine/solution2.jpg"
      ]
    },
    result: {
      description: "매거진의 새로운 디자인은 독자들로부터 높은 평가를 받았으며, 브랜드의 프리미엄 이미지 구축에 기여했습니다.",
      fullImages: [
        "/images/editorial-magazine/result1.jpg",
        "/images/editorial-magazine/result2.jpg"
      ]
    },
    mainImage: "/images/editorial-magazine/main.jpg"
  },
  "campaign-sustainability": {
    id: "campaign-sustainability",
    title: "지속가능성 캠페인",
    description: "환경 보호를 위한 브랜드 캠페인 디자인",
    thumbnail: "./images/projects/campaign-sustainability.jpg",
    slogan: "환경 보호를 위한 브랜드 캠페인을 디자인했습니다.\n시각적 임팩트와 메시지의 전달력을 극대화했습니다.",
    client: "Eco Brand",
    location: "Seoul, Republic of Korea",
    industry: "Environmental",
    category: ["Campaign", "Art Direction", "Motion Graphics"],
    date: "2023.11",
    role: "Art Director",
    introduction: "환경 보호의 중요성을 알리는 브랜드 캠페인을 기획했습니다. 강력한 시각적 메시지를 통해 환경 문제에 대한 인식을 제고하고자 했습니다.",
    solution: {
      description: "환경 문제의 심각성과 해결책을 동시에 제시하는 비주얼 전략을 수립했습니다. 모션그래픽을 활용하여 메시지의 전달력을 높였습니다.",
      gridImages: [
        "/images/campaign-sustainability/solution1.jpg",
        "/images/campaign-sustainability/solution2.jpg"
      ]
    },
    result: {
      description: "캠페인은 소셜 미디어에서 높은 참여도를 기록했으며, 브랜드의 환경 보호 의지를 효과적으로 전달했습니다.",
      fullImages: [
        "/images/campaign-sustainability/result1.jpg",
        "/images/campaign-sustainability/result2.jpg"
      ]
    },
    mainImage: "/images/campaign-sustainability/main.jpg"
  },
  "social-media-content": {
    id: "social-media-content",
    title: "소셜 미디어 콘텐츠",
    description: "브랜드 소셜 미디어 채널의 비주얼 콘텐츠 디자인",
    thumbnail: "./images/projects/social-media-content.jpg",
    slogan: "패션 브랜드의 소셜 미디어 콘텐츠를 디자인했습니다.\n브랜드의 아이덴티티를 디지털 환경에 맞게 재해석했습니다.",
    client: "Fashion Brand",
    location: "Seoul, Republic of Korea",
    industry: "Fashion",
    category: ["Social Media", "Digital Design", "Motion Graphics"],
    date: "2023.09",
    role: "Digital Designer",
    introduction: "패션 브랜드의 소셜 미디어 채널을 위한 비주얼 콘텐츠를 제작했습니다. 브랜드의 정체성을 유지하면서도 소셜 미디어 플랫폼의 특성을 고려한 디자인을 목표로 했습니다.",
    solution: {
      description: "각 플랫폼의 특성을 고려한 맞춤형 콘텐츠를 제작하고, 일관된 비주얼 스타일을 통해 브랜드 인지도를 강화했습니다.",
      gridImages: [
        "/images/social-media-content/solution1.jpg",
        "/images/social-media-content/solution2.jpg"
      ]
    },
    result: {
      description: "소셜 미디어 채널의 팔로워 수가 증가했으며, 콘텐츠 인게이지먼트 율이 크게 향상되었습니다.",
      fullImages: [
        "/images/social-media-content/result1.jpg",
        "/images/social-media-content/result2.jpg"
      ]
    },
    mainImage: "/images/social-media-content/main.jpg"
  },
  "exhibition-design": {
    id: "exhibition-design",
    title: "전시 공간 디자인",
    description: "아티스트 회고전 전시 공간 및 그래픽 디자인",
    thumbnail: "./images/projects/exhibition-design.jpg",
    slogan: "현대 미술 작가의 회고전을 위한 전시 공간을 디자인했습니다.\n작품과 공간이 조화를 이루는 경험을 창출했습니다.",
    client: "Art Gallery",
    location: "Seoul, Republic of Korea",
    industry: "Art & Culture",
    category: ["Exhibition", "Visual Identity", "Typography"],
    date: "2023.08",
    role: "Exhibition Designer",
    introduction: "현대 미술 작가의 30년 작품 세계를 조명하는 회고전 전시 공간을 디자인했습니다. 작품의 특성을 고려한 공간 구성과 동선 설계를 진행했습니다.",
    solution: {
      description: "작품의 시대별 특성을 고려한 공간 분할과 조명 계획을 수립했으며, 관람객의 동선을 고려한 그래픽 요소를 배치했습니다.",
      gridImages: [
        "/images/exhibition-design/solution1.jpg",
        "/images/exhibition-design/solution2.jpg"
      ]
    },
    result: {
      description: "전시는 3개월간 5만 명 이상의 관람객을 동원했으며, 미술계와 언론으로부터 호평을 받았습니다.",
      fullImages: [
        "/images/exhibition-design/result1.jpg",
        "/images/exhibition-design/result2.jpg"
      ]
    },
    mainImage: "/images/exhibition-design/main.jpg"
  },
  "package-design": {
    id: "package-design",
    title: "프리미엄 패키지 디자인",
    description: "럭셔리 브랜드의 시즌 한정판 패키지 디자인",
    thumbnail: "./images/projects/package-design.jpg",
    slogan: "럭셔리 브랜드의 시즌 한정판 패키지를 디자인했습니다.\n브랜드의 프리미엄 가치를 패키지에 담아냈습니다.",
    client: "Luxury Brand",
    location: "Seoul, Republic of Korea",
    industry: "Luxury Goods",
    category: ["Packaging", "Brand Design", "Print"],
    date: "2023.06",
    role: "Package Designer",
    introduction: "럭셔리 브랜드의 시즌 한정판 제품을 위한 패키지 디자인을 진행했습니다. 브랜드의 럭셔리한 이미지와 시즌성을 동시에 표현하는 것을 목표로 했습니다.",
    solution: {
      description: "고급스러운 소재와 특수 인쇄 기법을 활용하여 브랜드의 프리미엄 가치를 표현했습니다. 시즌 컨셉에 맞는 그래픽 요소를 개발하여 적용했습니다.",
      gridImages: [
        "/images/package-design/solution1.jpg",
        "/images/package-design/solution2.jpg"
      ]
    },
    result: {
      description: "한정판 패키지는 출시 직후 완판을 기록했으며, 소셜 미디어에서 높은 화제성을 기록했습니다.",
      fullImages: [
        "/images/package-design/result1.jpg",
        "/images/package-design/result2.jpg"
      ]
    },
    mainImage: "/images/package-design/main.jpg"
  },
  "brand-campaign": {
    id: "brand-campaign",
    title: "브랜드 리포지셔닝",
    description: "브랜드 가치 재정립을 위한 통합 캠페인 디자인",
    thumbnail: "./images/projects/brand-campaign.jpg",
    slogan: "테크 기업의 브랜드 리포지셔닝 캠페인을 디자인했습니다.\n혁신적인 기업 가치를 새로운 시각으로 전달했습니다.",
    client: "Tech Company",
    location: "Seoul, Republic of Korea",
    industry: "Technology",
    category: ["Campaign", "Brand Design", "Art Direction"],
    date: "2023.04",
    role: "Art Director",
    introduction: "테크 기업의 새로운 브랜드 가치를 정립하고 이를 효과적으로 전달하기 위한 통합 캠페인을 기획했습니다. 기업의 혁신성과 미래 비전을 강조하는 것을 목표로 했습니다.",
    solution: {
      description: "디지털과 아날로그를 아우르는 크로스 미디어 전략을 수립했으며, 일관된 브랜드 메시지를 다양한 채널을 통해 전달했습니다.",
      gridImages: [
        "/images/brand-campaign/solution1.jpg",
        "/images/brand-campaign/solution2.jpg"
      ]
    },
    result: {
      description: "캠페인을 통해 기업의 브랜드 가치가 상승했으며, 신규 고객 유입이 크게 증가했습니다.",
      fullImages: [
        "/images/brand-campaign/result1.jpg",
        "/images/brand-campaign/result2.jpg"
      ]
    },
    mainImage: "/images/brand-campaign/main.jpg"
  },
  "motion-graphics": {
    id: "motion-graphics",
    title: "브랜드 모션그래픽",
    description: "브랜드 스토리텔링을 위한 모션그래픽 디자인",
    thumbnail: "./images/projects/motion-graphics.jpg",
    slogan: "엔터테인먼트 기업의 브랜드 스토리를 모션그래픽으로 표현했습니다.\n역동적인 비주얼로 브랜드의 에너지를 전달했습니다.",
    client: "Entertainment Company",
    location: "Seoul, Republic of Korea",
    industry: "Entertainment",
    category: ["Motion Graphics", "Digital Design", "Art Direction"],
    date: "2022.11",
    role: "Motion Designer",
    introduction: "엔터테인먼트 기업의 브랜드 스토리를 효과적으로 전달하기 위한 모션그래픽을 제작했습니다. 브랜드의 역동적인 이미지를 시각적으로 표현하는 것을 목표로 했습니다.",
    solution: {
      description: "브랜드의 핵심 가치를 상징하는 그래픽 요소들을 개발하고, 이를 역동적인 모션으로 구현했습니다. 음악과 모션의 조화를 통해 감성적인 스토리텔링을 완성했습니다.",
      gridImages: [
        "/images/motion-graphics/solution1.jpg",
        "/images/motion-graphics/solution2.jpg"
      ]
    },
    result: {
      description: "제작된 모션그래픽은 다양한 채널에서 활용되어 브랜드의 이미지 제고에 기여했습니다.",
      fullImages: [
        "/images/motion-graphics/result1.jpg",
        "/images/motion-graphics/result2.jpg"
      ]
    },
    mainImage: "/images/motion-graphics/main.jpg"
  },
  "annual-report": {
    id: "annual-report",
    title: "연간 보고서 디자인",
    description: "기업의 연간 성과 보고서 편집 디자인",
    thumbnail: "./images/projects/annual-report.jpg",
    slogan: "기업의 연간 성과와 비전을 담은 보고서를 디자인했습니다.\n데이터를 시각적으로 명확하게 전달했습니다.",
    client: "Corporate Client",
    location: "Seoul, Republic of Korea",
    industry: "Corporate",
    category: ["Editorial", "Typography", "Print"],
    date: "2022.08",
    role: "Editorial Designer",
    introduction: "기업의 연간 성과와 미래 비전을 효과적으로 전달하는 보고서를 디자인했습니다. 복잡한 정보를 명확하고 시각적으로 전달하는 것을 목표로 했습니다.",
    solution: {
      description: "체계적인 그리드 시스템을 바탕으로 정보의 위계를 명확히 했으며, 인포그래픽을 활용하여 데이터를 직관적으로 전달했습니다.",
      gridImages: [
        "/images/annual-report/solution1.jpg",
        "/images/annual-report/solution2.jpg"
      ]
    },
    result: {
      description: "보고서는 이해관계자들로부터 높은 가독성과 디자인 완성도에 대해 긍정적인 평가를 받았습니다.",
      fullImages: [
        "/images/annual-report/result1.jpg",
        "/images/annual-report/result2.jpg"
      ]
    },
    mainImage: "/images/annual-report/main.jpg"
  },
  "brand-guidelines": {
    id: "brand-guidelines",
    title: "브랜드 가이드라인",
    description: "스타트업 브랜드의 디자인 시스템 구축",
    thumbnail: "./images/projects/brand-guidelines.jpg",
    slogan: "스타트업의 브랜드 디자인 시스템을 구축했습니다.\n일관된 브랜드 경험을 위한 기준을 제시했습니다.",
    client: "Tech Startup",
    location: "Seoul, Republic of Korea",
    industry: "Technology",
    category: ["Brand Design", "Visual Identity", "Typography"],
    date: "2022.05",
    role: "Brand Designer",
    introduction: "빠르게 성장하는 스타트업의 브랜드 아이덴티티 시스템을 구축했습니다. 확장 가능하면서도 일관된 브랜드 경험을 제공하는 것을 목표로 했습니다.",
    solution: {
      description: "브랜드의 핵심 요소들을 정의하고 이를 다양한 상황에 적용할 수 있는 가이드라인을 개발했습니다. 디지털 환경에서의 활용성을 특히 고려했습니다.",
      gridImages: [
        "/images/brand-guidelines/solution1.jpg",
        "/images/brand-guidelines/solution2.jpg"
      ]
    },
    result: {
      description: "구축된 가이드라인을 통해 일관된 브랜드 커뮤니케이션이 가능해졌으며, 브랜드의 전문성이 강화되었습니다.",
      fullImages: [
        "/images/brand-guidelines/result1.jpg",
        "/images/brand-guidelines/result2.jpg"
      ]
    },
    mainImage: "/images/brand-guidelines/main.jpg"
  }
};

export const projectIds = Object.keys(projectDetails); 