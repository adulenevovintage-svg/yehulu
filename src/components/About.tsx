import { motion } from 'motion/react';
import { CheckCircle2, Target, Eye, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Target className="h-6 w-6 text-primary-600" />,
      title: t('about.mission.title'),
      description: t('about.mission.desc')
    },
    {
      icon: <Eye className="h-6 w-6 text-primary-600" />,
      title: t('about.vision.title'),
      description: t('about.vision.desc')
    },
    {
      icon: <Heart className="h-6 w-6 text-primary-600" />,
      title: t('about.values.title'),
      description: t('about.values.desc')
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4">{t('about.subtitle')}</h2>
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {t('about.title')}
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {t('about.description')}
            </p>
            
            <div className="space-y-4">
              {[t('about.check1'), t('about.check2'), t('about.check3'), t('about.check4')].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="font-medium text-slate-700 dark:text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all"
              >
                <div className="bg-white dark:bg-slate-800 w-12 h-12 rounded-xl flex items-center justify-center shadow-sm mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{value.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
