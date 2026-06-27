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
    branch: '',
    date: '',
    time: ''
  });

  const getLocalDateString = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getAvailableTimeSlots = (dateString: string) => {
    if (!dateString) return [];
    const date = new Date(dateString);
    const day = date.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday
    
    let slots: string[] = [];
    
    if (day === 0) {
      // Sunday: 08:00 - 12:00
      slots = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30'];
    } else if (day === 6) {
      // Saturday: 08:00 - 18:00 (lunch break 12:00 - 13:30)
      slots = [
        '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
        '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
      ];
    } else {
      // Weekdays (1-5): 08:00 - 20:00 (lunch break 12:00 - 13:30)
      slots = [
        '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
        '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'
      ];
    }

    // Filter if today is selected
    const todayStr = getLocalDateString();
    if (dateString === todayStr) {
      const now = new Date();
      const currentHours = now.getHours();
      const currentMinutes = now.getMinutes();
      
      slots = slots.filter(slot => {
        const [slotHours, slotMinutes] = slot.split(':').map(Number);
        if (slotHours > currentHours) return true;
        if (slotHours === currentHours && slotMinutes > currentMinutes) return true;
        return false;
      });
    }
    
    return slots;
  };

  const getWorkingHoursNote = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = date.getDay();
    if (day === 0) {
      return t('Lịch làm việc Chủ Nhật: 08:00 - 12:00', 'Sunday Hours: 08:00 - 12:00');
    }
    if (day === 6) {
      return t('Lịch làm việc Thứ 7: 08:00 - 18:00', 'Saturday Hours: 08:00 - 18:00');
    }
    return t('Lịch làm việc Thứ 2 - Thứ 6: 08:00 - 20:00', 'Weekday Hours: 08:00 - 20:00');
  };

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
          date: bookingForm.date,
          time: bookingForm.time,
          type: 'Booking Appointment', // To distinguish from contact form
          _replyto: '2554012131tru@ou.edu.vn',
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setBookingForm({ name: '', phone: '', service: '', branch: '', date: '', time: '' });
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl relative flex flex-col max-h-[90vh] transition-all duration-300">
        <button 
          className="absolute top-3 right-3 z-20 p-1.5 text-slate-400 hover:text-slate-800 transition bg-white/80 rounded-full cursor-pointer hover:bg-slate-100" 
          onClick={() => { setIsOpen(false); setIsSuccess(false); }}
        >
          <X size={18} />
        </button>
        
        <div className="bg-gradient-to-br from-primary to-secondary p-5 pb-4 text-white text-center relative overflow-hidden shrink-0">
          {/* Accent light ray reflection */}
          <div className="absolute -inset-10 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="inline-block bg-amber-400 text-slate-900 text-[9px] font-bold uppercase px-2.5 py-0.5 rounded-full mb-2 shadow-sm tracking-wider">
            🔥 {t('ƯU ĐÃI ĐẶC BIỆT MIỄN PHÍ KHÁM', 'SPECIAL FREE CONSULTATION OFFER')}
          </div>
          <h2 className="text-xl font-bold mb-0.5">{t('Đăng Ký Đặt Lịch', 'Book an Appointment')}</h2>
          <p className="text-slate-100 text-xs opacity-95">{t('Đặt hẹn hôm nay để được giảm trực tiếp 20% dịch vụ & Miễn phí khám tổng quát!', 'Book today for a direct 20% discount on services & Free general checkup!')}</p>
        </div>

        <div className="p-5 sm:p-6 overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{t('Đăng ký thành công!', 'Successfully booked!')}</h3>
              <p className="text-slate-600 text-sm mb-5">{t('Xin cảm ơn. Chuyên viên tư vấn của Pacific Dental sẽ sớm gọi lại cho bạn.', 'Thank you. Pacific Dental\'s consultant will call you back soon.')}</p>
              <Button onClick={() => { setIsOpen(false); setIsSuccess(false); }} className="w-full">{t('ĐÓNG', 'CLOSE')}</Button>
            </div>
          ) : (
            <form 
              onSubmit={handleBookingSubmit}
              className="space-y-3.5"
            >
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">{t('Họ và tên *', 'Full Name *')}</label>
                <input required type="text" value={bookingForm.name} onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})} className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary transition outline-none" placeholder={t('Nhập họ tên của bạn', 'Enter your full name')} />
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">{t('Số điện thoại *', 'Phone Number *')}</label>
                <input required type="tel" value={bookingForm.phone} onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})} className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary transition outline-none" placeholder={t('Nhập số điện thoại', 'Enter your phone number')} />
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">{t('Dịch vụ quan tâm', 'Service of Interest')}</label>
                <select value={bookingForm.service} onChange={(e) => setBookingForm({...bookingForm, service: e.target.value})} className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary transition outline-none bg-white">
                  <option value="">{t('Chọn dịch vụ (Tùy chọn)', 'Select a service (Optional)')}</option>
                  {SERVICES.map(srv => (
                    <option key={srv.id} value={srv.id}>{language === 'VN' ? srv.name : (srv.enName || srv.name)}</option>
                  ))}
                  <option value="other">{t('Khám tổng quát / Khác', 'General Checkup / Other')}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">{t('Cơ sở điều trị mong muốn *', 'Preferred Clinic *')}</label>
                <select required value={bookingForm.branch} onChange={(e) => setBookingForm({...bookingForm, branch: e.target.value})} className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary transition outline-none bg-white">
                  <option value="">{t('Chọn cơ sở khám', 'Select a clinic')}</option>
                  <option value="cs1">{t('Cơ sở 1: 97 Võ Văn Tần, Q.3, TP.HCM', 'Branch 1: 97 Vo Van Tan, D3, HCMC')}</option>
                  <option value="cs2">{t('Cơ sở 2: Thanh Đa, Bình Thạnh, TP.HCM', 'Branch 2: Thanh Da, Binh Thanh, HCMC')}</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">{t('Ngày hẹn khám *', 'Appointment Date *')}</label>
                  <input 
                    required 
                    type="date" 
                    min={getLocalDateString()} 
                    value={bookingForm.date} 
                    onChange={(e) => setBookingForm({...bookingForm, date: e.target.value, time: ''})} 
                    className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary transition outline-none text-slate-800" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">{t('Giờ hẹn khám *', 'Appointment Time *')}</label>
                  <select 
                    required 
                    disabled={!bookingForm.date}
                    value={bookingForm.time} 
                    onChange={(e) => setBookingForm({...bookingForm, time: e.target.value})} 
                    className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary transition outline-none bg-white text-slate-800 disabled:bg-slate-50 disabled:text-slate-400"
                  >
                    <option value="">
                      {!bookingForm.date 
                        ? t('Chọn ngày trước', 'Select date first') 
                        : t('Chọn giờ', 'Select time')
                      }
                    </option>
                    {bookingForm.date && getAvailableTimeSlots(bookingForm.date).map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {bookingForm.date && (
                <div className="text-[11px] text-slate-500 italic bg-slate-50 p-2 rounded-xl border border-slate-100 leading-relaxed">
                  <p>ℹ️ {getWorkingHoursNote(bookingForm.date)}</p>
                  {getAvailableTimeSlots(bookingForm.date).length === 0 && (
                    <p className="text-red-500 font-semibold mt-0.5">
                      ⚠️ {t('Đã hết giờ làm việc khả dụng cho ngày hôm nay. Vui lòng chọn ngày khác.', 'No available working hours left for today. Please select another date.')}
                    </p>
                  )}
                </div>
              )}
              
              <Button type="submit" disabled={isSubmitting} size="lg" className="w-full mt-3 text-sm py-3 shadow-lg shadow-primary/20">
                {isSubmitting ? t('ĐANG GỬI...', 'SENDING...') : t('NHẬN TƯ VẤN MIỄN PHÍ', 'GET FREE CONSULTATION')}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
