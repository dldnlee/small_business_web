export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'corporate' | 'certification' | 'iso';
  route: string;
  features?: string[];
}

export const services: Service[] = [
  // Corporate Services
  {
    id: 'heat-recovery',
    title: '폐수열회수기',
    description: '업체의 에너지비용의 최소 45% 이상 절감',
    icon: 'building',
    category: 'corporate',
    route: '/service/heat-recovery',
    features: [
      '에너지절감기 설치비 90% 융자',
      '폐수열회수기를 통해 연간비용절감률 45% 이상',
      '사우나 업체의 에너지비용 최소 45% 이상 절감'
    ]
  },
  {
    id: 'corporate-funding',
    title: '법인 자금 지원',
    description: '법인 사업자를 위한 자금 지원 프로그램',
    icon: 'money',
    category: 'corporate',
    route: '/service/corporate-funding',
    features: [
      '정부 지원금 신청',
      '정책자금 컨설팅',
      '융자 및 대출 안내',
      '지원금 사후관리'
    ]
  },
  {
    id: 'corporate-tax',
    title: '법인 세무 컨설팅',
    description: '법인 세무 및 회계 전문 컨설팅 서비스',
    icon: 'document',
    category: 'corporate',
    route: '/service/corporate-tax',
    features: [
      '법인세 신고 지원',
      '세무 최적화 컨설팅',
      '회계 및 재무 관리',
      '세무조사 대응 지원'
    ]
  },
  // Certification Services
  {
    id: 'financial-value',
    title: '재무성 / 가치금융',
    description: '재무개선 및 가치금융을 자세하게 안내합니다',
    icon: 'chart',
    category: 'certification',
    route: '/service/financial-value',
    features: [
      '재무제표 분석',
      '신용등급 개선',
      '가치금융 컨설팅',
      '재무구조 최적화'
    ]
  },
  {
    id: 'patent-legal',
    title: '특허경영 / 노무 및 법무',
    description: '특허의 종합한 비무 판정 등의 사업의 기술을 안내합니다',
    icon: 'chat',
    category: 'certification',
    route: '/service/patent-legal',
    features: [
      '특허 및 지식재산권 관리',
      '노무 관리 컨설팅',
      '법무 자문 서비스',
      '계약서 검토 및 작성'
    ]
  },
  {
    id: 'business-conversion',
    title: '법인전환 / 업종 및 업태 변경',
    description: '법인사업자의 사업 변경과 업태 변경을 자세하게 안내합니다',
    icon: 'refresh',
    category: 'certification',
    route: '/service/business-conversion',
    features: [
      '개인사업자 법인 전환',
      '업종 변경 절차 안내',
      '업태 추가 및 변경',
      '사업자등록증 정정'
    ]
  },
  // ISO Services
  {
    id: 'iso-9001',
    title: 'ISO 9001 인증',
    description: '품질경영시스템 ISO 9001 인증 지원',
    icon: 'shield',
    category: 'iso',
    route: '/service/iso-9001',
    features: [
      '품질경영시스템 구축',
      'ISO 9001 인증 취득',
      '인증 심사 대응',
      '사후관리 및 갱신'
    ]
  },
  {
    id: 'iso-14001',
    title: 'ISO 14001 인증',
    description: '환경경영시스템 ISO 14001 인증 지원',
    icon: 'globe',
    category: 'iso',
    route: '/service/iso-14001',
    features: [
      '환경경영시스템 구축',
      'ISO 14001 인증 취득',
      '환경영향 평가',
      '환경 법규 준수 지원'
    ]
  },
  {
    id: 'smart-factory',
    title: '스마트공장 인증',
    description: '스마트공장 구축 및 인증 컨설팅',
    icon: 'lock',
    category: 'iso',
    route: '/service/smart-factory',
    features: [
      '스마트공장 수준 진단',
      '스마트화 구축 지원',
      '정부 지원사업 연계',
      '스마트공장 인증 취득'
    ]
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServicesByCategory = (category: 'corporate' | 'certification' | 'iso'): Service[] => {
  return services.filter(service => service.category === category);
};
