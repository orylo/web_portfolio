import Navigation from '../components/Navigation';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h1 className="text-5xl font-light mb-8">Contact</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                프로젝트 협업이나 문의사항이 있으시다면 언제든 연락 주세요.
                최대한 빠른 시일 내에 답변 드리도록 하겠습니다.
              </p>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-light mb-4">Contact Info</h2>
                  <div className="space-y-2">
                    <p className="text-gray-600">contact@example.com</p>
                    <p className="text-gray-600">+82 10-1234-5678</p>
                    <p className="text-gray-600">Seoul, South Korea</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-light mb-4">Social</h2>
                  <div className="space-y-2">
                    <p className="text-gray-600">Github</p>
                    <p className="text-gray-600">LinkedIn</p>
                    <p className="text-gray-600">Twitter</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-600 mb-2">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-0 py-2 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black text-lg"
                    placeholder="이름을 입력하세요"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-0 py-2 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black text-lg"
                    placeholder="이메일을 입력하세요"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-600 mb-2">
                    메시지
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-0 py-2 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black text-lg resize-none"
                    placeholder="메시지를 입력하세요"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 text-lg hover:bg-gray-900 transition-colors duration-200"
                >
                  보내기
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 