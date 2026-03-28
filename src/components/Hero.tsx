import { motion } from 'motion/react';
import { ArrowRight, Activity, ShieldCheck, Stethoscope, Brain } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-50 transition-colors" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-primary-50 dark:bg-primary-800/10 rounded-full blur-3xl opacity-50 transition-colors" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Activity className="h-4 w-4" />
              <span>{t('eeg.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-xl shadow-primary-200 dark:shadow-none group"
              >
                {t('hero.cta.book')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
              >
                {t('hero.cta.services')}
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-2">
                <div className="bg-white dark:bg-slate-900 p-2 rounded-lg shadow-sm">
                  <ShieldCheck className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{t('common.certified')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-white dark:bg-slate-900 p-2 rounded-lg shadow-sm">
                  <Stethoscope className="h-5 w-5 text-primary-500" />
                </div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{t('common.modern')}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070"
                alt="Medical Specialist"
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl max-w-[240px] border border-slate-100 dark:border-slate-800"
            >
              <div className="flex items-center space-x-4 mb-3">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full">
                  <Brain className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">{t('common.neurology')}</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{t('common.expertCare')}</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('common.specialized')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
