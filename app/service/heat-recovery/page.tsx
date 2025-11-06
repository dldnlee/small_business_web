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

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.3 }
};

export default function HeatRecovery() {
  const router = useRouter();

  return (
    <section className="text-black max-w-7xl mx-auto px-4 py-8">
      {/* Back Button */}
      <motion.button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors group"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <FaArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">뒤로 가기</span>
      </motion.button>

      {/* Page Title */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-3">폐수열회수기 정부지원사업</h1>
        <p className="text-lg text-gray-600">에너지 비용 절감과 환경 보호를 동시에 실현하는 스마트 솔루션</p>
      </motion.div>
      {/* Key Benefits */}
      <motion.div
        className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-md mb-8"
        {...fadeIn}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <FaCheckCircle className="text-green-600" />
          핵심 혜택
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-600">
            <FaLeaf className="text-green-600 text-3xl mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">에너지 비용 절감</h3>
            <p className="text-gray-700">사우나 업체의 에너지비용 <span className="font-bold text-green-600">최소 45% 이상</span> 절감</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-600">
            <FaMoneyBillWave className="text-blue-600 text-3xl mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">정부 융자 지원</h3>
            <p className="text-gray-700">설치비 <span className="font-bold text-blue-600">90% 융자</span> (서울시 무이자, 경기도 1.5%)</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-600">
            <FaRecycle className="text-orange-600 text-3xl mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">높은 절감률</h3>
            <p className="text-gray-700">폐수열회수를 통해 <span className="font-bold text-orange-600">연간 40% 이상</span> 비용 절감</p>
          </div>
        </div>
      </motion.div>

      {/* 시스템 프로세스 */}
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-md mb-8"
        {...fadeIn}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <IoMdFlame className="text-orange-600" />
          폐수열회수 시스템 작동 원리
        </h2>

        <div className="space-y-4">
          {/* 단계 1 */}
          <div className="flex items-start gap-4 p-5 bg-blue-50 rounded-xl border-l-4 border-blue-600">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0 font-bold">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FaRecycle className="text-blue-600" />
                원수 유입 (Wastewater Inlet)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                고온의 폐수에 포함된 다양한 열량원을 열원으로 활용하기 위해 처리 시스템을 통해 폐수의 열을 회수합니다.
              </p>
            </div>
          </div>

          {/* 단계 2 */}
          <div className="flex items-start gap-4 p-5 bg-orange-50 rounded-xl border-l-4 border-orange-600">
            <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0 font-bold">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FaFire className="text-orange-600" />
                열교환 (Heat Exchange)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                폐수로부터 발생한 잔존열을 효율적으로 활용하는 열교환 시스템으로 구동됩니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                열교환기를 통해 깨끗한 물과 폐수 간의 효율적인 열교환이 이루어지며, 실시간으로 에너지를 회수합니다.
              </p>
            </div>
          </div>

          {/* 단계 3 */}
          <div className="flex items-start gap-4 p-5 bg-green-50 rounded-xl border-l-4 border-green-600">
            <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0 font-bold">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FaTachometerAlt className="text-green-600" />
                에너지 재활용
              </h3>
              <p className="text-gray-700 leading-relaxed">
                회수된 열에너지는 급탕 및 난방 시스템에 재사용되어 전체 에너지 소비를 크게 줄입니다.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 인증 및 신뢰성 */}
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-md mb-8"
        {...fadeIn}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <FaCheckCircle className="text-blue-600" />
          인증 및 신뢰성
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <FaCheckCircle className="text-blue-600 text-3xl" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">제품 인증</h3>
            <p className="text-sm text-gray-600">정부 인증 에너지 절감 제품</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <FaLeaf className="text-green-600 text-3xl" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">환경 인증</h3>
            <p className="text-sm text-gray-600">ISO 14001 환경경영시스템</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <FaIndustry className="text-orange-600 text-3xl" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">시공 실적</h3>
            <p className="text-sm text-gray-600">다수의 사우나 업체 설치 완료</p>
          </div>
        </div>
      </motion.div>

      {/* 주요 적용 대상 */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-2xl shadow-md text-white"
        {...fadeIn}
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FaIndustry />
          주요 적용 대상
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
            <FaCheckCircle className="text-blue-200 text-xl shrink-0" />
            <span>사우나 및 찜질방</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
            <FaCheckCircle className="text-blue-200 text-xl shrink-0" />
            <span>목욕탕 및 스파시설</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
            <FaCheckCircle className="text-blue-200 text-xl shrink-0" />
            <span>공장 및 산업시설</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
            <FaCheckCircle className="text-blue-200 text-xl shrink-0" />
            <span>상업용 세탁시설</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}