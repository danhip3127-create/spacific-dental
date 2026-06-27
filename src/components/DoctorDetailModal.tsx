import React from 'react';
import { X, Award, GraduationCap, CheckCircle2, Calendar, Star, Milestone } from 'lucide-react';
import { Button } from './ui/Button';
import { useLanguage } from '../lib/LanguageContext';

export interface Doctor {
  id: number;
  name: string;
  spec: string;
  enSpec?: string;
  exp: string;
  enExp?: string;
  cert: string;
  enCert?: string;
  image: string;
  bio?: string;
  enBio?: string;
  education?: string[];
  enEducation?: string[];
  specialties?: string[];
  enSpecialties?: string[];
  achievements?: string[];
  enAchievements?: string[];
  objectPosition?: string;
  imageTransform?: string;
  bgColor?: string;
  mixBlendMode?: string;
}

interface DoctorDetailModalProps {
  doctor: Doctor | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function DoctorDetailModal({ doctor, isOpen, onClose }: DoctorDetailModalProps) {
  const { t, language } = useLanguage();
  if (!isOpen || !doctor) return null;

  // Fallback defaults for rich profiles if they find themselves missing
  const defaultBioVn = doctor.id === 1 ? (
    `Dr. Damian Triet tin rằng một nụ cười khỏe mạnh bắt đầu từ sự vững chắc bên trong. Với triết lý phục hình bền vững và can thiệp tối thiểu, bác sĩ không chỉ khôi phục răng đã mất một cách hoàn hảo mà còn tái sinh sự tự tin, giúp khách hàng cải thiện chất lượng cuộc sống lâu dài.`
  ) : doctor.id === 2 ? (
    `Dr. Patrick Thien hướng tới triết lý chỉnh nha toàn diện và thẩm mỹ nụ cười tự nhiên. Bác sĩ luôn đặt mục tiêu không chỉ căn chỉnh các răng đều đặn mà còn tối ưu khớp cắn chuẩn lý tưởng, mang lại sự hài hòa cơ hạch mặt và nét rạng ngời cá nhân.`
  ) : doctor.id === 3 ? (
    `Dr. Wendy Phuong Anh xem y học thẩm mỹ nụ cười là sự kết hợp khéo léo giữa khoa học chính xác và nghệ thuật thị giác. Với phương châm bảo tồn tối đa răng tự nhiên, bác sĩ kiến tạo nên những nụ cười tinh tế, trong trẻo và rạng rỡ nhất cho từng khách hàng.`
  ) : (
    `Dr. Le Danh theo đuổi triết lý điều trị êm ái và phục hồi động học khớp cắn toàn diện. Áp dụng các kỹ thuật phẫu thuật sóng siêu âm tối tân, bác sĩ mang lại giải pháp an toàn cao trong tiểu phẫu và tái thiết lập sự cân bằng sinh học hoàn hảo cho hệ thống nhai.`
  );

  const defaultBioEn = doctor.id === 1 ? (
    `Dr. Damian Triet believes that a healthy smile begins with inner stability. With a philosophy of sustainable restoration and minimal intervention, he perfectly restores lost teeth and regenerates confidence, improving long-term quality of life.`
  ) : doctor.id === 2 ? (
    `Dr. Patrick Thien aims for a comprehensive orthodontic philosophy and natural smile aesthetics. He focuses not only on aligning teeth but also optimizing the ideal bite, bringing facial harmony and personal radiance.`
  ) : doctor.id === 3 ? (
    `Dr. Wendy Phuong Anh considers cosmetic dentistry a clever combination of precise science and visual art. With a motto of maximizing natural teeth preservation, she creates the most refined, clear, and radiant smiles.`
  ) : (
    `Dr. Le Danh pursues a philosophy of gentle treatment and comprehensive bite kinematics restoration. Applying state-of-the-art ultrasonic surgery techniques, he brings highly safe minor surgery solutions and perfect biological balance.`
  );
  
  const defaultEducationVn = doctor.id === 1 ? [
    "Tốt nghiệp Tiến sĩ Nha khoa - Đại học Harvard (Hoa Kỳ)",
    "Chứng chỉ Cấy ghép Implant nâng cao - Đại học Loma Linda (Hoa Kỳ)",
    "Hơn 15 năm tu nghiệp chuyên sâu về Phục hình & Phẫu thuật cấy ghép xương",
    "Thành viên chính thức của Hiệp hội Thiết kế Nụ cười Quốc tế (ITI)"
  ] : doctor.id === 2 ? [
    "Tốt nghiệp Thạc sĩ Chỉnh nha Thẩm mỹ - Đại học Sydney (Australia)",
    "Chứng chỉ Bác sĩ Thần tốc Chỉnh nha trong suốt Invisalign & ClearCorrect toàn cầu",
    "Thành viên Hiệp hội Chỉnh nha Không mắc cài Châu Á (APOS)",
    "Hơn 12 năm kinh nghiệm lâm sàng chỉnh nha chuyên sâu từ cơ bản đến phức tạp"
  ] : doctor.id === 3 ? [
    "Tốt nghiệp Bác sĩ Chuyên khoa I - Đại học Y Dược TP.HCM",
    "Bằng Thạc sĩ Nha khoa Thẩm mỹ - Đại học Nha khoa Thụy Sĩ",
    "Chứng chỉ Chuyên sâu về Thiết kế Kỹ thuật số DSD (Digital Smile Design)",
    "Tu nghiệp chuyên sâu dán sứ Veneer thẩm mỹ bảo tồn tại Thụy Sĩ"
  ] : [
    "Tốt nghiệp Thạc sĩ Nha khoa - Đại học Tokyo (Nhật Bản)",
    "Chứng chỉ Phẫu thuật Hàm mặt & Phục hình Khớp cắn chuyên sâu tại Hàn Quốc",
    "Thành viên chính thức của Hiệp hội Cấy ghép Nha khoa Hoa Kỳ (AAID)",
    "Hơn 14 năm kinh nghiệm phẫu thuật răng khôn và điều trị khớp cắn nâng cao"
  ];

  const defaultEducationEn = doctor.id === 1 ? [
    "PhD in Dentistry - Harvard University (USA)",
    "Advanced Implant Placement Certificate - Loma Linda University (USA)",
    "Over 15 years of specialized training in Prosthodontics & Bone Graft Surgery",
    "Official Member of the International Team for Implantology (ITI)"
  ] : doctor.id === 2 ? [
    "Master of Aesthetic Orthodontics - University of Sydney (Australia)",
    "Global Invisalign & ClearCorrect Clear Aligner Speed Doctor Certificate",
    "Member of the Asian Pacific Orthodontic Society (APOS)",
    "Over 12 years of deep clinical orthodontic experience"
  ] : doctor.id === 3 ? [
    "Specialist Level 1 Doctor - University of Medicine and Pharmacy HCMC",
    "Master of Aesthetic Dentistry - Swiss Dental University",
    "Advanced Certificate in Digital Smile Design (DSD)",
    "Specialized training in conservative aesthetic Veneers in Switzerland"
  ] : [
    "Master of Dentistry - University of Tokyo (Japan)",
    "Maxillofacial Surgery & Deep Bite Restoration Certificate in Korea",
    "Official Member of the American Academy of Implant Dentistry (AAID)",
    "Over 14 years of experience in wisdom tooth surgery and advanced bite treatment"
  ];

  const defaultSpecialtiesVn = doctor.id === 1 ? [
    "Cấy ghép Implant toàn hàm phức tạp (All-on-4 / All-on-6)",
    "Phẫu thuật nâng xoang kín, nâng xoang hở và ghép xương tự thân",
    "Phục hình răng sứ thẩm mỹ tích hợp trên Implant sinh học"
  ] : doctor.id === 2 ? [
    "Chỉnh nha khay trong suốt thế hệ mới (Invisalign, ClearCorrect)",
    "Chỉnh nha mắc cài tự động (Kim loại, Pha lê, Sứ cao cấp)",
    "Nắn chỉnh, can thiệp tăng trưởng xương hàm cho trẻ em sớm"
  ] : doctor.id === 3 ? [
    "Mặt dán sứ Veneer siêu mỏng không mài răng bảo tồn tối đa răng thật",
    "Bọc răng sứ thẩm mỹ đỉnh cao (Lumineer, Emax, Cercon HT)",
    "Thiết kế thẩm mỹ nụ cười toàn diện Digital Smile Design"
  ] : [
    "Phẫu thuật răng khôn thế hệ mới sóng siêu âm Piezotome không đau",
    "Điều trị rối loạn khớp thái dương hàm (TMD) và khớp cắn toàn diện",
    "Phẫu thuật chỉnh hình xương hàm mặt và phẫu thuật nha chu nâng cao"
  ];

  const defaultSpecialtiesEn = doctor.id === 1 ? [
    "Complex Full-Arch Implants (All-on-4 / All-on-6)",
    "Closed/Open Sinus Lift and Autogenous Bone Grafting",
    "Aesthetic Porcelain Restoration on Biological Implants"
  ] : doctor.id === 2 ? [
    "New Generation Clear Aligners (Invisalign, ClearCorrect)",
    "Self-ligating Braces (Metal, Crystal, Premium Porcelain)",
    "Early Orthodontic Intervention and Jaw Growth Modification for Children"
  ] : doctor.id === 3 ? [
    "Ultra-thin Non-prep Veneers for Maximum Natural Tooth Preservation",
    "Premium Aesthetic Porcelain Crowns (Lumineer, Emax, Cercon HT)",
    "Comprehensive Digital Smile Design"
  ] : [
    "Piezotome Ultrasonic Painless Wisdom Tooth Surgery",
    "Temporomandibular Joint (TMJ) Disorders and Comprehensive Bite Treatment",
    "Maxillofacial Orthognathic Surgery and Advanced Periodontal Surgery"
  ];

  const defaultAchievementsVn = doctor.id === 1 ? [
    "Đã thực hiện thành công hơn 3,000 ca cấy ghép Implant phức tạp",
    "Nhận giải thưởng 'Bàn tay vàng Nha khoa Việt Nam' năm 2023",
    "Diễn giả danh dự thường niên tại Diễn đàn ITI khu vực Đông Nam Á"
  ] : doctor.id === 2 ? [
    "Kiến tạo thành công trên 2,000 nụ cười hoàn hảo bằng khay Invisalign",
    "Chứng nhận 'Platinum Elite Invisalign Provider' danh giá từ Mỹ",
    "Tác giả nhiều bài báo khoa học về xu hướng chỉnh nha hiện đại"
  ] : doctor.id === 3 ? [
    "Thực hiện thành công trên 2,500 ca dán sứ Veneer thẩm mỹ không đau",
    "Chuyên gia cố vấn cho các chương trình thay đổi diện mạo nụ cười",
    "Đạt cúp vinh danh 'Bác sĩ thẩm mỹ nụ cười tiêu biểu Châu Á - Thái Bình Dương'"
  ] : [
    "Được vinh danh Bác sĩ Phẫu thuật xuất sắc tại Diễn đàn nha khoa Đông Á",
    "Thực hiện thành công trên 4,000 ca phẫu thuật răng khôn không sưng đau",
    "Thành viên tích cực tham gia các dự án thiện nguyện nụ cười Smile Train"
  ];

  const defaultAchievementsEn = doctor.id === 1 ? [
    "Successfully performed over 3,000 complex implant placements",
    "Received 'Golden Hands in Vietnamese Dentistry' award in 2023",
    "Annual Honorary Speaker at the ITI Southeast Asia Forum"
  ] : doctor.id === 2 ? [
    "Successfully created over 2,000 perfect smiles with Invisalign",
    "Prestigious 'Platinum Elite Invisalign Provider' Certification from the US",
    "Author of multiple scientific articles on modern orthodontic trends"
  ] : doctor.id === 3 ? [
    "Successfully performed over 2,500 painless aesthetic veneer cases",
    "Expert consultant for smile makeover programs",
    "Awarded 'Typical Asian-Pacific Smile Aesthetic Doctor' trophy"
  ] : [
    "Honored as Outstanding Surgeon at the East Asia Dental Forum",
    "Successfully performed over 4,000 painless wisdom tooth surgeries",
    "Active member of Smile Train charity projects"
  ];

  const finalBio = language === 'VN' 
    ? (doctor.bio || defaultBioVn)
    : (doctor.enBio || defaultBioEn);
    
  const finalEducation = language === 'VN'
    ? (doctor.education || defaultEducationVn)
    : (doctor.enEducation || defaultEducationEn);
    
  const finalSpecialties = language === 'VN'
    ? (doctor.specialties || defaultSpecialtiesVn)
    : (doctor.enSpecialties || defaultSpecialtiesEn);
    
  const finalAchievements = language === 'VN'
    ? (doctor.achievements || defaultAchievementsVn)
    : (doctor.enAchievements || defaultAchievementsEn);

  const handleBookWithDoctor = () => {
    onClose();
    // Dispatch regular booking event
    window.dispatchEvent(new Event('open-booking'));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md">
      {/* Background layer click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="bg-white rounded-[2.5rem] w-full max-w-4xl shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col md:flex-row z-10 border border-slate-100">
        
        {/* Close button */}
        <button 
          className="absolute top-5 right-5 z-20 p-2.5 text-slate-500 hover:text-slate-900 transition bg-white/90 hover:bg-white rounded-full shadow-md border border-slate-100" 
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {/* Doctor Left Column - Aesthetic Professional Frame */}
        <div className="w-full md:w-[38%] bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col items-center p-8 border-b md:border-b-0 md:border-r border-slate-200/60 relative overflow-hidden shrink-0">
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-primary to-secondary"></div>
          
          <div 
            className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6 aspect-square shrink-0"
            style={{ backgroundColor: doctor.bgColor || '#ffffff' }}
          >
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover" 
              style={{ 
                objectPosition: doctor.objectPosition || 'top',
                transform: doctor.imageTransform || 'none',
                mixBlendMode: doctor.mixBlendMode as any
              }} 
            />
          </div>

          <div className="text-center w-full">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary-dark rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Star size={12} fill="currentColor" /> {language === 'VN' ? doctor.spec : (doctor.enSpec || doctor.spec)}
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">
              {doctor.name}
            </h3>
            
            <p className="text-slate-500 font-medium text-sm mb-6 flex items-center justify-center gap-1.5">
              <Award size={16} className="text-secondary" /> {language === 'VN' ? doctor.exp : (doctor.enExp || doctor.exp)}
            </p>

            <div className="bg-white/90 rounded-2xl p-4 border border-slate-200/50 text-left shadow-sm">
              <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider mb-2 text-primary">{t('Chứng nhận tiêu biểu', 'Featured Certification')}</h4>
              <p className="text-sm font-semibold text-slate-700 leading-snug">{language === 'VN' ? doctor.cert : (doctor.enCert || doctor.cert)}</p>
            </div>

            <Button 
              onClick={handleBookWithDoctor}
              size="lg" 
              className="w-full mt-6 gap-2 bg-gradient-to-r from-primary to-secondary hover:scale-[1.02] transition-transform duration-300 font-extrabold shadow-lg shadow-primary/20"
            >
              <Calendar size={18} /> {t('ĐẶT LỊCH HẸN TRỰC TIẾP', 'BOOK DIRECT APPOINTMENT')}
            </Button>
          </div>
        </div>

        {/* Doctor Right Column - Rich Profile Tabs and Text */}
        <div className="w-full md:w-[62%] p-8 md:p-10 overflow-y-auto max-h-[50vh] md:max-h-[90vh] space-y-8">
          
          {/* About Bio */}
          <div>
            <div className="flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-wide">{t('Phương châm điều trị', 'Treatment Philosophy')}</h3>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium text-[15px]">
              {finalBio}
            </p>
          </div>

          {/* Specialties */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-wide">{t('Lĩnh Vực Chuyên Sâu', 'Specializations')}</h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {finalSpecialties.map((specItem, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-secondary/5 hover:bg-secondary/10 transition-colors p-3.5 rounded-2xl border border-secondary/10 group">
                  <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-700 font-bold text-sm leading-snug">{specItem}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Achievements */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-wide">{t('Học vấn & Bằng Cấp', 'Education & Qualifications')}</h3>
            </div>
            <ul className="space-y-3.5">
              {finalEducation.map((eduItem, idx) => (
                <li key={idx} className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
                    <GraduationCap size={15} className="text-slate-500" />
                  </div>
                  <span className="text-sm font-semibold text-slate-600 leading-relaxed mt-1">{eduItem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outstanding Achievements */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-wide">{t('Thành tựu xuất sắc', 'Outstanding Achievements')}</h3>
            </div>
            <ul className="space-y-3.5">
              {finalAchievements.map((achItem, idx) => (
                <li key={idx} className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                    <Milestone size={15} className="text-primary" />
                  </div>
                  <span className="text-sm font-bold text-slate-700 leading-relaxed mt-1">{achItem}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
