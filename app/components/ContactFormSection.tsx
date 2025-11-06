'use client';

import Button from './Button';

export default function ContactFormSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('상담 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
  };

  return (
    <section id="contact" className="py-16 bg-white text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-blue-100">
          <h2 className="text-3xl font-bold text-center mb-8">빠른 상담 신청 서비스</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">이름*</label>
                <input
                  type="text"
                  required
                  placeholder="홍길동"
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">연락처*</label>
                <input
                  type="number"
                  required
                  placeholder="01012341234"
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
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
  );
}
