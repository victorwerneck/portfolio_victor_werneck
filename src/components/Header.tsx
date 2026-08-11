import { Menu, Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  onNavigateHome?: () => void;
}

export function Header({ onNavigateHome }: HeaderProps = {}) {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div>
            <button 
              onClick={onNavigateHome} 
              className="text-xl text-neutral-900 font-medium tracking-tight hover:text-neutral-600 transition-colors duration-300 cursor-pointer"
            >
              Portfólio | Victor Werneck
            </button>
          </div>

          {/* Navigation & CTA */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#projetos"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-300 tracking-wide"
            >
              {t('header.projects')}
            </a>
            <a
              href="/#sobre"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-300 tracking-wide"
            >
              {t('header.about')}
            </a>
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 px-3 py-2 border border-neutral-200 rounded-full">
              <Globe className="w-4 h-4 text-neutral-400" />
              <button
                onClick={() => setLanguage('pt')}
                className={`text-xs font-medium transition-colors duration-300 ${
                  language === 'pt' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-600'
                }`}
              >
                PT
              </button>
              <span className="text-neutral-300">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`text-xs font-medium transition-colors duration-300 ${
                  language === 'en' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-600'
                }`}
              >
                EN
              </button>
            </div>

            <a 
              href="https://wa.me/5561982084893?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-neutral-900 text-white text-sm rounded-full hover:bg-neutral-800 transition-all duration-300"
            >
              {t('header.contact')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            type="button"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 transition-colors duration-300"
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isMenuOpen && (
          <nav id="mobile-navigation" className="md:hidden pt-6 pb-2 border-t border-neutral-200 mt-6">
            <div className="flex flex-col gap-4">
              <a href="/#projetos" onClick={() => setIsMenuOpen(false)} className="py-2 text-neutral-700">
                {t('header.projects')}
              </a>
              <a href="/#sobre" onClick={() => setIsMenuOpen(false)} className="py-2 text-neutral-700">
                {t('header.about')}
              </a>
              <div className="flex items-center gap-3 py-2" aria-label="Idioma">
                <Globe className="w-4 h-4 text-neutral-400" />
                <button type="button" onClick={() => setLanguage('pt')} className={language === 'pt' ? 'text-neutral-900 font-medium' : 'text-neutral-500'}>
                  PT
                </button>
                <span className="text-neutral-300">|</span>
                <button type="button" onClick={() => setLanguage('en')} className={language === 'en' ? 'text-neutral-900 font-medium' : 'text-neutral-500'}>
                  EN
                </button>
              </div>
              <a
                href="https://wa.me/5561982084893?text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-6 py-3 bg-neutral-900 text-white text-center rounded-full"
              >
                {t('header.contact')}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
