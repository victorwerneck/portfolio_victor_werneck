import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projetos');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 pt-32 pb-40">
        {/* Overline */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-neutral-900 rounded-full">
            <div className="w-2 h-2 bg-neutral-900 rounded-full animate-pulse" />
            <span className="text-xs tracking-[0.2em] text-neutral-900 uppercase font-medium">
              {t('hero.badge')}
            </span>
          </div>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-[-0.02em] text-neutral-900 mb-16 max-w-6xl">
          {t('hero.title1')}
          <br />
          <span className="text-neutral-400">{t('hero.title2')}</span>
          <br />
          {t('hero.title3')}
        </h1>
        
        {/* Subheadline & CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-24">
          <p className="text-xl lg:text-2xl text-neutral-600 leading-[1.6] max-w-2xl">
            {t('hero.subtitle1')}
            <span className="block mt-3 text-neutral-900 font-medium">
              {t('hero.subtitle2')}
            </span>
          </p>
          
          <button
            onClick={scrollToProjects}
            className="group flex items-center gap-4 px-10 py-5 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all duration-300 hover:gap-6 self-start lg:self-auto"
          >
            <span className="text-base tracking-wide">{t('hero.cta')}</span>
            <div className="w-6 h-6 rounded-full border-2 border-white/30 flex items-center justify-center">
              <ArrowDown className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40">
        <span className="text-xs tracking-widest uppercase text-neutral-500">{t('hero.scroll')}</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-neutral-400 to-transparent" />
      </div>
    </section>
  );
}
