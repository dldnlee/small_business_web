'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';
import { services } from '@/app/data/services';

interface FeatureIcon {
  id: number;
  title: string;
  description: string;
  iconPath: string;
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


export default function GovernmentProgramsSection() {
  return (
    <section id="programs" className="py-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-0">
          {/* Left Sidebar */}
          <div className="lg:w-2/5 bg-blue-700 text-white p-4 sm:p-6 lg:p-8 flex flex-col justify-between items-center">
            <div className="w-full">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center lg:text-left">정부정책자금</h2>

              {/* Feature Icons - Responsive Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
                {featureIcons.map((feature) => (
                  <div key={feature.id} className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shrink-0 mb-2 sm:mb-3">
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.iconPath} />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm sm:text-base font-bold mb-0.5 sm:mb-1">{feature.title}</p>
                      <p className="text-xs text-blue-100 leading-tight hidden sm:block">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Buttons */}
            <div className="w-full flex mt-4 lg:mt-0">
              <Link href="/service" className="w-full text-center bg-white text-blue-700 font-semibold py-2.5 sm:py-3 px-4 rounded hover:bg-gray-100 transition-colors text-sm sm:text-base">
                전체 서비스 보기
              </Link>
            </div>
          </div>

          {/* Right Content - Swiper Cards */}
          <div className="lg:w-3/5 w-full overflow-hidden">
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
              style={{ height: '100%', minHeight: '350px' }}
            >
              {services.map((service) => (
                <SwiperSlide key={service.id}>
                  <div className="relative w-full h-full min-h-[350px] sm:min-h-[400px] overflow-hidden group">
                    {/* Background with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50"></div>

                    <div className="relative h-full p-4 sm:p-6 lg:p-8 flex flex-col justify-between text-white">
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4">
                          {service.title}
                        </h3>
                        <p className="text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 lg:mb-6">
                          {service.description}
                        </p>

                        {/* Features List */}
                        {service.features && service.features.length > 0 && (
                          <ul className="space-y-1.5 sm:space-y-2">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-yellow-400 mr-2">✓</span>
                                <span className="text-xs sm:text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <Link
                        href={service.route}
                        className="mt-3 sm:mt-4 inline-flex items-center text-xs sm:text-sm font-semibold text-white bg-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-blue-700 transition-colors self-start"
                      >
                        <span className="mr-2">⊕</span> 세부내역
                      </Link>
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
