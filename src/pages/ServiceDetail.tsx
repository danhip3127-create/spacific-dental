import React from 'react';
import { useParams } from 'react-router-dom';
import { SERVICES } from './Home';
import { Button } from '../components/ui/Button';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id) || SERVICES[0];
  const { t, language } = useLanguage();

  const openBooking = () => window.dispatchEvent(new Event('open-booking'));

  return (
    <div className="pb-24">
      {/* Banner */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <img src={service.image} alt={language === 'VN' ? service.name : (service.enName || service.name)} className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        <div className="relative z-10 text-center text-white px-4">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/80 text-white text-sm font-semibold tracking-wider mb-4">
            {language === 'VN' ? service.category : (service.enCategory || service.category)}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{language === 'VN' ? service.name : (service.enName || service.name)}</h1>
          <div className="flex items-center justify-center gap-4 text-xl">
            <span className="line-through text-white/60">{service.price}</span>
            <span className="font-bold text-3xl text-secondary">{service.salePrice}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div>
            <h3 className="text-xl font-bold mb-1">{t('Sẵn sàng chăm sóc nụ cười?', 'Ready to care for your smile?')}</h3>
            <p className="text-slate-500">{t('Giữ chỗ ngay hôm nay để nhận ưu đãi đặc biệt.', 'Reserve your spot today to receive special offers.')}</p>
          </div>
          <div className="flex gap-4 w-full sm:w-auto">
            <Button size="lg" onClick={openBooking}>{t('Đặt Lịch Ngay', 'Book Now')}</Button>
            <Button size="lg" variant="outline" onClick={openBooking}>{t('Tư Vấn Thêm', 'Get Advice')}</Button>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-slate-600 space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">{t('Mô Tả Dịch Vụ', 'Service Description')}</h2>
            <p>
              {language === 'VN' ? service.description || (service.name + ' là giải pháp hoàn hảo tái tạo nụ cười hoàn thiện. Với công nghệ đo vẽ hiện đại và vật liệu nhập khẩu cao cấp, chúng tôi cam kết mang lại hiệu quả thẩm mỹ vượt trội cùng khả năng ăn nhai như thật.') : (service.enDescription || service.enName + ' is the perfect solution to restore a complete smile. With modern measurement technology and high-end imported materials, we commit to delivering outstanding aesthetic results along with natural chewing ability.')} 
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t('Lợi Ích Nội Bật', 'Outstanding Benefits')}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none pl-0">
              {(service.benefits || [
                { vn: 'Khôi phục thẩm mỹ khuôn mặt', en: 'Restore facial aesthetics' },
                { vn: 'Ăn nhai bền chắc, an toàn', en: 'Durable, safe chewing' },
                { vn: 'Vật liệu tương thích sinh học cao', en: 'Highly biocompatible materials' },
                { vn: 'Tuổi thọ sử dụng lâu dài', en: 'Long-lasting lifespan' }
              ]).map((item: any, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                  <span>{language === 'VN' ? item.vn : item.en}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t('Quy Trình Chuẩn Quốc Tế', 'International Standard Process')}</h2>
            <div className="space-y-6">
              {((service as any).process || [
                { sVn: 'Bước 1', sEn: 'Step 1', tVn: 'Thăm khám và tư vấn trực tiếp', tEn: 'Examination and direct consultation' },
                { sVn: 'Bước 2', sEn: 'Step 2', tVn: 'Lên phác đồ điều trị chi tiết', tEn: 'Detailed treatment planning' },
                { sVn: 'Bước 3', sEn: 'Step 3', tVn: 'Tiến hành thực hiện trong phòng vô trùng', tEn: 'Procedure in a sterile room' },
                { sVn: 'Bước 4', sEn: 'Step 4', tVn: 'Chăm sóc và theo dõi định kỳ', tEn: 'Periodic care and monitoring' }
              ]).map((step: any, i: number) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="font-bold text-primary shrink-0">{language === 'VN' ? step.sVn : step.sEn}</div>
                  <div>{language === 'VN' ? step.tVn : step.tEn}</div>
                </div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-200">
            <div>
              <div className="font-bold text-slate-900 mb-1">{t('Thời gian thực hiện', 'Duration')}</div>
              <div className="text-slate-600">{language === 'VN' ? (service.duration || 'Phụ thuộc phác đồ') : (service.enDuration || 'Depends on the plan')}</div>
            </div>
            <div>
              <div className="font-bold text-slate-900 mb-1">{t('Chế độ bảo hành', 'Warranty policy')}</div>
              <div className="text-slate-600">{t('Bảo hành chính hãng 10-15 năm', 'Genuine warranty 10-15 years')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
