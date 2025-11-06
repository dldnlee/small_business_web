'use client';

import { useState } from 'react';

export default function BusinessTypeSection() {
  const [activeTab, setActiveTab] = useState<'corporate' | 'certification' | 'iso'>('certification');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            중소기업지원센터 인증 서비스 안내
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-3 mb-8 border-t-2 border-gray-200">
          <button
            onClick={() => setActiveTab('corporate')}
            className={`py-4 text-center font-semibold transition-colors ${
              activeTab === 'corporate'
                ? 'text-white bg-gray-800 border-b-2 border-gray-800'
                : 'text-gray-600 bg-white hover:bg-gray-50 border-b-2 border-gray-300'
            }`}
          >
            법인자원
          </button>
          <button
            onClick={() => setActiveTab('certification')}
            className={`py-4 text-center font-semibold transition-colors ${
              activeTab === 'certification'
                ? 'text-white bg-gray-800 border-b-2 border-gray-800'
                : 'text-gray-600 bg-white hover:bg-gray-50 border-b-2 border-gray-300'
            }`}
          >
            기업인증
          </button>
          <button
            onClick={() => setActiveTab('iso')}
            className={`py-4 text-center font-semibold transition-colors ${
              activeTab === 'iso'
                ? 'text-white bg-gray-800 border-b-2 border-gray-800'
                : 'text-gray-600 bg-white hover:bg-gray-50 border-b-2 border-gray-300'
            }`}
          >
            ISO(스마트인증)
          </button>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-blue-800 text-sm">
            다양한 정부정책기금을 의사결정자을 통해 기업하의 재무세표를 계산하실 수 있습니다.
          </p>
        </div>

        {/* Tab Content */}
        {activeTab === 'corporate' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  법인 설립
                </h3>
                <p className="text-sm text-gray-600">
                  법인 설립 절차 및 필요 서류를 안내합니다
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  법인 자금 지원
                </h3>
                <p className="text-sm text-gray-600">
                  법인 사업자를 위한 자금 지원 프로그램
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  법인 세무 컨설팅
                </h3>
                <p className="text-sm text-gray-600">
                  법인 세무 및 회계 전문 컨설팅 서비스
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'certification' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Growth Support */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  재무성 / 가치금융
                </h3>
                <p className="text-sm text-gray-600">
                  재무개선 및 가치금융을 자세하게 안내합니다
                </p>
              </div>
            </div>

            {/* Card 2 - Consultation */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  특허경영 / 노무 및 법무
                </h3>
                <p className="text-sm text-gray-600">
                  특허의 종합한 비무 판정 등의 사업의 기술을 안내합니다
                </p>
              </div>
            </div>

            {/* Card 3 - Evaluation */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  법인전환 / 업종 및 업태 변경
                </h3>
                <p className="text-sm text-gray-600">
                  법인사업자의 사업 변경과 업태 변경을 자세하게 안내합니다
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'iso' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  ISO 9001 인증
                </h3>
                <p className="text-sm text-gray-600">
                  품질경영시스템 ISO 9001 인증 지원
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  ISO 14001 인증
                </h3>
                <p className="text-sm text-gray-600">
                  환경경영시스템 ISO 14001 인증 지원
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  스마트공장 인증
                </h3>
                <p className="text-sm text-gray-600">
                  스마트공장 구축 및 인증 컨설팅
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
