import { ProjectResult, ResultSection } from './types';

const basePath = process.env.NODE_ENV === 'production' ? '/web_portfolio' : '';

export const resultSection: ResultSection = {
  title: "Result"
};

export const projectResults: Record<string, ProjectResult> = {
  "brand-identity-cosmetic": {
    components: [
      {
        type: 'title',
        content: '브랜드 아이덴티티 결과'
      },
      {
        type: 'description',
        content: '새로운 브랜드 아이덴티티는 타겟 고객층으로부터 긍정적인 반응을 얻었으며, 브랜드의 시장 포지셔닝을 효과적으로 강화했습니다.'
      },
      {
        type: 'fullImage',
        src: `${basePath}/images/brand-identity-cosmetic/result1.jpg`
      },
      {
        type: 'twoImages',
        images: [
          `${basePath}/images/brand-identity-cosmetic/result2.jpg`,
          `${basePath}/images/brand-identity-cosmetic/result3.jpg`
        ]
      },
      {
        type: 'description',
        content: '패키지 디자인 적용 결과, 매장 내 시인성이 향상되었으며 고객들의 구매 전환율이 증가했습니다.'
      },
      {
        type: 'fourImages',
        images: [
          `${basePath}/images/brand-identity-cosmetic/result4.jpg`,
          `${basePath}/images/brand-identity-cosmetic/result5.jpg`,
          `${basePath}/images/brand-identity-cosmetic/result6.jpg`,
          `${basePath}/images/brand-identity-cosmetic/result7.jpg`
        ]
      }
    ]
  },
  "editorial-magazine": {
    components: [
      {
        type: 'description',
        content: '매거진의 새로운 디자인은 독자들로부터 높은 평가를 받았으며, 브랜드의 프리미엄 이미지 구축에 기여했습니다.'
      },
      {
        type: 'threeImages',
        images: [
          `${basePath}/images/editorial-magazine/result1.jpg`,
          `${basePath}/images/editorial-magazine/result2.jpg`,
          `${basePath}/images/editorial-magazine/result3.jpg`
        ]
      },
      {
        type: 'title',
        content: '디자인 시스템'
      },
      {
        type: 'description',
        content: '일관된 디자인 시스템 적용으로 매거진의 정체성이 강화되었습니다.'
      },
      {
        type: 'twoImages',
        images: [
          `${basePath}/images/editorial-magazine/result4.jpg`,
          `${basePath}/images/editorial-magazine/result5.jpg`
        ]
      }
    ]
  },
  "campaign-sustainability": {
    components: [
      {
        type: 'title',
        content: '캠페인 성과'
      },
      {
        type: 'description',
        content: '캠페인은 소셜 미디어에서 높은 참여도를 기록했으며, 브랜드의 환경 보호 의지를 효과적으로 전달했습니다.'
      },
      {
        type: 'fullImage',
        src: `${basePath}/images/campaign-sustainability/result1.jpg`
      },
      {
        type: 'threeImages',
        images: [
          `${basePath}/images/campaign-sustainability/result2.jpg`,
          `${basePath}/images/campaign-sustainability/result3.jpg`,
          `${basePath}/images/campaign-sustainability/result4.jpg`
        ]
      }
    ]
  },
  "social-media-content": {
    components: [
      {
        type: 'description',
        content: '소셜 미디어 채널의 팔로워 수가 증가했으며, 콘텐츠 인게이지먼트 율이 크게 향상되었습니다.'
      },
      {
        type: 'fourImages',
        images: [
          `${basePath}/images/social-media-content/result1.jpg`,
          `${basePath}/images/social-media-content/result2.jpg`,
          `${basePath}/images/social-media-content/result3.jpg`,
          `${basePath}/images/social-media-content/result4.jpg`
        ]
      },
      {
        type: 'title',
        content: '콘텐츠 성과'
      },
      {
        type: 'description',
        content: '일관된 비주얼 스타일을 통해 브랜드 인지도가 강화되었으며, 타겟 고객층의 참여도가 증가했습니다.'
      },
      {
        type: 'twoImages',
        images: [
          `${basePath}/images/social-media-content/result5.jpg`,
          `${basePath}/images/social-media-content/result6.jpg`
        ]
      }
    ]
  },
  "exhibition-design": {
    components: [
      {
        type: 'title',
        content: '전시 결과'
      },
      {
        type: 'description',
        content: '전시는 3개월간 5만 명 이상의 관람객을 동원했으며, 미술계와 언론으로부터 호평을 받았습니다.'
      },
      {
        type: 'fullImage',
        src: `${basePath}/images/exhibition-design/result1.jpg`
      },
      {
        type: 'threeImages',
        images: [
          `${basePath}/images/exhibition-design/result2.jpg`,
          `${basePath}/images/exhibition-design/result3.jpg`,
          `${basePath}/images/exhibition-design/result4.jpg`
        ]
      },
      {
        type: 'description',
        content: '관람객들의 동선을 고려한 공간 구성으로 작품 감상의 몰입도를 높였습니다.'
      },
      {
        type: 'twoImages',
        images: [
          `${basePath}/images/exhibition-design/result5.jpg`,
          `${basePath}/images/exhibition-design/result6.jpg`
        ]
      }
    ]
  },
  "package-design": {
    components: [
      {
        type: 'description',
        content: '한정판 패키지는 출시 직후 완판을 기록했으며, 소셜 미디어에서 높은 화제성을 기록했습니다.'
      },
      {
        type: 'twoImages',
        images: [
          `${basePath}/images/package-design/result1.jpg`,
          `${basePath}/images/package-design/result2.jpg`
        ]
      },
      {
        type: 'title',
        content: '매장 디스플레이'
      },
      {
        type: 'description',
        content: '매장 내 특별 디스플레이를 통해 제품의 프리미엄 가치를 효과적으로 전달했습니다.'
      },
      {
        type: 'fourImages',
        images: [
          `${basePath}/images/package-design/result3.jpg`,
          `${basePath}/images/package-design/result4.jpg`,
          `${basePath}/images/package-design/result5.jpg`,
          `${basePath}/images/package-design/result6.jpg`
        ]
      }
    ]
  },
  "brand-campaign": {
    components: [
      {
        type: 'title',
        content: '브랜드 캠페인 결과'
      },
      {
        type: 'description',
        content: '캠페인을 통해 기업의 브랜드 가치가 상승했으며, 신규 고객 유입이 크게 증가했습니다.'
      },
      {
        type: 'fullImage',
        src: `${basePath}/images/brand-campaign/result1.jpg`
      },
      {
        type: 'threeImages',
        images: [
          `${basePath}/images/brand-campaign/result2.jpg`,
          `${basePath}/images/brand-campaign/result3.jpg`,
          `${basePath}/images/brand-campaign/result4.jpg`
        ]
      },
      {
        type: 'description',
        content: '크로스 미디어 전략을 통해 다양한 접점에서 일관된 브랜드 메시지를 전달했습니다.'
      }
    ]
  },
  "motion-graphics": {
    components: [
      {
        type: 'description',
        content: '제작된 모션그래픽은 다양한 채널에서 활용되어 브랜드의 이미지 제고에 기여했습니다.'
      },
      {
        type: 'twoImages',
        images: [
          `${basePath}/images/motion-graphics/result1.jpg`,
          `${basePath}/images/motion-graphics/result2.jpg`
        ]
      },
      {
        type: 'title',
        content: '채널별 성과'
      },
      {
        type: 'description',
        content: '소셜 미디어와 디지털 사이니지 등 다양한 채널에서 높은 주목도를 기록했습니다.'
      },
      {
        type: 'fourImages',
        images: [
          `${basePath}/images/motion-graphics/result3.jpg`,
          `${basePath}/images/motion-graphics/result4.jpg`,
          `${basePath}/images/motion-graphics/result5.jpg`,
          `${basePath}/images/motion-graphics/result6.jpg`
        ]
      }
    ]
  },
  "annual-report": {
    components: [
      {
        type: 'title',
        content: '연간 보고서 결과'
      },
      {
        type: 'description',
        content: '보고서는 이해관계자들로부터 높은 가독성과 디자인 완성도에 대해 긍정적인 평가를 받았습니다.'
      },
      {
        type: 'threeImages',
        images: [
          `${basePath}/images/annual-report/result1.jpg`,
          `${basePath}/images/annual-report/result2.jpg`,
          `${basePath}/images/annual-report/result3.jpg`
        ]
      },
      {
        type: 'description',
        content: '데이터 시각화를 통해 복잡한 정보를 직관적으로 전달했습니다.'
      },
      {
        type: 'twoImages',
        images: [
          `${basePath}/images/annual-report/result4.jpg`,
          `${basePath}/images/annual-report/result5.jpg`
        ]
      }
    ]
  },
  "brand-guidelines": {
    components: [
      {
        type: 'description',
        content: '구축된 가이드라인을 통해 일관된 브랜드 커뮤니케이션이 가능해졌으며, 브랜드의 전문성이 강화되었습니다.'
      },
      {
        type: 'fullImage',
        src: `${basePath}/images/brand-guidelines/result1.jpg`
      },
      {
        type: 'title',
        content: '디지털 환경 최적화'
      },
      {
        type: 'description',
        content: '다양한 디지털 플랫폼에서의 활용성을 고려한 가이드라인을 제시했습니다.'
      },
      {
        type: 'fourImages',
        images: [
          `${basePath}/images/brand-guidelines/result2.jpg`,
          `${basePath}/images/brand-guidelines/result3.jpg`,
          `${basePath}/images/brand-guidelines/result4.jpg`,
          `${basePath}/images/brand-guidelines/result5.jpg`
        ]
      }
    ]
  }
}; 