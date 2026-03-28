import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t('test.t1.name'),
      role: t('test.t1.role'),
      content: t('test.t1.content'),
      rating: 5
    },
    {
      name: t('test.t2.name'),
      role: t('test.t2.role'),
      content: t('test.t2.content'),
      rating: 5
    },
    {
      name: t('test.t3.name'),
      role: t('test.t3.role'),
      content: t('test.t3.content'),
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4">{t('test.badge')}</h2>
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              {t('test.title')} <span className="text-primary-600">{t('test.titleAccent')}</span>
            </h3>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl relative border border-slate-100 dark:border-slate-800"
            >
              <Quote className="absolute top-6 right-8 h-12 w-12 text-primary-200 dark:text-primary-900 opacity-50" />
              <div className="flex mb-4">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 italic mb-6 leading-relaxed relative z-10">
                "{test.content}"
              </p>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">{test.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-500">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
