import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  name: string;
  type: string;
  problem: string;
  impact?: string;
  imageUrl: string;
  href: string;
  underConstruction?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage();

  const content = (
    <article className={`group bg-white overflow-hidden hover:shadow-2xl hover:shadow-neutral-900/5 transition-all duration-700 border border-neutral-200 flex flex-col h-full ${project.underConstruction ? 'opacity-75' : ''}`}>
      {/* Image Section */}
      <div className="relative h-[320px] overflow-hidden bg-neutral-100">
        <ImageWithFallback
          src={project.imageUrl}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/10 via-transparent to-transparent" />
        
        {/* Under Construction Badge */}
        {project.underConstruction && (
          <div className="absolute top-6 left-6 px-4 py-2 bg-amber-500 text-white text-xs font-medium rounded-md uppercase tracking-wide">
            {t('projects.underConstruction')}
          </div>
        )}
        
        {/* Arrow Button */}
        {!project.underConstruction && (
          <div className="absolute top-6 right-6 w-12 h-12 border-2 border-white/80 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/20 group-hover:bg-neutral-900 group-hover:border-neutral-900 transition-all duration-500 group-hover:rotate-45">
            <ArrowUpRight className="w-6 h-6 text-white group-hover:text-white transition-colors duration-500" />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col justify-between flex-1 bg-white relative">
        {/* Type */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1.5 bg-neutral-100 text-neutral-700 text-xs rounded-md tracking-wide uppercase font-medium">
            {project.type}
          </span>
        </div>

        {/* Title */}
        <div className="mb-6 flex-1">
          <h3 className="text-2xl text-neutral-900 leading-[1.2] tracking-[-0.01em]">
            {project.name}
          </h3>
        </div>

        {/* Problem */}
        <div>
          <p className="text-sm text-neutral-700 leading-relaxed">
            {project.problem}
          </p>
          {project.impact && (
            <p className="mt-6 pt-6 border-t border-neutral-200 text-sm font-medium text-neutral-900">
              {project.impact}
            </p>
          )}
        </div>
      </div>
    </article>
  );

  if (project.underConstruction) {
    return <div aria-disabled="true">{content}</div>;
  }

  return (
    <Link to={project.href} aria-label={`${t('projects.view')}: ${project.name}`}>
      {content}
    </Link>
  );
}
