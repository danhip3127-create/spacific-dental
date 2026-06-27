import React, { useState } from 'react';
import { DOCTORS } from './Home';
import { Clock, CheckCircle, FileText } from 'lucide-react';
import DoctorDetailModal, { Doctor } from '../components/DoctorDetailModal';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../lib/LanguageContext';

export default function Doctors() {
  const { t, language } = useLanguage();
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 font-extrabold">{t('Đội Ngũ Bác Sĩ', 'Our Doctors')}</h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            {t('Các chuyên gia nha khoa hàng đầu với nhiều năm tu nghiệp trực tiếp tại nước ngoài. Tận tâm, chu đáo và tỉ mỉ trong từng ca điều trị.', 'Top dental experts with years of direct training abroad. Dedicated, thoughtful, and meticulous in every treatment case.')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {DOCTORS.map((doc, i) => (
            <div 
              key={doc.id} 
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-300 border border-slate-100 flex flex-col justify-between"
              onMouseEnter={() => setHoveredId(doc.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div>
                <div 
                  className="aspect-[3/4] w-full overflow-hidden relative group" 
                  style={{ backgroundColor: doc.bgColor || '#f1f5f9' }}
                >
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    referrerPolicy="no-referrer" 
                    className="w-full h-full object-cover filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-500" 
                    style={{ 
                      objectPosition: doc.objectPosition || 'top',
                      transform: doc.imageTransform 
                        ? `${doc.imageTransform} ${hoveredId === doc.id ? 'scale(1.05)' : 'scale(1)'}`
                        : (hoveredId === doc.id ? 'scale(1.05)' : 'scale(1)'),
                      transformOrigin: 'center center',
                      mixBlendMode: doc.mixBlendMode as any
                    }} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white text-xs font-bold uppercase tracking-widest bg-primary/80 backdrop-blur-sm py-1.5 px-3 rounded-full">
                      Pacific Dental Specialist
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-black text-slate-950 mb-1 leading-tight">{doc.name}</h4>
                  <p className="text-primary font-bold text-sm mb-6 uppercase tracking-wider">{language === 'VN' ? doc.spec : (doc.enSpec || doc.spec)}</p>
                  
                  <div className="space-y-3.5 mb-2">
                    <div className="flex items-center gap-3 text-slate-600 font-medium">
                        <Clock size={18} className="text-secondary shrink-0" /> {language === 'VN' ? doc.exp : (doc.enExp || doc.exp)}
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 font-semibold leading-snug">
                        <CheckCircle size={18} className="text-secondary shrink-0" /> {language === 'VN' ? doc.cert : (doc.enCert || doc.cert)}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 pt-0 mt-auto">
                <Button 
                  onClick={() => setSelectedDoctor(doc)}
                  variant="outline" 
                  className="w-full rounded-2xl font-extrabold text-sm gap-2 py-3 border-slate-200 text-slate-700 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300 shadow-sm"
                >
                  <FileText size={16} /> {t('Xem hồ sơ chi tiết', 'View profile')}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reusable premium doctor detailed profile modal */}
      <DoctorDetailModal 
        doctor={selectedDoctor} 
        isOpen={!!selectedDoctor} 
        onClose={() => setSelectedDoctor(null)} 
      />
    </div>
  );
}
