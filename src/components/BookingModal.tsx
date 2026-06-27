import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/Button';
import { SERVICES } from '../pages/Home';
import { useLanguage } from '../lib/LanguageContext';

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t, language } = useLanguage();

  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    service: '',
    branch: ''
  });

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mojoendr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: '2554012131tru@ou.edu.vn', // Default email as required by formspree or fallback
          name: bookingForm.name,
          phone: bookingForm.phone,
          branch: bookingForm.branch,
          service: bookingForm.service,
          type: 'Booking Appointment', // To distinguish from contact form
          _replyto: '2554012131tru@ou.edu.vn',
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setBookingForm({ name: '', phone: '', service: '', branch: '' });
      } else {
        alert(t('Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại.', 'An error occurred while sending information. Please try again.'));
      }
    } catch (error) {
      alert(t('Có lỗi kết nối. Vui lòng thử lại sau.', 'Connection error. Please try again later.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-booking', handleOpen);

    // Auto open on initial page load / app mount after a graceful delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 600);

    return () => {
      window.removeEventListener('open-booking', handleOpen);
      clearTimeout(timer);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl relative overflow-hidden transition-all duration-300">
        <button 
          className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-slate-800 transition bg-white/80 rounded-full cursor-pointer hover:bg-slate-100" 
          onClick={() => { setIsOpen(false); setIsSuccess(false); }}
        >
          <X size={20} />
        </button>
        
        <div className="bg-gradient-to-br from-primary to-secondary p-8 text-white text-center relative overflow-hidden">
          {/* Accent light ray reflection */}
          <div className="absolute -inset-10 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="inline-block bg-amber-400 text-slate-900 text-[10px] font-bold uppercase px-3 py-1 rounded-full mb-3 shadow-sm tracking-wider animate-bounce">
            🔥 {t('ƯU ĐÃI ĐẶC BIỆT MIỄN PHÍ KHÁM', 'SPECIAL FREE CONSULTATION OFFER')}
          </div>
          <h2 className="text-2xl font-bold mb-1">{t('Đăng Ký Đặt Lịch', 'Book an Appointment')}</h2>
          <p className="text-slate-100 text-sm opacity-95">{t('Đặt hẹn hôm nay để được giảm trực tiếp 20% dịch vụ & Miễn phí khám tổng quát!', 'Book today for a direct 20% discount on services & Free general checkup!')}</p>
        </div>

        <div className="p-8">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{t('Đăng ký thành công!', 'Successfully booked!')}</h3>
              <p className="text-slate-600 mb-6">{t('Xin cảm ơn. Chuyên viên tư vấn của Pacific Dental sẽ sớm gọi lại cho bạn.', 'Thank you. Pacific Dental\'s consultant will call you back soon.')}</p>
              <Button onClick={() => { setIsOpen(false); setIsSuccess(false); }} className="w-full">{t('ĐÓNG', 'CLOSE')}</Button>
            </div>
          ) : (
            <form 
              onSubmit={handleBookingSubmit}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t('Họ và tên *', 'Full Name *')}</label>
                <input required type="text" value={bookingForm.name} onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary transition outline-none" placeholder={t('Nhập họ tên của bạn', 'Enter your full name')} />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t('Số điện thoại *', 'Phone Number *')}</label>
                <input required type="tel" value={bookingForm.phone} onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary transition outline-none" placeholder={t('Nhập số điện thoại', 'Enter your phone number')} />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t('Dịch vụ quan tâm', 'Service of Interest')}</label>
                <select value={bookingForm.service} onChange={(e) => setBookingForm({...bookingForm, service: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary transition outline-none bg-white">
                  <option value="">{t('Chọn dịch vụ (Tùy chọn)', 'Select a service (Optional)')}</option>
                  {SERVICES.map(srv => (
                    <option key={srv.id} value={srv.id}>{language === 'VN' ? srv.name : (srv.enName || srv.name)}</option>
                  ))}
                  <option value="other">{t('Khám tổng quát / Khác', 'General Checkup / Other')}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t('Cơ sở điều trị mong muốn *', 'Preferred Clinic *')}</label>
                <select required value={bookingForm.branch} onChange={(e) => setBookingForm({...bookingForm, branch: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary transition outline-none bg-white">
                  <option value="">{t('Chọn cơ sở khám', 'Select a clinic')}</option>
                  <option value="cs1">{t('Cơ sở 1: 97 Võ Văn Tần, Q.3, TP.HCM', 'Branch 1: 97 Vo Van Tan, D3, HCMC')}</option>
                  <option value="cs2">{t('Cơ sở 2: Thanh Đa, Bình Thạnh, TP.HCM', 'Branch 2: Thanh Da, Binh Thanh, HCMC')}</option>
                </select>
              </div>
              
              <Button type="submit" disabled={isSubmitting} size="lg" className="w-full mt-4 text-base shadow-lg shadow-primary/30">
                {isSubmitting ? t('ĐANG GỬI...', 'SENDING...') : t('NHẬN TƯ VẤN MIỄN PHÍ', 'GET FREE CONSULTATION')}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
