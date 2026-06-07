import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ShieldCheck, MapPin, BarChart3, ChevronRight, Calendar, X, Linkedin, Award } from 'lucide-react';

const SheenCard: React.FC<{ children: React.ReactNode, className?: string, innerClassName?: string }> = ({ children, className = "", innerClassName = "" }) => {
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

export function Home() {
  const { t } = useTranslation();
  const [selectedPost, setSelectedPost] = useState<{title: string, content: string | React.ReactNode, date: string} | null>(null);

  const getRelativeTime = (dateString: string) => {
    const parts = dateString.split('-');
    if (parts.length !== 3) return dateString;
    
    const [year, month, day] = parts.map(Number);
    const postTime = Date.UTC(year, month - 1, day);
    const currentDate = new Date();
    const currentTime = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const diffDays = Math.floor((currentTime - postTime) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return '1 day ago';
    if (diffDays > 0) return `${diffDays} days ago`;
    return dateString;
  };

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-[540px]">
              <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-tight drop-shadow-md">
                {t('about.title')}
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg drop-shadow-sm">
                {t('about.desc')}
              </p>
            </div>
            
            <div className="flex justify-start lg:justify-end">
              <SheenCard 
                className="bg-slate-900 border border-white/5 rounded-2xl p-8 hover:border-amber-500/30 hover:bg-slate-800/50 shadow-xl max-w-[360px] w-full"
                innerClassName="flex flex-col justify-center text-left"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="flex items-center space-x-3 mb-4 relative z-10 w-full text-left">
                   <BarChart3 className="w-6 h-6 text-amber-500" />
                   <h3 className="text-lg font-display font-bold text-white">Performance</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed relative z-10 w-full text-left">
                  "Because when your performance accelerates, so does ours."
                </p>
              </SheenCard>
            </div>
          </div>
        </div>
      </section>


      {/* Global Reach Section */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        
        {/* Abstract Map Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            {/* Grid */}
            <g stroke="#ffffff" strokeWidth="1" strokeDasharray="2 6" opacity="0.1">
              <path d="M0 50 H1000 M0 100 H1000 M0 150 H1000 M0 200 H1000 M0 250 H1000 M0 300 H1000 M0 350 H1000 M0 400 H1000 M0 450 H1000" />
              <path d="M100 0 V500 M200 0 V500 M300 0 V500 M400 0 V500 M500 0 V500 M600 0 V500 M700 0 V500 M800 0 V500 M900 0 V500" />
            </g>
            
            {/* Nodes - Regions */}
            {/* North America */}
            <g transform="translate(180, 160)">
              <circle cx="0" cy="0" r="6" fill="#F59E0B" opacity="0.8"/>
              <circle cx="0" cy="0" r="20" stroke="#F59E0B" strokeWidth="1" fill="none" opacity="0.4" />
              <circle cx="0" cy="0" r="35" stroke="#F59E0B" strokeWidth="0.5" fill="none" opacity="0.2" />
            </g>
            {/* Europe */}
            <g transform="translate(480, 140)">
              <circle cx="0" cy="0" r="5" fill="#F59E0B" opacity="0.8"/>
              <circle cx="0" cy="0" r="16" stroke="#F59E0B" strokeWidth="1" fill="none" opacity="0.4" />
            </g>
            {/* Middle East */}
            <g transform="translate(560, 240)">
              <circle cx="0" cy="0" r="6" fill="#F59E0B" opacity="0.8"/>
              <circle cx="0" cy="0" r="18" stroke="#F59E0B" strokeWidth="1" fill="none" opacity="0.4" />
            </g>
            {/* Asia */}
            <g transform="translate(760, 200)">
              <circle cx="0" cy="0" r="7" fill="#F59E0B" opacity="0.8"/>
              <circle cx="0" cy="0" r="22" stroke="#F59E0B" strokeWidth="1" fill="none" opacity="0.4" />
              <circle cx="0" cy="0" r="40" stroke="#F59E0B" strokeWidth="0.5" fill="none" opacity="0.2" />
            </g>

            {/* Connecting Lines */}
            <path d="M180 160 Q 330 110 480 140" stroke="#F59E0B" strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="4 4" />
            <path d="M480 140 Q 520 190 560 240" stroke="#F59E0B" strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="4 4" />
            <path d="M560 240 Q 660 220 760 200" stroke="#F59E0B" strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="4 4" />
            <path d="M180 160 Q 470 380 760 200" stroke="#F59E0B" strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="2 4" />
            
            <path d="M480 140 Q 620 100 760 200" stroke="#F59E0B" strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="2 4" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  <div key={region} className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 text-center text-sm font-bold text-slate-300">
                    {region}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative isolate flex justify-center lg:justify-end w-full">
               <SheenCard 
                  className="w-full bg-slate-900/40 backdrop-blur-xl rounded-2xl border border-white/5 shadow-2xl"
                  innerClassName="p-8 flex flex-col items-center text-center"
               >
                  <div className="w-24 h-24 bg-slate-950 rounded-full mb-6 flex items-center justify-center border-2 border-white/10 overflow-hidden shadow-inner shrink-0 relative z-10">
                     <img src={`${import.meta.env.BASE_URL}1708617744518.jpeg`} alt="Paul Chapman" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative inline-flex items-center justify-center mb-1 z-10">
                    <div className="absolute right-full mr-3 text-amber-500 drop-shadow-lg">
                      <Award className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white z-10">Paul Chapman</h3>
                  </div>
                  <p className="text-xs font-semibold tracking-wide text-amber-500 uppercase mb-6 z-10 leading-relaxed max-w-[280px]">Global Automotive Aftersales Executive | Technical Service & Operations Leader | OEM & Dealer Network Transformation Specialist</p>
                  <a href="https://www.linkedin.com/in/paul-chapman-ba3462143/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-3 bg-[#0A66C2]/10 border border-[#0A66C2]/30 hover:bg-[#0A66C2] hover:border-[#0A66C2] text-white text-sm font-bold rounded-lg transition-all w-full hover:shadow-[0_4px_20px_rgba(245,158,11,0.6)] relative z-10">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </a>
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
              {
                date: getRelativeTime('2026-06-06'),
                title: 'Apply today: 🛠️ High-Earning Automotive Aftersales Roles Available Across the UK! 🚀',
                shortDesc: 'Are you a skilled Passenger Car or LCV Aftersales Specialist looking for an immediate upgrade to your career and earning potential?',
                content: (
                  <div className="space-y-4">
                    <p>Are you a skilled Passenger Car or Light Commercial Vehicle (LCV) Aftersales Specialist looking for an immediate upgrade to your career and earning potential?</p>
                    <p>We are partnering with a renowned UK National Automotive Group to find top talent for multiple prestigious dealerships nationwide. If you're ready for uncapped earnings and a career path with a leading industry name, we want to hear from you!</p>
                    
                    <h4 className="text-lg font-bold text-white mt-6 mb-2">What We're Looking For:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-slate-300">
                      <li><strong>Qualification:</strong> NVQ Level 3 or equivalent technician certification (or higher). Experienced Aftersales Management, Workshop Control and Advisory Personnel</li>
                      <li><strong>Status:</strong> Unrestricted Right to Work in the UK.</li>
                      <li><strong>Goal:</strong> Seeking a permanent, long-term position.</li>
                    </ul>

                    <h4 className="text-lg font-bold text-white mt-6 mb-2">Why Join Us? (Your Next Step Up):</h4>
                    <ul className="list-disc pl-5 space-y-2 text-slate-300">
                      <li>💰 <strong>Exceptional Earning Potential:</strong> Highly competitive packages with attractive, uncapped bonus structures. Your hard work directly translates to your pay slip!</li>
                      <li>📈 <strong>Career Progression:</strong> Access to state-of-the-art facilities, ongoing training, and a clear path for professional development.</li>
                      <li>⭐ <strong>Commitment:</strong> Work for an automotive group that truly invests in its technicians.</li>
                    </ul>

                    <p className="mt-6 mb-2"><strong>Immediate Openings in Locations Including:</strong><br/>Watford, Hatfield, Cambridge, Chester, Farnborough, Basingstoke, Manchester, Sevenoaks, Liverpool, Guildford...and many more!</p>

                    <h4 className="text-lg font-bold text-white mt-6 mb-2">▶️ Ready to Drive Your Career Forward? Apply Now!</h4>
                    <p>These highly sought-after roles are being filled immediately.</p>
                    
                    <p className="mt-4"><strong>To Apply:</strong> Please send your CV (in Word format) to:<br/>📧 <a href="mailto:registeryourcv@advantageautomotivesolutions.com" className="text-amber-500 hover:underline">registeryourcv@advantageautomotivesolutions.com</a></p>
                    
                    <p className="mt-4"><strong>Your application should include:</strong></p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-300">
                      <li>Your preferred geographical working area.</li>
                      <li>Latest contact details.</li>
                      <li>Your current package and availability.</li>
                    </ul>


                  </div>
                )
              }
            ].map((post, i) => (
              <div key={i} onClick={() => setSelectedPost({title: post.title, content: post.content, date: post.date})} className="cursor-pointer group">
                <SheenCard 
                  className="bg-slate-900 border border-white/5 rounded-2xl hover:border-amber-500/30 hover:bg-slate-900/80 shadow-sm"
                  innerClassName="p-6 md:p-8 flex flex-col md:flex-row gap-6 lg:gap-8"
                >
                   <div className="md:w-1/4 shrink-0 flex flex-col items-start pt-1">
                      <span className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-bold tracking-widest uppercase text-amber-500 mb-2">{post.date}</span>
                   </div>
                   <div>
                      <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">{post.title}</h3>
                      <p className="text-slate-400 leading-relaxed text-sm">{post.shortDesc}</p>
                   </div>
                </SheenCard>
              </div>
            ))}
          </div>
          
          <AnimatePresence>
            {selectedPost && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedPost(null)}
                  className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm cursor-pointer"
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-6 md:p-10 z-[51] overscroll-contain"
                >
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <span className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-bold tracking-widest uppercase text-amber-500 mb-6">{selectedPost.date}</span>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">{selectedPost.title}</h2>
                  <div className="text-slate-400 leading-relaxed text-sm md:text-base max-w-none">
                    {selectedPost.content}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
