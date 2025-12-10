'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  FaCheckCircle,
  FaLeaf,
  FaMoneyBillWave,
  FaRecycle,
  FaIndustry,
  FaFire,
  FaTachometerAlt,
  FaArrowLeft
} from 'react-icons/fa';
import { IoMdFlame } from 'react-icons/io';
import Image from 'next/image';

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.3 }
};

export default function HeatRecovery() {
  const router = useRouter();

  return (
    <section className="text-black max-w-7xl mx-auto px-3 md:px-4 py-4 md:py-8">
      {/* Back Button */}
      <motion.button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 md:mb-8 transition-colors group"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <FaArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">뒤로 가기</span>
      </motion.button>

      {/* Page Title */}
      <motion.div
        className="mb-4 md:mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">폐수열회수기 정부지원사업</h1>
        <p className="text-base md:text-lg text-gray-600">에너지 비용 절감과 환경 보호를 동시에 실현하는 스마트 솔루션</p>
      </motion.div>
      {/* Key Benefits */}
      <motion.div
        className="bg-gradient-to-br from-green-50 to-blue-50 p-4 md:p-8 shadow-md mb-4 md:mb-8"
        {...fadeIn}
      >
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
          <FaCheckCircle className="text-green-600" />
          핵심 혜택
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <div className="bg-white p-4 md:p-6 shadow-sm border-l-4 border-green-600">
            <FaLeaf className="text-green-600 text-2xl md:text-3xl mb-2 md:mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">에너지 비용 절감</h3>
            <p className="text-gray-700 text-sm md:text-base">사우나 업체의 에너지비용 <span className="font-bold text-green-600">최소 45% 이상</span> 절감</p>
          </div>

          <div className="bg-white p-4 md:p-6 shadow-sm border-l-4 border-blue-600">
            <FaMoneyBillWave className="text-blue-600 text-2xl md:text-3xl mb-2 md:mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">정부 융자 지원</h3>
            <p className="text-gray-700 text-sm md:text-base">설치비 <span className="font-bold text-blue-600">90% 융자</span> (서울시 무이자, 경기도 1.5%)</p>
          </div>

          <div className="bg-white p-4 md:p-6 shadow-sm border-l-4 border-orange-600">
            <FaRecycle className="text-orange-600 text-2xl md:text-3xl mb-2 md:mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">높은 절감률</h3>
            <p className="text-gray-700 text-sm md:text-base">폐수열회수를 통해 <span className="font-bold text-orange-600">연간 40% 이상</span> 비용 절감</p>
          </div>
        </div>

        {/* 에너지 절감 그래프 */}
        <div className="mt-4 md:mt-8 bg-white p-4 md:p-6 shadow-sm">
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">에너지 절감 효과</h3>
          <div className="relative w-full aspect-video">
            <Image
              src="/pictures/graph.png"
              alt="에너지 절감 효과 그래프"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>

      {/* 시스템 프로세스 */}
      <motion.div
        className="bg-white p-4 md:p-8 shadow-md mb-4 md:mb-8"
        {...fadeIn}
      >
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
          <IoMdFlame className="text-orange-600" />
          폐수열회수 시스템 작동 원리
        </h2>

        <div className="space-y-3 md:space-y-4">
          {/* 단계 1 */}
          <div className="flex items-start gap-3 md:gap-4 p-3 md:p-5 bg-blue-50 border-l-4 border-blue-600">
            <div className="bg-blue-600 text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shrink-0 font-bold text-sm md:text-base">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 flex items-center gap-2 text-sm md:text-base">
                <FaRecycle className="text-blue-600" />
                원수 유입 (Wastewater Inlet)
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                고온의 폐수에 포함된 다양한 열량원을 열원으로 활용하기 위해 처리 시스템을 통해 폐수의 열을 회수합니다.
              </p>
            </div>
          </div>

          {/* 단계 2 */}
          <div className="flex items-start gap-3 md:gap-4 p-3 md:p-5 bg-orange-50 border-l-4 border-orange-600">
            <div className="bg-orange-600 text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shrink-0 font-bold text-sm md:text-base">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 flex items-center gap-2 text-sm md:text-base">
                <FaFire className="text-orange-600" />
                열교환 (Heat Exchange)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2 text-sm md:text-base">
                폐수로부터 발생한 잔존열을 효율적으로 활용하는 열교환 시스템으로 구동됩니다.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                열교환기를 통해 깨끗한 물과 폐수 간의 효율적인 열교환이 이루어지며, 실시간으로 에너지를 회수합니다.
              </p>
            </div>
          </div>

          {/* 단계 3 */}
          <div className="flex items-start gap-3 md:gap-4 p-3 md:p-5 bg-green-50 border-l-4 border-green-600">
            <div className="bg-green-600 text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shrink-0 font-bold text-sm md:text-base">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 flex items-center gap-2 text-sm md:text-base">
                <FaTachometerAlt className="text-green-600" />
                에너지 재활용
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                회수된 열에너지는 급탕 및 난방 시스템에 재사용되어 전체 에너지 소비를 크게 줄입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 시스템 작동 이미지 */}
        <div className="mt-4 md:mt-8 bg-gray-50 p-4 md:p-6">
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4 text-center">시스템 구성도</h3>
          <div className="relative w-full aspect-video">
            <Image
              src="/pictures/functionality.png"
              alt="폐수열회수 시스템 구성도"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>

      {/* 인증 및 신뢰성 */}
      <motion.div
        className="bg-white p-4 md:p-8 shadow-md mb-4 md:mb-8"
        {...fadeIn}
      >
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
          <FaCheckCircle className="text-blue-600" />
          인증 및 신뢰성
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-4 md:mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 md:p-6 text-center">
            <div className="bg-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-md">
              <FaCheckCircle className="text-blue-600 text-2xl md:text-3xl" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">제품 인증</h3>
            <p className="text-xs md:text-sm text-gray-600">정부 인증 에너지 절감 제품</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 md:p-6 text-center">
            <div className="bg-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-md">
              <FaLeaf className="text-green-600 text-2xl md:text-3xl" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">환경 인증</h3>
            <p className="text-xs md:text-sm text-gray-600">ISO 14001 환경경영시스템</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 md:p-6 text-center">
            <div className="bg-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-md">
              <FaIndustry className="text-orange-600 text-2xl md:text-3xl" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">시공 실적</h3>
            <p className="text-xs md:text-sm text-gray-600">다수의 사우나 업체 설치 완료</p>
          </div>
        </div>

        {/* 인증서 이미지 */}
        <div className="bg-gray-50 p-4 md:p-6">
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4 text-center">공식 인증서</h3>
          <div className="relative w-full aspect-video">
            <Image
              src="/pictures/certificates.png"
              alt="제품 인증서"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>

      {/* 주요 적용 대상 */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 md:p-8 shadow-md text-white mb-4 md:mb-8"
        {...fadeIn}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
          <FaIndustry />
          주요 적용 대상
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm p-3 md:p-4">
            <FaCheckCircle className="text-blue-200 text-lg md:text-xl shrink-0" />
            <span className="text-sm md:text-base">사우나 및 찜질방</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm p-3 md:p-4">
            <FaCheckCircle className="text-blue-200 text-lg md:text-xl shrink-0" />
            <span className="text-sm md:text-base">목욕탕 및 스파시설</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm p-3 md:p-4">
            <FaCheckCircle className="text-blue-200 text-lg md:text-xl shrink-0" />
            <span className="text-sm md:text-base">공장 및 산업시설</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm p-3 md:p-4">
            <FaCheckCircle className="text-blue-200 text-lg md:text-xl shrink-0" />
            <span className="text-sm md:text-base">상업용 세탁시설</span>
          </div>
        </div>
      </motion.div>

      {/* 설치 사례 */}
      <motion.div
        className="bg-white p-4 md:p-8 shadow-md mb-4 md:mb-8"
        {...fadeIn}
      >
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
          <FaCheckCircle className="text-green-600" />
          설치 사례
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-gray-50 p-3 md:p-4">
            <div className="relative w-full aspect-video mb-2 md:mb-3">
              <Image
                src="/pictures/example_one.png"
                alt="설치 사례 1"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-gray-900 text-center text-sm md:text-base">설치 사례 1</h3>
          </div>

          <div className="bg-gray-50 p-3 md:p-4">
            <div className="relative w-full aspect-video mb-2 md:mb-3">
              <Image
                src="/pictures/example_two.png"
                alt="설치 사례 2"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-gray-900 text-center text-sm md:text-base">설치 사례 2</h3>
          </div>
        </div>
      </motion.div>
    </section>
  );
}