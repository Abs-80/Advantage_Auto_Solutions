import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X } from 'lucide-react';

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleLanguage = () => {
    const langs = ['en', 'ar', 'zh'];
    let currentIdx = langs.indexOf(i18n.language);
    if (currentIdx === -1) currentIdx = 0;
    const nextLang = langs[(currentIdx + 1) % langs.length];
    i18n.changeLanguage(nextLang);
  };

  const navLinks = [
    { to: "/", label: t('nav.home') },
    { to: "/services", label: t('nav.services') },
    { to: "/contact", label: t('nav.contact') }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[70px]">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center shrink-0">
              <span className="font-display font-extrabold text-[22px] tracking-tight text-slate-900 hidden sm:block uppercase">
                Advantage <span className="text-blue-600">Solutions</span>
              </span>
              <span className="font-display font-extrabold text-[22px] tracking-tight text-slate-900 sm:hidden uppercase">
                A<span className="text-blue-600">S</span>
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive ? 'text-blue-600' : 'text-slate-500'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            
            <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
              {['en', 'ar', 'zh'].map(lang => (
                <button 
                  key={lang}
                  onClick={() => i18n.changeLanguage(lang)}
                  className={`uppercase pb-0.5 border-b-2 transition-colors ${i18n.language === lang ? 'text-slate-900 border-blue-600' : 'border-transparent hover:text-slate-900'}`}
                >
                  {lang}
                </button>
              ))}
            </div>
            
            <NavLink
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors"
            >
              {t('action.requestQuote')}
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
             <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-sm font-medium text-slate-600 mr-4"
            >
              <span className="uppercase border-b-2 border-transparent hover:border-blue-600 pb-0.5">{i18n.language}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="pt-2 pb-3 space-y-1 px-4 sm:px-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block pl-3 pr-4 py-2 text-base font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 bg-blue-50/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
