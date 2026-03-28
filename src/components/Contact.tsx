import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Navigation, PhoneCall } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary-600" />,
      title: t('contact.phoneLabel'),
      details: "+251 11 123 4567",
      subDetails: "Mon-Fri (08:00 - 19:00)"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary-600" />,
      title: t('contact.emailLabel'),
      details: "info@yehulushetclinic.com",
      subDetails: "24/7 Support"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary-600" />,
      title: t('contact.locationLabel'),
      details: t('contact.address'),
      subDetails: "Ethiopia"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary-600" />,
      title: t('contact.hoursLabel'),
      details: t('contact.hoursDetails'),
      subDetails: t('contact.hoursSub')
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4">{t('contact.subtitle')}</h2>
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              {t('contact.title').split(' ').map((word, i) => 
                word === 'Help' || word === 'You' || word === 'እርስዎን' || word === 'ለመርዳት' ? <span key={i} className="text-primary-600"> {word}</span> : ` ${word}`
              )}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 leading-relaxed">
              {t('contact.description')}
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary-50 dark:bg-primary-900/30 p-3 rounded-2xl">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{info.title}</p>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm">{info.details}</p>
                    <p className="text-slate-500 dark:text-slate-500 text-xs">{info.subDetails}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-700 transition-all flex items-center justify-center shadow-lg shadow-primary-100 dark:shadow-none">
                <PhoneCall className="mr-2 h-5 w-5" /> {t('contact.callNow')}
              </button>
              <button className="flex-1 bg-slate-900 dark:bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 dark:hover:bg-slate-700 transition-all flex items-center justify-center">
                <Navigation className="mr-2 h-5 w-5" /> {t('contact.getDirections')}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[500px] rounded-[3rem] overflow-hidden border-8 border-slate-50 dark:border-slate-800 shadow-2xl relative"
          >
            {/* Placeholder for Google Map */}
            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 flex flex-col items-center justify-center text-center p-8">
              <MapPin className="h-16 w-16 text-slate-400 dark:text-slate-600 mb-4" />
              <p className="text-slate-500 dark:text-slate-400 font-bold text-xl mb-2">{t('contact.mapPlaceholder')}</p>
              <p className="text-slate-400 dark:text-slate-500 max-w-xs">{t('contact.mapDescription')}</p>
            </div>
            {/* Real map would be an iframe here */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
