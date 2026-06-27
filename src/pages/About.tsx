import React from 'react';
import { Shield, Sparkles, HeartHandshake, Award, Target, Eye, Cog, Stethoscope, Briefcase, Activity } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="pt-16 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-6">
            {t('Câu Chuyện Thương Hiệu', 'Brand Story')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            {t('PDS HEALTH: HÀNH TRÌNH CHUYỂN MÌNH VÀ ĐỊNH HÌNH TƯƠNG LAI Y TẾ TÍCH HỢP', 'PDS HEALTH: THE JOURNEY OF TRANSFORMATION AND SHAPING THE FUTURE OF INTEGRATED HEALTHCARE')}
          </h1>
        </div>

        {/* Timeline / History */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('I. Lịch Sử Hình Thành & Các Cột Mốc Phát Triển', 'I. History & Development Milestones')}</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
              <div className="text-primary font-bold text-xl mb-2">1994 – 2000</div>
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-start">
                <span className="flex-1">{t('Giai đoạn Khởi nghiệp và Thiết lập Mô hình DSO', 'Start-up Phase and DSO Model Establishment')}</span>
              </h3>
              <ul className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                  <div><strong className="text-slate-800">{t('Năm 1994:', 'Year 1994:')}</strong> {t('Được thành lập bởi Stephen E. Thorne IV tại Irvine, California với tên gọi ban đầu là Pacific Dental Services (PDS). Khởi đầu từ việc hỗ trợ vận hành cho một phòng khám nha khoa duy nhất.', 'Founded by Stephen E. Thorne IV in Irvine, California under the original name Pacific Dental Services (PDS). Starting with operational support for a single dental clinic.')}</div>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                  <div><strong className="text-slate-800">{t('Năm 1997:', 'Year 1997:')}</strong> {t('Tiên phong định hình và chuẩn hóa mô hình Tổ chức Hỗ trợ Nha khoa (DSO) tại Mỹ. Mô hình này giúp các nha sĩ tách rời gánh nặng quản lý hành chính để tập trung 100% vào chuyên môn điều trị.', 'Pioneered shaping and standardizing the Dental Support Organization (DSO) model in the US. This model helps dentists separate the burden of administrative management to focus 100% on treatment expertise.')}</div>
                </li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow border border-slate-100 relative md:-translate-y-4">
              <div className="text-primary font-bold text-xl mb-2">2001 – 2021</div>
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-start">
                <span className="flex-1">{t('Giai đoạn Bứt phá Công nghệ và Kỷ lục Quy mô', 'Technological Breakthrough and Scale Record Phase')}</span>
              </h3>
              <ul className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                  <div><strong className="text-slate-800">{t('Năm 2012:', 'Year 2012:')}</strong> {t('Thành lập Quỹ từ thiện phi lợi nhuận PDS Foundation, chính thức nâng tầm các hoạt động khám chữa bệnh miễn phí cho cộng đồng và tài trợ học bổng y khoa.', 'Established the non-profit PDS Foundation, officially elevating free medical examination and treatment activities for the community and sponsoring medical scholarships.')}</div>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                  <div><strong className="text-slate-800">{t('Năm 2020:', 'Year 2020:')}</strong> {t('Trở thành tổ chức nha khoa đầu tiên trên thế giới tích hợp thành công Epic – hệ thống bệnh án điện tử (EHR) lớn nhất Hoa Kỳ – vào toàn bộ mạng lưới phòng khám của mình.', 'Became the first dental organization in the world to successfully integrate Epic - the largest electronic health record (EHR) system in the US - into its entire clinic network.')}</div>
                </li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
              <div className="text-primary font-bold text-xl mb-2">{t('2022 – Hiện tại', '2022 - Present')}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-start">
                <span className="flex-1">{t('Kỷ Nguyên Tích Hợp Toàn Diện và Tái Định Vị PDS Health', 'Era of Comprehensive Integration and PDS Health Repositioning')}</span>
              </h3>
              <ul className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                  <div><strong className="text-slate-800">{t('Tháng 12/2023:', 'Dec 2023:')}</strong> {t('Bắt tay chiến lược với hệ thống y tế lớn MemorialCare để ra mắt mô hình phòng khám phức hợp đa khoa - nha khoa đầu tiên tại Nam California.', 'Strategic partnership with MemorialCare health system to launch the first multi-specialty - dental complex clinic model in Southern California.')}</div>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                  <div><strong className="text-slate-800">{t('Tháng 4/2024:', 'Apr 2024:')}</strong> {t('Đánh dấu kỷ niệm 30 năm bằng việc tái định vị thương hiệu thành PDS Health, di dời trụ sở chính đến Henderson, Nevada. Bước chuyển mình từ một tổ chức thuần nha khoa sang một tập đoàn chăm sóc sức khỏe toàn diện.', 'Marked its 30th anniversary by rebranding as PDS Health, moving its headquarters to Henderson, Nevada. A transition from a pure dental organization to a comprehensive healthcare group.')}</div>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                  <div><strong className="text-slate-800">{t('Cuối năm 2024:', 'Late 2024:')}</strong> {t('Chính thức khai trương phòng khám thứ 1.000 tại Charleston, Nam Carolina, khẳng định vị thế dẫn đầu thị trường.', 'Officially opened the 1,000th clinic in Charleston, South Carolina, affirming its market leadership position.')}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Mission */}
          <div className="bg-gradient-to-br from-primary to-primary-dark p-10 lg:p-12 rounded-[2.5rem] text-white shadow-2xl shadow-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <Target size={48} className="text-secondary/80 mb-6" />
            <h2 className="text-3xl font-bold mb-6">{t('II. Sứ Mệnh (Mission)', 'II. Mission')}</h2>
            <blockquote className="text-xl lg:text-2xl font-light italic leading-relaxed mb-10 text-white/90">
              "{t('Chúng tôi tồn tại để hỗ trợ các bác sĩ lâm sàng phát huy tối đa năng lực chuyên môn, đồng thời tiên phong thúc đẩy sự liên kết giữa sức khỏe răng miệng và sức khỏe toàn thân (The Mouth-Body Connection®) nhằm mang lại cuộc sống hạnh phúc hơn cho bệnh nhân.', 'We exist to support clinicians in maximizing their clinical potential while leading the charge in advancing the connection between oral health and overall health (The Mouth-Body Connection®) to bring a happier life to patients.')}"
            </blockquote>
            
            <div className="space-y-6 pt-8 border-t border-white/20">
              <h4 className="font-bold text-lg text-secondary filter brightness-125 mb-4">{t('Cách PDS Health hiện thực hóa sứ mệnh:', 'How PDS Health realizes its mission:')}</h4>
              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-3 rounded-xl shrink-0"><Cog size={24} className="text-white" /></div>
                <div>
                  <strong className="block text-white mb-1">{t('Bảo hộ vận hành:', 'Operational Support:')}</strong>
                  <span className="text-white/80 text-sm leading-relaxed">{t('Cung cấp hệ thống quản trị, marketing, nhân sự và chuỗi cung ứng vật tư đạt chuẩn quốc tế cho các phòng khám thành viên.', 'Provides international standard management, marketing, HR, and supply chain systems for member clinics.')}</span>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-3 rounded-xl shrink-0"><Sparkles size={24} className="text-white" /></div>
                <div>
                  <strong className="block text-white mb-1">{t('Ứng dụng công nghệ:', 'Technology Application:')}</strong>
                  <span className="text-white/80 text-sm leading-relaxed">{t('Trang bị các công nghệ hiện đại nhất (như CAD/CAM, hình ảnh kỹ thuật số, AI hỗ trợ chẩn đoán) để tối ưu hóa phác đồ điều trị.', 'Equipped with the most modern technologies (like CAD/CAM, digital imaging, diagnostic AI) to optimize treatment plans.')}</span>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-3 rounded-xl shrink-0"><Activity size={24} className="text-white" /></div>
                <div>
                  <strong className="block text-white mb-1">{t('Kết nối y tế:', 'Medical Connection:')}</strong>
                  <span className="text-white/80 text-sm leading-relaxed">{t('Xóa bỏ ranh giới biệt lập giữa nha khoa và y khoa tổng quát bằng dữ liệu bệnh án đồng bộ toàn diện.', 'Eliminates the isolated boundaries between dentistry and general medicine with comprehensive synchronized medical record data.')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white p-10 lg:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-10"></div>
            <Eye size={48} className="text-primary mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{t('III. Tầm Nhìn (Vision)', 'III. Vision')}</h2>
            <blockquote className="text-xl lg:text-2xl font-light italic leading-relaxed mb-10 text-slate-600">
              "{t('Trở thành tập đoàn y tế dẫn đầu thế giới trong việc định hình lại tương lai của ngành chăm sóc sức khỏe tích hợp; nơi mà nha khoa và y khoa phối hợp hoàn hảo để mang lại giải pháp phòng bệnh chủ động và toàn diện nhất.', 'To become the world\'s leading healthcare group in reshaping the future of integrated healthcare; where dentistry and medicine coordinate perfectly to provide the most proactive and comprehensive disease prevention solutions.')}"
            </blockquote>
            
            <div className="space-y-6 pt-8 border-t border-slate-100">
              <h4 className="font-bold text-lg text-slate-800 mb-4">{t('Định hướng chiến lược tầm nhìn đến tương lai:', 'Strategic vision towards the future:')}</h4>
              <div className="flex gap-4 items-start">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 shrink-0"><Briefcase size={24} className="text-primary" /></div>
                <div>
                  <strong className="block text-slate-900 mb-1">{t('Mở rộng mô hình Co-located:', 'Expanding the Co-located model:')}</strong>
                  <span className="text-slate-600 text-sm leading-relaxed">{t('Nhân rộng các tổ hợp phòng khám đa khoa tích hợp Nha - Y khoa tại một địa điểm trên khắp nước Mỹ.', 'Replicating multi-specialty integrated Dental - Medical clinic complexes at a single location across the US.')}</span>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 shrink-0"><Stethoscope size={24} className="text-primary" /></div>
                <div>
                  <strong className="block text-slate-900 mb-1">{t('Chẩn đoán chủ động:', 'Proactive Diagnosis:')}</strong>
                  <span className="text-slate-600 text-sm leading-relaxed">{t('Sử dụng dữ liệu liên kết từ hệ thống Epic để phát hiện sớm các bệnh lý mãn tính nguy hiểm như tiểu đường, tim mạch, biến chứng thai kỳ ngay từ chiếc ghế nha khoa.', 'Using linked data from the Epic system to early detect dangerous chronic diseases like diabetes, cardiovascular disease, pregnancy complications right from the dental chair.')}</span>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 shrink-0"><Shield size={24} className="text-primary" /></div>
                <div>
                  <strong className="block text-slate-900 mb-1">{t('Y tế bền vững:', 'Sustainable Healthcare:')}</strong>
                  <span className="text-slate-600 text-sm leading-relaxed">{t('Xây dựng một hệ sinh thái y tế thông minh, giảm thiểu chi phí điều trị cho người bệnh nhờ vào mô hình phòng bệnh và can thiệp sớm.', 'Building a smart healthcare ecosystem, minimizing treatment costs for patients thanks to disease prevention and early intervention models.')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Image Gallery Grid */}
        <div id="gallery-section" className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('IV. Thư Viện Hình Ảnh & Cột Mốc Ghi Dấu Ấn', 'IV. Image Gallery & Milestones')}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
              {t('Hành trình 30 năm phát kiến công nghệ, kết nối sức khỏe toàn thân và phụng sự cộng đồng của đội ngũ PDS Health trên toàn nước Mỹ.', 'A 30-year journey of technological innovation, connecting whole body health and serving the community by the PDS Health team across the US.')}
            </p>
            <div className="w-16 h-1 bg-secondary mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-1000">
            {/* Image 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col group">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src="/assets/images/pds_hq_henderson_1781368440244.jpg" 
                  alt="Trụ sở chính PDS Health" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                  Henderson, NV
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">{t('Trụ Sở Chính Hiện Đại', 'Modern Headquarters')}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {t('Trụ sở mới tại Henderson, Nevada được thiết kế thân thiện với môi trường, phục vụ cho sự chuyển mình toàn diện của PDS Health.', 'The new headquarters in Henderson, Nevada is designed to be environmentally friendly, serving the comprehensive transformation of PDS Health.')}
                  </p>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col group">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src="/assets/images/pds_hq_irvine_1781368459705.jpg" 
                  alt="Trụ sở Irvine California" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                  Irvine, CA
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">{t('Khởi Đầu Tại Irvine', 'Beginnings in Irvine')}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {t('Tòa nhà văn phòng hành chính đầu tiên tại California, nơi đặt nền móng vững chắc cho mô hình DSO tiên khởi tại Mỹ.', 'The first administrative office building in California, laying a solid foundation for the initial DSO model in the US.')}
                  </p>
                </div>
              </div>
            </div>

            {/* Image 3 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col group">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src="/assets/images/pds_ribbon_cutting_1781368478846.jpg" 
                  alt="Lễ cắt băng khánh thành PDS Health" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-4 left-4 bg-secondary text-slate-905 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                  {t('Cột Mốc 30 Năm', '30 Year Milestone')}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">{t('Lễ Cắt Băng Chuyển Mình', 'Ribbon Cutting Transformation')}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {t('Stephen E. Thorne IV cùng ban điều hành thực hiện nghi thức cắt băng chào đón thương hiệu tích hợp PDS Health.', 'Stephen E. Thorne IV and the executive board perform the ribbon-cutting ceremony to welcome the integrated PDS Health brand.')}
                  </p>
                </div>
              </div>
            </div>

            {/* Image 4 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col group">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src="/assets/images/pds_foundation_bus_1781368496338.jpg" 
                  alt="Hoạt động cộng đồng PDS Foundation" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-4 left-4 bg-green-500 text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                  {t('Cộng Đồng', 'Community')}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">{t('Quỹ Từ Thiện PDS Foundation', 'PDS Foundation')}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {t('Cung cấp các phòng khám di động và tài trợ điều trị cho người nghèo, trẻ em và người khuyết tật trên khắp Hoa Kỳ.', 'Providing mobile clinics and funding treatment for the poor, children, and disabled across the US.')}
                  </p>
                </div>
              </div>
            </div>

            {/* Image 5 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col group">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src="/assets/images/mouth_body_conn_1781368249551.jpg" 
                  alt="Mối liên hệ Mouth-Body Connection" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                  {t('Y Khoa Tích Hợp', 'Integrated Medicine')}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">The Mouth-Body Connection®</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {t('Y học thực chứng minh mối tương quan trực tiếp giữa mảng bám răng miệng và các bệnh lý nền tự miễn mãn tính nội khoa.', 'Evidence-based medicine proves a direct correlation between oral plaque and chronic autoimmune underlying medical conditions.')}
                  </p>
                </div>
              </div>
            </div>

            {/* Image 6 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col group">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src="/assets/images/pds_doctors_team_1781368267797.jpg" 
                  alt="Đội ngũ bác sĩ và cộng sự" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                  {t('Đội Ngũ Bác Sĩ', 'Doctor Team')}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">{t('Đội Ngũ Bác Sĩ Chuyên Môn', 'Specialized Doctors')}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {t('Các nha sĩ và y sĩ tại hệ thống phòng khám lâm sàng được hỗ trợ đắc lực bởi mô hình quản trị DSO tiên tiến nhất.', 'Dentists and physicians in the clinical clinic system are heavily supported by the most advanced DSO governance model.')}
                  </p>
                </div>
              </div>
            </div>

            {/* Image 7 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col group">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src="/assets/images/family_dental_care_1781368283901.jpg" 
                  alt="Chăm sóc nha khoa gia đình" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                  {t('Gia Đình', 'Family')}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">{t('Chăm Sóc Nha Khoa Gia Đình', 'Family Dental Care')}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {t('Thiết lập niềm tin y khoa vững chắc của từng gia đình Mỹ qua dịch vụ chẩn đoán tận tâm và công nghệ kỹ thuật số.', 'Establishing the solid medical trust of every American family through dedicated diagnostic services and digital technology.')}
                  </p>
                </div>
              </div>
            </div>

            {/* Image 8 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col group">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src="/assets/images/digital_dent_cadcam_1781368299109.jpg" 
                  alt="Công nghệ CAD/CAM chẩn đoán" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-4 left-4 bg-secondary text-slate-905 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                  {t('Số Hóa', 'Digital')}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">{t('Nha Khoa Kỹ Thuật Số', 'Digital Dentistry')}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {t('Sở hữu công nghệ quét khay quét 3D, hỗ trợ dựng hình nhanh CAD/CAM lấy sứ ngay trong một lần hẹn duy nhất.', 'Possessing 3D tray scanning technology, supporting fast CAD/CAM modeling for porcelain placement in just a single appointment.')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
