'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaUser, FaEnvelope } from 'react-icons/fa';

export default function ContactFormSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('상담 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
  };

  return (
    <section id="contact" className="bg-white text-black overflow-hidden pb-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-blue-600 bg-clip-text text-transparent">
            빠른 상담 신청 서비스
          </h2>
          <p className="text-gray-600 text-lg">
            전문 상담사가 친절하게 안내해 드립니다
          </p>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/90 rounded-3xl shadow-2xl backdrop-blur-sm border border-gray-100 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Left Side - Phone Information */}
            <div className="bg-blue-600 p-8 md:p-10 text-white flex flex-col justify-center items-center lg:items-start">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center lg:text-left w-full"
              >
                <h3 className="text-3xl font-bold mb-4">무료견적 문의</h3>
                <p className="text-blue-100 mb-6 text-sm">
                  전문 상담사가 빠르게<br />
                  답변해 드립니다
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
                  <p className="text-sm text-blue-100 mb-2">담당자</p>
                  <p className="text-lg font-semibold mb-4">성무이사 이종두</p>
                  <div className="flex items-center justify-center lg:justify-start gap-3 bg-white/20 rounded-xl p-4">
                    <FaPhone className="text-3xl text-yellow-300" />
                    <div>
                      <p className="text-sm text-blue-100">연락처</p>
                      <p className="text-2xl font-bold">010-6894-0988</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-blue-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                    <span>평일 09:00 - 18:00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                    <span>주말 및 공휴일 휴무</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                    <span>24시간 온라인 상담 접수</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:col-span-2 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="flex items-center gap-2 text-sm font-bold mb-3 text-gray-700">
                  <FaUser className="text-blue-500" />
                  이름*
                </label>
                <input
                  type="text"
                  required
                  placeholder="홍길동"
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-400"
                />
              </motion.div>

              {/* Phone Input */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="flex items-center gap-2 text-sm font-bold mb-3 text-gray-700">
                  <FaPhone className="text-green-500" />
                  연락처*
                </label>
                <input
                  type="tel"
                  required
                  placeholder="010-1234-5678"
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-400"
                />
              </motion.div>
            </div>

            {/* Email Input (Optional) */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <label className="block text-sm font-bold mb-3 text-gray-700 flex items-center gap-2">
                <FaEnvelope className="text-purple-500" />
                이메일 (선택)
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-400"
              />
            </motion.div>

            {/* Message Input */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <label className="text-sm font-bold mb-3 text-gray-700 inline-block">
                문의 내용 (선택)
              </label>
              <textarea
                rows={4}
                placeholder="상담받고 싶은 내용을 자유롭게 작성해주세요"
                className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-400 resize-none"
              />
            </motion.div>

            {/* Privacy Agreement */}
            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <input
                type="checkbox"
                id="agreement2"
                required
                className="w-5 h-5 mt-0.5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="agreement2" className="text-sm text-gray-700 cursor-pointer">
                <span className="font-semibold text-blue-600">개인정보 수집 및 이용</span>에 동의합니다. (필수)
                <br />
                <span className="text-xs text-gray-500">입력하신 정보는 상담 목적으로만 사용되며, 안전하게 보호됩니다.</span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-blue-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
              >
                <span className="flex items-center gap-2 justify-center">
                  <FaPhone className="text-xl" />
                  빠른 전화상담 요청
                </span>
              </motion.button>
            </div>
          </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
