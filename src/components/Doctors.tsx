import { motion } from 'motion/react';
import { Linkedin, Mail, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Doctors = () => {
  const { t } = useLanguage();

  const specialists = [
    {
      name: t('doctors.d1.name'),
      role: t('doctors.d1.role'),
      specialty: t('doctors.d1.specialty'),
      image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/222eb9a1-02f1-4ddd-91a0-5b2508d2ebcc.webp",
      bio: t('doctors.d1.desc')
    },
    {
      name: t('doctors.d2.name'),
      role: t('doctors.d2.role'),
      specialty: t('doctors.d2.specialty'),
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800",
      bio: t('doctors.d2.desc')
    },
    {
      name: t('doctors.d3.name'),
      role: t('doctors.d3.role'),
      specialty: t('doctors.d3.specialty'),
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
      bio: t('doctors.d3.desc')
    }
  ];

  return (
    <section id="doctors" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4">{t('doctors.subtitle')}</h2>
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              {t('doctors.title').split(' ').map((word, i) => 
                word === 'Specialists' || word === 'ስፔሻሊስቶች' ? <span key={i} className="text-primary-600"> {word}</span> : ` ${word}`
              )}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              {t('common.respected')}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {specialists.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                  <div className="flex space-x-4">
                    <button className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/40 transition-colors text-white">
                      <Linkedin className="h-5 w-5" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/40 transition-colors text-white">
                      <Mail className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{doc.name}</h4>
                  <p className="text-primary-600 font-bold text-sm uppercase tracking-wider">{doc.role}</p>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-4 bg-slate-50 dark:bg-slate-700 px-3 py-1 rounded-full inline-block">
                  {doc.specialty}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {doc.bio}
                </p>
                <button className="w-full flex items-center justify-center space-x-2 bg-slate-900 dark:bg-primary-600 text-white py-3 rounded-xl font-bold hover:bg-primary-600 dark:hover:bg-primary-700 transition-colors">
                  <Calendar className="h-4 w-4" />
                  <span>{t('nav.book')}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
