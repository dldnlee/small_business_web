'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  bgImage?: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: '중기기업지원단',
    subtitle: '성공과 희망이 동반자',
    description1: '중소기업지원센터는 중소 신생법인 힘에 대한민국의',
    description2: '중소기업과 소상공인 모두를 응원합니다!',
    bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: '더욱 빠른 성장',
    subtitle: '성공과 희망이 동반자',
    description1: '중소기업지원센터는 중소 신생법인 힘에 대한민국의',
    description2: '중소기업과 소상공인 모두를 응원합니다!',
    bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
  },
];

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
    <section className="pt-18 pb-0 bg-gray-50 w-full">
      <div className="">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Swiper Content */}
          <div className="bg-white w-full lg:flex-1 overflow-hidden">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              loop={true}
              className="w-full h-full"
            >
              {heroSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="relative w-full h-full min-h-[400px]">
                    {/* Background Image */}
                    {slide.bgImage && (
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${slide.bgImage})` }}
                      />
                    )}
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-white/80"></div>

                    {/* Content */}
                    <div className="relative space-y-6 p-20">
                      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                        {slide.title}
                      </h1>
                      <div className="space-y-2">
                        <p className="text-lg text-gray-800">
                          중소기업의 <span className="text-blue-600 font-semibold">{slide.subtitle}</span>.
                        </p>
                        <p className="text-base text-gray-700">
                          {slide.description1}
                        </p>
                        <p className="text-base text-gray-700">
                          {slide.description2}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-blue-600 px-6 py-8 text-white max-w-md">
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-bold mb-5 text-center">빠른 상담신청</h3>

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
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] text-blue-600 font-medium">고객센터</p>
                      <p className="text-lg font-bold text-blue-600 leading-tight">02-6933-8720</p>
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
                      <p className="text-lg font-bold text-blue-600 leading-tight">M24hrc</p>
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