import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../types';

export function Contact() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const defaultService = searchParams.get('service') || 'general';

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: defaultService,
    message: ''
  });

  useEffect(() => {
    if (searchParams.get('service')) {
      setFormData(prev => ({ ...prev, service: searchParams.get('service')! }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we'd typically send data to an API endpoint
    console.log("Mock Submission:", formData);
    setIsSubmitted(true);
  };

  return (
    <div className="relative flex-1 bg-slate-950 pt-24 pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <img 
          src={`${import.meta.env.BASE_URL}LF7_9372+(2).webp`} 
          alt="Contact Background" 
          className="w-full h-full object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[20px] font-display font-bold text-white mb-2"
          >
            {t('contact.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-slate-400"
          >
            {t('contact.desc')}
          </motion.p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="bg-slate-900/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/5 p-8 relative overflow-hidden"
        >
          {/* Abstract glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>

          {isSubmitted ? (
             <div className="text-center py-16">
               <div className="mx-auto w-16 h-16 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mb-6">
                 <CheckCircle2 className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-display font-medium text-white mb-2">Message Sent</h3>
               <p className="text-slate-400">We'll get back to you and schedule an inquiry soon.</p>
               <button 
                 onClick={() => setIsSubmitted(false)}
                 className="mt-8 text-amber-500 hover:text-amber-400 font-medium"
               >
                 Send another message
               </button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={t('contact.form.name') as string}
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-colors text-sm text-white placeholder-slate-400 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={t('contact.form.email') as string}
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-colors text-sm text-white placeholder-slate-400 backdrop-blur-sm"
                  />
                </div>
              </div>

              <div>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-colors text-sm text-white backdrop-blur-sm"
                >
                  <option value="general">{t('contact.form.service.general')}</option>
                  {servicesData.map(service => (
                    <option key={service.id} value={service.id}>
                      {t(service.titleKey)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={3}
                  placeholder={t('contact.form.message') as string}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-colors text-sm text-white placeholder-slate-400 resize-none h-20 backdrop-blur-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 flex justify-center items-center p-3.5 rounded-lg text-base font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 transition-colors focus:outline-none cursor-pointer"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
