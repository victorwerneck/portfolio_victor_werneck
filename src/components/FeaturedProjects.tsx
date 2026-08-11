import { ProjectCard } from './ProjectCard';
import { useLanguage } from '../contexts/LanguageContext';
import { projects } from '../content/projects';

export function FeaturedProjects() {
  const { t } = useLanguage();

  return (
    <section id="projetos" className="py-32 lg:py-40 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-24">
          <div className="flex items-end justify-between gap-8 mb-8">
            <div>
              <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase mb-6 font-medium">
                {t('projects.label')}
              </p>
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] tracking-[-0.02em] text-neutral-900">
                {t('projects.title1')}
                <br />
                {t('projects.title2')}
              </h2>
            </div>
            <div className="hidden lg:block text-right max-w-md">
              <p className="text-base text-neutral-600 leading-relaxed">
                {t('projects.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={{
                ...project,
                name: t(`${project.translationKey}.name`),
                type: t(`${project.translationKey}.type`),
                problem: t(`${project.translationKey}.problem`),
                impact: t(`${project.translationKey}.impact`),
                href: `/projetos/${project.slug}`,
                underConstruction: project.status === 'draft',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
