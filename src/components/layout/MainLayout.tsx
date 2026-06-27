import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Mail, ChevronRight, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../ui/Button';
import PDSLogo from '../ui/PDSLogo';
import { useLanguage } from '../../lib/LanguageContext';

export default function MainLayout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedMap, setSelectedMap] = useState<1 | 2>(1);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change and handle hash scrolling
  useEffect(() => {
    setIsMobileMenuOpen(false);
    
    if (location.hash) {
      // If there is a hash, scroll to it smoothly
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // small delay to ensure DOM is ready
    } else {
      // Otherwise scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  const navLinks = [
    { name: t('Trang chủ', 'Home'), path: '/' },
    { name: t('Giới thiệu', 'About Us'), path: '/about' },
    { name: t('Dịch vụ', 'Services'), path: '/services' },
    { name: t('Đội ngũ bác sĩ', 'Doctors'), path: '/doctors' },
    { name: t('Kiến thức nha khoa', 'Blog'), path: '/blog' },
    { name: t('Liên hệ', 'Contact'), path: '/#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    
    // If we are navigating to the exact same path without hash, scroll to top
    if (path === location.pathname && !path.includes('#')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path.includes('#') && location.pathname === path.split('#')[0]) {
      // If we are on the same page and just navigating to a hash, manually scroll 
      // so it's instantly smooth and bypasses any router delays
      const hash = path.split('#')[1];
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // Always update router state
    navigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      {/* Top Bar - Premium branding and contact info */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-950 text-slate-300 text-xs py-2.5 hidden md:block border-b border-slate-900 relative z-50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-5 flex-wrap">
            <span className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200">
              <MapPin size={13} className="text-secondary" /> 
              <span className="font-medium">
                <strong className="text-secondary-light font-semibold">{t('Cơ sở 1:', 'Branch 1:')}</strong> 97 Võ Văn Tần, Q.3, TP.HCM
              </span>
            </span>
            <span className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200">
              <MapPin size={13} className="text-secondary" /> 
              <span className="font-medium">
                <strong className="text-secondary-light font-semibold">{t('Cơ sở 2:', 'Branch 2:')}</strong> Thanh Đa, Bình Thạnh, TP.HCM
              </span>
            </span>
            <span className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200">
              <Mail size={13} className="text-secondary" /> <span className="font-medium">hello@pacificdental.vn</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:0903985463" className="flex items-center gap-2 font-semibold text-white bg-white/5 py-1 px-3.5 rounded-full border border-white/10 hover:border-secondary/40 transition-all duration-300 group shadow-inner">
              <Phone size={13} className="text-secondary animate-pulse" /> Hotline: <span className="text-secondary-light group-hover:text-white transition-colors">0903 985 463</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_10px_30px_rgb(15,23,42,0.08)] border-b border-slate-100 py-3' : 'bg-white/95 backdrop-blur-md border-b border-slate-200/40 py-5'}`}
      >
        {/* Dynamic top gradient line to instantly draw executive focus to header */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-secondary to-primary"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
          <Link to="/" className="hover:opacity-90 transition-opacity shrink-0">
            <PDSLogo theme="light" iconSize={44} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navLinks.map((link) => {
              const currentPathWithHash = location.pathname + location.hash;
              const isActive = link.path === '/' 
                ? currentPathWithHash === '/' 
                : link.path.includes('#')
                  ? currentPathWithHash === link.path
                  : location.pathname.startsWith(link.path);

              return (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`relative text-[14px] font-extrabold tracking-wide transition-all duration-300 hover:text-primary group py-2 px-2 xl:px-3 rounded-xl whitespace-nowrap [text-shadow:_0_1px_2px_rgba(15,23,42,0.1)] ${isActive ? 'text-primary bg-slate-50/80 shadow-[0_4px_12px_rgba(15,23,42,0.05)] border border-slate-100' : 'text-slate-700 hover:bg-slate-50/40 hover:shadow-[0_4px_12px_rgba(0,0,0,0.02)] border border-transparent'}`}
                >
                  {link.name}
                  {/* Premium animated bottom bar with gradient */}
                  <span className={`absolute bottom-0 left-2 right-2 h-[3px] bg-gradient-to-r from-primary to-secondary rounded-full transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
            <button 
              onClick={() => setLanguage(language === 'VN' ? 'EN' : 'VN')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors bg-white shadow-sm"
              title={language === 'VN' ? 'Đổi sang Tiếng Anh / Switch to English' : 'Chuyển sang Tiếng Việt / Switch to Vietnamese'}
            >
              <Globe size={16} className="text-primary" />
              <span>{language === 'VN' ? 'VN' : 'EN'}</span>
            </button>
            <Button size="lg" className="relative overflow-hidden font-semibold shadow-lg shadow-primary/20 hover:scale-105 hover:shadow-primary/30 transition-all duration-300 px-4 xl:px-6 bg-gradient-to-r from-primary to-secondary whitespace-nowrap" onClick={() => window.dispatchEvent(new Event('open-booking'))}>
              <span className="relative z-10">{t('ĐẶT LỊCH KHÁM', 'BOOK NOW')}</span>
              <span className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full skew-x-[-25deg] animate-shimmer pointer-events-none"></span>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-600 hover:text-primary transition-colors shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40 bg-white pt-24 px-4 overflow-y-auto"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link 
                    to={link.path}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      handleLinkClick(e, link.path);
                    }}
                    className="text-lg py-3 border-b border-slate-100 font-extrabold [text-shadow:_0_1px_1px_rgba(0,0,0,0.06)] text-slate-800 flex justify-between items-center hover:text-primary transition-colors"
                  >
                    {link.name}
                    <ChevronRight size={18} className="text-slate-400" />
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6 flex flex-col gap-4"
              >
                <button 
                  onClick={() => {
                    setLanguage(language === 'VN' ? 'EN' : 'VN');
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <Globe size={18} className="text-primary" />
                  <span>{language === 'VN' ? 'Đổi sang Tiếng Anh (EN)' : 'Chuyển sang Tiếng Việt (VN)'}</span>
                </button>
                <Button className="w-full relative overflow-hidden shadow-lg shadow-primary/30" size="lg" onClick={() => { setIsMobileMenuOpen(false); window.dispatchEvent(new Event('open-booking')); }}>
                  <span className="relative z-10">{t('ĐẶT LỊCH KHÁM NGAY', 'BOOK APPOINTMENT NOW')}</span>
                  <span className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full skew-x-[-25deg] animate-shimmer pointer-events-none"></span>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-slate-950 text-slate-400 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="mb-6">
                <PDSLogo theme="dark" iconSize={36} />
              </div>
              <p className="text-sm mb-6 leading-relaxed">
                {t(
                  'Nụ cười khỏe mạnh – Tự tin tỏa sáng. Pacific Dental Services tự hào mang đến chất lượng điều trị nha khoa chuẩn quốc tế.',
                  'A healthy smile – Confident to shine. Pacific Dental Services is proud to provide international standard dental care.'
                )}
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/pdshlth" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="https://www.instagram.com/pds_health/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">{t('Thông Tin Liên Hệ', 'Contact Information')}</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MapPin className="top-1 relative text-primary shrink-0" size={18} />
                  <div className="text-sm w-full">
                    <button 
                      onClick={() => setSelectedMap(1)} 
                      className={`text-left block w-full p-2 -ml-2 rounded-lg transition-colors ${selectedMap === 1 ? 'bg-white/5 text-white' : 'hover:bg-white/5 hover:text-white'}`}
                    >
                      <strong className={`font-semibold block mb-1 ${selectedMap === 1 ? 'text-primary' : 'text-white'}`}>{t('Cơ sở 1:', 'Branch 1:')}</strong>
                      97 Võ Văn Tần, Q.3, TP.HCM
                    </button>
                    <button 
                      onClick={() => setSelectedMap(2)} 
                      className={`text-left block w-full mt-2 p-2 -ml-2 rounded-lg transition-colors ${selectedMap === 2 ? 'bg-white/5 text-white' : 'hover:bg-white/5 hover:text-white'}`}
                    >
                      <strong className={`font-semibold block mb-1 ${selectedMap === 2 ? 'text-primary' : 'text-white'}`}>{t('Cơ sở 2:', 'Branch 2:')}</strong>
                      Thanh Đa, Bình Thạnh, TP.HCM
                    </button>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-primary shrink-0" size={18} />
                  <a href="tel:0903985463" className="text-sm hover:text-primary transition-colors">0903 985 463 ({t('Hotline 24/7', '24/7 Hotline')})</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-primary shrink-0" size={18} />
                  <span className="text-sm">hello@pacificdental.vn</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">{t('Menu Nhanh', 'Quick Links')}</h3>
              <ul className="space-y-3">
                {navLinks.slice(0, 5).map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                      <ChevronRight size={14} className="text-slate-600" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">{t('Giờ Làm Việc', 'Working Hours')}</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span>{t('Thứ 2 - Thứ 6', 'Mon - Fri')}</span>
                  <span className="text-white">08:00 - 20:00</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span>{t('Thứ 7', 'Saturday')}</span>
                  <span className="text-white">08:00 - 18:00</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span>{t('Chủ Nhật', 'Sunday')}</span>
                  <span className="text-primary">08:00 - 12:00</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mb-12 border-t border-slate-800 pt-12">
            <div className="w-full h-80 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 relative">
              {selectedMap === 1 ? (
                <iframe 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  allowFullScreen 
                  referrerPolicy="no-referrer-when-downgrade" 
                  src="https://maps.google.com/maps?q=97%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n,%20Qu%E1%BA%ADn%203,%20TP.HCM&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  title="Map Cơ sở 1"
                ></iframe>
              ) : (
                <iframe 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  allowFullScreen 
                  referrerPolicy="no-referrer-when-downgrade" 
                  src="https://maps.google.com/maps?q=Thanh%20%C4%90a,%20B%C3%ACnh%20Th%E1%BA%A1nh,%20TP.HCM&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  title="Map Cơ sở 2"
                ></iframe>
              )}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>&copy; {new Date().getFullYear()} Pacific Dental Services. {t('Tất cả quyền được bảo lưu.', 'All rights reserved.')}</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">{t('Chính sách bảo mật', 'Privacy Policy')}</a>
              <a href="#" className="hover:text-white transition-colors">{t('Điều khoản dịch vụ', 'Terms of Service')}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
