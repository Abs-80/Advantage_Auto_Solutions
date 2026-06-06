import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { servicesData } from '../types';
import * as Icons from 'lucide-react';

export function Services() {
  const { t } = useTranslation();

  return (
    <div className="w-full pb-24 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4"
          >
            {t('services.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 max-w-[540px] leading-relaxed"
          >
            {t('services.desc')}
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {servicesData.map((service, index) => {
            const Icon = Icons[service.iconName] as React.ElementType;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-slate-200 flex flex-col p-5 gap-3"
              >
                  <h3 className="text-base font-bold text-slate-700 m-0">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-[13px] text-slate-400 m-0 leading-relaxed">
                    {t(service.descKey)}
                  </p>
                   <Link
                     to={`/contact?service=${service.id}`}
                     className="mt-auto w-full bg-slate-100 hover:bg-slate-200 text-slate-600 p-2 rounded-md font-bold text-xs text-center transition-colors flex items-center justify-center"
                   >
                     {t('action.requestQuote')}
                   </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
