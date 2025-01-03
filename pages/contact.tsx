import Navigation from '../components/Navigation';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'service_5h3nxaz',
        'template_f77jsg4',
        form.current,
        'KLrXEhsMtVhcpNvWz'
      );
      setSubmitStatus('success');
      if (form.current) {
        form.current.reset();
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Failed to send email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <Navigation />
      <main className="relative">
        <div className="max-w-[1728px] mx-auto px-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 relative pt-[60px] pb-[50px]">
            <div className="pt-0 border-b border-black pb-12 md:border-b-0 md:pb-0">
              <h1 className="text-4xl font-light mb-8">Contact</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                프로젝트 협업이나 문의사항이 있으시다면 언제든 연락 주세요.
                최대한 빠른 시일 내에 답변 드리도록 하겠습니다.
              </p>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-light mb-4">Contact Info</h2>
                  <div className="space-y-2">
                    <p className="text-gray-600">orylo0424@gmail.com</p>
                    <p className="text-gray-600">+82 (0)10 5098 0424</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-light mb-4">Social</h2>
                  <div className="space-y-2">
                    <a 
                      href="https://www.instagram.com/_orylo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors duration-200"
                    >
                      Instagram
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/sunny-sunghee-lee/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-gray-600 hover:text-black transition-colors duration-200"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:pl-20 pt-8 md:pt-0">
              <form ref={form} onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="user_name" className="block text-sm text-gray-600 mb-2">
                    이름
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    className="w-full px-0 py-2 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black text-lg"
                    placeholder="이름을 입력하세요"
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-sm text-gray-600 mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
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
                    name="message"
                    required
                    rows={6}
                    className="w-full px-0 py-2 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black text-lg resize-none"
                    placeholder="메시지를 입력하세요"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 text-lg transition-colors duration-200 ${
                    isSubmitting
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-black text-white hover:bg-gray-900'
                  }`}
                >
                  {isSubmitting ? '전송 중...' : '보내기'}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-600 text-center">메시지가 성공적으로 전송되었습니다.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-center">메시지 전송에 실패했습니다. 다시 시도해주세요.</p>
                )}
              </form>
            </div>
            <div className="hidden md:block absolute top-[-84px] left-1/2 w-[1px] bg-black" style={{ height: 'calc(100% + 134px)' }} />
          </div>
        </div>
      </main>

      <footer className="border-t border-black bg-white relative z-10">
        <div className="max-w-[1728px] mx-auto px-[30px] py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xs uppercase mb-4">Tel.</h3>
              <p className="text-sm text-gray-600">
                +82 (0)10 5098 0424
              </p>
            </div>
            <div>
              <h3 className="text-xs uppercase mb-4">Contact</h3>
              <p className="text-sm text-gray-600">
                orylo0424@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-xs uppercase mb-4">Copyright</h3>
              <p className="text-sm text-gray-600">
                orylo© 2024.<br />
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 