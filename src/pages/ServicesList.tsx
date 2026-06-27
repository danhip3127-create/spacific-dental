import React from 'react';
import { SERVICES } from './Home';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../lib/LanguageContext';

export default function ServicesList() {
  const { t, language } = useLanguage();

  return (
    <div className="bg-slate-50 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">{t('Dịch Vụ Nổi Bật', 'Featured Services')}</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t('Khám phá các giải pháp điều trị chuyên sâu tại Pacific Dental Services.', 'Explore specialized treatment solutions at Pacific Dental Services.')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {SERVICES.map((srv, i) => (
            <div 
              key={srv.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 flex flex-col border border-slate-100"
            >
              <Link to={`/services/${srv.id}`} className="relative aspect-[4/3] overflow-hidden block">
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-red-500 to-rose-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform transition-transform group-hover:scale-105">
                  <span className="w-3 h-3 text-white">★</span> {t('Ưu đãi', 'Offer')}
                </div>
                <img src={srv.image} alt={language === 'VN' ? srv.name : (srv.enName || srv.name)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Quick view overlay button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <span className="bg-white/20 backdrop-blur-md text-white font-medium px-6 py-2.5 rounded-full border border-white/30 transform translate-y-8 scale-95 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out flex items-center gap-2 shadow-xl hover:bg-white/30">
                    {t('Xem chi tiết', 'View Details')} <span className="text-xl">→</span>
                  </span>
                </div>
              </Link>
              <div className="p-7 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full tracking-wider uppercase">{language === 'VN' ? srv.category : (srv.enCategory || srv.category)}</span>
                </div>
                
                <Link to={`/services/${srv.id}`} className="block group-hover:text-primary transition-colors">
                  <h4 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">{language === 'VN' ? srv.name : (srv.enName || srv.name)}</h4>
                </Link>
                
                <div className="mt-auto pt-5 border-t border-slate-100 flex items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm text-slate-400 font-medium">{t('Chỉ từ', 'Starting at')}</span>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-2xl font-extrabold text-primary">{srv.salePrice}</span>
                      <span className="text-sm text-slate-400 line-through decoration-slate-300 font-medium hidden sm:inline">{srv.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
