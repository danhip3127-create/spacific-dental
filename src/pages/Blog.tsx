import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Search, 
  Calendar, 
  Clock, 
  BookOpen, 
  X, 
  ChevronRight, 
  CheckCircle,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { BLOGS_DATA, BlogItem } from '../data/blogsData';
import { useLanguage } from '../lib/LanguageContext';

export default function Blog() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);

  // Predefined Categories mapped to English
  const categoryMap: Record<string, string> = {
    'All': 'Tất cả',
    'Implant': 'Implant',
    'Orthodontics': 'Niềng răng',
    'Porcelain': 'Răng sứ',
    'Care': 'Chăm sóc',
    'Whitening': 'Tẩy trắng'
  };

  const categories = Object.keys(categoryMap);

  // Filtered Blogs List
  const filteredBlogs = useMemo(() => {
    return BLOGS_DATA.filter(blog => {
      const matchCat = categoryMap[selectedCategory];
      const matchesCategory = selectedCategory === 'All' || blog.category === matchCat;
      const title = language === 'VN' ? blog.title : (blog.enTitle || blog.title);
      const desc = language === 'VN' ? blog.desc : (blog.enDesc || blog.desc);
      const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, language]);

  // Featured Blog - Select the first matching one or first overall
  const featuredBlog = useMemo(() => {
    return BLOGS_DATA[0];
  }, []);

  const openBookingModal = () => {
    window.dispatchEvent(new Event('open-booking'));
  };

  const renderBlogText = (blog: BlogItem, field: 'title' | 'desc' | 'category' | 'authorSpec' | 'readTime') => {
    if (language === 'VN') {
      if (field === 'authorSpec') return blog.author.spec;
      return blog[field];
    }
    if (field === 'title') return blog.enTitle || blog.title;
    if (field === 'desc') return blog.enDesc || blog.desc;
    if (field === 'category') return blog.enCategory || blog.category;
    if (field === 'authorSpec') return blog.author.enSpec || blog.author.spec;
    if (field === 'readTime') return blog.enReadTime || blog.readTime;
    return '';
  };

  return (
    <div className="py-20 bg-slate-50/50 min-h-screen relative overflow-hidden">
      {/* Soft atmospheric background circles */}
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={12} className="animate-pulse text-secondary" /> {t('Tri Thức Nha Khoa Quốc Tế', 'International Dental Knowledge')}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-6 font-sans">
            {t('Kiến Thức Nha Khoa', 'In-depth Dental')} <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t('Chuyên Sâu', 'Knowledge')}</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            {t('Cổng thông tin y khoa chính thống tại Pacific Dental Services. Đồng hành cùng đội ngũ tiến sĩ, bác sĩ đầu ngành cập nhật định kỳ giải pháp răng sứ, chỉnh nha và cấy ghép hiện đại chuẩn quốc tế.', 'The official medical information portal at Pacific Dental Services. Accompanying top doctors and experts to regularly update international standard solutions for porcelain teeth, orthodontics, and modern implants.')}
          </p>
        </div>

        {/* SEARCH & FILTER CONTROLS */}
        <div className="bg-white border border-slate-100 p-6 rounded-[32px] shadow-sm mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          
          {/* Pill Categories */}
          <div className="flex flex-wrap gap-2.5 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button 
                  key={cat} 
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-2xl text-[14px] font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'bg-primary text-white shadow-md shadow-primary/10 border border-primary' 
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-primary border border-transparent'
                  }`}
                >
                  {language === 'VN' ? categoryMap[cat] : cat}
                </button>
              );
            })}
          </div>

          {/* Search bar inputs */}
          <div className="relative w-full md:w-80 shrink-0">
            <input 
              type="text"
              placeholder={t('Tìm kiếm bài viết y khoa...', 'Search medical articles...')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm transition-all duration-200"
            />
            <Search className="absolute left-4 top-3.5 text-slate-400" size={16} />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-3.5 text-slate-400 hover:text-slate-600"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* FEATURED POST - Only displayed when not searching/specific category */}
        {selectedCategory === 'All' && !searchQuery && featuredBlog && (
          <div className="mb-16">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-4">
              {t('BÀI VIẾT NỔI BẬT KHUYÊN ĐỌC', 'RECOMMENDED FEATURED ARTICLE')}
            </span>
            <div 
              onClick={() => setSelectedBlog(featuredBlog)}
              className="group cursor-pointer bg-white border border-slate-100/80 rounded-[40px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Image */}
              <div className="lg:col-span-7 h-[300px] sm:h-[400px] overflow-hidden relative">
                <img 
                  src={featuredBlog.img} 
                  alt={renderBlogText(featuredBlog, 'title')} 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent p-6 flex lg:hidden items-end">
                  <span className="bg-primary/95 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-lg">
                    {renderBlogText(featuredBlog, 'category')}
                  </span>
                </div>
              </div>

              {/* Teaser text */}
              <div className="lg:col-span-12 xl:col-span-5 p-8 lg:p-10 space-y-5 lg:-ml-6 xl:ml-0 bg-white">
                <span className="hidden lg:inline-flex items-center justify-center px-3 py-1 rounded-md bg-secondary/15 text-secondary text-xs font-bold uppercase tracking-wider">
                  {renderBlogText(featuredBlog, 'category')}
                </span>

                <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-950 leading-tight group-hover:text-primary transition-colors duration-200">
                  {renderBlogText(featuredBlog, 'title')}
                </h3>
                
                <p className="text-slate-600 line-clamp-3 leading-relaxed text-sm lg:text-base font-light">
                  {renderBlogText(featuredBlog, 'desc')}
                </p>

                {/* Author row */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                  <img 
                    src={featuredBlog.author.image} 
                    alt={featuredBlog.author.name} 
                    className="w-11 h-11 rounded-full object-cover border border-slate-200" 
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="font-bold text-slate-950 text-sm">{featuredBlog.author.name}</p>
                    <p className="text-xs text-slate-500">{renderBlogText(featuredBlog, 'authorSpec')}</p>
                  </div>
                  <div className="ml-auto text-slate-400 text-xs flex flex-col items-end gap-1 font-mono">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {featuredBlog.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {renderBlogText(featuredBlog, 'readTime')}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <span className="inline-flex items-center gap-1.5 text-primary group-hover:gap-3 transition-all duration-300 font-bold text-sm tracking-wide uppercase">
                    {t('ĐỌC BÀI VIẾT CHUYÊN SÂU', 'READ IN-DEPTH ARTICLE')} <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ALL / FILTERED ARTICLES GRID */}
        <div>
          <div className="flex items-center justify-between mb-8 border-b border-slate-200/50 pb-4">
            <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">
              {searchQuery 
                ? t(`Kết quả tìm kiếm cho "${searchQuery}"`, `Search results for "${searchQuery}"`) 
                : t(`Bài viết mới nhất (${language === 'VN' ? categoryMap[selectedCategory] : selectedCategory})`, `Latest articles (${language === 'VN' ? categoryMap[selectedCategory] : selectedCategory})`)}
            </h2>
            <p className="text-sm font-mono text-slate-500 font-semibold">{filteredBlogs.length} {t('bài viết', 'articles')}</p>
          </div>

          {filteredBlogs.length === 0 ? (
            <div className="text-center bg-white border border-slate-100 p-16 rounded-[40px] max-w-xl mx-auto flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 mb-4 border border-slate-100">
                <BookOpen size={24} />
              </div>
              <p className="text-slate-900 font-bold text-lg mb-1">{t('Không tìm thấy bài viết nào phù hợp', 'No matching articles found')}</p>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                {t('Bài viết liên quan đến chủ đề này đang được hội đồng y khoa Pacific hoàn tất chỉnh lý và xuất bản trong tuần này.', 'Articles related to this topic are being finalized by the Pacific medical board and will be published this week.')}
              </p>
              <button 
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="mt-6 px-5 py-2.5 bg-primary text-white font-bold rounded-2xl text-sm shadow-md shadow-primary/10"
              >
                {t('Xem tất cả bài viết', 'View all articles')}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, i) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  key={blog.id} 
                  onClick={() => setSelectedBlog(blog)}
                  className="group cursor-pointer bg-white border border-slate-100 hover:border-slate-200/80 rounded-[32px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-400 flex flex-col h-full"
                >
                  {/* Card Image */}
                  <div className="aspect-[16/10] overflow-hidden relative bg-slate-50">
                    <img 
                      src={blog.img} 
                      alt={renderBlogText(blog, 'title')} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-slate-950 text-[11px] font-bold uppercase tracking-wider py-1 px-3 rounded-lg border border-slate-100">
                      {renderBlogText(blog, 'category')}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow space-y-4">
                    <h4 className="text-lg font-bold text-slate-950 group-hover:text-primary transition-colors duration-200 line-clamp-2 leading-snug">
                      {renderBlogText(blog, 'title')}
                    </h4>
                    
                    <p className="text-slate-500 text-sm font-light leading-relaxed line-clamp-2 flex-grow">
                      {renderBlogText(blog, 'desc')}
                    </p>

                    {/* Card Author & Details */}
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                      <img 
                        src={blog.author.image} 
                        alt={blog.author.name} 
                        className="w-8 h-8 rounded-full object-cover border border-slate-200 shrink-0" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="min-w-0">
                        <p className="font-bold text-slate-950 text-xs truncate">{blog.author.name}</p>
                        <p className="text-[10px] text-slate-500 truncate">{renderBlogText(blog, 'authorSpec')}</p>
                      </div>
                      <div className="ml-auto text-slate-400 text-[10px] space-y-0.5 text-right font-mono shrink-0">
                        <p className="flex items-center gap-1 justify-end"><Calendar size={10} /> {blog.date}</p>
                        <p className="flex items-center gap-1 justify-end"><Clock size={10} /> {renderBlogText(blog, 'readTime')}</p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <span className="inline-flex items-center gap-1.5 text-primary text-xs font-bold tracking-wider uppercase group-hover:translate-x-1.5 transition-transform duration-300">
                        {t('XEM BÀI VIẾT', 'VIEW ARTICLE')} <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* FULL BLOG READER DEEP DIALOG */}
      <AnimatePresence>
        {selectedBlog && (
          <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center p-4">
            
            {/* Backdrop blur overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBlog(null)}
              className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm"
              tabIndex={-1}
            ></motion.div>

            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              className="bg-white w-full max-w-4xl max-h-[85vh] md:max-h-[82vh] overflow-y-auto rounded-[36px] shadow-2xl relative z-10 flex flex-col border border-slate-100"
            >
              {/* Sticky Header inside reader modal */}
              <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase">
                  <span>{t('Kiến Thức Nha Khoa', 'Dental Knowledge')}</span>
                  <ChevronRight size={12} />
                  <span className="text-primary">{renderBlogText(selectedBlog, 'category')}</span>
                </div>
                <button 
                  onClick={() => setSelectedBlog(null)}
                  className="w-9 h-9 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Main Content inside modal body */}
              <div className="p-6 md:p-10 space-y-8 flex-grow">
                
                {/* Meta details */}
                <div className="space-y-4">
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-extrabold uppercase tracking-wider">
                    {renderBlogText(selectedBlog, 'category')}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-extrabold text-slate-950 leading-tight">
                    {renderBlogText(selectedBlog, 'title')}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 pt-1">
                    <span className="flex items-center gap-1.5"><Calendar size={13} className="text-slate-400" /> {selectedBlog.date}</span>
                    <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
                    <span className="flex items-center gap-1.5"><Clock size={13} className="text-slate-400" /> {renderBlogText(selectedBlog, 'readTime')}</span>
                    <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
                    <span className="text-secondary font-bold">Pacific Dental Services</span>
                  </div>
                </div>

                {/* Cover Image inside modal */}
                <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-inner bg-slate-100">
                  <img 
                    src={selectedBlog.img} 
                    alt={renderBlogText(selectedBlog, 'title')} 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Post Author Card */}
                <div className="p-5 md:p-6 bg-slate-50/80 rounded-[24px] border border-slate-100 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                  <div className="flex items-center gap-4">
                    <img 
                      src={selectedBlog.author.image} 
                      alt={selectedBlog.author.name} 
                      className="w-14 h-14 rounded-full object-cover border border-slate-250 shrink-0 shadow-sm" 
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <p className="text-xs text-slate-400 font-mono font-bold uppercase tracking-wider">{t('Kiểm duyệt bởi chuyên gia chỉnh nha', 'Reviewed by orthodontic specialist')}</p>
                      <p className="text-lg font-extrabold text-slate-950 mt-0.5">{selectedBlog.author.name}</p>
                      <p className="text-xs text-slate-500 font-medium">{renderBlogText(selectedBlog, 'authorSpec')} {t('tại Pacific Dental', 'at Pacific Dental')}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-bold shrink-0 self-start sm:self-center">
                    <CheckCircle size={12} className="text-emerald-500" /> {t('THÔNG TIN KIỂM CHỨNG LÂM SÀNG', 'CLINICALLY VERIFIED INFORMATION')}
                  </span>
                </div>

                {/* Structured Blog Body rendering content blocks */}
                <article className="prose max-w-none text-slate-800 leading-relaxed font-light space-y-6">
                  {(language === 'VN' ? selectedBlog.content : (selectedBlog.enContent || selectedBlog.content)).map((block, idx) => {
                    switch (block.type) {
                      case 'paragraph':
                        return (
                          <p key={idx} className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-light font-sans text-justify">
                            {block.text}
                          </p>
                        );
                      case 'heading':
                        return (
                          <h3 key={idx} className="text-lg sm:text-xl font-bold text-slate-950 pt-5 font-sans border-l-4 border-primary pl-3.5 label-spacing">
                            {block.text}
                          </h3>
                        );
                      case 'quote':
                        return (
                          <div key={idx} className="p-6 bg-gradient-to-r from-slate-50 to-primary/5 rounded-2xl border-l-4 border-secondary my-8 pl-6 relative">
                            <p className="text-sm sm:text-base font-medium italic text-slate-800 leading-relaxed">
                              {block.text}
                            </p>
                          </div>
                        );
                      case 'list':
                        return (
                          <ul key={idx} className="space-y-3.5 pl-2 pt-2 pb-2">
                            {block.items?.map((item, itemIdx) => {
                              // Match before colon to highlight prefix bold
                              const colonIndex = item.indexOf(':');
                              if (colonIndex !== -1) {
                                const boldPart = item.substring(0, colonIndex);
                                const normalPart = item.substring(colonIndex);
                                return (
                                  <li key={itemIdx} className="flex gap-2.5 items-start text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                                    <span>
                                      <strong>{boldPart}</strong>{normalPart}
                                    </span>
                                  </li>
                                );
                              }
                              return (
                                <li key={itemIdx} className="flex gap-2.5 items-start text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                                  <span>{item}</span>
                                </li>
                              );
                            })}
                          </ul>
                        );
                      case 'image':
                        return (
                          <div key={idx} className="space-y-2.5 pt-4 pb-4">
                            <div className="w-full rounded-2xl overflow-hidden shadow-sm aspect-[16/9]">
                              <img src={block.url} alt={block.alt} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                            {block.alt && <p className="text-xs text-center text-slate-400 italic">{block.alt}</p>}
                          </div>
                        );
                      default:
                        return null;
                    }
                  })}
                </article>

                {/* Internal Booking CTA inside the reader window */}
                <div className="mt-12 bg-gradient-to-br from-slate-900 to-primary p-8 rounded-[32px] text-white overflow-hidden relative shadow-md shadow-primary/20">
                  <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 justify-between">
                    <div className="space-y-2 text-center md:text-left">
                      <h4 className="text-xl font-bold">{t('Đặt Lịch Thăm Khám Miễn Phí', 'Book a Free Consultation')}</h4>
                      <p className="text-slate-300 text-sm max-w-lg leading-relaxed">
                        {t('Bạn có băn khoăn hay muốn nhận phác đồ điều trị răng miệng kỹ thuật số? Đăng ký ngay để đặt hẹn thăm khám trực tiếp miễn phí cùng hội đồng Y Bác sĩ.', 'Do you have questions or want to receive a digital dental treatment plan? Register now to book a free direct consultation with our medical board.')}
                      </p>
                    </div>
                    <button 
                      onClick={() => {
                        setSelectedBlog(null);
                        openBookingModal();
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-secondary hover:bg-secondary-light text-white font-bold rounded-2xl text-sm tracking-wide shadow-lg cursor-pointer transition-colors shrink-0"
                    >
                      <PhoneCall size={16} /> {t('ĐẶT LỊCH KHÁM NGAY', 'BOOK APPOINTMENT NOW')}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
