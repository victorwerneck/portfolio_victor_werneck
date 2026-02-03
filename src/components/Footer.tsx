import { Mail, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer id="contato" className="bg-neutral-900 text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Left Column - CTA */}
          <div>
            <p className="text-xs tracking-[0.2em] text-neutral-400 uppercase mb-8 font-medium">
              {t('footer.label')}
            </p>
            <h3 className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-[-0.02em] mb-10">
              {t('footer.title1')}
              <br />
              <span className="text-neutral-500">{t('footer.title2')}</span>
            </h3>
            <p className="text-lg text-neutral-300 leading-relaxed mb-12 max-w-xl">
              {t('footer.description')}
            </p>
            <a
              href="mailto:victorwerneckster@gmail.com"
              className="group inline-flex items-center gap-4 px-10 py-5 bg-white text-neutral-900 hover:bg-neutral-100 transition-all duration-300 hover:gap-6"
            >
              <Mail className="w-5 h-5" />
              <span className="text-base font-medium">{t('footer.email')}</span>
              <ArrowUpRight className="w-5 h-5 opacity-50" />
            </a>
          </div>

          {/* Right Column - Links & Info */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm text-neutral-400 mb-6">{t('footer.connect')}</p>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/victor-werneck/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 border border-neutral-800 hover:border-white hover:bg-white hover:text-neutral-900 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <Linkedin className="w-5 h-5" />
                    <span className="text-base">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <a
                  href="https://www.instagram.com/vtrwerneck/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 border border-neutral-800 hover:border-white hover:bg-white hover:text-neutral-900 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <Instagram className="w-5 h-5" />
                    <span className="text-base">Instagram</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="mt-12">
              <div className="inline-flex items-center gap-3 px-4 py-3 border border-neutral-800">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-neutral-300">
                  {t('footer.available')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-sm text-neutral-500">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-8 text-sm text-neutral-400">
            <span>{t('footer.location')}</span>
            <span>•</span>
            <span>UTC-3</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
