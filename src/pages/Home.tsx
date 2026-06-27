import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, CheckCircle, Clock, FileText, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import DoctorDetailModal, { Doctor } from '../components/DoctorDetailModal';
import { Button } from '../components/ui/Button';
import { BLOGS_DATA } from '../data/blogsData';
import { SERVICES_DATA } from '../data/servicesData';
import { useLanguage } from '../lib/LanguageContext';

// Mock data (we will share this across pages later if needed)
export const SERVICES = SERVICES_DATA;

export const DOCTORS = [
  { id: 1, name: 'Dr. Damian Triet', spec: 'Chuyên gia Implant', enSpec: 'Implant Specialist', exp: '15 năm kinh nghiệm', enExp: '15 years of experience', cert: 'Thành viên ITI Quốc tế', enCert: 'ITI International Member', image: 'https://lh3.googleusercontent.com/d/1wiDqwSt_1CbNKDtmysXx32bg0-FOJ0IP', objectPosition: 'center 35%', imageTransform: 'scale(1.15) translate(0%, 3%)', bgColor: '#e3ecf5' },
  { id: 2, name: 'Dr. Patrick Thien', spec: 'Chuyên gia Chỉnh nha', enSpec: 'Orthodontic Specialist', exp: '12 năm kinh nghiệm', enExp: '12 years of experience', cert: 'Platinum Invisalign Provider', enCert: 'Platinum Invisalign Provider', image: 'https://lh3.googleusercontent.com/d/1-j4har_nWttaXIhQfGaWM1qsI4nODQVa', objectPosition: 'center 35%', imageTransform: 'scale(2.0) translate(5%, 24%)', bgColor: '#e3ecf5' },
  { id: 3, name: 'Dr. Wendy Phuong Anh', spec: 'Nha khoa Thẩm mỹ', enSpec: 'Cosmetic Dentistry', exp: '10 năm kinh nghiệm', enExp: '10 years of experience', cert: 'Bác sĩ CK I, Đại học Y Dược', enCert: 'Specialist Level 1, UMP', image: 'https://lh3.googleusercontent.com/d/1g2LEY7MDt40ZYWUBB4qkOA9MGrGUFJE5', objectPosition: 'center 20%', imageTransform: 'scale(1.15) translate(0%, 3%)', bgColor: '#ffffff' },
  { id: 4, name: 'Dr. Le Danh', spec: 'Phẫu thuật & Khớp cắn', enSpec: 'Surgery & Occlusion', exp: '14 năm kinh nghiệm', enExp: '14 years of experience', cert: 'Bác sĩ CK I, Đại học Y Hà Nội', enCert: 'Specialist Level 1, HMU', image: 'https://lh3.googleusercontent.com/d/11MU5vNdQjnSd6pMTNM40vW2QIfXNkKL1', objectPosition: 'center 20%', imageTransform: 'scale(1.15) translate(0%, 3%)', bgColor: '#e3ecf5', mixBlendMode: 'multiply' },
];

