'use client';

import { motion } from 'framer-motion';
import {
  FaCheckCircle,
  FaLeaf,
  FaMoneyBillWave,
  FaArrowRight,
  FaPhone,
  FaCertificate,
  FaRecycle,
  FaIndustry,
  FaFire,
  FaTachometerAlt,
  FaCog,
  FaTools
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { IoMdFlame } from 'react-icons/io';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

export default function ProgramDetailsSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-gray-100 text-black">
      <div className="w-full">
        {/* 정부지원사업 Header */}
        <motion.div
          className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white overflow-hidden relative"
          {...fadeInUp}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-4"
          >
            {/* <HiSparkles className="text-6xl text-yellow-300" /> */}
          </motion.div>

          <div className='text-center mb-8'>
            <h2 className="text-xl mb-2">
              정부지원사업 소개
            </h2>
            <p className='text-4xl font-bold'>JSENERGY 패수열회수기</p>
          </div>

          <motion.div
            className="space-y-5 text-lg relative z-10"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="flex items-start gap-3 bg-white/10 p-4 backdrop-blur-sm">
              <FaLeaf className="text-green-300 text-2xl mt-1 flex-shrink-0" />
              <p>사우나 업체의 에너지비용<span className="font-bold text-yellow-300">최소 45% 이상</span> 절감</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-start gap-3 bg-white/10 p-4 backdrop-blur-sm">
              <FaMoneyBillWave className="text-green-300 text-2xl mt-1 flex-shrink-0" />
              <p>에너지절감기 설치비<span className="font-bold">90% 융자</span> (서울시 무이자, 경기도 1.5%)</p>
            </motion.div>

            {/* <motion.div variants={fadeInUp} className="flex items-start gap-3 bg-yellow-400 text-blue-900 p-5">
              <FaArrowRight className="text-2xl mt-1 flex-shrink-0 animate-pulse" />
              <p className="font-bold text-xl">무료견적기획을 놓치지 마세요</p>
            </motion.div> */}

            <motion.div variants={fadeInUp} className="flex items-start gap-3 bg-white/10 p-4 backdrop-blur-sm">
              <FaRecycle className="text-green-300 text-2xl mt-1 flex-shrink-0" />
              <p>폐수열회수기를통해 <span className="font-bold text-yellow-300">연분비절감률 40%이상</span></p>
            </motion.div>
{/* 
            <motion.div variants={fadeInUp} className="flex items-start gap-3 bg-white/20 p-5 backdrop-blur-sm border-2 border-yellow-300 mt-6">
              <FaCheckCircle className="text-yellow-300 text-2xl mt-1 flex-shrink-0" />
              <p className="font-bold text-lg">정부지원 응자금신청 - 대신해드립니다.</p>
            </motion.div> */}
{/* 
            <motion.div variants={fadeInUp} className="flex items-start gap-3 bg-white/10 p-5 backdrop-blur-sm mt-4">
              <FaPhone className="text-yellow-300 text-2xl mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">신규생애너지전문주주 제이에스에너지</p>
                <p className="text-yellow-300 font-bold text-xl mt-2">성무이사 이동후 010-6894-0988</p>
              </div>
            </motion.div> */}
          </motion.div>
        </motion.div>

        {/* 확석 소개 (인증서) */}
        <motion.div
          className="bg-white p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaCertificate className="text-blue-600 text-3xl" />
            <h3 className="text-2xl font-bold">1. 확석 소개 (인증)</h3>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { title: '제품 인증서', icon: FaCertificate },
              { title: 'ISO 14001 인증서', icon: FaCertificate },
              { title: '추가 인증서', icon: FaCertificate }
            ].map((cert, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 h-64 flex flex-col items-center justify-center transition-all duration-300 border-2 border-blue-200"
                whileHover={{ scale: 1.05 }}
              >
                <cert.icon className="text-blue-600 text-6xl mb-4" />
                <p className="text-gray-700 text-center font-semibold">[{cert.title}]</p>
              </motion.div>
            ))}
          </motion.div>

          {/* 프로세스 다이어그램 */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 h-96 flex flex-col items-center justify-center border-2 border-blue-200">
              <FaCog className="text-blue-600 text-8xl mb-4 animate-spin" style={{ animationDuration: '8s' }} />
              <p className="text-gray-700 text-center font-semibold text-lg">[폐수열 회수 시스템 프로세스 다이어그램]</p>
            </div>
          </motion.div>
        </motion.div>

        {/* 폐수열수 시스템 공정 설명 */}
        <motion.div
          className="bg-white p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <IoMdFlame className="text-orange-600 text-3xl" />
            <h3 className="text-2xl font-bold">폐수열수 시스템 공정 설명</h3>
          </div>

          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 border-l-4 border-blue-600"
            >
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-lg shadow-lg">1</span>
                <FaRecycle className="text-blue-600 text-2xl mr-2" />
                원수 유입 (Wastewater Inlet)
              </h4>
              <ul className="list-none space-y-2 ml-14 text-gray-700">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                  <span>유리한 폐수에는 다양한 열량원이이 이용하여 온도상 높은곳. 유출수를 열원으로 활용할 수 있도록 처리 플로트를 통해 폐수 열을 회수합니다.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-r from-orange-50 to-red-50 p-6 border-l-4 border-orange-600"
            >
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                <span className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-lg shadow-lg">2</span>
                <FaFire className="text-orange-600 text-2xl mr-2" />
                열교환 (Heat Exchange)
              </h4>
              <ul className="list-none space-y-3 ml-14 text-gray-700">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                  <span>폐로부터 발생한 잔존열 펄프게 활고하는 동작에 도달하지로 활고하는 시스템으로 구동됩니다.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                  <span>열교환기 동일성을 통로 도면체제로 늘어남은 구록 제외로 시시간 대기 상호 열교환 우석으로 동작합니다.</span>
                </li>
              </ul>
            </motion.div>

            {/* 열교환 데이터 테이블 */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 border-2 border-purple-200"
            >
              <div className="bg-white h-64 flex flex-col items-center justify-center">
                <FaTachometerAlt className="text-purple-600 text-7xl mb-4" />
                <p className="text-gray-700 text-center font-semibold text-lg">[열교환 성능 데이터 테이블 이미지]</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 사업 소개 (산업시설) */}
        <motion.div
          className="bg-white p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaIndustry className="text-gray-700 text-3xl" />
            <h3 className="text-2xl font-bold">1. 사업 소개 (산업시설)</h3>
          </div>

          {/* 산업시설 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <FaIndustry className="text-blue-600 text-2xl" />
              <h4 className="text-xl font-semibold">산업시설</h4>
            </div>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <motion.div
                  key={item}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-gray-100 to-gray-200 p-4 h-40 flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-blue-200 to-blue-300 w-full h-24 mb-2 flex items-center justify-center">
                    <FaIndustry className="text-blue-700 text-4xl" />
                  </div>
                  <p className="text-sm text-gray-700 text-center font-semibold">[시설 {item}]</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* 생산시설 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaTools className="text-green-600 text-2xl" />
              <h4 className="text-xl font-semibold">생산시설</h4>
            </div>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <motion.div
                  key={item}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-green-100 to-green-200 p-4 h-40 flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-green-200 to-green-300 w-full h-24 mb-2 flex items-center justify-center">
                    <FaCog className="text-green-700 text-4xl" />
                  </div>
                  <p className="text-sm text-gray-700 text-center font-semibold">[생산시설 {item}]</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* 연락처 */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white p-10 text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-white opacity-5 rounded-full -mr-36 -mt-36"></div>
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-white opacity-5 rounded-full -ml-28 -mb-28"></div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10"
          >
            <FaPhone className="text-6xl mx-auto mb-6 text-yellow-300 animate-pulse" />
            <p className="text-2xl font-bold mb-6">이제 당신이 혜택을 보실차례입니다.</p>

            <motion.div
              className="bg-white/20 backdrop-blur-sm p-6 inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg mb-2">무료견적 문의</p>
              <div className="flex items-center justify-center gap-3">
                <FaPhone className="text-3xl text-yellow-300" />
                <div className="text-left">
                  <p className="text-sm">성무이사 이종두</p>
                  <p className="text-3xl font-bold text-yellow-300">010-6894-0988</p>
                </div>
              </div>
            </motion.div>

            <motion.p
              className="mt-6 text-lg"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              지금 바로 연락주세요!
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
