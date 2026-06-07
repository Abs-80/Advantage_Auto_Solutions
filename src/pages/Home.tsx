import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ShieldCheck, MapPin, BarChart3, ChevronRight, Linkedin, User, Calendar } from 'lucide-react';

function SheenCard({ children, className = "", innerClassName = "" }: { children: React.ReactNode, className?: string, innerClassName?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const sheenX = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);
  const sheenY = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden transition-all ${className}`}>
      {/* Orange Sheen Effect */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          background: `linear-gradient(135deg, transparent 30%, rgba(245, 158, 11, 0.8) 50%, transparent 70%)`,
          x: sheenX,
          y: sheenY,
          scale: 2.5,
        }}
      />
      <div className={`relative z-10 w-full h-full ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
}

function LeadershipCard({ member }: { member: { name: string, role: string, linkedin: string } }) {
  return (
    <SheenCard 
      className="bg-slate-900 border border-white/5 rounded-2xl p-8 hover:border-amber-500/30 hover:bg-slate-800/50 shadow-lg"
      innerClassName="flex flex-col items-center text-center"
    >
      <div className="w-28 h-28 bg-slate-950 rounded-full mb-6 flex items-center justify-center border-2 border-white/10 overflow-hidden shadow-inner">
        <User className="w-10 h-10 text-slate-600" />
      </div>
      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
      <p className="text-sm font-semibold tracking-wide text-amber-500 uppercase mb-8">{member.role}</p>
      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2.5 bg-[#0A66C2]/10 border border-[#0A66C2]/30 hover:bg-[#0A66C2] hover:border-[#0A66C2] text-white text-sm font-bold rounded-lg transition-all w-full hover:shadow-[0_4px_20px_rgba(245,158,11,0.6)]">
        <Linkedin className="w-4 h-4 mr-2" />
        Connect on LinkedIn
      </a>
    </SheenCard>
  );
}

export function Home() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex flex-col justify-center pt-16 pb-16 overflow-hidden bg-slate-900 border-b border-slate-800">
        {/* Background Image Setup for Depth */}
        <div className="absolute inset-0 z-0 opacity-60">
          <img 
            src={`${import.meta.env.BASE_URL}hero-bg.jpg`} 
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
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-all shadow-lg group hover:shadow-[0_4px_20px_rgba(245,158,11,0.6)]"
              >
                {t('hero.cta')}
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/opportunities" 
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg border border-white/20 transition-all shadow-lg hover:shadow-[0_4px_20px_rgba(245,158,11,0.6)] hover:-translate-y-0.5"
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
            src={`${import.meta.env.BASE_URL}history-bg.jpeg`} 
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

      {/* Our Team / Leadership */}
      <section className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-4 tracking-tight">Our Leadership</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Meet the experts driving Advantage Automotive Solutions forward.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'John Doe', role: 'Managing Director', linkedin: '#' },
              { name: 'David Smith', role: 'Operations Director', linkedin: '#' },
              { name: 'Sarah Jenkins', role: 'Client Relations Director', linkedin: '#' }
            ].map((member, i) => (
              <LeadershipCard key={i} member={member} />
            ))}
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
                  <div key={region} className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 text-center text-sm font-bold text-slate-300 shadow-sm hover:border-amber-500/50 hover:bg-white/10 transition-all cursor-default hover:shadow-[0_4px_20px_rgba(245,158,11,0.6)]">
                    {region}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative isolate flex justify-center lg:justify-end w-full">
               <SheenCard 
                  className="w-full bg-slate-900/40 backdrop-blur-xl rounded-2xl border border-white/5 shadow-2xl"
                  innerClassName="p-8"
               >
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
                    className="mt-6 w-full inline-flex items-center justify-center px-4 py-3 text-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-all relative z-10 hover:shadow-[0_4px_20px_rgba(245,158,11,0.6)]"
                  >
                    Set up an Inquiry
                  </Link>
               </SheenCard>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey / Updates */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-2 tracking-tight">Our Journey</h2>
              <p className="text-slate-400">Latest updates, events, and milestones.</p>
            </div>
            <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20 shadow-inner">
               <Calendar className="w-7 h-7 text-amber-500"/>
            </div>
          </div>
          
          <div className="space-y-6">
            {[
              { date: 'June 2026', title: 'Expansion into the North American Market', content: 'We are thrilled to announce our new dedicated branch for North America, providing localized support for our clients in the US and Canada. This allows us to offer 24-hour coverage and faster deployment of technical recruitment strategies.' },
              { date: 'May 2026', title: 'Global Automotive Summit 2026', content: 'Our directors recently participated at the Global Automotive Summit in Dubai, sharing key insights on the future of aftersales performance, efficiency metrics, and the rising demand for EV technicians.' },
              { date: 'April 2026', title: 'New Training Programs Launched', content: 'Introduced an updated curriculum tailored specifically for High-Voltage Electric Vehicle handling and workshop advisory roles across our partner dealerships in the UK.' },
            ].map((post, i) => (
              <SheenCard 
                key={i} 
                className="bg-slate-900 border border-white/5 rounded-2xl hover:border-amber-500/30 hover:bg-slate-900/80 shadow-sm"
                innerClassName="p-6 md:p-8 flex flex-col md:flex-row gap-6 lg:gap-8"
              >
                 <div className="md:w-1/4 shrink-0 flex flex-col items-start pt-1">
                    <span className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-bold tracking-widest uppercase text-amber-500 mb-2">{post.date}</span>
                 </div>
                 <div>
                    <h3 className="text-xl font-display font-bold text-white mb-3">{post.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{post.content}</p>
                 </div>
              </SheenCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
