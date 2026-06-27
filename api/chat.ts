import { GoogleGenAI } from "@google/genai";

// Helper function for intelligent chatbot fallback when API key is missing or model fails
function getFallbackResponse(userMessage: string): string {
  const msg = (userMessage || "").toLowerCase();
  
  // Checking for Booking/Appointment
  if (msg.includes("đặt lịch") || msg.includes("hẹn") || msg.includes("booking") || msg.includes("appointment") || msg.includes("đăng ký") || msg.includes("đky") || msg.includes("lich")) {
    return `**Pacific Dental** rất hân hạnh được hỗ trợ bạn đặt lịch khám!
    
Để nhận ưu đãi **Giảm 20% tất cả dịch vụ & Miễn phí khám tổng quát**, bạn hãy nhấn vào nút **"Đăng Ký Đặt Lịch"** ở phía trên màn hình để điền thông tin (Họ tên, SĐT, Ngày và Giờ khám mong muốn). 

Chuyên viên tư vấn của chúng tôi sẽ liên hệ lại ngay để xác nhận lịch hẹn cho bạn nhé!`;
  }

  // Checking for Implant
  if (msg.includes("implant") || msg.includes("trồng răng") || msg.includes("cấy ghép")) {
    return `Dịch vụ **Trồng răng Implant** tại Pacific Dental đang có chương trình ưu đãi đặc biệt:
- **Giá ưu đãi:** **12.500.000đ** / răng (Giá gốc: 15.000.000đ)
- Công nghệ cấy ghép hiện đại, không đau, sử dụng trụ Implant chất lượng cao giúp phục hồi chức năng ăn nhai hoàn hảo như răng thật.
- Miễn phí chụp phim CT Cone Beam khảo sát xương hàm.

Bạn có muốn đặt lịch hẹn tư vấn chuyên sâu cùng bác sĩ không ạ? Bạn có thể bấm vào nút **"Đăng Ký Đặt Lịch"** để chọn ngày giờ khám nhé!`;
  }

  // Checking for ClearCorrect/Niềng răng
  if (msg.includes("niềng răng") || msg.includes("clearcorrect") || msg.includes("khay trong") || msg.includes("chỉnh nha") || msg.includes("brace") || msg.includes("aligner") || msg.includes("nieng")) {
    return `Dịch vụ **Niềng răng trong suốt ClearCorrect** chuẩn Mỹ tại Pacific Dental:
- **Giá ưu đãi:** **65.000.000đ** cho toàn bộ liệu trình (Giá gốc: 80.000.000đ)
- Khay niềng gần như vô hình, thoải mái tháo lắp khi ăn uống và vệ sinh.
- Xem trước kết quả điều trị 3D bằng phần mềm hiện đại.

Bạn có thể nhấn vào nút **"Đăng Ký Đặt Lịch"** ở đầu trang để hẹn gặp Bác sĩ chuyên khoa chỉnh nha của chúng tôi để được tư vấn miễn phí nhé!`;
  }

  // Checking for Răng sứ/Bọc sứ
  if (msg.includes("răng sứ") || msg.includes("bọc sứ") || msg.includes("dán sứ") || msg.includes("veneer") || msg.includes("bọc răng") || msg.includes("rang su") || msg.includes("boc su")) {
    return `Dịch vụ **Bọc răng sứ thẩm mỹ** tại Pacific Dental mang lại nụ cười trắng sáng rạng rỡ:
- **Giá ưu đãi:** Chỉ từ **4.500.000đ** / răng (Giá gốc: 6.000.000đ)
- Sử dụng các dòng sứ cao cấp nhập khẩu chính hãng (Cercon, Emax, Zirconia...), độ bền cao và màu sắc tự nhiên như răng thật.
- Thiết kế dáng răng chuẩn tỉ lệ vàng của khuôn mặt.

Để biết chính xác dòng sứ phù hợp nhất, bạn hãy để lại thông tin đặt lịch hẹn khám bằng cách bấm nút **"Đăng Ký Đặt Lịch"** nhé!`;
  }

  // Checking for Tẩy trắng răng
  if (msg.includes("tẩy trắng") || msg.includes("trắng răng") || msg.includes("whiten") || msg.includes("tay trang")) {
    return `Dịch vụ **Tẩy trắng răng cấp tốc** tại Pacific Dental sử dụng công nghệ ánh sáng lạnh hiện đại:
- **Giá ưu đãi:** **2.000.000đ** (Giá gốc: 3.500.000đ)
- An toàn tuyệt đối, không ê buốt, lên tông rõ rệt chỉ sau 45-60 phút tại phòng khám.
- Giữ màu trắng sáng bền lâu từ 3 - 5 năm nếu chăm sóc tốt.

Bạn có muốn đăng ký giữ suất ưu đãi tẩy trắng răng này hôm nay không?`;
  }

  // Checking for Nhổ răng khôn
  if (msg.includes("răng khôn") || msg.includes("nhổ răng") || msg.includes("wisdom tooth") || msg.includes("piezotome") || msg.includes("rang khon") || msg.includes("nho rang")) {
    return `Dịch vụ **Nhổ răng khôn bằng máy siêu âm Piezotome** không đau, nhanh lành thương tại Pacific Dental:
- **Giá ưu đãi:** Chỉ từ **1.800.000đ** / răng (Giá gốc: 3.000.000đ)
- Công nghệ siêu âm giúp tách nướu nhẹ nhàng, không xâm lấn sâu, giảm thiểu tối đa sưng đau và lành thương nhanh gấp 2 lần.

Nếu bạn đang bị sưng đau răng khôn, hãy bấm **"Đăng Ký Đặt Lịch"** để bác sĩ hỗ trợ khám và xử lý kịp thời cho bạn nhé!`;
  }

  // Checking for Nha chu
  if (msg.includes("nha chu") || msg.includes("nướu") || msg.includes("chảy máu") || msg.includes("gum") || msg.includes("nuou")) {
    return `Dịch vụ **Điều trị nha chu & Chăm sóc nướu** tại Pacific Dental:
- **Giá ưu đãi:** **1.500.000đ** (Giá gốc: 2.000.000đ)
- Giúp loại bỏ hoàn toàn ổ vi khuẩn dưới nướu, chấm dứt tình trạng chảy máu chân răng, hôi miệng và bảo vệ răng lung lay.

Hãy bấm vào nút **"Đăng Ký Đặt Lịch"** để đặt lịch hẹn khám để bác sĩ trực tiếp kiểm tra mức độ viêm nướu của bạn nhé!`;
  }

  // Checking for Địa chỉ / Liên hệ / Hotline / Cơ sở
  if (msg.includes("địa chỉ") || msg.includes("ở đâu") || msg.includes("chi nhánh") || msg.includes("cơ sở") || msg.includes("hotline") || msg.includes("sđt") || msg.includes("điện thoại") || msg.includes("address") || msg.includes("location") || msg.includes("liên hệ") || msg.includes("dia chi") || msg.includes("co so")) {
    return `Thông tin liên hệ và các cơ sở của **Pacific Dental**:
- **Hotline hỗ trợ 24/7:** **0903 985 463**
- **Email:** hello@pacificdental.vn
- **Thời gian làm việc:**
  - Thứ 2 - Thứ 6: 08:00 - 20:00
  - Thứ 7: 08:00 - 18:00
  - Chủ Nhật: 08:00 - 12:00
- **Các cơ sở điều trị:**
  - **Cơ sở 1:** 97 Võ Văn Tần, Quận 3, TP.HCM
  - **Cơ sở 2:** Thanh Đa, Bình Thạnh, TP.HCM

Bạn có thể nhấn nút **"Đăng Ký Đặt Lịch"** ở trên đầu trang để chọn cơ sở, ngày giờ khám thuận tiện nhất!`;
  }

  // Checking for Giá / Chi phí / Bảng giá / Ưu đãi
  if (msg.includes("giá") || msg.includes("bao nhiêu") || msg.includes("tiền") || msg.includes("chi phí") || msg.includes("khuyến mãi") || msg.includes("ưu đãi") || msg.includes("price") || msg.includes("cost") || msg.includes("bảng giá") || msg.includes("gia")) {
    return `Dưới đây là bảng giá các dịch vụ chính đang có **ưu đãi giảm sâu 20%** tại Pacific Dental:

1. **Trồng răng Implant:** **12.500.000đ** (Giá gốc 15tr)
2. **Niềng răng ClearCorrect:** **65.000.000đ** (Giá gốc 80tr)
3. **Bọc răng sứ thẩm mỹ:** **4.500.000đ** (Giá gốc 6tr)
4. **Tẩy trắng răng cấp tốc:** **2.000.000đ** (Giá gốc 3.5tr)
5. **Nhổ răng khôn Piezotome:** **1.800.000đ** (Giá gốc 3tr)
6. **Điều trị nha chu:** **1.500.000đ** (Giá gốc 2tr)

*Đặc biệt: Miễn phí khám tổng quát & tư vấn khi đặt hẹn trực tuyến! Bạn hãy nhấn vào nút **"Đăng Ký Đặt Lịch"** để giữ ưu đãi nhé.*`;
  }

  // Default welcome response
  return `Chào bạn! Cảm ơn bạn đã liên hệ Pacific Dental Services. 

Tôi có thể tư vấn chi tiết cho bạn về các dịch vụ nha khoa nổi bật như:
- **Trồng răng Implant** (Ưu đãi còn 12.5tr)
- **Niềng răng trong suốt ClearCorrect** (Ưu đãi còn 65tr)
- **Bọc răng sứ thẩm mỹ** (Ưu đãi còn 4.5tr/răng)
- **Tẩy trắng răng cấp tốc** (Ưu đãi còn 2tr)
- **Nhổ răng khôn bằng máy siêu âm Piezotome** (Ưu đãi còn 1.8tr)

Bạn đang quan tâm đến tình trạng răng miệng nào hoặc muốn đặt lịch khám cùng bác sĩ ạ? Bạn có thể đăng ký trực tiếp lịch khám qua nút **"Đăng Ký Đặt Lịch"** để giữ ưu đãi giảm 20% nhé!`;
}