export const TESTIMONIALS = [
  { id: 1, name: 'Trương Khôi', text: 'Trải nghiệm trồng và cấy ghép Implant tại Pacific Dental vượt xa mong đợi của tôi. Không sưng đau nhiều, bác sĩ rất tận tình và phòng khám thì sang trọng bậc nhất.', enText: 'My experience with implants at Pacific Dental far exceeded my expectations. Minimal pain, dedicated doctors, and a top-notch luxurious clinic.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
  { id: 2, name: 'Trần Hoa', text: 'Mình lựa chọn niềng răng trong suốt ClearCorrect tại đây. Khay niềng ôm sát, gần như vô hình giúp mình tự tin giao tiếp hàng ngày. Kết quả sau 1.5 năm thực sự mỹ mãn.', enText: 'I chose ClearCorrect clear aligners here. They fit snugly and are almost invisible, helping me communicate confidently. The results after 1.5 years are truly satisfying.', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200' },
  { id: 3, name: 'Phạm Minh Hoàng', text: 'Tôi bọc 16 răng sứ thẩm mỹ Veneer tại Pacific. Triết lý can thiệp tối thiểu của các bác sĩ giúp tôi bảo tồn tối đa răng thật sống mà nụ cười vẫn vô cùng tự nhiên rạng rỡ.', enText: 'I got 16 aesthetic porcelain veneers at Pacific. The doctors\' minimal intervention philosophy helped me preserve my real teeth while achieving a completely natural and radiant smile.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
  { id: 4, name: 'Lê Thu Thảo', text: 'Dịch vụ tẩy trắng răng công nghệ ánh sáng lạnh rất nhanh chóng, chỉ mất 30 phút là hoàn thành. Răng mình trắng bật tông rõ rệt mà hoàn toàn không có cảm giác ê buốt.', enText: 'The cold light teeth whitening service is very fast, taking only 30 minutes. My teeth became noticeably whiter without any sensitivity.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200' },
  { id: 5, name: 'Vũ Anh Tuấn', text: 'Từng rất ám ảnh mỗi lần nhắc tới răng khôn, nhưng phương pháp nhổ răng bằng máy Piezotome ở đây siêu êm ái. Chiếc răng mọc lệch của tôi được lấy ra chỉ trong 10 phút.', enText: 'I used to be obsessed with wisdom teeth, but the Piezotome extraction method here is super smooth. My impacted tooth was removed in just 10 minutes.', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200' },
  { id: 6, name: 'Nguyễn Phương Mai', text: 'Con trai mình được bác sĩ nắn chỉnh khớp cắn bằng khay hàm Silicon từ lúc 8 tuổi. Giờ răng bé mọc rất đều, nụ cười đẹp tự nhiên và cấu trúc xương mặt cực kỳ cân đối.', enText: 'My son had his bite aligned by the doctor using silicone trays since he was 8. Now his teeth are very even, his smile is naturally beautiful, and his facial bone structure is extremely balanced.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200' },
];

export const BLOGS = BLOGS_DATA.slice(0, 3);

export default function Home() {
  const { t, language } = useLanguage();
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const openBooking = () => window.dispatchEvent(new Event('open-booking'));

  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    branch: '',
    service: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
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
          email: contactForm.email || '2554012131tru@ou.edu.vn',
          name: contactForm.name,
          phone: contactForm.phone,
          branch: contactForm.branch,
          service: contactForm.service,
          message: contactForm.message,
          type: 'Contact Request', // To distinguish from booking form
          _replyto: contactForm.email || '2554012131tru@ou.edu.vn',
        })
      });

      if (response.ok) {
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
          setContactForm({
            name: '',
            phone: '',
            email: '',
            branch: '',
            service: '',
            message: ''
          });
        }, 6000);
      } else {
        alert(t('Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại.', 'An error occurred while sending information. Please try again.'));
      }
    } catch (error) {
      alert(t('Có lỗi kết nối. Vui lòng thử lại sau.', 'Connection error. Please try again later.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* SECTION 1 - HERO */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000" 
            alt="Nha khoa Pacific" 
            className="w-full h-full object-cover scale-105 transform transition-transform duration-10000 hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <motion.span 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-block py-1 px-3 rounded-full bg-secondary/20 border border-secondary/50 text-secondary-50 text-sm font-semibold tracking-wider mb-6 backdrop-blur-md"
            >
              {t('DỊCH VỤ NHA KHOA QUỐC TẾ CAO CẤP PACIFIC', 'PACIFIC PREMIUM INTERNATIONAL DENTAL SERVICES')}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold leading-tight mb-6"
            >
              {t('Nụ cười khỏe mạnh', 'A healthy smile')} <br/> <span className="text-secondary">{t('Tự tin tỏa sáng', 'Confident to shine')}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-200 mb-10 leading-relaxed font-light text-balance"
            >
              {t('Pacific Dental Services mang đến giải pháp chăm sóc răng miệng hiện đại với đội ngũ chuyên gia giàu kinh nghiệm và công nghệ tiên tiến nhất thế giới.', 'Pacific Dental Services provides modern oral care solutions with a team of experienced experts and the world\'s most advanced technology.')}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="text-lg shadow-xl shadow-primary/40 px-8" onClick={openBooking}>
                {t('Đặt Lịch Ngay', 'Book Appointment')}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm bg-white/5" onClick={openBooking}>
                {t('Tư Vấn Miễn Phí', 'Free Consultation')}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - FAST INTRO */}
      <section className="py-20 bg-white relative z-20 -mt-10 rounded-t-[3rem] shadow-[-10px_-10px_30px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { num: '10+', label: t('Năm kinh nghiệm', 'Years of Experience') },
              { num: '5000+', label: t('Khách hàng hài lòng', 'Happy Clients') },
              { num: '100%', label: t('Trang bị hiện đại', 'Modern Equipment') },
              { num: '50+', label: t('Đối tác quốc tế', 'Global Partners') },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-3xl bg-slate-50 hover:bg-primary hover:text-white transition-colors duration-300 group"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary group-hover:text-white mb-2">{stat.num}</div>
                <div className="text-sm font-medium text-slate-500 group-hover:text-primary-50 uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link to="/about">
              <Button variant="ghost" className="gap-2 font-semibold">
                {t('Xem giới thiệu chi tiết', 'See detailed introduction')} <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3 - FEATURED SERVICES */}
      <section className="py-24 bg-slate-50 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-widest text-sm uppercase mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-[2px] bg-primary"></span>
              {t('Chuyên Môn Của Chúng Tôi', 'Our Expertise')}
              <span className="w-8 h-[2px] bg-primary"></span>
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">{t('Dịch Vụ Nha Khoa Chuyên Nghiệp', 'Professional Dental Services')}</h3>
            <p className="text-slate-600 text-lg leading-relaxed">{t('Cung cấp giải pháp điều trị toàn diện, ứng dụng công nghệ 3D hiện đại giúp rút ngắn thời gian và tối ưu hiệu quả.', 'Providing comprehensive treatment solutions, applying modern 3D technology to shorten time and optimize efficiency.')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {SERVICES.map((srv, i) => (
              <motion.div 
                key={srv.id}
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-100px" }} 
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 flex flex-col border border-slate-100"
              >
                <Link to={`/services/${srv.id}`} className="relative aspect-[4/3] overflow-hidden block">
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-red-500 to-rose-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform transition-transform group-hover:scale-105">
                    <Star size={12} fill="currentColor" /> {t('Ưu đãi', 'Offer')}
                  </div>
                  <img src={srv.image} alt={srv.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Quick view overlay button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    <span className="bg-white/20 backdrop-blur-md text-white font-medium px-6 py-2.5 rounded-full border border-white/30 transform translate-y-8 scale-95 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out flex items-center gap-2 shadow-xl hover:bg-white/30">
                      {t('Xem chi tiết', 'View Details')} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
                
                <div className="p-7 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full tracking-wider uppercase">{language === 'VN' ? srv.category : srv.enCategory}</span>
                  </div>
                  
                  <Link to={`/services/${srv.id}`} className="block group-hover:text-primary transition-colors">
                    <h4 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">{language === 'VN' ? srv.name : srv.enName}</h4>
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
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/services">
              <Button size="lg" className="gap-2 px-8 py-6 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1">
                {t('Xem Tất Cả Dịch Vụ', 'View All Services')} <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 - DOCTORS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-primary font-semibold tracking-wider text-sm uppercase mb-3">{t('Chuyên Gia Hàng Đầu', 'Leading Experts')}</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">{t('Đội Ngũ Bác Sĩ Của Chúng Tôi', 'Our Medical Team')}</h3>
            </div>
            <Link to="/doctors" className="shrink-0">
              <Button variant="ghost" className="gap-2 font-medium">{t('Hồ Sơ Đội Ngũ', 'Team Profiles')} <ArrowRight size={18} /></Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {DOCTORS.map((doc, i) => (
              <motion.div 
                key={doc.id}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedDoctor(doc)}
                onMouseEnter={() => setHoveredId(doc.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div 
                  className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: doc.bgColor || '#f1f5f9' }}
                >
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    referrerPolicy="no-referrer" 
                    className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
                    style={{ 
                      objectPosition: doc.objectPosition || 'top',
                      transform: doc.imageTransform 
                        ? `${doc.imageTransform} ${hoveredId === doc.id ? 'scale(1.05)' : 'scale(1)'}`
                        : (hoveredId === doc.id ? 'scale(1.05)' : 'scale(1)'),
                      transformOrigin: 'center center',
                      mixBlendMode: doc.mixBlendMode as any
                    }} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/10 to-transparent"></div>
                  <div className="absolute bottom-0 text-white p-6 w-full">
                    <h4 className="text-2xl font-extrabold mb-1 tracking-tight flex items-center justify-between">
                      {doc.name}
                      <span className="text-xs bg-white/10 backdrop-blur-inner border border-white/20 px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-secondary-50 font-semibold tracking-normal flex items-center gap-1 shrink-0">
                        <FileText size={11} /> {t('Hồ sơ', 'Profile')}
                      </span>
                    </h4>
                    <p className="text-secondary-light font-bold mb-3 text-sm tracking-wide uppercase">{language === 'VN' ? doc.spec : doc.enSpec}</p>
                    <div className="flex items-center gap-2 text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300 mb-2 font-medium bg-transparent">
                       <Clock size={14} className="text-secondary-light" /> {language === 'VN' ? doc.exp : doc.enExp}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300 delay-75 font-semibold leading-relaxed bg-transparent">
                       <CheckCircle size={14} className="text-secondary-light shrink-0" /> {language === 'VN' ? doc.cert : doc.enCert}
                    </div>
                    
                    {/* View detailed profile trigger text in home section */}
                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-white uppercase tracking-wider translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 bg-transparent">
                      <span>{t('Xem hồ sơ chi tiết', 'View full profile')}</span>
                      <span className="w-6 h-6 rounded-full bg-white text-slate-900 flex items-center justify-center text-lg font-bold group-hover:scale-115 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - TESTIMONIALS */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-primary/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-secondary/30 rounded-full blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-secondary font-semibold tracking-wider text-sm uppercase mb-3">{t('Câu Chuyện Nụ Cười', 'Smile Stories')}</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">{t('Khách Hàng Nói Gì Về Chúng Tôi', 'What Our Clients Say')}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {TESTIMONIALS.map((testi, i) => (
              <motion.div 
                key={testi.id}
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-secondary/30 hover:bg-white/10 transition-all duration-300"
              >
                <div>
                  <div className="flex gap-1 text-secondary mb-5">
                    {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-base text-slate-200 leading-relaxed mb-6 italic">"{language === 'VN' ? testi.text : testi.enText}"</p>
                </div>
                <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                  <img src={testi.img} alt={testi.name} className="w-12 h-12 rounded-full object-cover border-2 border-white/10" referrerPolicy="no-referrer" />
                  <div>
                    <h5 className="font-bold text-white text-base">{testi.name}</h5>
                    <p className="text-slate-400 text-xs font-medium">{t('Khách hàng', 'Client')}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - BLOG */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-primary font-semibold tracking-wider text-sm uppercase mb-3">{t('Blog & Tin Tức', 'Blog & News')}</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">{t('Kiến Thức Nha Khoa', 'Dental Knowledge')}</h3>
            </div>
            <Link to="/blog" className="shrink-0">
              <Button variant="ghost" className="gap-2 font-medium">{t('Xem Thêm Bài Viết', 'View More Articles')} <ArrowRight size={18} /></Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOGS.map((blog, i) => (
              <motion.div 
                key={blog.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={blog.img} alt={language === 'VN' ? blog.title : (blog.enTitle || blog.title)} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3 hover:text-primary transition-colors cursor-pointer line-clamp-2">{language === 'VN' ? blog.title : (blog.enTitle || blog.title)}</h4>
                  <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">{language === 'VN' ? blog.desc : (blog.enDesc || blog.desc)}</p>
                  <Link to="/blog">
                    <Button variant="ghost" className="px-0 text-primary hover:text-primary hover:bg-transparent tracking-wide font-bold flex items-center gap-2">
                       {t('ĐỌC THÊM', 'READ MORE')} <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION - CONTACT & CLINICS */}
      <section id="contact" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
        {/* Soft decorative background circles for visual depth */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-semibold tracking-wider text-sm uppercase mb-3">{t('Thông Tin Liên Hệ', 'Contact Information')}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('Hệ Thống Cơ Sở & Tư Vấn', 'Clinic Locations & Consultation')}</h3>
            <p className="text-slate-600">
              {t('Hãy liên hệ ngay với chúng tôi hoặc ghé thăm các cơ sở để được thăm khám, tư vấn trực tiếp bởi đội ngũ y bác sĩ đầu ngành.', 'Contact us now or visit our clinics to be examined and consulted directly by top-tier medical doctors.')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contacts & Addresses (takes 5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-slate-50/70 backdrop-blur-sm border border-slate-100 p-8 rounded-[32px] shadow-sm space-y-8">
                <h4 className="text-xl font-bold text-slate-900 border-b border-slate-200/60 pb-4">{t('Địa Chỉ Các Cơ Sở', 'Clinic Addresses')}</h4>
                
                {/* Clinic 1 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold uppercase">
                      {t('CƠ SỞ 1', 'BRANCH 1')}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="text-primary shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-slate-950">97 Võ Văn Tần, Q.3, TP.HCM</p>
                      <p className="text-sm text-slate-600 mt-1">{t('Vị trí đắc địa trung tâm, bãi đỗ xe ô tô rộng rãi, thuận tiện di chuyển.', 'Prime downtown location, spacious car parking, convenient transportation.')}</p>
                      <a 
                        href="https://maps.google.com/?q=97+V%C3%B5+V%C4%83n+T%E1%BA%A7n+Qu%E1%BA%ADn+3+TPHCM" 
                        target="_blank" 
                        rel="referrer" 
                        className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary-dark font-semibold mt-2.5 hover:underline"
                      >
                        {t('Chỉ đường trên bản đồ', 'Get directions on map')} <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Clinic 2 */}
                <div className="space-y-3 border-t border-slate-200/50 pt-8">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md bg-secondary/10 text-secondary text-xs font-bold uppercase">
                      {t('CƠ SỞ 2', 'BRANCH 2')}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="text-secondary shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-slate-950">Thanh Đa, Bình Thạnh, TP.HCM</p>
                      <p className="text-sm text-slate-600 mt-1">{t('Không gian sinh thái thoáng đãng, cơ sở vật chất tối tân bậc nhất.', 'Open ecological space, state-of-the-art facilities.')}</p>
                      <a 
                        href="https://maps.google.com/?q=Thanh+%C4%90a+B%C3%ACnh+Th%E1%BA%A1nh+TPHCM" 
                        target="_blank" 
                        rel="referrer" 
                        className="inline-flex items-center gap-1.5 text-xs text-secondary hover:text-secondary-dark font-semibold mt-2.5 hover:underline"
                      >
                        {t('Chỉ đường trên bản đồ', 'Get directions on map')} <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Hotlines and Email */}
              <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-[32px] text-white shadow-md shadow-primary/10 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                <h4 className="text-lg font-bold mb-6 relative z-10">{t('Liên Hệ Trực Tiếp', 'Direct Contact')}</h4>
                <div className="space-y-5 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-white/75 font-medium uppercase tracking-wider">{t('Hotline Tư Vấn 24/7', '24/7 Consultation Hotline')}</p>
                      <a href="tel:0903985463" className="text-xl font-bold hover:underline">0903 985 463</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 border-t border-white/10 pt-5">
                    <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-white/75 font-medium uppercase tracking-wider">{t('Hòm Thư Điện Tử', 'Email Address')}</p>
                      <p className="text-base font-semibold">hello@pacificdental.vn</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Contact Message Form (takes 7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50/50 border border-slate-100 p-8 md:p-10 rounded-[32px] shadow-sm">
                {formSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16"
                  >
                    <div className="w-18 h-18 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6 shadow-sm border border-emerald-100">
                      <CheckCircle size={36} className="animate-bounce" />
                    </div>
                    <h4 className="text-2xl font-bold text-emerald-600 mb-3">{t('Gửi Đăng Ký Thành Công!', 'Registration Sent Successfully!')}</h4>
                    <p className="text-slate-600 max-w-md mx-auto leading-relaxed text-sm">
                      {t('Cảm ơn anh/chị đã gửi yêu cầu. Thông tin của anh/chị đã được gửi đến bộ phận Chăm Sóc Khách Hàng của', 'Thank you for your request. Your information has been sent to the Customer Service department of')} <strong className="text-primary">Pacific Dental Services</strong>. {t('Chúng tôi sẽ liên hệ trong ít phút để xác nhận lịch hẹn thăm khám miễn phí!', 'We will contact you shortly to confirm your free consultation appointment!')}
                    </p>
                    <div className="mt-8 text-xs text-slate-400">
                      {t('Form đăng ký sẽ tự reset sau vài giây...', 'The registration form will reset in a few seconds...')}
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="border-b border-slate-200/60 pb-4 mb-6">
                      <h4 className="text-xl font-bold text-slate-900">{t('Gửi Yêu Cầu Tư Vấn Miễn Phí', 'Send Free Consultation Request')}</h4>
                      <p className="text-slate-500 text-sm mt-1 mb-2">{t('Điền đầy đủ thông tin bên dưới để đặt hẹn thăm khám nhanh chóng.', 'Fill in the information below to quickly book an appointment.')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t('Họ và tên *', 'Full Name *')}</label>
                        <input 
                          type="text" 
                          required 
                          placeholder={t('Ví dụ: Nguyễn Văn A', 'Example: John Doe')}
                          value={contactForm.name}
                          onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary transition duration-200 bg-white text-slate-900 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t('Số điện thoại *', 'Phone Number *')}</label>
                        <input 
                          type="tel" 
                          required 
                          placeholder={t('Ví dụ: 090xxxxxxx', 'Example: 090xxxxxxx')}
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary transition duration-200 bg-white text-slate-900 outline-none"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t('Email *', 'Email *')}</label>
                        <input 
                          type="email" 
                          required 
                          placeholder={t('Ví dụ: email@example.com', 'Example: email@example.com')}
                          value={contactForm.email}
                          onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary transition duration-200 bg-white text-slate-900 outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t('Cơ sở điều trị mong muốn *', 'Preferred Clinic *')}</label>
                        <select 
                          required 
                          value={contactForm.branch}
                          onChange={(e) => setContactForm({...contactForm, branch: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary transition duration-200 bg-white text-slate-900 outline-none"
                        >
                          <option value="">{t('Chọn cơ sở khám', 'Select a clinic')}</option>
                          <option value="cs1">{t('Cơ sở 1: 97 Võ Văn Tần, Q.3, TP.HCM', 'Branch 1: 97 Vo Van Tan, D3, HCMC')}</option>
                          <option value="cs2">{t('Cơ sở 2: Thanh Đa, Bình Thạnh, TP.HCM', 'Branch 2: Thanh Da, Binh Thanh, HCMC')}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t('Dịch vụ quan tâm *', 'Service of Interest *')}</label>
                        <select 
                          required 
                          value={contactForm.service}
                          onChange={(e) => setContactForm({...contactForm, service: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary transition duration-200 bg-white text-slate-900 outline-none"
                        >
                          <option value="">{t('Chọn dịch vụ', 'Select a service')}</option>
                          <option value="implant">{t('Cấy ghép răng Implant quốc tế', 'International Dental Implants')}</option>
                          <option value="clearcorrect">{t('Niềng răng vô hình ClearCorrect', 'ClearCorrect Invisible Braces')}</option>
                          <option value="rang-su">{t('Răng sứ thẩm mỹ cao cấp', 'Premium Cosmetic Porcelain')}</option>
                          <option value="tay-trang">{t('Tẩy trắng răng nhanh chuyên sâu', 'Intensive Fast Teeth Whitening')}</option>
                          <option value="khac">{t('Khác / Khám tổng quát răng miệng', 'Other / General Dental Checkup')}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t('Tình trạng răng miệng / Lời nhắn', 'Dental Condition / Message')}</label>
                      <textarea 
                        rows={3}
                        placeholder={t('Hãy chia sẻ tình trạng răng miệng hiện tại hoặc thời gian mong muốn thăm khám...', 'Please share your current dental condition or desired appointment time...')}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary transition duration-200 bg-white text-slate-900 outline-none resize-none"
                      ></textarea>
                    </div>

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full mt-2 text-base shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed">
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                          {t('ĐANG GỬI...', 'SENDING...')}
                        </span>
                      ) : (
                        t('GỬI ĐĂNG KÝ HẸN KHÁM', 'SUBMIT APPOINTMENT REQUEST')
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable premium doctor detailed profile modal */}
      <DoctorDetailModal 
        doctor={selectedDoctor} 
        isOpen={!!selectedDoctor} 
        onClose={() => setSelectedDoctor(null)} 
      />
    </div>
  );
}
