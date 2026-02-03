import { ArrowLeft } from 'lucide-react';

interface CaseHeroProps {
  title: string;
  subtitle: string;
  tags: string[];
  details: {
    role: string;
    duration: string;
    company: string;
    deliverables: string;
  };
  onBack: () => void;
}

export function CaseHero({ title, subtitle, tags, details, onBack }: CaseHeroProps) {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white border-b border-neutral-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors duration-300 mb-12"
        >
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="text-sm font-medium tracking-wide">Voltar para projetos</span>
        </button>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-neutral-100 text-neutral-700 text-xs rounded-md tracking-wide uppercase font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-[clamp(2.5rem,5vw,5rem)] leading-[1.1] tracking-[-0.02em] text-neutral-900 mb-8 max-w-5xl">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-neutral-600 leading-relaxed mb-16 max-w-3xl">
          {subtitle}
        </p>

        {/* Project Details Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-12 border-t border-neutral-200">
          <div>
            <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase mb-3 font-medium">
              Meu Papel
            </p>
            <p className="text-base text-neutral-900">
              {details.role}
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase mb-3 font-medium">
              Duração
            </p>
            <p className="text-base text-neutral-900">
              {details.duration}
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase mb-3 font-medium">
              Empresa
            </p>
            <p className="text-base text-neutral-900">
              {details.company}
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase mb-3 font-medium">
              Entregáveis
            </p>
            <p className="text-base text-neutral-900">
              {details.deliverables}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
