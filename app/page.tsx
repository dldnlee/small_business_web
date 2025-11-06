'use client';

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Card from './components/Card';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessType: 'small',
    agreement: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('상담 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm">
                <span>2025년 하반기(초과) 정부 정책자금 발표 정부 정책자금 신청신청만이!</span>
                <span>🏆</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                중소기업지원센터
              </h1>
              <p className="text-xl sm:text-2xl">
                2025년 중소기업·소상공인 정부정책자금<br />
                <span className="text-yellow-300">의무대리인 경제 기자의 출현은 함께 합니다</span>
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  빠른 상담신청
                </Button>
                <Button variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-900">
                  고객센터 바로가기
                </Button>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">빠른 상담신청</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">이름(상호명) *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">연락처 *</label>
                  <div className="flex gap-2">
                    <input
                      type="tel"
                      required
                      placeholder="010"
                      className="w-24 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="tel"
                      required
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="agreement"
                    required
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    checked={formData.agreement}
                    onChange={(e) => setFormData({ ...formData, agreement: e.target.checked })}
                  />
                  <label htmlFor="agreement" className="text-sm text-gray-600">
                    개인정보취급방침 동의(필수) (관례확인)
                  </label>
                </div>

                <Button type="submit" className="w-full" variant="secondary">
                  문의하기
                </Button>

                <div className="text-center pt-4 border-t">
                  <p className="text-sm text-gray-600 mb-2">고객센터</p>
                  <p className="text-3xl font-bold text-blue-600">02-6933-8720</p>
                  <p className="text-sm text-gray-500 mt-1">평일 09시 - 18시</p>
                </div>

                <div className="text-center pt-2">
                  <p className="text-sm text-gray-600 mb-1">빠른상담</p>
                  <p className="text-2xl font-bold text-green-600">M24hrc</p>
                  <p className="text-sm text-gray-500">카카오톡으로 문의 상담</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Government Support Programs Section */}
      <section id="programs" className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">정부정책자금</h2>
            <p className="text-lg text-gray-600">
              다양한 정부 정책자금을 지원하고 계신분들 통해 가인하의 지원대상을 알 맞춤형으로 온전하여 알려드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card
              icon={
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="소점포자"
              description="소점포자"
            />
            <Card
              icon={
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="보증서금"
              description="보증서금"
            />
            <Card
              icon={
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="지원대상"
              description="지원대상"
            />
            <Card
              icon={
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              title="부업진흥"
              description="부업진흥"
            />
          </div>

          <div className="text-center">
            <Button>고객센터 바로 고객센터</Button>
          </div>
        </div>
      </section>

      {/* Business Type Selection */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              중소기업지원센터 인증 서비스 안내
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Small Business Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-blue-600 rounded-2xl p-8 text-white">
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold mb-4">소상공인 온전자금</h3>
                  <p className="text-blue-100">
                    가인하의 성선자금 구매, 예비 판매 동향을 위 가인하의 금융회를 알 받쳐세계 온전하여 합니다. 알 받쳐세게 온전하여 지인상세 온전.
                  </p>
                </div>
                <div className="text-center">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">
                    바로가기
                  </Button>
                </div>
              </div>
            </div>

            {/* Medium Business Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-gray-800 rounded-2xl p-8 text-white">
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold mb-4">중기업 온전자금</h3>
                  <p className="text-gray-300">
                    가인하의 성선자금 구매, 예비 판매 동향을 위 가인하의 금융회를 알 받쳐세계 온전하여 합니다. 알 받쳐세게 온전하여 지인상세 온전.
                  </p>
                </div>
                <div className="text-center">
                  <Button className="bg-white text-gray-800 hover:bg-gray-100">
                    바로가기
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              다양한 정부정책기금을 의사집결자을 통해 가인하이 재부세포를 계삭하실 수 있습니다.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              icon={
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="재무 개선 자료"
              description="재무개선 및 가치금융 패널로보"
            />
            <Card
              icon={
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              }
              title="특허경영 / 노무 및 법무"
              description="특허의 종합한 비무 판정 등의 사업의 기술"
            />
            <Card
              icon={
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
              title="법인진흥 / 영업권평가"
              description="법인사업장의 산업 판별주 편리 교이"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-white text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-blue-100">
            <h2 className="text-3xl font-bold text-center mb-8">빠른 상담 신청 서비스</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">이름(상호명) *</label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">연락처(사업자번호) *</label>
                  <input 
                  type="number"
                  required
                  placeholder="01012341234"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {/* <select
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="small">선택</option>
                    <option value="medium">개인</option>
                    <option value="large">법인</option>
                  </select> */}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="agreement2"
                  required
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="agreement2" className="text-sm text-gray-600">
                  개인정보취급방침 동의(필수) (관례확인)
                </label>
              </div>

              <div className="text-center">
                <Button type="submit" className="px-12" variant="primary">
                  빠른 전화상담 요청
                </Button>
              </div>
            </form>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6">
              2025년 정부정책자금 예산 편성, 정부정책자금 온전자금 및 사업자금 신청 및 상담
            </h3>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
