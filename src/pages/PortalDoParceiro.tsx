import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CaseHero } from '../components/case-study/CaseHero';
import { CaseSection } from '../components/case-study/CaseSection';
import { InsightCard } from '../components/case-study/InsightCard';
import { ClickableImage } from '../components/ClickableImage';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface PortalDoParceiroProps {
  onBackToHome: () => void;
}

export function PortalDoParceiro({ onBackToHome }: PortalDoParceiroProps) {
  const { t } = useLanguage();

  const insights = [
    {
      number: '01',
      title: t('portal.insight1.title'),
      description: t('portal.insight1.desc'),
    },
    {
      number: '02',
      title: t('portal.insight2.title'),
      description: t('portal.insight2.desc'),
    },
    {
      number: '03',
      title: t('portal.insight3.title'),
      description: t('portal.insight3.desc'),
    },
    {
      number: '04',
      title: t('portal.insight4.title'),
      description: t('portal.insight4.desc'),
    },
    {
      number: '05',
      title: t('portal.insight5.title'),
      description: t('portal.insight5.desc'),
    },
  ];

  const benchmarks = [
    {
      name: t('portal.benchmark.fastenal.name'),
      description: t('portal.benchmark.fastenal.desc'),
      pros: [
        t('portal.benchmark.fastenal.pro1'),
        t('portal.benchmark.fastenal.pro2'),
        t('portal.benchmark.fastenal.pro3'),
      ],
      cons: [
        t('portal.benchmark.fastenal.con1'),
        t('portal.benchmark.fastenal.con2'),
      ],
    },
    {
      name: t('portal.benchmark.grainger.name'),
      description: t('portal.benchmark.grainger.desc'),
      pros: [
        t('portal.benchmark.grainger.pro1'),
        t('portal.benchmark.grainger.pro2'),
        t('portal.benchmark.grainger.pro3'),
      ],
      cons: [
        t('portal.benchmark.grainger.con1'),
        t('portal.benchmark.grainger.con2'),
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigateHome={onBackToHome} />
      
      <CaseHero
        title={t('portal.hero.title')}
        subtitle={t('portal.hero.subtitle')}
        tags={['UX Research', 'B2B', 'E-commerce', 'Design Strategy', 'Redesign', 'Benchmarking']}
        details={{
          role: t('portal.hero.role'),
          duration: t('portal.hero.duration'),
          company: t('portal.hero.company'),
          deliverables: t('portal.hero.deliverables'),
        }}
        onBack={onBackToHome}
      />

      {/* Overview */}
      <CaseSection label={t('portal.overview.label')} title={t('portal.overview.title')}>
        <div className="space-y-6">
          <p className="text-lg text-neutral-700 leading-relaxed">
            {t('portal.overview.p1')}
          </p>
          
          <p className="text-lg text-neutral-700 leading-relaxed">
            {t('portal.overview.p2')}
          </p>
          
          {/* Context Image */}
          <ClickableImage
            src="https://cdn.dribbble.com/userupload/46611295/file/02909d2a2cf0942294ea57050cf5d67d.png?resize=1849x942&vertical=center"
            alt={t('portal.overview.imageCaption')}
            className="w-full h-auto"
            caption={t('portal.overview.imageCaption')}
          />
          
          <div className="bg-neutral-50 border border-neutral-200 p-8 my-8">
            <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase mb-4 font-medium">
              {t('portal.overview.featuresTitle')}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-neutral-900 mt-0.5 flex-shrink-0" />
                <span className="text-base text-neutral-700">{t('portal.overview.feature1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-neutral-900 mt-0.5 flex-shrink-0" />
                <span className="text-base text-neutral-700">{t('portal.overview.feature2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-neutral-900 mt-0.5 flex-shrink-0" />
                <span className="text-base text-neutral-700">{t('portal.overview.feature3')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-neutral-900 mt-0.5 flex-shrink-0" />
                <span className="text-base text-neutral-700">{t('portal.overview.feature4')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-neutral-900 mt-0.5 flex-shrink-0" />
                <span className="text-base text-neutral-700">{t('portal.overview.feature5')}</span>
              </li>
            </ul>
          </div>

          <p className="text-lg text-neutral-700 leading-relaxed">
            <strong className="text-neutral-900">{t('portal.overview.critical')}</strong>
            {t('portal.overview.criticalText')}
          </p>
        </div>
      </CaseSection>

      {/* Challenge */}
      <CaseSection label={t('portal.challenge.label')} title={t('portal.challenge.title')} background="neutral">
        <div className="space-y-6">
          <p className="text-lg text-neutral-700 leading-relaxed">
            {t('portal.challenge.p1')}
          </p>
          
          <div className="bg-white border border-neutral-200 p-8 my-8">
            <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase mb-4 font-medium">
              {t('portal.challenge.roleTitle')}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-neutral-400">→</span>
                <span className="text-base text-neutral-700">{t('portal.challenge.role1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neutral-400">→</span>
                <span className="text-base text-neutral-700">{t('portal.challenge.role2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neutral-400">→</span>
                <span className="text-base text-neutral-700">{t('portal.challenge.role3')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neutral-400">→</span>
                <span className="text-base text-neutral-700">{t('portal.challenge.role4')}</span>
              </li>
            </ul>
          </div>
        </div>
      </CaseSection>

      {/* Research Process */}
      <CaseSection label={t('portal.research.label')} title={t('portal.research.title')}>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl text-neutral-900 mb-4">{t('portal.research.objectiveTitle')}</h3>
            <p className="text-base text-neutral-700 leading-relaxed">
              {t('portal.research.objective')}
            </p>
          </div>

          <div>
            <h3 className="text-xl text-neutral-900 mb-4">{t('portal.research.methodTitle')}</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              {t('portal.research.method1')}
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-base text-neutral-700 list-disc">{t('portal.research.profile1')}</li>
              <li className="text-base text-neutral-700 list-disc">{t('portal.research.profile2')}</li>
              <li className="text-base text-neutral-700 list-disc">{t('portal.research.profile3')}</li>
            </ul>
            <p className="text-base text-neutral-700 leading-relaxed mt-4">
              {t('portal.research.method2')}
            </p>
          </div>

          <div>
            <h3 className="text-xl text-neutral-900 mb-6">{t('portal.research.insightsTitle')}</h3>
            <div className="grid gap-4">
              {insights.map((insight) => (
                <InsightCard key={insight.number} {...insight} />
              ))}
            </div>
          </div>

          <div className="bg-neutral-900 text-white p-8 my-8">
            <p className="text-base leading-relaxed">
              <strong>{t('portal.research.impact')}</strong>
              {t('portal.research.impactText')}
            </p>
          </div>
        </div>
      </CaseSection>

      {/* Benchmarking */}
      <CaseSection label={t('portal.benchmark.label')} title={t('portal.benchmark.title')} background="neutral">
        <div className="space-y-8">
          <p className="text-lg text-neutral-700 leading-relaxed">
            {t('portal.benchmark.intro')}
          </p>

          {/* Benchmark Image */}
          <ClickableImage
            src="https://cdn.dribbble.com/userupload/46612002/file/306e4b0ef63fe991cb8759b71ad5a1e0.png?resize=1905x1072&vertical=center"
            alt={t('portal.benchmark.imageCaption')}
            className="w-full h-auto"
            caption={t('portal.benchmark.imageCaption')}
          />

          <div className="grid gap-8">
            {benchmarks.map((benchmark, index) => (
              <div key={index} className="bg-white border border-neutral-200 p-8">
                <h3 className="text-2xl text-neutral-900 mb-2">{benchmark.name}</h3>
                <p className="text-sm text-neutral-600 mb-6">{benchmark.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs tracking-[0.2em] text-green-600 uppercase mb-3 font-medium">
                      {t('portal.benchmark.prosLabel')}
                    </p>
                    <ul className="space-y-2">
                      {benchmark.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-neutral-700">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase mb-3 font-medium">
                      {t('portal.benchmark.consLabel')}
                    </p>
                    <ul className="space-y-2">
                      {benchmark.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-neutral-400 mt-0.5">→</span>
                          <span className="text-sm text-neutral-600">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-neutral-900 text-white p-8 mt-8">
            <p className="text-base leading-relaxed">
              <strong>{t('portal.benchmark.conclusion')}</strong>
              {t('portal.benchmark.conclusionText')}
            </p>
          </div>
        </div>
      </CaseSection>

      {/* Design Decision */}
      <CaseSection label={t('portal.decision.label')} title={t('portal.decision.title')}>
        <div className="space-y-8">
          <p className="text-lg text-neutral-700 leading-relaxed">
            {t('portal.decision.intro')}
          </p>

          <div className="grid gap-4 my-8">
            <div className="flex items-start gap-4 bg-green-50 border border-green-200 p-6">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-medium text-neutral-900 mb-1">{t('portal.decision.data1Label')}</p>
                <p className="text-base text-neutral-700">{t('portal.decision.data1')}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-green-50 border border-green-200 p-6">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-medium text-neutral-900 mb-1">{t('portal.decision.data2Label')}</p>
                <p className="text-base text-neutral-700">{t('portal.decision.data2')}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-green-50 border border-green-200 p-6">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-medium text-neutral-900 mb-1">{t('portal.decision.data3Label')}</p>
                <p className="text-base text-neutral-700">{t('portal.decision.data3')}</p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-neutral-900 p-8">
            <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase mb-4 font-medium">
              {t('portal.decision.solutionTitle')}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-neutral-900">→</span>
                <span className="text-base text-neutral-900">{t('portal.decision.solution1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neutral-900">→</span>
                <span className="text-base text-neutral-900">{t('portal.decision.solution2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neutral-900">→</span>
                <span className="text-base text-neutral-900">{t('portal.decision.solution3')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neutral-900">→</span>
                <span className="text-base text-neutral-900">{t('portal.decision.solution4')}</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase mb-4 font-medium">
              {t('portal.decision.impactTitle')}
            </p>
            <ul className="space-y-2">
              <li className="text-base text-neutral-700">{t('portal.decision.impact1')}</li>
              <li className="text-base text-neutral-700">{t('portal.decision.impact2')}</li>
              <li className="text-base text-neutral-700">{t('portal.decision.impact3')}</li>
            </ul>
          </div>
        </div>
      </CaseSection>

      {/* Solution */}
      <CaseSection label={t('portal.solution.label')} title={t('portal.solution.title')} background="neutral">
        <div className="space-y-8">
          <p className="text-lg text-neutral-700 leading-relaxed">
            {t('portal.solution.intro')}
          </p>

          {/* Before/After Comparison */}
          <div className="bg-white border border-neutral-200 p-4">
            <BeforeAfterSlider
              beforeImage="https://cdn.dribbble.com/userupload/46611295/file/02909d2a2cf0942294ea57050cf5d67d.png?resize=1849x942&vertical=center"
              afterImage="https://cdn.dribbble.com/userupload/46612170/file/aadfcfea94ae8ab555f443ec93c0d675.png?resize=1200x782&vertical=center"
              beforeLabel={t('portal.solution.beforeLabel')}
              afterLabel={t('portal.solution.afterLabel')}
            />
          </div>

          <div>
            <h3 className="text-xl text-neutral-900 mb-6">{t('portal.solution.changesTitle')}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-neutral-200 p-6">
                <h4 className="text-base font-medium text-neutral-900 mb-3">{t('portal.solution.change1Title')}</h4>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {t('portal.solution.change1')}
                </p>
              </div>
              
              <div className="bg-white border border-neutral-200 p-6">
                <h4 className="text-base font-medium text-neutral-900 mb-3">{t('portal.solution.change2Title')}</h4>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {t('portal.solution.change2')}
                </p>
              </div>
              
              <div className="bg-white border border-neutral-200 p-6">
                <h4 className="text-base font-medium text-neutral-900 mb-3">{t('portal.solution.change3Title')}</h4>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {t('portal.solution.change3')}
                </p>
              </div>
              
              <div className="bg-white border border-neutral-200 p-6">
                <h4 className="text-base font-medium text-neutral-900 mb-3">{t('portal.solution.change4Title')}</h4>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {t('portal.solution.change4')}
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Solutions */}
          <div className="space-y-8 mt-12">
            <div className="bg-white border border-neutral-200 p-4">
              <ClickableImage
                src="https://cdn.dribbble.com/userupload/46612339/file/5854cf8df4f2b315679b84b180ca9a8e.png?resize=1200x2747&vertical=center"
                alt={t('portal.solution.homepageCaption')}
                className="w-full h-auto"
                caption={t('portal.solution.homepageCaption')}
              />
            </div>

            <div className="bg-white border border-neutral-200 p-4">
              <ClickableImage
                src="https://cdn.dribbble.com/userupload/46612343/file/e1faad970701c0380b7883ce4a5125e4.png?resize=1200x3187&vertical=center"
                alt={t('portal.solution.productCaption')}
                className="w-full h-auto"
                caption={t('portal.solution.productCaption')}
              />
            </div>
          </div>
        </div>
      </CaseSection>

      {/* Validation */}
      <CaseSection label={t('portal.validation.label')} title={t('portal.validation.title')}>
        <div className="space-y-6">
          <p className="text-lg text-neutral-700 leading-relaxed">
            {t('portal.validation.intro')}
          </p>

          <div className="grid gap-3 my-8">
            <div className="flex items-start gap-3 bg-white border border-neutral-200 p-6">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-base text-neutral-700">{t('portal.validation.point1')}</span>
            </div>
            <div className="flex items-start gap-3 bg-white border border-neutral-200 p-6">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-base text-neutral-700">{t('portal.validation.point2')}</span>
            </div>
            <div className="flex items-start gap-3 bg-white border border-neutral-200 p-6">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-base text-neutral-700">{t('portal.validation.point3')}</span>
            </div>
            <div className="flex items-start gap-3 bg-white border border-neutral-200 p-6">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-base text-neutral-700">{t('portal.validation.point4')}</span>
            </div>
          </div>

          <div className="bg-neutral-100 border border-neutral-200 p-8">
            <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase mb-4 font-medium">
              {t('portal.validation.statusTitle')}
            </p>
            <p className="text-base text-neutral-700 leading-relaxed">
              {t('portal.validation.status')}
            </p>
          </div>
        </div>
      </CaseSection>

      {/* Learnings */}
      <CaseSection label={t('portal.learnings.label')} title={t('portal.learnings.title')} background="neutral">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl text-neutral-900 mb-4">{t('portal.learnings.research.title')}</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              <strong>{t('portal.learnings.research.intro')}</strong>
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-base text-neutral-700 list-disc">{t('portal.learnings.research.point1')}</li>
              <li className="text-base text-neutral-700 list-disc">{t('portal.learnings.research.point2')}</li>
              <li className="text-base text-neutral-700 list-disc">{t('portal.learnings.research.point3')}</li>
              <li className="text-base text-neutral-700 list-disc">{t('portal.learnings.research.point4')}</li>
            </ul>
          </div>

          <div className="bg-white border-l-4 border-neutral-900 p-6">
            <p className="text-base text-neutral-700 leading-relaxed">
              <strong>{t('portal.learnings.combination')}</strong>
              {t('portal.learnings.combinationText')}
            </p>
          </div>

          <div>
            <h3 className="text-xl text-neutral-900 mb-4">{t('portal.learnings.design.title')}</h3>
            <p className="text-base text-neutral-700 leading-relaxed">
              {t('portal.learnings.design.text')}
            </p>
          </div>

          <div>
            <h3 className="text-xl text-neutral-900 mb-4">{t('portal.learnings.b2b.title')}</h3>
            <p className="text-base text-neutral-700 leading-relaxed">
              {t('portal.learnings.b2b.text')}
            </p>
          </div>
        </div>
      </CaseSection>

      {/* Future Directions */}
      <CaseSection label={t('portal.future.label')} title={t('portal.future.title')}>
        <div className="space-y-6">
          <p className="text-base text-neutral-600 leading-relaxed mb-6">
            {t('portal.future.intro')}
          </p>

          <div className="grid gap-4">
            <div className="bg-neutral-50 border border-neutral-200 p-6">
              <h4 className="text-base font-medium text-neutral-900 mb-2">{t('portal.future.phase2.title')}</h4>
              <p className="text-sm text-neutral-700">{t('portal.future.phase2.desc')}</p>
            </div>
            
            <div className="bg-neutral-50 border border-neutral-200 p-6">
              <h4 className="text-base font-medium text-neutral-900 mb-2">{t('portal.future.phase3.title')}</h4>
              <p className="text-sm text-neutral-700">{t('portal.future.phase3.desc')}</p>
            </div>
            
            <div className="bg-neutral-50 border border-neutral-200 p-6">
              <h4 className="text-base font-medium text-neutral-900 mb-2">{t('portal.future.phase4.title')}</h4>
              <p className="text-sm text-neutral-700">{t('portal.future.phase4.desc')}</p>
            </div>
          </div>
        </div>
      </CaseSection>

      <Footer />
    </div>
  );
}
