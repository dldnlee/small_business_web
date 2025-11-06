export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">중소기업지원센터</h3>
            <p className="text-gray-400 text-sm">
              2025년 중소기업·소상공인 정부정책자금<br />
              컨설팅 전문
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">바로가기</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#programs" className="hover:text-white transition-colors">정부정책자금</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">법인지원</a></li>
              <li><a href="#consulting" className="hover:text-white transition-colors">기업인증</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">문의하기</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">고객센터</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                02-6933-8720
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                평일 09:00 - 18:00
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>Copyright &copy; 중소기업지원센터 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
