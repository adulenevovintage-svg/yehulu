import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LogIn, UserPlus, Mail, Lock, User, Phone, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PatientPortal = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { t } = useLanguage();

  return (
    <section id="portal" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4">{t('portal.badge')}</h2>
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              {t('portal.title')} <br />
              <span className="text-primary-600">{t('portal.titleAccent')}</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              {t('portal.description')}
            </p>
            
            <div className="space-y-6">
              {[
                t('portal.f1'),
                t('portal.f2'),
                t('portal.f3'),
                t('portal.f4')
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg">
                    <ShieldCheck className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
              <div className="flex border-b border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-6 font-bold text-lg transition-all ${isLogin ? 'text-primary-600 border-b-2 border-primary-600' : 'text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-400'}`}
                >
                  {t('portal.login')}
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-6 font-bold text-lg transition-all ${!isLogin ? 'text-primary-600 border-b-2 border-primary-600' : 'text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-400'}`}
                >
                  {t('portal.signup')}
                </button>
              </div>

              <div className="p-8 md:p-12">
                <AnimatePresence mode="wait">
                  {isLogin ? (
                    <motion.div
                      key="login"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center">
                          <Mail className="h-4 w-4 mr-2 text-primary-600" /> {t('portal.emailPhone')}
                        </label>
                        <input
                          type="text"
                          placeholder={t('portal.emailPhonePlaceholder')}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-600 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center">
                            <Lock className="h-4 w-4 mr-2 text-primary-600" /> {t('portal.password')}
                          </label>
                          <button className="text-xs text-primary-600 font-bold hover:underline">{t('portal.forgot')}</button>
                        </div>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-600 outline-none transition-all"
                        />
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="remember" className="h-4 w-4 text-primary-600 rounded border-slate-300 dark:border-slate-700 focus:ring-primary-600" />
                        <label htmlFor="remember" className="ml-2 text-sm text-slate-600 dark:text-slate-400 font-medium">{t('portal.remember')}</label>
                      </div>
                      <button className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-all flex items-center justify-center">
                        <LogIn className="mr-2 h-5 w-5" /> {t('portal.loginBtn')}
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="signup"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center">
                          <User className="h-3 w-3 mr-2 text-primary-600" /> {t('portal.fullName')}
                        </label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-600 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center">
                          <Mail className="h-3 w-3 mr-2 text-primary-600" /> {t('portal.email')}
                        </label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-600 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center">
                          <Phone className="h-3 w-3 mr-2 text-primary-600" /> {t('portal.phone')}
                        </label>
                        <input
                          type="tel"
                          placeholder="+251..."
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-600 outline-none transition-all"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center">
                            <Lock className="h-3 w-3 mr-2 text-primary-600" /> {t('portal.password')}
                          </label>
                          <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-600 outline-none transition-all"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center">
                            <Lock className="h-3 w-3 mr-2 text-primary-600" /> {t('portal.confirm')}
                          </label>
                          <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-600 outline-none transition-all"
                          />
                        </div>
                      </div>
                      <button className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-all flex items-center justify-center mt-4">
                        <UserPlus className="mr-2 h-5 w-5" /> {t('portal.createBtn')}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientPortal;
