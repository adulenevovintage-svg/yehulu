import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EEGShowcase from './components/EEGShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Doctors from './components/Doctors';
import AppointmentForm from './components/AppointmentForm';
import PatientPortal from './components/PatientPortal';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoSplash from './components/VideoSplash';
import { LanguageProvider } from './context/LanguageContext';
import { DarkModeProvider } from './context/DarkModeContext';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const videoUrl = "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/8e47b9ce-cf79-47fa-ba93-6700818bb15a.mp4";

  const handleVideoEnd = () => {
    setShowSplash(false);
  };

  useEffect(() => {
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#')) {
        const element = document.querySelector(link.hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // Update URL hash without jumping
          window.history.pushState(null, '', link.hash);
        }
      }
    };

    document.addEventListener('click', handleHashClick);
    return () => document.removeEventListener('click', handleHashClick);
  }, []);

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showSplash]);

  return (
    <DarkModeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-primary-100 selection:text-primary-900 transition-colors duration-300">
          <AnimatePresence mode="wait">
            {showSplash ? (
              <motion.div
                key="splash"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <VideoSplash onVideoEnd={handleVideoEnd} videoUrl={videoUrl} />
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <Navbar />
                <main>
                  <Hero />
                  <About />
                  <EEGShowcase />
                  <WhyChooseUs />
                  <Services />
                  <Doctors />
                  <AppointmentForm />
                  <PatientPortal />
                  <Testimonials />
                  <FAQ />
                  <Contact />
                </main>
                <Footer />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </LanguageProvider>
    </DarkModeProvider>
  );
}
