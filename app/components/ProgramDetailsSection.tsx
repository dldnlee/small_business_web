'use client';

export default function ProgramDetailsSection() {
  return (
    <section className="py-16 bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 정부지원사업 Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            정부지원사업 – JSENERGY 패수열회수기
          </h2>
          <div className="space-y-4 text-lg">
            <p>사무나업체의 에너지비용을 최소40%이상 절감해드립니다.</p>
            <p>에너지절감기 설치비(80% 혹자 (서울시 무이자, 경기도 1.5%)</p>
            <p>무료견적기획을 놓치지 마세요 ➝</p>
            <p>폐수열회수기를통해 연분비절감률 40%이상</p>
            <p className="font-bold mt-6">●정부지원 응자금신청-대신해드립니다.</p>
            <p className="mt-4">
              신규생애너지전문주주 제이에스에너지<br />
              성무이사 이동후 010-6894-0988
            </p>
          </div>
        </div>

        {/* 확석 소개 (인증서) */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6">1. 확석 소개 (인증)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
              <p className="text-gray-500 text-center">[제품 인증서 이미지]</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
              <p className="text-gray-500 text-center">[ISO 14001 인증서]</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
              <p className="text-gray-500 text-center">[추가 인증서]</p>
            </div>
          </div>

          {/* 프로세스 다이어그램 */}
          <div className="mt-8">
            <div className="bg-gray-100 rounded-lg p-6 h-96 flex items-center justify-center">
              <p className="text-gray-500 text-center">[폐수열 회수 시스템 프로세스 다이어그램]</p>
            </div>
          </div>
        </div>

        {/* 폐수열수 시스템 공정 설명 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6">폐수열수 시스템 공정 설명</h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">1</span>
                원수 유입 (Wastewater Inlet)
              </h4>
              <ul className="list-disc list-inside space-y-2 ml-8 text-gray-700">
                <li>유리한 폐수에는 다양한 열량원이이 이용하여 온도상 높은곳. 유출수를 열원으로 활용할 수 있도록 처리 플로트를 통해 폐수 열을 회수합니다.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">2</span>
                열교환 (Heat Exchange)
              </h4>
              <ul className="list-disc list-inside space-y-2 ml-8 text-gray-700">
                <li>폐로부터 발생한 잔존열 펄프게 활고하는 동작에 도달하지로 활고하는 시스템으로 구동됩니다.</li>
                <li>열교환기 동일성을 통로 도면체제로 늘어남은 구록 제외로 시시간 대기 상호 열교환 우석으로 동작합니다.</li>
              </ul>
            </div>

            {/* 열교환 데이터 테이블 */}
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="bg-white rounded h-64 flex items-center justify-center">
                <p className="text-gray-500 text-center">[열교환 성능 데이터 테이블 이미지]</p>
              </div>
            </div>
          </div>
        </div>

        {/* 사업 소개 (산업시설) */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6">1. 사업 소개 (산업시설)</h3>

          {/* 산업시설 */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">산업시설</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="bg-gray-100 rounded-lg p-4 h-40 flex flex-col items-center justify-center">
                  <div className="bg-gray-300 w-full h-24 rounded mb-2"></div>
                  <p className="text-sm text-gray-600 text-center">[시설 {item}]</p>
                </div>
              ))}
            </div>
          </div>

          {/* 생산시설 */}
          <div>
            <h4 className="text-xl font-semibold mb-4">생산시설</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="bg-gray-100 rounded-lg p-4 h-40 flex flex-col items-center justify-center">
                  <div className="bg-gray-300 w-full h-24 rounded mb-2"></div>
                  <p className="text-sm text-gray-600 text-center">[생산시설 {item}]</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 연락처 */}
        <div className="bg-blue-600 text-white rounded-2xl shadow-xl p-8 text-center">
          <p className="text-xl font-bold mb-4">이제 당신이하믈를 보실차례입니다.</p>
          <p className="text-2xl font-bold">
            *무료견적: 성무이사 이동후 010-6894-0988
          </p>
        </div>
      </div>
    </section>
  );
}
