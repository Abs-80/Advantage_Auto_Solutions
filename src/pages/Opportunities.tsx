import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Briefcase, CheckCircle2, MapPin, Mail, ArrowRight } from 'lucide-react';

export function Opportunities() {
  const { t } = useTranslation();

  return (
    <div className="relative flex-1 bg-slate-950 pt-24 pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <img 
          src={`${import.meta.env.BASE_URL}LF7_9370+(2).webp`} 
          alt="Opportunities Background" 
          className="w-full h-full object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[32px] font-display font-bold text-white mb-4"
          >
            {t('opp.title')}
          </motion.h1>
          <div className="w-16 h-1 bg-amber-500 rounded"></div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1 }}
           className="bg-slate-900/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/5 overflow-hidden"
        >
          <div className="p-8 md:p-10 border-b border-white/5 bg-slate-900/40 relative overflow-hidden">
             {/* Abstract background element */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
             
             <div className="relative z-10">
               <div className="flex items-center gap-3 mb-6">
                 <span className="bg-amber-500/20 text-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md border border-amber-500/20">New</span>
                 <span className="text-slate-400 text-sm flex items-center"><MapPin className="w-4 h-4 mr-1"/> UK Nationwide</span>
               </div>
               <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 leading-tight">
                 {t('opp.job.title')}
               </h2>
               <p className="text-slate-400 leading-relaxed text-base max-w-3xl">
                 {t('opp.job.desc')}
               </p>
             </div>
          </div>

          <div className="p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               {/* Left Column */}
               <div>
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-amber-500" />
                    {t('opp.job.req.title')}
                  </h3>
                  <ul className="space-y-4">
                    {[1, 2, 3].map((num) => (
                       <li key={num} className="flex text-sm text-slate-300 leading-relaxed">
                         <CheckCircle2 className="w-5 h-5 mr-3 text-green-500 shrink-0" />
                         <span>{t(`opp.job.req.${num}`)}</span>
                       </li>
                    ))}
                  </ul>
               </div>

               {/* Right Column */}
               <div>
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                    <ArrowRight className="w-5 h-5 mr-2 text-amber-500" />
                    {t('opp.job.why.title')}
                  </h3>
                  <ul className="space-y-4">
                    {[1, 2, 3].map((num) => (
                       <li key={num} className="flex text-sm text-slate-300 leading-relaxed">
                         <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 shrink-0"></div>
                         <span>{t(`opp.job.why.${num}`)}</span>
                       </li>
                    ))}
                  </ul>
               </div>
            </div>

            <div className="mt-10 bg-slate-800 p-6 rounded-xl border border-slate-700">
               <p className="text-sm text-slate-300 font-medium">
                 {t('opp.job.locations')}
               </p>
            </div>

            {/* Apply Section */}
            <div className="mt-10 pt-10 border-t border-slate-800">
               <h3 className="text-xl font-display font-bold text-white mb-4">
                 {t('opp.job.apply.title')}
               </h3>
               <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                 {t('opp.job.apply.desc')}
               </p>
               
               <a 
                 href={`mailto:${t('opp.job.email')}`}
                 className="inline-flex items-center justify-center w-full md:w-auto px-6 py-4 rounded-xl text-base font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 transition-colors shadow-sm"
               >
                 <Mail className="w-5 h-5 mr-2" />
                 {t('opp.job.email')}
               </a>
               
               <p className="mt-6 text-sm font-medium text-slate-500 italic">
                 {t('opp.job.call')}
               </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
