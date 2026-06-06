import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquareShare } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-900 text-slate-400 py-6 md:py-0 md:h-16 flex-shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 w-full md:w-auto">
             <div className="flex items-center gap-1.5 whitespace-nowrap"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Dubai, UAE</div>
             <div className="flex items-center gap-1.5 whitespace-nowrap"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> London, UK</div>
             <div className="flex items-center gap-1.5 whitespace-nowrap"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Toronto, CA</div>
             <div className="flex items-center gap-1.5 whitespace-nowrap"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Singapore</div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-right w-full md:w-auto">
             <span className="hidden md:inline-block text-slate-500">{t('footer.insights')}</span>
             <span className="text-slate-500">{t('footer.rights')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
