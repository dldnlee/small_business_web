'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { services, getServicesByCategory } from '../data/services';

export default function ServicePage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'corporate' | 'certification' | 'iso'>('all');

  const filteredServices = activeCategory === 'all'
    ? services
    : getServicesByCategory(activeCategory);

  const categoryLabels = {
    all: '전체 서비스',
    corporate: '법인자원',
    certification: '기업인증',
    iso: 'ISO(스마트인증)'
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="mx-auto w-full max-w-7xl flex flex-col">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              중소기업 지원 서비스
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              귀사의 성장과 발전을 위한 다양한 전문 서비스를 제공합니다
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="border-b border-gray-200">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-0">
              {(Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 font-semibold transition-all ${
                    activeCategory === category
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {categoryLabels[category]}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="mb-6">
            <p className="text-gray-600">
              총 <span className="font-bold text-blue-600">{filteredServices.length}</span>개의 서비스
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              전문 컨설턴트 상담이 필요하신가요?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              귀사의 상황에 맞는 최적의 지원 방안을 제시해 드립니다
            </p>
            <a
              href="/#contact"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              무료 상담 신청
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
