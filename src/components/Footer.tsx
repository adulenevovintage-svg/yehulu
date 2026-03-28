import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white pt-24 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/93bc3f9c-60dc-4b38-9aae-76efb948b11e.jpg" 
                alt={`${t('about.title').replace('About ', '').replace('ስለ ', '')} Logo`} 
                className="h-14 w-14 object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
              <span className="font-bold text-2xl tracking-tight">
                {t('common.clinicName').split(' ').slice(0, -1).join(' ')} <span className="text-primary-400">{t('common.clinicName').split(' ').slice(-1)}</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a key={index} href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary-600 transition-all">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4">
              {[
                { name: t('nav.home'), link: 'home' },
                { name: t('nav.about'), link: 'about' },
                { name: t('nav.eeg'), link: 'eeg' },
                { name: t('nav.doctors'), link: 'doctors' },
                { name: t('nav.portal'), link: 'portal' },
                { name: t('nav.faq'), link: 'faq' }
              ].map((item) => (
                <li key={item.link}>
                  <a href={`#${item.link}`} className="text-slate-400 hover:text-primary-400 transition-colors flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">{t('footer.services')}</h4>
            <ul className="space-y-4">
              {[
                t('services.s1.title'),
                t('services.s2.title'),
                t('services.s3.title'),
                t('services.s4.title'),
                t('services.s5.title'),
                t('services.s6.title')
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-slate-400 hover:text-primary-400 transition-colors flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">{t('footer.contact')}</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary-400 shrink-0" />
                <span className="text-slate-400">Bole Road, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-primary-400 shrink-0" />
                <span className="text-slate-400">+251 11 123 4567</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary-400 shrink-0" />
                <span className="text-slate-400">info@yehulushetclinic.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            {t('footer.rights')}
          </p>
          <div className="flex space-x-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
