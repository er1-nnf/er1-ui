import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-2xl p-6 shadow-sm border border-brand-mist
        ${hover ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className = '',
}: FeatureCardProps) {
  return (
    <Card className={className}>
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-green/10 via-brand-teal/10 to-brand-blue/10 flex items-center justify-center text-brand-green mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-brand-navy mb-2">{title}</h3>
      <p className="text-brand-slate">{description}</p>
    </Card>
  );
}

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  className?: string;
}

export function StepCard({
  step,
  title,
  description,
  className = '',
}: StepCardProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-brand-green to-brand-blue flex items-center justify-center text-white font-bold">
          {step}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-brand-navy mb-1">{title}</h3>
          <p className="text-brand-slate">{description}</p>
        </div>
      </div>
    </div>
  );
}
