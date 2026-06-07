import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export function Contact() {
  const { t } = useTranslation();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectInquiry: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const payload = {
        ...formData,
        submittedAt: new Date().toISOString()
      };

      const response = await fetch('https://hook.us1.make.com/o81q2kbqqweu4pxxtfnyb74y5c4euma8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
      
      // Make webhooks return 200 OK text/plain "Accepted" commonly
      if (!response.ok) {
        throw new Error('Transmission failed');
      }
      
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('An error occurred during transmission. Please ensure your connection is stable and try again.');
    } finally {
      setIsSubmitting(false);
    }
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
        <div className="mb-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-display font-medium text-white mb-3"
          >
            Commission a Consultation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-slate-400 font-light tracking-wide uppercase"
          >
            Begin the restoration journey
          </motion.p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="bg-slate-900/50 backdrop-blur-2xl rounded-sm shadow-2xl border border-white/10 p-8 md:p-10 relative overflow-hidden"
        >
          {/* Abstract glow */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>

          {isSubmitted ? (
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="text-center py-12"
             >
               <div className="mx-auto w-16 h-16 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full flex items-center justify-center mb-6 border border-[#D4AF37]/20">
                 <CheckCircle2 className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-display font-medium text-white mb-3 tracking-wide">Transmission Successful</h3>
               <p className="text-slate-300 font-light leading-relaxed">
                 Thank you for your inquiry. Our specialists will review your project details and contact you to schedule a consultation.
               </p>
             </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-red-950/30 border border-red-900/50 rounded-sm text-sm text-red-200"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500" />
                  <p>{error}</p>
                </motion.div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-widest">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full p-3.5 rounded-sm bg-black/20 border border-white/10 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 transition-all text-sm text-white placeholder-slate-600 focus:bg-black/40 backdrop-blur-sm"
                    placeholder="E.g. John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-widest">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3.5 rounded-sm bg-black/20 border border-white/10 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 transition-all text-sm text-white placeholder-slate-600 focus:bg-black/40 backdrop-blur-sm"
                    placeholder="E.g. john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-widest">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3.5 rounded-sm bg-black/20 border border-white/10 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 transition-all text-sm text-white placeholder-slate-600 focus:bg-black/40 backdrop-blur-sm"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="projectInquiry" className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-widest">
                  Project Inquiry
                </label>
                <textarea
                  id="projectInquiry"
                  name="projectInquiry"
                  required
                  rows={4}
                  value={formData.projectInquiry}
                  onChange={handleChange}
                  className="w-full p-3.5 rounded-sm bg-black/20 border border-white/10 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 transition-all text-sm text-white placeholder-slate-600 focus:bg-black/40 resize-none backdrop-blur-sm"
                  placeholder="Describe your restoration goals or service requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 flex justify-center items-center py-4 px-6 rounded-sm text-sm font-semibold tracking-widest uppercase text-white bg-[#D4AF37]/20 border border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-slate-950 transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none backdrop-blur-sm hover:shadow-[0_4px_20px_rgba(245,158,11,0.6)]"
              >
                {isSubmitting ? 'Transmitting...' : 'Submit Inquiry'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
