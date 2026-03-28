import { motion } from 'motion/react';
import { Award, Users, Cpu, HeartPulse, Building2, UserCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: t('why.feat1.title'),
      description: t('why.feat1.desc')
    },
    {
      icon: <HeartPulse className="h-8 w-8 text-primary-600" />,
      title: t('why.feat2.title'),
      description: t('why.feat2.desc')
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary-600" />,
      title: t('why.feat3.title'),
      description: t('why.feat3.desc')
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: t('why.feat4.title'),
      description: t('why.feat4.desc')
    },
    {
      icon: <UserCheck className="h-8 w-8 text-primary-600" />,
      title: t('why.feat5.title'),
      description: t('why.feat5.desc')
    },
    {
      icon: <Building2 className="h-8 w-8 text-primary-600" />,
      title: t('why.feat6.title'),
      description: t('why.feat6.desc')
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4">{t('why.badge')}</h2>
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">{t('why.title')}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              {t('why.description')}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-primary-50 dark:bg-primary-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
