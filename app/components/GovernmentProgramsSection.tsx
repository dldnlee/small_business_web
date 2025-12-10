'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';
import { services } from '@/app/data/services';

export default function GovernmentProgramsSection() {
  return (
    <section id="programs" className="py-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-0">
          {/* Left Sidebar */}
          <div className="lg:w-2/5 bg-blue-700 text-white p-4 sm:p-6 lg:p-8 flex flex-col justify-between items-center">
            <div className="w-full">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center lg:text-left">정부정책자금</h2>
            </div>

            {/* Event Section */}
            <div className="w-full mb-4 sm:mb-6">
              <div className="bg-white text-blue-700 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <div className="shrink-0 mt-1">
                    <div className="bg-blue-700 text-white text-xs font-bold px-2 py-1 rounded">
                      이벤트
                    </div>
                  </div>
                  <div className="text-sm leading-relaxed">
                    <p className="text-blue-900">
                      정부지원사업 참여- 내자금 10% 정부자금 90%로<br className="hidden sm:block" />
                      <span className="font-bold">매달내는 연료비 2,000만원을 절감합니다.</span>
                    </p>
                  </div>
                </div>
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
