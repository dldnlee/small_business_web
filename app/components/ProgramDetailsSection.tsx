'use client';

import { motion } from 'framer-motion';
import {
  FaCheckCircle,
  FaLeaf,
  FaMoneyBillWave,
  FaCertificate,
  FaRecycle,
  FaIndustry,
  FaFire,
  FaTachometerAlt,
  FaCog,
  FaTools
} from 'react-icons/fa';
import { IoMdFlame } from 'react-icons/io';

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.3 }
};

export default function ProgramDetailsSection() {
  return (
    <section className=" text-black">
      <div className="w-full max-w-7xl mx-auto">
        {/* 정부지원사업 Header */}
        <motion.div
          className=" p-8 text-black bg-white shadow-lg m-4 rounded-4xl"
          {...fadeIn}
        >
          <div className='mb-6'>
            <h2 className="text-lg mb-2 text-gray-400">
              정부지원사업 소개
            </h2>
            <p className='text-3xl font-bold'>JSENERGY 폐수열회수기</p>
          </div>

          <div className="space-y-4 text-base">
            <div className="flex items-start gap-3 bg-white/10 p-4">
              <FaLeaf className="text-green-600 text-xl mt-0.5 flex-shrink-0" />
              <p>사우나 업체의 에너지비용 <span className="font-semibold text-green-600">최소 45% 이상</span> 절감</p>
            </div>

            <div className="flex items-start gap-3 bg-white/10 p-4">
              <FaMoneyBillWave className="text-green-600 text-xl mt-0.5 flex-shrink-0" />
              <p>에너지절감기 설치비 <span className="font-semibold text-green-600">90% 융자</span> (서울시 무이자, 경기도 1.5%)</p>
            </div>

            <div className="flex items-start gap-3 bg-white/10 p-4">
              <FaRecycle className="text-green-600 text-xl mt-0.5 flex-shrink-0" />
              <p>폐수열회수기를 통해 <span className="font-semibold text-green-600">연간비용절감률 40% 이상</span></p>
            </div>
          </div>
        </motion.div>

        {/* 회사 소개 (인증서) */}
        <motion.div
          className="bg-white p-8"
          {...fadeIn}
        >
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200">
            <FaCertificate className="text-blue-700 text-2xl" />
            <h3 className="text-2xl font-bold text-gray-900">회사 소개 및 인증</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '제품 인증서', icon: FaCertificate },
              { title: 'ISO 14001 인증서', icon: FaCertificate },
              { title: '추가 인증서', icon: FaCertificate }
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 border-2 border-gray-200 p-6 h-56 flex flex-col items-center justify-center"
              >
                <cert.icon className="text-blue-700 text-5xl mb-3" />
                <p className="text-gray-700 text-center font-medium">{cert.title}</p>
              </div>
            ))}
          </div>

          {/* 프로세스 다이어그램 */}
          <div className="bg-gray-50 border-2 border-gray-200 p-8 flex flex-col items-center justify-center min-h-[300px]">
            <FaCog className="text-blue-700 text-7xl mb-4" />
            <p className="text-gray-700 text-center font-medium text-base">폐수열 회수 시스템 프로세스 다이어그램</p>
            <p className="text-gray-500 text-sm mt-2">시스템 작동 원리 및 흐름도</p>
          </div>
        </motion.div>

        {/* 폐수열회수 시스템 공정 설명 */}
        <motion.div
          className="bg-white p-8"
          {...fadeIn}
        >
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200">
            <IoMdFlame className="text-orange-600 text-2xl" />
            <h3 className="text-2xl font-bold text-gray-900">폐수열회수 시스템 공정 설명</h3>
          </div>

          <div className="space-y-6">
            {/* 단계 1 */}
            <div className="border-l-4 border-blue-600 bg-blue-50 p-6">
              <h4 className="text-lg font-semibold mb-3 flex items-center text-gray-900">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
                <FaRecycle className="text-blue-600 text-xl mr-2" />
                원수 유입 (Wastewater Inlet)
              </h4>
              <div className="ml-11 text-gray-700 leading-relaxed">
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 mt-1 shrink-0 text-sm" />
                  <span>고온의 폐수에는 다양한 열량원이 포함되어 있으며, 이를 열원으로 활용할 수 있도록 처리 시스템을 통해 폐수의 열을 회수합니다.</span>
                </div>
              </div>
            </div>

            {/* 단계 2 */}
            <div className="border-l-4 border-orange-600 bg-orange-50 p-6">
              <h4 className="text-lg font-semibold mb-3 flex items-center text-gray-900">
                <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
                <FaFire className="text-orange-600 text-xl mr-2" />
                열교환 (Heat Exchange)
              </h4>
              <div className="ml-11 space-y-3 text-gray-700 leading-relaxed">
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-orange-600 mt-1 shrink-0 text-sm" />
                  <span>폐수로부터 발생한 잔존열을 효율적으로 활용하는 열교환 시스템으로 구동됩니다.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-orange-600 mt-1 shrink-0 text-sm" />
                  <span>열교환기를 통해 깨끗한 물과 폐수 간의 효율적인 열교환이 이루어지며, 실시간으로 에너지를 회수합니다.</span>
                </div>
              </div>
            </div>

            {/* 열교환 데이터 */}
            <div className="border-2 border-gray-300 bg-gray-50 p-8">
              <div className="flex flex-col items-center justify-center min-h-[200px]">
                <FaTachometerAlt className="text-gray-600 text-6xl mb-4" />
                <p className="text-gray-700 text-center font-medium text-base">열교환 성능 데이터</p>
                <p className="text-gray-500 text-sm mt-2">효율성 지표 및 성능 분석표</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 사업 시설 소개 */}
        <motion.div
          className="bg-white p-8 shadow-sm border border-gray-200"
          {...fadeIn}
        >
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200">
            <FaIndustry className="text-gray-700 text-2xl" />
            <h3 className="text-2xl font-bold text-gray-900">사업 시설 소개</h3>
          </div>

          {/* 산업시설 */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <FaIndustry className="text-blue-700 text-xl" />
              <h4 className="text-xl font-semibold text-gray-900">산업시설</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="bg-gray-50 border border-gray-200 p-4 h-36 flex flex-col items-center justify-center"
                >
                  <div className="bg-blue-100 w-full h-20 mb-2 flex items-center justify-center">
                    <FaIndustry className="text-blue-700 text-3xl" />
                  </div>
                  <p className="text-sm text-gray-700 text-center font-medium">시설 {item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 생산시설 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaTools className="text-green-700 text-xl" />
              <h4 className="text-xl font-semibold text-gray-900">생산시설</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="bg-gray-50 border border-gray-200 p-4 h-36 flex flex-col items-center justify-center"
                >
                  <div className="bg-green-100 w-full h-20 mb-2 flex items-center justify-center">
                    <FaCog className="text-green-700 text-3xl" />
                  </div>
                  <p className="text-sm text-gray-700 text-center font-medium">생산시설 {item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
