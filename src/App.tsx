import { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { PortalDoParceiro } from './pages/PortalDoParceiro';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'portal-do-parceiro' | 'ppw' | 'lensly'>('home');

  const navigateToCase = (caseId: string) => {
    setCurrentPage(caseId as any);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        {currentPage === 'home' ? (
          <>
            <Header onNavigateHome={navigateToHome} />
            <Hero />
            <FeaturedProjects onProjectClick={navigateToCase} />
            <About />
            <Footer />
          </>
        ) : currentPage === 'portal-do-parceiro' ? (
          <PortalDoParceiro onBackToHome={navigateToHome} />
        ) : null}
      </div>
    </LanguageProvider>
  );
}
