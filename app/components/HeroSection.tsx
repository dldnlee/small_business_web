'use client';

import { useState } from 'react';
import { CiMail } from 'react-icons/ci';

const heroContent = {
  title: '제이에스에너지',
  subtitle: '성공과 희망이 동반자',
  description1: '사우나업체의 에너지비용을 최소40%이상 절감해드립니다.',
  description2: '에너지절감기 설치비용90% 융자(서울시 무이자 , 경기도 1.5% )',
  bgImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop',
};

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    agreement: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('상담 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
  };

  return (
    <section className="pb-0 bg-gray-50 w-full">
      <div className="">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Hero Content */}
          <div className="bg-white w-full lg:flex-1 overflow-hidden">
            <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px]">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroContent.bgImage})` }}
              />
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/70"></div>

              {/* Content */}
              <div className="relative space-y-4 sm:space-y-6 p-6 sm:p-10 lg:p-20">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {heroContent.title}
                </h1>
                <div className="space-y-2">
                  <p className="text-base sm:text-lg lg:text-xl text-white">
                    사우나의 <span className="text-blue-400 font-semibold">{heroContent.subtitle}</span>.
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl text-white">
                    {heroContent.description1}
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl text-white">
                    {heroContent.description2}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-blue-600 px-4 sm:px-6 py-6 sm:py-8 text-white w-full lg:max-w-md">
            <div className="flex flex-col h-full">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5 text-center">빠른 상담신청</h3>

              <form onSubmit={handleSubmit} className="space-y-3 grow">
                <div className="flex items-center gap-3">
                  <label className="text-xs font-semibold w-12 shrink-0">이름</label>
                  <input
                    type="text"
                    required
                    className="flex-1 px-3 py-2 bg-white rounded text-gray-900 text-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="flex items-center gap-3">
                  <label className="text-xs font-semibold w-12 shrink-0">연락처</label>
                  <div className="flex gap-1 flex-1">
                    <select className="px-2 py-2 rounded text-gray-900 text-sm focus:ring-2 focus:ring-blue-300 focus:outline-none bg-white">
                      <option>010</option>
                      <option>02</option>
                    </select>
                    <span className="text-white self-center">-</span>
                    <input
                      type="tel"
                      required
                      maxLength={4}
                      className="flex-1 px-2 bg-white py-2 rounded text-gray-900 text-sm focus:ring-2 focus:ring-blue-300 focus:outline-none text-center"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="agreement"
                    required
                    className="w-3.5 h-3.5 mt-0.5 text-blue-600 rounded focus:ring-blue-500 shrink-0"
                    checked={formData.agreement}
                    onChange={(e) => setFormData({ ...formData, agreement: e.target.checked })}
                  />
                  <label htmlFor="agreement" className="text-xs leading-tight">
                    개인정보취급방침 동의(필수) <span className="underline cursor-pointer">내용확인</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white font-bold py-2.5 px-6 rounded transition-colors text-sm"
                >
                  상담 신청하기
                </button>
              </form>

              {/* Contact Information */}
              <div className="mt-6 space-y-3">
                {/* Phone */}
                <div className="bg-white rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-600 rounded-full p-2 shrink-0">
                      <CiMail className="size-5"/>
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] text-blue-600 font-medium">이메일</p>
                      <p className="text-md font-bold text-blue-600 leading-tight">josephlee153@gmail.com</p>
                      <p className="text-[10px] text-gray-600">평일시간 09시~18시</p>
                    </div>
                  </div>
                </div>

                {/* KakaoTalk */}
                <div className="bg-white rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-600 rounded-full p-2 shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] text-blue-600 font-medium">빠른 상담</p>
                      <p className="text-md font-bold text-blue-600 leading-tight">jdlee0988</p>
                      <p className="text-[10px] text-gray-600">카카오톡으로 문의 상담</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}