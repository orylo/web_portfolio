/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // 이미지 최적화를 비활성화하여 정적 내보내기 시 이미지가 제대로 표시되도록 함
  },
}

module.exports = nextConfig
