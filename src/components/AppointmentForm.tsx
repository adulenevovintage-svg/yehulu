import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AppointmentForm = () => {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="appointment" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-600 rounded-[3rem] overflow-hidden shadow-2xl shadow-primary-200 dark:shadow-none">
          <div className="grid lg:grid-cols-2">
            {/* Info Side */}
            <div className="p-12 lg:p-20 text-white">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-primary-200 font-bold tracking-widest uppercase text-sm mb-4">Book Your Visit</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Take the First Step to <br />Better Brain Health</h3>
                <p className="text-primary-100 text-lg mb-12 leading-relaxed">
                  Our specialists are ready to help you. Fill out the form to request an appointment, and our team will contact you within 24 hours to confirm.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-2xl">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-xl">Direct Booking</p>
                      <p className="text-primary-100">+251 11 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-2xl">
                      <AlertCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-xl">Emergency Care</p>
                      <p className="text-primary-100">For urgent neurological emergencies, please visit our clinic immediately or call our 24/7 line.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Form Side */}
            <div className="bg-white dark:bg-slate-900 p-8 lg:p-16">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center">
                          <User className="h-4 w-4 mr-2 text-primary-600" /> {t('contact.form.name')}
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-primary-600" /> {t('contact.phone')}
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="+251 911..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-primary-600" /> {t('contact.email')}
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-primary-600" /> {t('appointment.form.date')}
                        </label>
                        <input
                          required
                          type="date"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-primary-600" /> {t('appointment.form.service')}
                        </label>
                        <select className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all">
                          <option>Morning (08:00 - 12:00)</option>
                          <option>Afternoon (13:00 - 17:00)</option>
                          <option>Evening (17:00 - 19:00)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-primary-600" /> {t('contact.form.message')}
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Briefly describe your symptoms or reason for the visit..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all resize-none"
                      ></textarea>
                    </div>

                    <button
                      disabled={loading}
                      type="submit"
                      className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-100 dark:shadow-none flex items-center justify-center"
                    >
                      {loading ? (
                        <div className="h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        t('appointment.form.submit')
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center p-8"
                  >
                    <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-full mb-6">
                      <CheckCircle2 className="h-16 w-16 text-green-600 dark:text-green-400" />
                    </div>
                    <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Request Received!</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
                      Thank you for choosing YEHULESHET SPECIALITY CLINIC. Our patient coordinator will contact you shortly to finalize your appointment.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary-600 dark:text-primary-400 font-bold hover:underline"
                    >
                      Book another appointment
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
