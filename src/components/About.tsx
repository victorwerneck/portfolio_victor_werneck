import { Lightbulb, Search, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: Search,
      title: 'Pesquisa como fundação',
      description: 'Antes de desenhar, eu entendo. Uso dados qualitativos e quantitativos para validar hipóteses.',
    },
    {
      icon: Lightbulb,
      title: 'Pensamento crítico',
      description: 'Questiono premissas, desafio soluções óbvias e busco o porquê por trás de cada decisão.',
    },
    {
      icon: Users,
      title: 'Colaboração ativa',
      description: 'Trabalho próximo a PMs, devs e stakeholders para garantir viabilidade e alinhamento.',
    },
    {
      icon: TrendingUp,
      title: 'Foco em impacto',
      description: 'Meço sucesso por resultados reais: redução de fricção, aumento de conversão, satisfação do usuário.',
    },
  ];

  return (
    <section id="sobre" className="py-32 lg:py-40 px-6 lg:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - About Text */}
          <div>
            <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase mb-8 font-medium">
              {t('about.label')}
            </p>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-[-0.02em] text-neutral-900 mb-12">
              {t('about.title')}
            </h2>
            
            <div className="space-y-8 text-lg lg:text-xl text-neutral-700 leading-[1.7]">
              <p>
                {t('about.p1')}
              </p>
              
              <p>
                {t('about.p3')}
              </p>

              <p className="text-neutral-900 font-medium">
                {t('about.p4')}
              </p>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div>
            <div className="lg:sticky lg:top-32">
              <div className="relative aspect-square max-w-md mx-auto bg-neutral-100 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocIi4zaEpl4g4FGucC2f4f93rrrfSIqcFnhItJWe5LrJYc6djVNJ=s360-c-no"
                  alt="Victor Werneck"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/10 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
