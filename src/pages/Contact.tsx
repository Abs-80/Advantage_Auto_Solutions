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
    <div className="flex-1 bg-slate-50 pt-16 pb-32">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[20px] font-display font-bold text-slate-900 mb-2"
          >
            {t('contact.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-slate-500"
          >
            {t('contact.desc')}
          </motion.p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="bg-white rounded-2xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] border border-slate-200 p-8"
        >
          {isSubmitted ? (
             <div className="text-center py-16">
               <div className="mx-auto w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                 <CheckCircle2 className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-display font-medium text-slate-900 mb-2">Message Sent</h3>
               <p className="text-slate-600">We'll get back to you and schedule an inquiry soon.</p>
               <button 
                 onClick={() => setIsSubmitted(false)}
                 className="mt-8 text-blue-600 hover:text-blue-700 font-medium"
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
                    className="w-full p-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors text-sm"
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
                    className="w-full p-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors bg-white text-sm"
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
                  className="w-full p-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors text-sm resize-none h-20"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 flex justify-center items-center p-3.5 rounded-lg text-base font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none cursor-pointer"
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
