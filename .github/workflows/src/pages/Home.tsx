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
      <section className="relative w-full min-h-[85vh] flex flex-col justify-center pt-16 pb-16 overflow-hidden bg-slate-900 border-b border-slate-800">
        {/* Background Image Setup for Depth */}
        <div className="absolute inset-0 z-0 opacity-60">
          <img 
            src="/hero-bg.jpg" 
            alt="European Classic Automotive Studio" 
            className="w-full h-full object-cover object-center transform scale-105"
          />
          {/* Layered gradients to ensure text legibility and fade into the next section */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-start w-full">
          
          <div className="w-full max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-xl"
            >
              <div dangerouslySetInnerHTML={{ __html: t('hero.title').replace(', ', ',<br/>') }} />
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-[540px] leading-relaxed drop-shadow-md"
            >
              {t('hero.subtitle')}
            </motion.p>
            
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="flex flex-wrap gap-4"
            >
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors shadow-lg group"
              >
                {t('hero.cta')}
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/opportunities" 
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg border border-white/20 transition-colors shadow-lg"
              >
                View Opportunities
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="relative py-24 bg-slate-900 border-b border-slate-800 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-60">
          <img 
            src="/history-bg.jpeg" 
            alt="Years of Experience" 
            className="w-full h-full object-cover object-center grayscale"
          />
          {/* Layered gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-[540px]">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-tight drop-shadow-md">
              {t('about.title')}
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg drop-shadow-sm">
              {t('about.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-start">
            <div>
              <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center mb-8 border border-amber-500/20 shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-tight">
                {t('global.title')}
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8 max-w-[540px]">
                {t('global.desc')}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Middle East', 'Asia', 'North America', 'Europe / UK'].map((region) => (
                  <div key={region} className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center text-sm font-bold text-slate-300 shadow-sm hover:border-amber-500/30 transition-colors">
                    {region}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative isolate flex justify-center lg:justify-end w-full">
               <div className="w-full bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
                  <div className="flex items-center space-x-3 mb-4 relative z-10">
                     <BarChart3 className="w-6 h-6 text-amber-500" />
                     <h3 className="text-lg font-display font-bold text-white">Performance</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed relative z-10">
                    "Because when your performance accelerates, so does ours."
                  </p>
                  <Link 
                    to="/contact" 
                    className="mt-6 w-full inline-flex items-center justify-center px-4 py-3 text-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors relative z-10"
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
