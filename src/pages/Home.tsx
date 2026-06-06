import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, MapPin, BarChart3, ChevronRight } from 'lucide-react';

export function Home() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full pt-20 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-start">
          
          <div className="w-full max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-display font-bold tracking-tight text-slate-900 leading-[1.1] mb-6"
            >
              <div dangerouslySetInnerHTML={{ __html: t('hero.title').replace(', ', ',<br/>') }} />
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-500 mb-8 max-w-[540px] leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>
            
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors group"
              >
                {t('hero.cta')}
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[540px]">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
              {t('about.title')}
            </h2>
            <p className="text-slate-500 leading-relaxed">
              {t('about.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-start">
            <div>
              <div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                {t('global.title')}
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8 max-w-[540px]">
                {t('global.desc')}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Middle East', 'Asia', 'North America', 'Europe / UK'].map((region) => (
                  <div key={region} className="bg-white p-4 rounded-xl border border-slate-200 text-center text-sm font-bold text-slate-800 shadow-sm">
                    {region}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative isolate flex justify-center lg:justify-end w-full">
               <div className="w-full bg-white p-8 rounded-2xl border border-slate-200 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)]">
                  <div className="flex items-center space-x-3 mb-4">
                     <BarChart3 className="w-6 h-6 text-blue-600" />
                     <h3 className="text-lg font-display font-bold text-slate-900">Performance</h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    "Because when your performance accelerates, so does ours."
                  </p>
                  <Link 
                    to="/contact" 
                    className="mt-6 w-full inline-flex items-center justify-center px-4 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    Set up an Inquiry
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
