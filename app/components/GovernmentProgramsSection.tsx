'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface FeatureIcon {
  id: number;
  title: string;
  description: string;
  iconPath: string;
}

interface ProgramCard {
  id: number;
  title: string;
  highlight: string;
  description: string;
  bgColor: string;
  bgImage?: string;
}

const featureIcons: FeatureIcon[] = [
  {
    id: 1,
    title: '소상공인',
    description: '소상공인 맞춤 지원',
    iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    id: 2,
    title: '운전자금',
    description: '기업 운영 자금 지원',
    iconPath: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    id: 3,
    title: '서비스업',
    description: '서비스업 특화 지원',
    iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
  },
  {
    id: 4,
    title: '법인설립',
    description: '법인 설립 지원',
    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
];

const programCards: ProgramCard[] = [
  {
    id: 1,
    title: '소기업',
    highlight: '운전자금',
    description: '기업의 원활하게 구매, 생산 판매 행을 수 기업의 운전자금을 지원합니다. 운전자금은 선강력히 활동을 유지하기 위해 필요한 자금입니다.',
    bgColor: 'bg-gray-600',
    bgImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: '중기업',
    highlight: '문전자금',
    description: '기업의 원활하게 구매, 생산 판매 행을 수 기업의 운전자금을 지원합니다. 운전자금은 선강력히 활동을 유지하기 위해 필요한 자금입니다.',
    bgColor: 'bg-gray-700',
    bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
  },
];

export default function GovernmentProgramsSection() {
  return (
    <section id="programs" className="py-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 bg-blue-700 text-white p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-8">정부정책자금</h2>

              {/* Feature Icons - Horizontal Row Format */}
              <div className="flex flex-wrap gap-4 mb-8">
                {featureIcons.map((feature) => (
                  <div key={feature.id} className="flex flex-col items-center text-center flex-1 min-w-[120px]">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shrink-0 mb-3">
                      <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.iconPath} />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-base font-bold mb-1">{feature.title}</p>
                      <p className="text-xs text-blue-100 leading-tight">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-white text-blue-700 font-semibold py-3 px-4 rounded hover:bg-gray-100 transition-colors">
                무료 상담 신청하기
              </button>
              {/* <button className="w-full bg-transparent border-2 border-white text-white font-semibold py-3 px-4 rounded hover:bg-white/10 transition-colors">
                공식블로그 및 고객센터
              </button> */}
            </div>
          </div>

          {/* Right Content - Swiper Cards */}
          <div className="lg:col-span-2 w-full overflow-hidden">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              loop={true}
              className="w-full"
              style={{ height: '100%', minHeight: '400px' }}
            >
              {programCards.map((card) => (
                <SwiperSlide key={card.id}>
                  <div className="relative w-full h-full min-h-[400px] overflow-hidden group">
                    {/* Background Image */}
                    {card.bgImage ? (
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${card.bgImage})` }}
                      />
                    ) : (
                      <div className={`absolute inset-0 ${card.bgColor} flex items-center justify-center`}>
                        <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
                    <div className="relative h-full p-6 flex flex-col justify-between text-white">
                      <div>
                        <h3 className="text-xl font-bold mb-3">
                          {card.title} <span className="text-yellow-400">{card.highlight}</span>
                        </h3>
                        <p className="text-sm leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                      <button className="mt-4 inline-flex items-center text-sm font-semibold text-white bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition-colors self-start">
                        <span className="mr-1">⊕</span> 세부내역
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
