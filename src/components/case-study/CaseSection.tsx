import { ReactNode } from 'react';

interface CaseSectionProps {
  label?: string;
  title: string;
  children: ReactNode;
  background?: 'white' | 'neutral';
}

export function CaseSection({ label, title, children, background = 'white' }: CaseSectionProps) {
  const bgClass = background === 'neutral' ? 'bg-neutral-50' : 'bg-white';
  
  return (
    <section className={`py-20 lg:py-28 ${bgClass}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          {label && (
            <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase mb-4 font-medium">
              {label}
            </p>
          )}
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.02em] text-neutral-900 max-w-4xl">
            {title}
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-4xl">
          {children}
        </div>
      </div>
    </section>
  );
}
