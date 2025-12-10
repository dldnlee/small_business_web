'use client';

import { useState } from 'react';
import { FaPhone, FaUser, FaEnvelope } from 'react-icons/fa';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email || undefined,
          message: formData.message || undefined,
          formType: 'contact',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage(data.message);
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
        });
      } else {
        setSubmitMessage(data.message || '오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitMessage('전송 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <section id="contact" className="bg-white text-black overflow-hidden pb-8 sm:pb-12 pt-6 sm:pt-8">
      <div className="w-full mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-4 sm:mb-6 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-blue-600 bg-clip-text text-transparent">
            빠른 상담 신청 서비스
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl">
            전문 상담사가 친절하게 안내해 드립니다
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white/90 shadow-2xl backdrop-blur-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Left Side - Phone Information */}
            <div className="bg-blue-600 p-4 sm:p-6 md:p-8 text-white flex flex-col justify-center items-center lg:items-start">
              <div className="text-center lg:text-left w-full">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">무료견적 문의</h3>
                <p className="text-blue-100 mb-4 sm:mb-5 text-base sm:text-lg">
                  전문 상담사가 빠르게<br />
                  답변해 드립니다
                </p>

                <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-5 mb-4 sm:mb-5 border border-white/20">
                  <p className="text-sm sm:text-base text-blue-100 mb-1 sm:mb-2">담당자</p>
                  <p className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">상무이사 이종두</p>
                  <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 bg-white/20 p-3 sm:p-4">
                    <FaPhone className="text-3xl sm:text-4xl text-yellow-300" />
                    <div>
                      <p className="text-sm sm:text-base text-blue-100">연락처</p>
                      <p className="text-2xl sm:text-3xl font-bold">010-6894-0988</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-blue-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-300"></div>
                    <span>평일 09:00 - 18:00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-300"></div>
                    <span>주말 및 공휴일 휴무</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-300"></div>
                    <span>24시간 온라인 상담 접수</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:col-span-2 p-4 sm:p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {/* Name Input */}
              <div>
                <label className="flex items-center gap-2 text-sm sm:text-base font-bold mb-2 text-gray-700">
                  <FaUser className="text-blue-500 text-base sm:text-lg" />
                  이름*
                </label>
                <input
                  type="text"
                  required
                  placeholder="홍길동"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-400 text-sm sm:text-base"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label className="flex items-center gap-2 text-sm sm:text-base font-bold mb-2 text-gray-700">
                  <FaPhone className="text-green-500 text-base sm:text-lg" />
                  연락처*
                </label>
                <input
                  type="tel"
                  required
                  placeholder="010-1234-5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-400 text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Email Input (Optional) */}
            <div>
              <label className="flex items-center gap-2 text-sm sm:text-base font-bold mb-2 text-gray-700">
                <FaEnvelope className="text-purple-500 text-base sm:text-lg" />
                이메일 (선택)
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-400 text-sm sm:text-base"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="text-sm sm:text-base font-bold mb-2 text-gray-700 inline-block">
                문의 내용 (선택)
              </label>
              <textarea
                rows={4}
                placeholder="상담받고 싶은 내용을 자유롭게 작성해주세요"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-400 resize-none text-sm sm:text-base"
              />
            </div>

            {/* Privacy Agreement */}
            <div className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-blue-50 border border-blue-100">
              <input
                type="checkbox"
                id="agreement2"
                required
                className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="agreement2" className="text-sm sm:text-base text-gray-700 cursor-pointer">
                <span className="font-semibold text-blue-600">개인정보 수집 및 이용</span>에 동의합니다. (필수)
                <br />
                <span className="text-xs sm:text-sm text-gray-500">입력하신 정보는 상담 목적으로만 사용되며, 안전하게 보호됩니다.</span>
              </label>
            </div>

            {/* Submit Message */}
            {submitMessage && (
              <div className={`text-sm sm:text-base p-3 sm:p-4 ${submitMessage.includes('오류') || submitMessage.includes('실패') ? 'bg-red-100 text-red-700 border border-red-200' : 'bg-green-100 text-green-700 border border-green-200'}`}>
                {submitMessage}
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-blue-600 text-white font-bold text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="flex items-center gap-2 justify-center">
                  <FaPhone className="text-xl sm:text-2xl" />
                  {isSubmitting ? '전송 중...' : '빠른 전화상담 요청'}
                </span>
              </button>
            </div>
          </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
