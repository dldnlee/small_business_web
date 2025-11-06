import { ReactNode } from 'react';

interface CardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
  className?: string;
}

export default function Card({ icon, title, description, action, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {icon && (
        <div className="mb-4 text-blue-600">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
