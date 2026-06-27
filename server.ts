import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Serve dental assets directly in both dev and prod environments
  app.use("/src/assets/images", express.static(path.join(process.cwd(), "src/assets/images")));

  // Define API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Chat API using GenAI SDK
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body; // Array of { role: 'user' | 'model', content: string }
      
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "Missing GEMINI_API_KEY environment variable" });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      // Prepare system instruction
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

      // We'll use streaming generate content
      // Reconstruct conversation history. The SDK allows `contents` array.
      // Wait, let's use `ai.models.generateContentStream` with the conversation history.
      const contents = messages.map((m: any) => ({
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
        const text = (chunk as GenerateContentResponse).text || "";
        res.write(`data: ${JSON.stringify({ text })}\n\n`);
      }
      res.write("data: [DONE]\n\n");
      res.end();
    } catch (error: any) {
      console.error("Chat Error:", error);
      res.status(500).json({ error: "Failed to generate response" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // Fallback for SPA routing
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
