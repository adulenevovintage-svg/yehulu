import { motion } from 'motion/react';
import { Brain, Activity, Microscope, Scissors, ClipboardList, UserRoundCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Brain className="h-10 w-10 text-primary-600" />,
      title: t('services.s1.title'),
      description: t('services.s1.desc')
    },
    {
      icon: <Scissors className="h-10 w-10 text-primary-600" />,
      title: t('services.s2.title'),
      description: t('services.s2.desc')
    },
    {
      icon: <Activity className="h-10 w-10 text-primary-600" />,
      title: t('services.s3.title'),
      description: t('services.s3.desc')
    },
    {
      icon: <Microscope className="h-10 w-10 text-primary-600" />,
      title: t('services.s4.title'),
      description: t('services.s4.desc')
    },
    {
      icon: <ClipboardList className="h-10 w-10 text-primary-600" />,
      title: t('services.s5.title'),
      description: t('services.s5.desc')
    },
    {
      icon: <UserRoundCheck className="h-10 w-10 text-primary-600" />,
      title: t('services.s6.title'),
      description: t('services.s6.desc')
    }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4">{t('services.subtitle')}</h2>
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white">
              {t('services.title')}
            </h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 dark:text-slate-400 max-w-sm"
          >
            {t('services.desc')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-primary-600 dark:hover:bg-primary-600 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary-200 dark:hover:shadow-none"
            >
              <div className="bg-primary-50 dark:bg-primary-900/30 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500">
                <div className="group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-white transition-colors duration-500">{service.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-primary-50 transition-colors duration-500">{service.description}</p>
              <div className="mt-8 flex items-center text-primary-600 dark:text-primary-400 font-bold group-hover:text-white transition-colors duration-500 cursor-pointer">
                <span>{t('common.learnMore')}</span>
                <Activity className="ml-2 h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
