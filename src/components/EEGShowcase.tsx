import { motion } from 'motion/react';
import { Brain, Zap, Shield, Search, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const EEGShowcase = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Search className="h-6 w-6 text-primary-600" />,
      title: t('eeg.benefit1.title'),
      description: t('eeg.benefit1.desc')
    },
    {
      icon: <Zap className="h-6 w-6 text-primary-600" />,
      title: t('eeg.benefit2.title'),
      description: t('eeg.benefit2.desc')
    },
    {
      icon: <Shield className="h-6 w-6 text-primary-600" />,
      title: t('eeg.benefit3.title'),
      description: t('eeg.benefit3.desc')
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary-600" />,
      title: t('eeg.benefit4.title'),
      description: t('eeg.benefit4.desc')
    }
  ];

  return (
    <section id="eeg" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary-400 font-bold tracking-widest uppercase text-sm mb-4">{t('eeg.badge')}</h2>
            <h3 className="text-4xl font-bold mb-6">{t('eeg.title')}</h3>
            <p className="text-slate-400 text-lg">
              {t('eeg.description')}
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-primary-600/10 border border-primary-500/20 p-8 rounded-3xl backdrop-blur-sm">
              <h4 className="text-2xl font-bold mb-4 flex items-center">
                <Brain className="mr-3 text-primary-400" />
                {t('eeg.whatIs')}
              </h4>
              <p className="text-slate-300 leading-relaxed mb-6">
                {t('eeg.whatIsDesc')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 bg-primary-500/20 p-1 rounded">
                    <CheckCircle className="h-4 w-4 text-primary-400" />
                  </div>
                  <p className="text-slate-300"><span className="text-white font-semibold">{t('eeg.nonInvasive')}:</span> {t('eeg.nonInvasiveDesc')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 bg-primary-500/20 p-1 rounded">
                    <CheckCircle className="h-4 w-4 text-primary-400" />
                  </div>
                  <p className="text-slate-300"><span className="text-white font-semibold">{t('eeg.realTime')}:</span> {t('eeg.realTimeDesc')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 bg-primary-500/20 p-1 rounded">
                    <CheckCircle className="h-4 w-4 text-primary-400" />
                  </div>
                  <p className="text-slate-300"><span className="text-white font-semibold">{t('eeg.diagnosticPower')}:</span> {t('eeg.diagnosticPowerDesc')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h5 className="text-lg font-bold mb-2">{benefit.title}</h5>
                <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-primary-600 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h4 className="text-2xl md:text-3xl font-bold mb-4">{t('eeg.howItWorks.title')}</h4>
              <p className="text-primary-100 mb-6">
                {t('eeg.howItWorks.desc')}
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">{t('eeg.step1')}</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">{t('eeg.step2')}</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">{t('eeg.step3')}</span>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <a href="#appointment" className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold hover:bg-primary-50 transition-colors shadow-xl">
                {t('eeg.cta')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EEGShowcase;
