'use client';

import Link from 'next/link';
import { services } from '@/app/data/services';

export default function GovernmentProgramsSection() {
  return (
    <section id="programs" className="py-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-0">
          {/* Left Sidebar */}
          <div className="lg:w-2/5 bg-white text-blue-700 flex border flex-col justify-center items-center p-6 sm:p-8 lg:p-10">
            <div className="text-base sm:text-lg leading-relaxed">
              <p className="text-blue-900">
                정부지원사업 참여 - 내자금 10% 정부자금 90%로<br className="hidden sm:block" />
                <span className="font-bold">매달내는 연료비 2,000만원을 절감합니다.</span>
              </p>
            </div>
          </div>

          {/* Right Content - Single Card */}
          <div className="lg:w-3/5 w-full overflow-hidden">
            <div className="relative w-full h-full min-h-[280px] sm:min-h-[320px] overflow-hidden">
              {/* Background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50"></div>

              <div className="relative h-full p-4 sm:p-6 lg:p-8 flex flex-col justify-between text-white">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4">
                    {services[0].title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 lg:mb-6">
                    {services[0].description}
                  </p>

                  {/* Features List */}
                  {services[0].features && services[0].features.length > 0 && (
                    <ul className="space-y-1.5 sm:space-y-2">
                      {services[0].features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-yellow-400 mr-2">✓</span>
                          <span className="text-xs sm:text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <Link
                  href={services[0].route}
                  className="mt-3 sm:mt-4 inline-flex items-center text-xs sm:text-sm font-semibold text-white bg-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-blue-700 transition-colors self-start"
                >
                  <span className="mr-2">⊕</span> 세부내역
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
