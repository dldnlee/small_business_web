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
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServicesByCategory = (category: 'corporate' | 'certification' | 'iso'): Service[] => {
  return services.filter(service => service.category === category);
};
