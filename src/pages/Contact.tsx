import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';

export function Contact() {
  const { t } = useTranslation();

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
        <div className="mb-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-display font-medium text-white mb-3"
          >
            {t('contact.title.custom')}
          </motion.h1>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="bg-slate-900/50 backdrop-blur-2xl rounded-sm shadow-2xl border border-white/10 p-8 md:p-10 relative overflow-hidden"
        >
          {/* Abstract glow */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>

          <div className="flex flex-col gap-6">
            <a 
              href="https://www.linkedin.com/company/advantage-automotive-solutions-wll/posts/?feedView=all" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-4 py-4 bg-[#0A66C2]/10 border border-[#0A66C2]/30 hover:bg-[#0A66C2] hover:border-[#0A66C2] text-white text-sm font-bold tracking-widest uppercase rounded-sm transition-all w-full hover:shadow-[0_4px_20px_rgba(10,102,194,0.4)] backdrop-blur-sm"
            >
              <Linkedin className="w-5 h-5 mr-3" />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
