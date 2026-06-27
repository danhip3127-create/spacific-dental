import React, { useState, useRef, useEffect } from "react";
import { MessageSquareHeart, X, Send, Smile, Loader2, Sparkles, MessageCircle } from "lucide-react";
import Markdown from "react-markdown";
import { Button } from "./ui/Button";
import { useLanguage } from "../lib/LanguageContext";

type Message = {
  id: string;
  role: "user" | "model";
  content: string;
};

export default function Chatbot() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "model",
      content: t("Xin chào! Tôi là trợ lý ảo của Pacific Dental Services. Tôi có thể giúp gì cho bạn hôm nay?", "Hello! I am Pacific Dental Services' virtual assistant. How can I help you today?"),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    const botMsgId = (Date.now() + 1).toString();
    setMessages((prev) => [...prev, { id: botMsgId, role: "model", content: "" }]);

    try {
      // Send history (excluding the currently creating bot message)
      const history = [...messages, userMsg].map(({ role, content }) => ({ role, content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const reader = res.body?.getReader();
      const decoder = new TextDecoder("utf-8");
      
      if (reader) {
        let botText = "";
        let buffer = "";
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          
          const lines = buffer.split("\n\n");
          // Keep the last part in buffer as it might be incomplete
          buffer = lines.pop() || "";
          
          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const dataStr = line.substring(6);
              if (dataStr === "[DONE]") {
                setIsLoading(false);
                return;
              }
              try {
                const data = JSON.parse(dataStr);
                if (data.text) {
                  botText += data.text;
                  setMessages((prev) => 
                    prev.map((m) => m.id === botMsgId ? { ...m, content: botText } : m)
                  );
                }
              } catch (e) {
                console.error("Error parsing chunk", e, dataStr);
              }
            }
          }
        }
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => 
        prev.map((m) => m.id === botMsgId ? { ...m, content: t("Xin lỗi, đã có lỗi kết nối xảy ra. Vui lòng thử lại sau.", "Sorry, a connection error occurred. Please try again later.") } : m)
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 animate-float">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="relative w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-primary-dark transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 rounded-full bg-primary animate-ping-small opacity-75"></div>
            <MessageCircle size={28} className="relative z-10" />
          </button>
        )}
      </div>

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[550px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-gradient-to-r from-primary to-secondary p-4 flex justify-between items-center text-white shrink-0 shadow-sm relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 shadow-inner">
                  <Smile size={22} className="text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-primary"></div>
              </div>
              <div>
                <div className="font-bold text-lg leading-tight flex items-center gap-1.5">
                  {t("Trợ Lý Pacific Dental", "Pacific Dental Assistant")}
                  <Sparkles size={14} className="text-yellow-300" />
                </div>
                <div className="text-xs text-white/80 font-medium">
                  {t("Luôn sẵn sàng hỗ trợ", "Always ready to help")}
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white/20 rounded-full transition-colors relative z-10"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm flex gap-3 ${
                    m.role === "user"
                      ? "bg-primary text-white rounded-br-none"
                      : "bg-white text-slate-800 rounded-bl-none shadow-sm border border-slate-100"
                  }`}
                >
                  <div className={`flex flex-col gap-1 ${m.role === "model" ? "markdown-body" : "whitespace-pre-wrap"}`}>
                    {m.role === "model" ? <Markdown>{m.content}</Markdown> : m.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-sm border border-slate-100 flex items-center gap-2 text-slate-500">
                  <Loader2 size={16} className="animate-spin" />
                  <span className="text-sm">{t("Đang trả lời...", "Replying...")}</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-3 bg-white border-t border-slate-100 flex gap-2 shrink-0"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t("Nhập tin nhắn...", "Type a message...")}
              className="flex-1 bg-slate-100 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-primary/20 text-sm"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-dark transition-colors"
            >
              <Send size={18} className="translate-x-[1px]" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