// Helper function to stream fallback responses
async function handleStreamFallback(res: any, text: string) {
  if (!res.headersSent) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
  }

  const words = text.split(" ");
  let currentChunk = "";
  for (let i = 0; i < words.length; i++) {
    currentChunk += words[i] + " ";
    if (i % 3 === 2 || i === words.length - 1) {
      res.write(`data: ${JSON.stringify({ text: currentChunk })}\n\n`);
      currentChunk = "";
      await new Promise(resolve => setTimeout(resolve, 35)); // smooth delay
    }
  }
  res.write("data: [DONE]\n\n");
  res.end();
}

export default async function handler(req: any, res: any) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body || {};
  const lastUserMessage = messages && messages.length > 0 ? messages[messages.length - 1].content : "";

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is missing in Vercel function. Streaming intelligent fallback.");
      return await handleStreamFallback(res, getFallbackResponse(lastUserMessage));
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    const systemInstruction = `Bạn là "Trợ lý Pacific Dental" - trợ lý ảo nha khoa thân thiện, chuyên nghiệp và thấu hiểu tâm lý khách hàng của phòng khám Pacific Dental Services. 
Mục tiêu của bạn là: 
1. Chào đón khách hàng một cách nồng nhiệt, luôn thể hiện sự quan tâm đến sức khỏe răng miệng của họ.
2. Cung cấp thông tin chính xác, dễ hiểu về các dịch vụ nha khoa chính (kèm giá tham khảo hiện đang có ưu đãi):
   - Trồng răng Implant: 12.500.000đ (Giá gốc 15tr)
   - Niềng răng ClearCorrect: 65.000.000đ (Giá gốc 80tr)
   - Bọc răng sứ thẩm mỹ: 4.500.000đ (Giá gốc 6tr)
   - Tẩy trắng răng cấp tốc: 2.000.000đ (Giá gốc 3.5tr)
   - Nhổ răng khôn Piezotome: 1.800.000đ (Giá gốc 3tr)
   - Điều trị nha chu: 1.500.000đ (Giá gốc 2tr)
3. Hướng dẫn khách hàng đặt lịch khám qua biểu mẫu trên website (để nhận ưu đãi giảm 20% dịch vụ & Miễn phí khám tổng quát).
4. Luôn trả lời ngắn gọn, có cấu trúc rõ ràng (sử dụng bullet points nếu cần), ngôn từ lịch sự, tự nhiên như người thật. Không dùng quá nhiều thuật ngữ y khoa phức tạp.
5. Cung cấp thông tin liên hệ khi khách hàng cần: 
   - Hotline: 0903 985 463
   - Email: hello@pacificdental.vn
   - Cơ sở 1: 97 Võ Văn Tần, Q.3, TP.HCM
   - Cơ sở 2: Thanh Đa, Bình Thạnh, TP.HCM.`;

    const contents = (messages || []).map((m: any) => ({
      role: m.role,
      parts: [{ text: m.content }]
    }));

    const responseStream = await ai.models.generateContentStream({
      model: "gemini-2.5-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    for await (const chunk of responseStream) {
      const text = chunk.text || "";
      res.write(`data: ${JSON.stringify({ text })}\n\n`);
    }

    res.write("data: [DONE]\n\n");
    res.end();
  } catch (error: any) {
    console.error("Vercel Chat Error:", error);
    try {
      await handleStreamFallback(res, getFallbackResponse(lastUserMessage));
    } catch (fallbackError) {
      console.error("Critical Vercel Fallback failed:", fallbackError);
      res.status(500).json({ error: "Failed to generate response" });
    }
  }
}
