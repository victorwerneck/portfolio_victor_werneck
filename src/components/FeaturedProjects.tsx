import { ProjectCard } from './ProjectCard';
import { Briefcase, ShoppingCart, Users, Layout, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FeaturedProjectsProps {
  onProjectClick: (caseId: string) => void;
}

export function FeaturedProjects({ onProjectClick }: FeaturedProjectsProps) {
  const { t } = useLanguage();
  const projects = [
    {
      id: 1,
      caseId: 'portal-do-parceiro',
      name: t('project1.name'),
      type: t('project1.type'),
      problem: t('project1.problem'),
      impact: t('project1.impact'),
      icon: Users,
      imageUrl: 'https://i.imgur.com/UlWzhaP.png',
    },
    {
      id: 2,
      caseId: 'ppw',
      name: t('project2.name'),
      type: t('project2.type'),
      problem: t('project2.problem'),
      impact: t('project2.impact'),
      icon: Layout,
      imageUrl: 'https://img.notionusercontent.com/s3/prod-files-secure%2F2e93a4fe-fd09-4539-8895-3418219963fd%2F168a22a9-1ea5-4d71-8a96-839f97cf79bd%2FFrame_3279.png/size/w=2000?exp=1770214600&sig=US_aZMmf2r22Bj8VCUTkL7087bD2QkE9kRIASRrNHwE&id=14bba466-e012-41a3-8bfa-e34a415dc7d0&table=block',
      underConstruction: true,
    },
    {
      id: 3,
      caseId: 'lensly',
      name: t('project3.name'),
      type: t('project3.type'),
      problem: t('project3.problem'),
      impact: t('project3.impact'),
      icon: Smartphone,
      imageUrl: 'https://images.unsplash.com/photo-1683818051102-dd1199d163b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvZHVjdCUyMGRlc2lnbnxlbnwxfHx8fDE3NzAwMjI3MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      underConstruction: true,
    },
  ];

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
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              onClick={() => onProjectClick(project.caseId)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
