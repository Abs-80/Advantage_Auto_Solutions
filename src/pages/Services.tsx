import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { servicesData } from '../types';
import * as Icons from 'lucide-react';

export function Services() {
  const { t } = useTranslation();

  return (
    <div className="w-full pb-24 bg-slate-950 min-h-screen">
      {/* Header */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-800/50 mb-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
          <img 
            src={`${import.meta.env.BASE_URL}LF7_9304+(2).webp`} 
            alt="Services Background" 
            className="w-full h-full object-cover object-center grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4"
          >
            {t('services.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-[540px] leading-relaxed"
          >
            {t('services.desc')}
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicesData.map((service, index) => {
            const Icon = Icons[service.iconName] as React.ElementType;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/40 backdrop-blur-xl rounded-xl border border-white/5 flex flex-col p-6 gap-4 hover:bg-slate-900/60 transition-all hover:border-white/10 hover:-translate-y-1 shadow-2xl"
              >
                  <h3 className="text-lg font-bold text-white m-0 tracking-wide">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-sm text-slate-400 m-0 leading-relaxed font-light">
                    {t(service.descKey)}
                  </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
