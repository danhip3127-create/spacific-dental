export interface BlogAuthor {
  name: string;
  spec: string;
  enSpec?: string;
  image: string;
}

export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'quote' | 'list' | 'image';
  text?: string;
  items?: string[];
  url?: string;
  alt?: string;
}

export interface BlogItem {
  id: number;
  title: string;
  enTitle?: string;
  category: string;
  enCategory?: string;
  desc: string;
  enDesc?: string;
  img: string;
  date: string;
  author: BlogAuthor;
  readTime: string;
  enReadTime?: string;
  content: ContentBlock[];
  enContent?: ContentBlock[];
}

export const BLOGS_DATA: BlogItem[] = [
  {
    id: 1,
    title: 'Cấy ghép răng Implant All-on-4 và All-on-6: Giải pháp phục hình toàn hàm ưu việt',
    enTitle: 'All-on-4 and All-on-6 Dental Implants: Superior Full-Arch Restoration Solution',
    category: 'Implant',
    enCategory: 'Implant',
    desc: 'Giải pháp tối ưu cho người mất răng toàn bộ hoặc mất nhiều răng, giúp phục hồi 99% chức năng nhai và đem lại thẩm mỹ tối đa như răng thật.',
        enDesc: 'The optimal solution for patients with complete or multiple tooth loss, restoring 99% of chewing function and providing maximum aesthetics like natural teeth.',
    img: '/assets/images/srv_implant_1781368884121.jpg',
    date: '12/06/2026',
    author: {
      name: 'Dr. Le Danh',
      spec: 'Phẫu thuật & Khớp cắn',
      image: 'https://lh3.googleusercontent.com/d/11MU5vNdQjnSd6pMTNM40vW2QIfXNkKL1'
    },
    readTime: '6 phút đọc',
    enReadTime: '6 min read',
    content: [
      { type: 'heading', text: '1. Khái niệm Giải pháp Implant All-on-4 và All-on-6 là gì?' },
      { type: 'paragraph', text: 'All-on-4 and All-on-6 là phương pháp phục hình răng toàn hàm tiên tiến nhất hiện nay, được phát minh bởi thương hiệu Nobel Biocare (Thụy Điển). Giải pháp này sử dụng tương ứng 4 hoặc 6 trụ Implant bằng Titanium cấy ghép vào những vị trí xương hàm tối ưu để nâng đỡ toàn bộ một cầu răng sứ gồm 10 đến 14 răng cố định phía trên.' },
      { type: 'paragraph', text: 'Đây là cứu cánh tuyệt vời cho những bệnh nhân bị mất răng toàn hàm, tiêu xương hàm nặng, hoặc người lớn tuổi đang phải chịu đựng hàm giả tháo lắp lỏng lẻo, bất tiện.' },
      { type: 'heading', text: '2. Điểm khác biệt cốt lõi giữa All-on-4 và All-on-6' },
      { type: 'paragraph', text: 'Việc lựa chọn giữa All-on-4 và All-on-6 phụ thuộc trực tiếp vào cấu trúc mật độ xương và ngân sách của từng bệnh nhân dưới sự chỉ định khắt khe của bác sĩ chuyên khoa:' },
      {
        type: 'list',
        items: [
          'All-on-4 (Thường áp dụng cho hàm dưới): Sử dụng 4 trụ Implant, gồm 2 trụ đặt thẳng ở vùng răng cửa và 2 trụ đặt nghiêng góc lên tới 45 độ ở vùng răng nghiền phía sau. Phù hợp cho những ca có mật độ xương hàm tương đối, hạn chế tối đa việc ghép xương.',
          'All-on-6 (Thường ưu tiên cho hàm trên): Sử dụng 6 trụ Implant. Việc bổ sung 2 trụ ở vùng răng sau giúp dàn đều lực nhai tốt hơn. Hàm trên có cấu trúc xương xốp hơn hàm dưới, nên 6 trụ mang lại liên kết vững chãi bền lâu tuyệt đối.'
        ]
      },
      { type: 'image', url: '/assets/images/digital_dent_cadcam_1781368299109.jpg', alt: 'Trụ implant titanium chất lượng cao' },
      { type: 'heading', text: '3. Ưu điểm vượt trội của phục hình cố định toàn hàm' },
      { type: 'paragraph', text: 'So với hàm giả tháo lắp hay các giải pháp cổ truyền khác, Implant toàn hàm tại Pacific Dental mang lại mức độ hài lòng vô song:' },
      {
        type: 'list',
        items: [
          'Khôi phục lực nhai đạt 95% - 99%: Ăn uống ngon miệng hoàn toàn, dễ dàng xử lý các thực phẩm dai, cứng tương tự răng tự nhiên.',
          'Ngăn ngừa tiêu xương hàm tối đa: Trụ Implant thay thế chân răng thật sinh lý kích thích xương hàm duy trì mật độ, tránh tình trạng móm, sụp má và lão hóa khuôn mặt.',
          'Tính thẩm mỹ hoàn hảo tự nhiên: Khung răng chế tác từ sứ nguyên khối cao cấp (Zirconia/Cercon) có độ trong mờ, vân răng trẻ trung sắc nét hài hòa tuyệt hảo.',
          'Tiết kiệm thời gian và chi phí: Không cần trồng 10-12 trụ riêng lẻ, giảm thiểu phẫu thuật xâm lấn, rút ngắn thời gian lành thương.'
        ]
      },
      { type: 'quote', text: 'Lời khuyên từ Bác sĩ Lê Danh: "Để đảm bảo thành công dài lâu cho ca Implant toàn hàm, Pacific Dental ứng dụng công nghệ định vị Navigation 3D giúp cấy ghép chính xác đến từng micromet, tuyệt đối không xâm lấn mô thần kinh mạch máu."' },
      { type: 'heading', text: '4. Quy trình thực hiện tiêu chuẩn y khoa quốc tế' },
      { type: 'paragraph', text: 'Một quy trình cấy ghép tiêu chuẩn tại Pacific Dental Services bao gồm 4 bước nghiêm ngặt:' },
      {
        type: 'list',
        items: [
          'Bước 1: Chụp phim CT Cone Beam 3D thế hệ mới và lập phác đồ kỹ thuật số ảo.',
          'Bước 2: Phẫu thuật đặt trụ Implant nhẹ nhàng trong phòng mổ vô trùng áp lực dương tuyệt đối.',
          'Bước 3: Lắp răng tạm tức thì để đảm bảo ăn nhai nhẹ và giao tiếp tự tin ngay tuần đầu tiên.',
          'Bước 4: Sau 3-6 tháng, tiến hành lắp cầu răng sứ vĩnh viễn vững chắc trọn đời.'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Niềng răng trong suốt ClearCorrect: Xu hướng chỉnh nha thẩm mỹ thế hệ mới',
    enTitle: 'ClearCorrect Clear Aligners: The New Generation of Aesthetic Orthodontics',
    category: 'Niềng răng',
    enCategory: 'Orthodontics',
    desc: 'Khám phá công nghệ niềng răng vô hình chuẩn Mỹ từ tập đoàn Straumann, mang lại sự thoải mái tuyệt đối, bảo toàn nụ cười tự tin trong suốt quá trình niềng.',
        enDesc: 'Discover the American-standard invisible aligner technology from Straumann Group, bringing absolute comfort and preserving a confident smile throughout the treatment.',
    img: '/assets/images/srv_clearcorrect_1781368900805.jpg',
    date: '08/06/2026',
    author: {
      name: 'Dr. Patrick Thien',
      spec: 'Chuyên gia Chỉnh nha',
      image: 'https://lh3.googleusercontent.com/d/1-j4har_nWttaXIhQfGaWM1qsI4nODQVa'
    },
    readTime: '5 phút đọc',
    enReadTime: '5 min read',
    content: [
      { type: 'heading', text: '1. ClearCorrect là gì? Điểm khác biệt so với khay niềng thông thường' },
      { type: 'paragraph', text: 'ClearCorrect là hệ thống khay niềng trong suốt cao cấp được sản xuất và phát triển bởi tập đoàn Straumann (Thành lập năm 1954 tại Thụy Sỹ) - tập đoàn dẫn đầu thế giới trong lĩnh vực nha khoa thẩm mỹ và phục hình y khoa. Khay niềng ClearCorrect được chế tác cá nhân hóa hoàn toàn bằng chất liệu nhựa y tế đặc quyền polyurethane nhiều lớp ClearQuartz cực kỳ mỏng nhẹ.' },
      { type: 'paragraph', text: 'Sự khác biệt vượt trội của ClearCorrect chính là thiết kế đường viền cắt phẳng nướu (flat trimline), đi qua nướu răng 1.5mm. Nghiên cứu lâm sàng đã chỉ ra thiết kế này tạo ra lực ôm sát bám giữ chặt chẽ hơn gấp 2.5 lần so với khay niềng lượn sóng thông thường, giảm thiểu tối đa việc phải gắn quá nhiều nút đặt lực (attachments) lên răng.' },
      { type: 'image', url: '/assets/images/srv_clearcorrect_1781368900805.jpg', alt: 'Khay niềng trong suốt chuẩn y khoa' },
      { type: 'heading', text: '2. Tại sao người bận rộn ưu tiên chọn ClearCorrect?' },
      { type: 'paragraph', text: 'ClearCorrect đang trở thành lựa chọn hàng đầu cho giới doanh nhân, nghệ sĩ, học sinh sinh viên nhờ những đặc điểm độc nhất:' },
      {
        type: 'list',
        items: [
          'Vô hình chuẩn xác: Khay niềng có độ trong suốt tuyệt đối, không có bọt khí hay xước mờ, người đối diện rất khó để phát hiện bạn đang niềng răng.',
          'Khả năng chống ố vàng vượt trội: Chất liệu ClearQuartz độc quyền hạn chế bám màu thức uống tối đa, kháng nứt gãy sứt mẻ trong suốt chu kỳ đeo.',
          'Tháo lắp linh hoạt: Vệ sinh dọn dẹp răng miệng và thưởng thức tất cả món ăn yêu thích mà không lo rơi tuột hay giắt thức ăn như niềng răng mắc cài.',
          'Hạn chế đau đớn, thoải mái sinh hoạt: Các khay lực phân bổ thông minh, nhẹ nhàng di chuyển răng từ 0.2mm mỗi khay, giảm sưng đau tối đa.'
        ]
      },
      { type: 'quote', text: 'Nhận định từ Dr. Patrick Thien: "ClearCorrect đặc biệt hiệu quả cho các ca khớp cắn sâu, cắn ngược hay răng thưa kẽ lệch lạc. Tại Pacific Dental, chúng tôi số hóa toàn bộ quá trình niềng qua máy scan hàm iTero Element 5D giúp bệnh nhân nhìn thấy trước kết quả 3D nụ cười hoàn thành chỉ sau 60 giây."' },
      { type: 'heading', text: '3. Hướng dẫn đeo và bảo quản khay niềng ClearCorrect chuẩn nhất' },
      { type: 'paragraph', text: 'Để đảm bảo lộ trình dịch chuyển răng đúng tiến độ như phác đồ 3D kỹ thuật số chỉ định, bạn cần tuân thủ chế độ chăm sóc tự quản:' },
      {
        type: 'list',
        items: [
          'Đảm bảo thời gian đeo đủ 22 giờ mỗi ngày. Chỉ tháo khay khi ăn uống và vệ sinh răng miệng.',
          'Vệ sinh khay hàng ngày bằng bàn chải lông mềm và nước mát hoặc dung dịch rửa khay mút chuyên dụng. Tuyệt đối không dùng nước ấm/nóng làm biến dạng khay.',
          'Giữ gìn khay cẩn thận trong hộp đựng đi kèm thiết bị chỉnh nha chuyên nghiệp mỗi khi tháo ra.',
          'Thay khay mới mỗi 1 - 2 tuần theo đúng số thứ tự in chìm trên mép khay.'
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Bọc răng sứ thẩm mỹ: Nên chọn Mặt dán sứ Veneer hay Mão răng toàn sứ?',
    enTitle: 'Cosmetic Porcelain Crowns: Should You Choose Veneers or Full Porcelain Crowns?',
    category: 'Răng sứ',
    desc: 'Phân tích chuyên sâu từ bác sĩ chuyên khoa thẩm mỹ giúp bộc lộ ưu nhược điểm từng phương pháp, giúp bạn chọn được phương án bảo tồn răng thật tối đa.',
    img: '/assets/images/srv_rang_su_1781368915325.jpg',
    date: '03/06/2026',
    author: {
      name: 'Dr. Wendy Phuong Anh',
      spec: 'Nha khoa Thẩm mỹ',
      image: 'https://lh3.googleusercontent.com/d/1g2LEY7MDt40ZYWUBB4qkOA9MGrGUFJE5'
    },
    readTime: '8 phút đọc',
    enReadTime: '8 min read',
    content: [
      { type: 'heading', text: '1. Bản chất của Mão răng toàn sứ và Mặt dán sứ Veneer' },
      { type: 'paragraph', text: 'Cả hai phương pháp đều hướng tới việc tái tạo nụ cười hoàn thiện, khắc phục khuyết điểm men răng ố vàng, răng thưa, sứt mẻ hay lệch lạc nhẹ. Tuy nhiên, tính chất xâm lấn mô răng thật là hoàn toàn khác biệt:' },
      {
        type: 'list',
        items: [
          'Mặt dán sứ Veneer: Là lớp sứ siêu mỏng (chỉ từ 0.2mm đến 0.5mm), được chế tác tinh xảo bằng công nghệ CAD/CAM để dán cố định lên mặt trước của răng. Phương pháp này chỉ yêu cầu sửa soạn hoặc mài mỏng tối thiểu mặt ngoài răng, bảo tồn tối vị cho tủy răng và 90% cấu trúc ngà răng thật.',
          'Mão răng toàn sứ (Crown): Là vỏ bọc sứ chu vi 360 độ ôm khích toàn diện xung quanh răng nhằm tái tạo lại toàn bộ hình thể lẫn màu sắc răng. Phương pháp này yêu cầu mài đều xung quanh răng thật từ 0.8mm đến 1.5mm để có không gian lắp chụp mão sứ.'
        ]
      },
      { type: 'heading', text: '2. Bảng so sánh chi tiết giữa Veneer và Mão sứ cố định' },
      { type: 'paragraph', text: 'Hãy cùng nhìn nhận ưu và nhược điểm cốt lõi để tối ưu hóa quyết định:' },
      {
        type: 'list',
        items: [
          'Bảo tồn răng thật: Veneer vượt trội tối thượng (hầu như không mài răng, giữ trọn vẹn tủy và men tự nhiên) > Mão sứ (phải mài răng đáng kể).',
          'Độ bền lực: Mão sứ chịu lực nén cơ học tốt hơn cho vùng răng hàm lớn > Veneer ưu việt cho nhóm răng cửa thẩm mỹ chịu lực xé mỏng nhẹ.',
          'Chỉ định áp dụng: Veneer phù hợp răng nhiễm kháng sinh nhẹ, thưa kẽ nhẹ, bảo tồn răng sống > Mão sứ chuyên dùng cho răng đã chữa tủy, răng vỡ lớn mô, răng lệch lạc khớp cắn nặng.',
          'Độ tự nhiên quang học: Veneer siêu mỏng cho ánh sáng đi xuyên thấu qua ngà răng tự nhiên tạo độ trong mờ tự nhiên hoàn hảo nhất.'
        ]
      },
      { type: 'image', url: '/assets/images/pds_doctors_team_1781368267797.jpg', alt: 'Khám kiểm nghiệm thẩm mỹ răng sứ chuyên nghiệp' },
      { type: 'quote', text: 'Khuyến cáo chuyên môn từ Tiến sĩ. Bác sĩ Phương Anh: "Tại Pacific Dental, chúng tôi tôn vinh triết lý Can Thiệp Tối Thiểu - Hiệu Quả Tối Đa. 90% các ca phục hình nụ cười vùng thẩm mỹ đều được bác sĩ ưu tiên sử dụng dán sứ siêu mỏng Veneer thủy tinh IPS E.max cao cấp của Đức để bảo vệ màng sinh lý răng sống trọn đời."' },
      { type: 'heading', text: '3. Tuổi thọ của răng sứ và chế độ bảo hành chuẩn Thụy Sỹ' },
      { type: 'paragraph', text: 'Khi thực hiện tại Pacific Dental Services, tất cả các ca phục hình răng sứ đều được bảo vệ chu đáo bằng thẻ IDPI quốc tế điện tử truy xuất nguồn gốc rõ ràng, cam kết bảo hành chính hãng từ 10 năm đến trọn đời trọn vẹn.' }
    ]
  },
  {
    id: 4,
    title: 'Mối liên hệ mật thiết giữa sức khỏe răng miệng và các bệnh lý toàn thân',
    enTitle: 'The Close Relationship Between Oral Health and Systemic Diseases',
    category: 'Chăm sóc',
    enCategory: 'Care',
    desc: 'Tìm hiểu mối tương quan trực hệ giữa viêm nha chu, vi khuẩn khoang miệng và nguy cơ tai biến mạch máu nội, tim mạch, tiểu đường theo các nghiên cứu khoa học mới nhất.',
    enDesc: 'Explore the direct correlation between periodontitis, oral bacteria, and the risk of stroke, cardiovascular disease, and diabetes according to the latest scientific research.',
    img: '/assets/images/mouth_body_conn_1781368249551.jpg',
    date: '28/05/2026',
    author: {
      name: 'Dr. Le Danh',
      spec: 'Phẫu thuật & Khớp cắn',
      image: 'https://lh3.googleusercontent.com/d/11MU5vNdQjnSd6pMTNM40vW2QIfXNkKL1'
    },
    readTime: '5 phút đọc',
    enReadTime: '5 min read',
    content: [
      { type: 'heading', text: '1. Khoang miệng không chỉ là một bộ phận tách biệt' },
      { type: 'paragraph', text: 'Khoang miệng vốn là cửa ngõ chính của hệ thống tuần hoàn cơ thể, là nơi trú ngụ của hơn 700 loại vi khuẩn phong phú. Khi hàng rào bảo vệ nướu bị sụp đổ do vệ sinh kém, vi khuẩn có hại sẽ phát triển vượt bậc, gây viêm lợi, viêm nha chu mạn tính và trực tiếp xâm nhập vào hệ tuần hoàn máu để tàn phá các cơ quan khác.' },
      { type: 'paragraph', text: 'Khoa học y khoa thế giới đã liên tục công bố về hiện tượng "Mouth-Body Connection" (Liên hệ Răng miệng - Toàn thân), chỉ ra các bằng chứng rõ rệt liên kết các chứng viêm nhiễm răng nướu mạn tính với nhiều bệnh hiểm nghèo.' },
      { type: 'heading', text: '2. Ba mối nguy hại toàn thân từ vi khuẩn nha chu' },
      {
        type: 'list',
        items: [
          'Bệnh tim mạch và đột quỵ: Vi khuẩn mầm bệnh nha chu (như P.gingivalis) thâm nhập vào máu, kích thích cơ thể sản sinh chất gây viêm C-reactive protein (CRP). Quá trình này góp phần làm xơ vữa thành mạch máu, hẹp động mạch và hình thành huyết khối, làm tăng nguy cơ nhồi máu cơ tim và đột quỵ lên gấp 2-3 lần.',
          'Bệnh tiểu đường (Đái tháo đường): Viêm nha chu mạn tính tạo ra phản ứng viêm kéo dài toàn cơ thể, làm giảm khả năng nhạy bàng đối với hormone insulin của tế bào, dẫn tới xáo trộn chỉ số đường huyết. Ngược lại, kiểm soát tốt các ổ viêm răng giúp giảm hàm lượng đường HbA1c đáng kể.',
          'Viêm phổi hít: Ở người cao tuổi hoặc suy giảm miễn dịch, việc hít phải lượng lớn vi khuẩn tích tụ từ túi nha chu viêm nhiễm sẽ dẫn thẳng vào phổi, tăng nguy cơ bùng phát viêm phổi cấp tính nguy kịch.'
        ]
      },
      { type: 'quote', text: 'Cảnh báo y khoa từ Bác sĩ Lê Danh: "Chăm sóc răng miệng không đơn thuần là làm đẹp, mà chính là bảo vệ sinh mạng của bạn và người thân. Việc lấy cao răng định kỳ mỗi 6 tháng giúp triệt tiêu hoàn toàn màng sinh học vi khuẩn, giải phóng hệ bạch huyết khỏi áp lực viêm nhiễm."' },
      { type: 'heading', text: '3. Thói quen thiết yếu duy trì cơ thể khỏe mạnh toàn diện' },
      { type: 'paragraph', text: 'Hãy chuyển hóa nhận thức sang các hành động thực tế mỗi ngày:' },
      {
        type: 'list',
        items: [
          'Sử dụng chỉ nha khoa hoặc máy tăm nước cao cấp sau mỗi bữa ăn thay vì dùng tăm tre truyền thống tổn nướu.',
          'Chải răng ít nhất 2 lần/ngày bằng bàn chải điện sóng siêu âm kết hợp kem đánh răng chứa fluoride bảo vệ men răng.',
          'Sử dụng nước súc miệng kháng khuẩn lành tính không chứa cồn để bảo vệ vi sinh bản địa khoang miệng.',
          'Đến kiểm tra răng miệng tổng quát định kỳ để phát hiện kịp thời các tổn thương viêm lợi tiền triệu chứng.'
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Quy trình Tẩy trắng răng chuẩn Y khoa: Nhanh chóng, An toàn, Bền màu',
    enTitle: 'Medical Standard Teeth Whitening Process: Fast, Safe, Long-lasting Color',
    category: 'Tẩy trắng',
    enCategory: 'Whitening',
    desc: 'Giải thích chi tiết về nguyên lý tẩy trắng răng bằng công nghệ ánh sáng lạnh sinh học, cam kết phá vỡ chuỗi sắc tố men răng cứng đầu mà không bào mòn răng.',
    enDesc: 'Detailed explanation of the teeth whitening principles using biological cold light technology, breaking down stubborn enamel pigment chains without wearing down teeth.',
    img: '/assets/images/srv_tay_trang_1781368928859.jpg',
    date: '22/05/2026',
    author: {
      name: 'Dr. Wendy Phuong Anh',
      spec: 'Nha khoa Thẩm mỹ',
      image: 'https://lh3.googleusercontent.com/d/1g2LEY7MDt40ZYWUBB4qkOA9MGrGUFJE5'
    },
    readTime: '4 phút đọc',
    enReadTime: '4 min read',
    content: [
      { type: 'heading', text: '1. Tại sao răng có xu hướng xỉn màu và ố vàng?' },
      { type: 'paragraph', text: 'Trải qua thời gian dài tiếp xúc với thực phẩm sậm màu (như cà phê, trà, trà sữa, nước tương, phẩm màu nhân tạo) kết hợp thói quen vệ sinh, mảng bám tích tụ sẽ thẩm thấu sâu qua các ống ngà răng làm đổi màu sắc tố răng từ sâu bên trong. Ngoài ra, tuổi tác cũng là tác nhân làm mỏng dần men răng bên ngoài, bộc lộ ngà răng màu vàng tự nhiên ẩn bên trong.' },
      { type: 'paragraph', text: 'Nhiều người tìm tới phương pháp tự tẩy trắng tại nhà bằng bột than hoạt tính, baking soda hay các loại miếng dán trôi nổi trên mạng. Hậu quả là làm mài mòn men răng rỗ nát, gây viêm tủy răng mạn tính nghiêm trọng.' },
      { type: 'heading', text: '2. Công nghệ Tẩy trắng răng bằng ánh sáng lạnh sinh học tại Pacific Dental' },
      { type: 'paragraph', text: 'Phòng khám ứng dụng hệ thống tẩy trắng vượt bậc Zoom Laser / Cold Light chuẩn FDA Hoa Kỳ. Bản chất khoa học là sử dụng năng lượng ánh sáng kích hoạt thuốc tẩy trắng Hydrogen Peroxide bôi trên bề mặt răng. Ánh sáng lạnh xúc tác đẩy nhanh phản ứng phóng thích các gốc oxy hóa tự do thâm nhập trực tiếp cắt đứt chuỗi liên kết phân tử sắc tố trong ngà răng mà hoàn toàn không thay đổi cấu trúc cứng hữu cơ của răng.' },
      { type: 'image', url: '/assets/images/srv_tay_trang_1781368928859.jpg', alt: 'Quá trình chiếu ánh sáng lạnh tẩy trắng' },
      { type: 'heading', text: '3. 5 bước quy trình tẩy trắng răng an toàn tuyệt đối' },
      {
        type: 'list',
        items: [
          'Bước 1: Khám tổng quát, đo tông màu răng hiện tại bằng bảng so màu Vita và vệ sinh lấy cao răng sạch sẽ.',
          'Bước 2: Cách ly nướu môi bằng gel bảo vệ nướu chuyên dụng và chiếu đèn quang trùng hợp để gel đông cứng, tránh thuốc tiếp xúc kích ứng nướu.',
          'Bước 3: Thoa đều thuốc tẩy trắng răng Zoom chính hãng với nồng độ điều phối cá nhân hóa phù hợp men răng.',
          'Bước 4: Chiếu ánh sáng Laser Cold Light kích hoạt thuốc trong vòng 15-20 phút, lặp lại chu kỳ 2-3 lần tùy cơ địa.',
          'Bước 5: Tháo gel cách ly nướu, làm sạch khoang miệng, bôi khoáng chất tái khoáng hóa bảo vệ tủy răng.'
        ]
      },
      { type: 'quote', text: 'Mẹo giữ màu răng bền lâu từ bác sĩ Phương Anh: "Trong vòng 48 giờ vàng sau khi tẩy trắng răng, các ống ngà răng đang trong trạng thái đóng dần lại nên cực kỳ nhạy cảm với sắc tố màu. Bạn nên tuân thủ chế độ ăn trắng (whitelist) như gạo, đậu phụ, thịt gà luộc, sữa, nước lọc để giữ tông màu trắng sáng lên đến 3 - 5 năm."' }
    ]
  },
  {
    id: 6,
    title: 'Độ tuổi vàng để chỉnh nha tăng trưởng cho trẻ: Cha mẹ cần lưu ý điều gì?',
    enTitle: 'The Golden Age for Orthodontic Growth Modification in Children: What Parents Need to Know',
    category: 'Chăm sóc',
    enCategory: 'Care',
    desc: 'Hướng dẫn điều chỉnh xương khớp cắn từ sớm trong giai đoạn thay răng hỗn hợp (6 - 12 tuổi), mở đường cho cung răng đều đặn hoàn mỹ của trẻ trong tương lai.',
    img: '/assets/images/family_dental_care_1781368283901.jpg',
    date: '15/05/2026',
    author: {
      name: 'Dr. Patrick Thien',
      spec: 'Chuyên gia Chỉnh nha',
      image: 'https://lh3.googleusercontent.com/d/1-j4har_nWttaXIhQfGaWM1qsI4nODQVa'
    },
    readTime: '7 phút đọc',
    enReadTime: '7 min read',
    content: [
      { type: 'heading', text: '1. Thời kỳ răng hỗn hợp (6 - 12 tuổi): Giai đoạn vàng bị lãng quên' },
      { type: 'paragraph', text: 'Nhiều bậc phụ huynh vẫn mang quan niệm lạc hậu rằng "phải đợi thay hết toàn bộ răng sữa sang răng vĩnh viễn (tức khoảng 12-14 tuổi) mới bắt đầu cho con đi niềng răng". Tuy nhiên, đây là sai lầm y khoa vô cùng đáng tiếc.' },
      { type: 'paragraph', text: 'Ở độ tuổi từ 6 đến 12 tuổi, các răng vĩnh viễn ở phía trước đang mọc xen kẽ răng sữa, trong khi xương hàm mặt của trẻ đang trong giai đoạn phát triển bùng nổ, có tính dẻo và phản ứng cực kỳ nhạy bén với các khí cụ nắn chỉnh hàm. Đây chính là khung thời gian vàng để thực hiện "Chỉnh nha tiền chỉnh nha" hay "Chỉnh nha tăng trưởng".' },
      { type: 'image', url: '/assets/images/family_dental_care_1781368283901.jpg', alt: 'Trẻ em khám răng vui vẻ' },
      { type: 'heading', text: '2. Tác dụng kỳ diệu của chỉnh nha tăng trưởng sớm' },
      { type: 'paragraph', text: 'Khi cho trẻ tầm soát và tác động can thiệp đúng lúc bằng khí cụ chuyên dụng (như khay Silicon Myobrace, EF, khí cụ nới rộng hàm Quad-helix), cha mẹ sẽ gặt hái những kết quả phi thường:' },
      {
        type: 'list',
        items: [
          'Định hướng sự phát triển của xương hàm: Giúp xương hàm trên và dưới phát triển cân xứng, khắc phục dứt điểm các dị tật hô xương (hô vẩu) hay móm (khớp cắn ngược) bẩm sinh.',
          'Tạo đủ khoảng trống cho răng vĩnh viễn mọc thẳng: Tránh tình trạng chen chúc xoắn lệch nghiêm trọng, hạn chế tối đa việc phải nhổ răng lành trong độ tuổi trưởng thành.',
          'Loại bỏ các thói quen xấu: Khí cụ giúp trẻ triệt tiêu thói quen đẩy lưỡi, mút tay, thở miệng - là tác nhân trực tiếp làm biến dạng lồng ngực và khớp cắn hàm.',
          'Nâng cấp thẩm mỹ gương mặt hài hòa: Hỗ trợ mũi, cằm của trẻ phát triển thanh thoát cân đối theo tỷ lệ vàng tự nhiên.'
        ]
      },
      { type: 'quote', text: 'Lời khuyên từ Chuyên gia Chỉnh nha Dr. Patrick Thien: "Can thiệp sớm ở độ tuổi vàng không chỉ đem lại khớp cắn chuẩn sinh lý, mà còn giúp giảm thiểu thời gian lẫn chi phí niềng răng mắc cài/khay trong suốt ở tuổi niên thiếu tới 70%, đồng thời tránh được các ca đại phẫu cắt xương hàm nguy hiểm khi trưởng thành."' }
    ]
  },
  {
    id: 7,
    title: 'Nhổ răng khôn không sưng đau bằng máy siêu âm Piezotome hiện đại',
    enTitle: 'Painless Wisdom Tooth Extraction Using Modern Piezotome Ultrasonic Machine',
    category: 'Chăm sóc',
    enCategory: 'Care',
    desc: 'Giải mã công nghệ nhổ răng thế hệ mới tại Pacific, sử dụng bước sóng siêu âm cao tần tác động tách dây chằng răng mà không làm tổn thương mô mềm xung quanh.',
    img: '/assets/images/srv_nho_rang_khon_1781368962945.jpg',
    date: '10/05/2026',
    author: {
      name: 'Dr. Le Danh',
      spec: 'Phẫu thuật & Khớp cắn',
      image: 'https://lh3.googleusercontent.com/d/11MU5vNdQjnSd6pMTNM40vW2QIfXNkKL1'
    },
    readTime: '5 phút đọc',
    enReadTime: '5 min read',
    content: [
      { type: 'heading', text: '1. Răng khôn là gì và tại sao lại là nổi ám ảnh?' },
      { type: 'paragraph', text: 'Răng khôn (răng số 8) là những chiếc răng mọc muộn nhất trên cung hàm, thường xuất hiện ở độ tuổi từ 17 đến 25 tuổi. Do mọc muộn khi xương hàm đã ngừng phát triển và các răng khác đã chiếm đủ chỗ, răng khôn rất dễ mọc lệch, mọc ngầm, đâm ngang vào răng số 7 bên cạnh gây sâu răng, viêm lợi trùm và viêm tủy nặng nề.' },
      { type: 'paragraph', text: 'Trước đây, nỗi lo sợ đau, sưng húp má kéo dài cả tuần hay đứt dây thần kinh khi nhổ răng bằng phương pháp truyền thống (kìm và búa) khiến hàng nghìn bệnh nhân chịu đựng cơn đau dai dẳng.' },
      { type: 'heading', text: '2. Công nghệ Nhổ răng Piezotome hoạt động như thế nào?' },
      { type: 'paragraph', text: 'Khắc phục hoàn hảo những hạn chế của phương pháp thủ công, Pacific Dental tiên phong chuyển giao công nghệ Piezotome Thụy Sỹ. Máy sử dụng năng lượng rung siêu âm chọn lọc ở tần số cao từ 28 - 36 KHz để tác động nhẹ nhàng làm đứt các dây chằng nha chu neo giữ chân răng.' },
      {
        type: 'list',
        items: [
          'Tác động chọn lọc: Bước sóng siêu âm Piezotome chỉ tác động lên các mô cứng của răng, hoàn toàn không gây tổn thương hay rách nát mô mềm, nướu răng và mạch máu.',
          'Kiểm soát chảy máu tối đa: Sóng siêu âm hỗ trợ kích thích làm đông máu nhanh chóng, giảm thiểu tối đa tình trạng sưng tấy phù nề sau phẫu thuật.',
          'Thời gian diễn ra nhanh gấp 3 lần: Giao dịch lấy răng khôn ra khỏi nướu chỉ mất từ 5 đến 15 phút thay vì cả tiếng đồng hồ mệt mỏi như trước.'
        ]
      },
      { type: 'image', url: '/assets/images/srv_nho_rang_khon_1781368962945.jpg', alt: 'Thiết bị y khoa siêu âm hiện đại' },
      { type: 'quote', text: 'Bác sĩ Lê Danh chia sẻ: "Đến với Pacific, bệnh nhân còn được kết hợp bơm rửa màng sinh học giàu tiểu cầu PRF lấy từ chính máu tự thân giúp lành vết thương chỉ sau 24-48 giờ. Hầu hết bệnh nhân đều có thể ăn cháo nhẹ và sinh hoạt làm việc bình thường ngay ngày hôm sau."' }
    ]
  },
  {
    id: 8,
    title: 'Khắc phục hoàn toàn Cười Hở Lợi bằng công nghệ định vị Laser chỉ 30 phút',
    enTitle: 'Completely Fix Gummy Smile with Laser Positioning Technology in Just 30 Minutes',
    category: 'Răng sứ',
    enCategory: 'Porcelain Teeth',
    desc: 'Tại sao cười hở lợi xảy ra và giải pháp điều chỉnh viền nướu bằng tia Laser nhẹ nhàng, không khâu, lành nhanh cho một nụ cười rạng rỡ đạt chuẩn tỷ lệ thẩm mỹ.',
    enDesc: 'Why a gummy smile occurs and the solution of adjusting the gum line with gentle Laser, no stitches, fast healing for a radiant smile meeting aesthetic proportions.',
    img: '/assets/images/gummy_smile_laser_1781453160731.jpg',
    date: '02/05/2026',
    author: {
      name: 'Dr. Wendy Phuong Anh',
      spec: 'Nha khoa Thẩm mỹ',
      image: 'https://lh3.googleusercontent.com/d/1g2LEY7MDt40ZYWUBB4qkOA9MGrGUFJE5'
    },
    readTime: '6 phút đọc',
    enReadTime: '6 min read',
    content: [
      { type: 'heading', text: "1. Thế nào là Cười Hở Lợi? Tiêu chuẩn đo lường 'Đường Cười Đẹp'" },
      { type: 'paragraph', text: 'Cười hở lợi (Gummy Smile) là tình trạng khoảng nướu hiển thị trên 3mm tính từ cổ răng đến viền môi trên khi cười thoải mái. Dù không phải là một bệnh lý nguy hại sức khỏe, cười hở lợi gây trở ngại tâm lý cực kỳ lớn, làm mất đi sự duyên dáng tự nhiên của gương mặt.' },
      { type: 'paragraph', text: 'Đường cười chuẩn thẩm mỹ hoàn hảo yêu cầu viền môi trên chỉ chạm vừa khít nướu hoặc lộ tối đa không quá 1-2mm nướu răng cửa, răng đều tăm tắp hướng lên cung cười thanh thoát.' },
      { type: 'heading', text: '2. Phương pháp phẫu thuật cắt lợi thẩm mỹ bằng Laser Diode Thẩm mỹ cao' },
      { type: 'paragraph', text: 'Pacific Dental ứng dụng độc quyền hệ thống Laser Diode tần số cao nhập khẩu trực tiếp từ Đức để tạo hình lại đường nướu sinh lý của bệnh nhân. Trực quan kỹ thuật số cho phép bác sĩ thiết kế đường viền chính xác đối xứng đến tuyệt mỹ.' },
      {
        type: 'list',
        items: [
          'Không chảy máu, không dùng chỉ khâu: Tia laser cắt nướu đến đâu lập tức hàn gắn mạch máu và sát khuẩn trực tiếp đến đó. Hoàn toàn không sưng đau, không cần khâu chỉ y tế phức tạp.',
          'Sửa soạn chiều cao răng hài hòa: Giải quyết dứt điểm các ca thân răng ngắn bẩm sinh do nướu bao phủ quá mức ngà răng.',
          'Kết quả vĩnh viễn trọn đời: Nướu sinh học sau khi xử lý bằng laser diode sẽ ổn định bền vững theo thời gian, tuyệt đối không bò hoặc bò nướu trở lại.'
        ]
      },
      { type: 'quote', text: 'Lời khuyên từ Dr. Wendy Phuong Anh: "Trải nghiệm trị liệu cười hở lợi tại Pacific diễn ra vô cùng an tĩnh dưới sự hỗ trợ của thuốc tê không đau chuẩn Pháp. Thời gian thực hiện cực kỳ tốc độ trong vòng 30 phút, đem lại hiệu quả lột xác diện mạo nụ cười tươi trẻ ngay lập tức."' }
    ]
  },
  {
    id: 9,
    title: 'Các biến chứng nguy kịch do Mất Răng Lâu Năm gây ra đối với cơ thể',
    enTitle: 'Critical Complications Caused by Long-term Tooth Loss to the Body',
    category: 'Implant',
    enCategory: 'Implant',
    desc: 'Tại sao việc để trống ổ răng đã mất lâu ngày lại là nguyên nhân chính gây méo lệch cơ mặt, tiêu biến xương hàm và hủy hoại cơ quan hệ tiêu hóa nghiêm trọng.',
    img: '/assets/images/tooth_loss_bone_resorption_1781453179122.jpg',
    date: '25/04/2026',
    author: {
      name: 'Dr. Le Danh',
      spec: 'Phẫu thuật & Khớp cắn',
      image: 'https://lh3.googleusercontent.com/d/11MU5vNdQjnSd6pMTNM40vW2QIfXNkKL1'
    },
    readTime: '7 phút đọc',
    enReadTime: '7 min read',
    content: [
      { type: 'heading', text: '1. Hiện tượng Tiêu xương ổ răng sinh lý âm thầm tàn khốc' },
      { type: 'paragraph', text: 'Xương hàm được duy trì thể tích vững chắc nhờ lực kích thích cơ học truyền dẫn thông qua chân răng trong quá trình nhai ăn uống hàng ngày. Khi một chiếc răng bị mất đi, lực nhai tại vùng đó biến mất. Trong vòng 1 năm đầu tiên, lượng xương hàm tại vị trí răng rụng sẽ tự động tiêu biến biến mất khoảng 25% đến 50%, và quá trình này sẽ tiếp diễn tàn phá sâu thêm mỗi năm sau đó.' },
      { type: 'paragraph', text: 'Hệ quả trực quan nhất của tiêu xương hàm là làm sụt má, xuất hiện many nếp nhăn vùng quanh miệng, hai bên má hóp lại khiến khuôn mặt trông già nua đi nhanh chóng từ 10 - 15 tuổi so với bạn bè cùng trang lứa.' },
      { type: 'heading', text: '2. Hiệu ứng domino tàn phá toàn bộ khớp cắn' },
      { type: 'paragraph', text: 'Khoảng trống do mất răng để lại sẽ phá vỡ tính liên kết hoàn chỉnh tự nhiên của cung răng:' },
      {
        type: 'list',
        items: [
          'Xô lệch toàn hàm: Các răng đối diện sẽ có xu hướng trồi lên hoặc lún xuống lấp khoảng trống. Các răng lân cận đổ nghiêng ngả về phía mất răng, làm răng thưa thớt xộc xệch kéo theo sai lệch khớp thái dương hàm mạn tính.',
          'Suy giảm nghiêm trọng chức năng tiêu hóa: Thức ăn không được nghiền nát kỹ lưỡng ở khoang miệng đổ dồn về dạ dày, ruột non bắt buộc các cơ quan này tăng tần suất co bóp tối đa, dẫn tới đau dạ dày mạn tính, rối loạn hấp thụ chất dinh dưỡng.',
          'Phát âm ngọng ngịu: Mất răng cửa làm thoát khí, suy giảm khả năng phát âm tiếng Việt lẫn các ngoại ngữ khác chuẩn xác.'
        ]
      },
      { type: 'image', url: '/assets/images/tooth_loss_bone_resorption_1781453179122.jpg', alt: 'Cấu trúc xương hàm sọ nghiêng' }
    ]
  },
  {
    id: 10,
    title: 'Hiện tượng Hôi Miệng kéo dài: Nguyên nhân và Phương pháp trị liệu triệt để',
    enTitle: 'Prolonged Bad Breath: Causes and Radical Treatment Methods',
    category: 'Chăm sóc',
    enCategory: 'Care',
    desc: 'Lột trần gốc rễ nguyên nhân gây ra mùi hôi khó chịu từ các túi nha chu viêm nhiễm và giải pháp làm sạch bằng khí dung quang học thế hệ mới.',
    img: '/assets/images/srv_nha_chu_1781368947422.jpg',
    date: '18/04/2026',
    author: {
      name: 'Dr. Wendy Phuong Anh',
      spec: 'Nha khoa Thẩm mỹ',
      image: 'https://lh3.googleusercontent.com/d/1g2LEY7MDt40ZYWUBB4qkOA9MGrGUFJE5'
    },
    readTime: '5 phút đọc',
    enReadTime: '5 min read',
    content: [
      { type: 'heading', text: '1. Tại sao dùng kẹo cao su hay xịt thơm miệng vẫn không thể tự khắc phục?' },
      { type: 'paragraph', text: 'Mùi hôi miệng mạn tính (Halitosis) chiếm khoảng 25% dân số toàn cầu. Rất nhiều người lầm tưởng đây là do nóng trong người hoặc bệnh lý dạ dày, nhưng thực tế lâm sàng cho thấy hơn 90% nguyên nhân xuất phát trực tiếp ngay trong khoang miệng.' },
      { type: 'paragraph', text: 'Vi khuẩn kỵ khí phân hủy các hợp chất protein trong mảng bám răng, vôi răng dưới nướu, lưỡi và các ổ sâu răng giải phóng ra chất khí chứa lưu huỳnh dễ bay hơi (VSCs) có mùi hôi hắc đặc trưng. Các sản phẩm xịt thơm miệng hay kẹo ngậm chỉ có tác dụng che phủ hương liệu tạm thời trong vài mươi phút, hoàn toàn bất lực trước nguồn gốc vi sinh.' },
      { type: 'heading', text: '2. Giải pháp Điều trị Hôi miệng độc quyền tại Pacific Dental' },
      { type: 'paragraph', text: 'Quy trình rà soát và điều trị gốc bệnh bao gồm các bước phối hợp đặc dụng cứu cánh:' },
      {
        type: 'list',
        items: [
          'Lấy cao răng siêu âm AirFlow: Đánh bật các ổ vi khuẩn trú ngụ sâu dưới kẽ nướu răng bám dính chặt.',
          'Điều trị dứt điểm sâu răng và viêm lợi trùm bằng phác đồ nội nha bảo tồn tối đa.',
          'Làm sạch rêu lưỡi bằng công nghệ cạo lưỡi sóng siêu âm sạch khuẩn.',
          'Kê đơn nước súc miệng chứa Chlorhexidine hoặc kẽm hoạt tính chuyên biệt diệt vi khuẩn phóng thích VSCs.'
        ]
      }
    ]
  },
  {
    id: 11,
    title: 'So sánh Niềng răng trong suốt ClearCorrect và Invisalign: Đâu là sự lựa chọn tối ưu?',
    enTitle: 'Comparing ClearCorrect and Invisalign Clear Aligners: Which is the Optimal Choice?',
    category: 'Niềng răng',
    desc: 'Bản phân tích khoa học khách quan về chất liệu nhựa, công nghệ dịch chuyển răng và chi phí đầu tư chỉnh nha giữa hai tập đoàn y khoa lớn nhất Hoa Kỳ.',
    img: '/assets/images/clear_aligners_setup_1781453208301.jpg',
    date: '12/04/2026',
    author: {
      name: 'Dr. Patrick Thien',
      spec: 'Chuyên gia Chỉnh nha',
      image: 'https://lh3.googleusercontent.com/d/1-j4har_nWttaXIhQfGaWM1qsI4nODQVa'
    },
    readTime: '8 phút đọc',
    enReadTime: '8 min read',
    content: [
      { type: 'heading', text: '1. Khái quát Xuất xứ thương hiệu của Invisalign và ClearCorrect' },
      { type: 'paragraph', text: 'Invisalign và ClearCorrect đều là hai gã khổng lồ dẫn dắt thị trường chỉnh nha vô hình cao cấp toàn cầu ngày nay, có nguồn gốc từ Thung lũng Silicon nước Mỹ và đạt chứng nhận an toàn sinh học y tế FDA Hoa Kỳ cực kỳ khắt khe.' },
      { type: 'paragraph', text: 'Invisalign thuộc sở hữu của Align Technology (Thành lập năm 1997), trong khi ClearCorrect được mua lại và hậu thuẫn trực tiếp bởi Straumann Group (Thụy Sỹ) - tập đoàn nghiên cứu cấy ghép implant nha khoa đứng vị thế số 1 toàn cầu.' },
      { type: 'heading', text: '2. So sánh Toàn diện trên các Tiêu chí cốt lõi' },
      {
        type: 'list',
        items: [
          'Chất liệu nhựa chế tác khay: Invisalign sử dụng chất liệu nhựa polyurethane SmartTrack có khả năng đàn hồi tốt. ClearCorrect sử dụng nhựa ClearQuartz 3 lớp cao cấp độc nhất mang lại độ cứng uốn dẻo cân bằng, giúp khay siêu mỏng trong suốt vượt trội khó bị xước mờ rạn nứt hơn.',
          'Thiết kế viền cắt khay: Invisalign cắt khay lượn sóng theo đường viền nướu nướu. ClearCorrect cắt khay thẳng vượt trên nướu 1.5mm, tăng lực ma sát bám giữ chặt chẽ nướu tự nhiên giúp răng xoay chuẩn xác mà hạn chế việc phải đính attachment mất thẩm mỹ.',
          'Hỗ trợ lập trình 3D kỹ thuật số: Invisalign dùng phần mềm ClinCheck, ClearCorrect vận hành công nghệ phần mềm ClearPilot mô phỏng biến đổi chuẩn mực y khoa.'
        ]
      }
    ]
  },
  {
    id: 12,
    title: 'Công nghệ phục hình Răng Sứ đơn lẻ trên chân răng Implant thế hệ mới',
    enTitle: 'Single Porcelain Tooth Restoration Technology on New Generation Implant Roots',
    category: 'Implant',
    enCategory: 'Implant',
    desc: 'Ưu điểm của Abutment liên kết cá nhân hóa (Customized Abutment) giúp ngăn ngừa ố nướu khít răng nhai và duy trì nét thanh tao bền lâu tuyệt đối.',
    img: '/assets/images/implant_single_crown_1781453226051.jpg',
    date: '05/04/2026',
    author: {
      name: 'Dr. Le Danh',
      spec: 'Phẫu thuật & Khớp cắn',
      image: 'https://lh3.googleusercontent.com/d/11MU5vNdQjnSd6pMTNM40vW2QIfXNkKL1'
    },
    readTime: '6 phút đọc',
    enReadTime: '6 min read',
    content: [
      { type: 'heading', text: '1. Khái niệm Khớp nối Abutment liên kết trong cấy ghép đơn lẻ' },
      { type: 'paragraph', text: 'Trải qua quá trình cấy ghép trụ titanium Implant vào xương hàm và chờ đợi liên kết tích hợp xương hoàn thành mỹ mãn, bước tiếp theo bác sĩ sẽ tiến hành gắn khớp nối Abutment (trung gian liên kết) để nâng đỡ mão sứ thẩm mỹ phía trên.' },
      { type: 'paragraph', text: 'Hầu hết các phòng khám quy mô vừa và nhỏ sử dụng khớp nối Abutment may sẵn sản xuất hàng loạt (Stock Abutment). Nhược điểm là chu vi cổ răng Abutment dạng tròn đều không khớp khớp với hình thái nướu vốn có dạng hình oval dẹt của từng chiếc răng khác nhau, gây ra khe hở giắt thức ăn ăn nhai xộc xệch và viêm nướu mạn tính quanh trụ.' },
      { type: 'heading', text: '2. Customized Abutment - Đột phá cá nhân hóa độc quyền tại Pacific Dental' },
      { type: 'paragraph', text: 'Bảo bối của Pacific chính là thiết kế Abutment cá nhân hóa Customized Abutment chế tác từ titanium hoặc zirconia hoàn hảo theo khuôn nướu của riêng bệnh nhân bằng công nghệ CAD/CAM tại Labo.' },
      {
        type: 'list',
        items: [
          'Kín khít nướu tuyệt đối: Thân Abutment mô phỏng chính xác biên dạng cổ răng tự nhiên tạo độ khít tuyệt hảo ngăn ngừa thức ăn lọt xuống.',
          'Thẩm mỹ tự nhiên hoàn hảo: Không bị lộ bóng viền xám đen kim loại dưới nướu khi cười lớn.',
          'Phân bổ lực nhai thăng bằng: Lực nhai dàn trải đồng đều dọc trục răng xuống xương hàm nới rộng tuổi thọ trọn đời của implant.'
        ]
      }
    ]
  }
];
