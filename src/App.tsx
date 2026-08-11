import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { PortalDoParceiro } from './pages/PortalDoParceiro';

export default function App() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route
          path="/"
          element={
          <>
            <Header onNavigateHome={navigateToHome} />
            <Hero />
            <FeaturedProjects />
            <About />
            <Footer />
          </>
          }
        />
        <Route
          path="/projetos/portal-do-parceiro"
          element={<PortalDoParceiro onBackToHome={navigateToHome} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
