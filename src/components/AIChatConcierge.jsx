import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  ArrowRight, 
  Cpu, 
  Car, 
  ShieldCheck, 
  CornerDownLeft,
  Minimize2,
  Maximize2
} from 'lucide-react';
import { soundManager } from '../utils/sound';

export default function AIChatConcierge({ onOpenContact }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Greetings! I am the H² Virtual Intelligence. How can I assist you with our technology capabilities, venture portfolio, or partnership opportunities today?",
      time: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    "What is ParkHere?",
    "Explain the H² Philosophy",
    "What AI technologies do you use?",
    "How can we collaborate?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const getBotResponse = (query) => {
    const q = query.toLowerCase();
    
    if (q.includes('parkhere') || q.includes('parking') || q.includes('spot')) {
      return "ParkHere (live at https://parkhere-seven.vercel.app/) is the first showcased digital product developed by H SQUARE. It is an AI-powered community parking marketplace connecting drivers with unused private parking spaces in dense urban centers. Note that ParkHere is one product in our portfolio — H SQUARE is the parent technology startup developing multiple digital solutions.";
    }
    if (q.includes('philosophy') || q.includes('h square') || q.includes('mean') || q.includes('name') || q.includes('parent') || q.includes('company')) {
      return "H SQUARE is an emerging parent technology and AI innovation startup focused on developing multiple digital products and solving real-world problems. The 'H²' stands for Human Ingenuity multiplied by High-Tech Innovation (Human × High-Tech = H²).";
    }
    if (q.includes('ai') || q.includes('tech') || q.includes('stack') || q.includes('technology')) {
      return "Our technology domains encompass Artificial Intelligence & Machine Learning, Full-Stack Software Development, Intelligent Automation, Cloud Technologies, IoT & Smart Solutions, and Digital Product Innovation.";
    }
    if (q.includes('partner') || q.includes('collaborate') || q.includes('hire') || q.includes('contact') || q.includes('build')) {
      return "We collaborate with ambitious founders and enterprise leaders through co-incubation and custom AI venture engineering. You can submit your project brief directly in the 'Let's Build It' section below!";
    }
    if (q.includes('vision') || q.includes('mission')) {
      return "Our Vision is to create impactful technology products that simplify everyday life and build a smarter, connected future. Our Mission is to turn innovative ideas into impactful products using AI, software engineering, and creative problem-solving.";
    }

    return `Thank you for your question about "${query}". H SQUARE operates as a venture engineering studio turning bold ideas into scalable software. Feel free to explore our Products section or leave a note via our contact form for our leadership team!`;
  };

  const handleSend = (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    soundManager.playClick();
    const userMsg = {
      sender: 'user',
      text: text,
      time: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botReply = getBotResponse(text);
      setMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: botReply,
          time: 'Just now'
        }
      ]);
      setIsTyping(false);
      soundManager.playHover();
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => {
            soundManager.playClick();
            setIsOpen(true);
          }}
          className="group relative flex items-center gap-3 px-5 py-3 rounded-full bg-space-900/90 hover:bg-space-850 border border-cyan-400/50 shadow-2xl shadow-cyan-950/80 backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Open AI Concierge"
        >
          {/* Animated glow ring */}
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-30 group-hover:opacity-75 blur-md transition-opacity animate-pulse-subtle" />
          
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-400/40">
            <Bot className="w-4 h-4" />
          </div>

          <div className="relative text-left hidden sm:block">
            <div className="flex items-center gap-1.5 text-xs font-display font-bold text-white">
              <span>H² Assistant</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <span className="text-[10px] font-mono text-cyan-400 block -mt-0.5">
              Ask AI Anything
            </span>
          </div>
        </button>
      )}

      {/* Expanded Chat Box */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[520px] rounded-3xl bg-space-950/95 border border-cyan-500/40 shadow-2xl shadow-black/80 backdrop-blur-2xl flex flex-col overflow-hidden animate-fadeIn">
          
          {/* Chat Header */}
          <div className="px-5 py-4 bg-space-900 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/50 text-cyan-400 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-display font-bold text-white flex items-center gap-1.5">
                  H² Neural Concierge
                  <span className="text-[10px] font-mono text-emerald-400 font-normal">● Live</span>
                </h4>
                <p className="text-[10px] font-mono text-slate-400">Trained on H Square Architecture</p>
              </div>
            </div>

            <button
              onClick={() => {
                soundManager.playClick();
                setIsOpen(false);
              }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs scrollbar-none">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  m.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl ${
                    m.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-br-none shadow-md shadow-cyan-950/40'
                      : 'bg-space-900/90 text-slate-200 border border-white/10 rounded-bl-none'
                  }`}
                >
                  <p className="leading-relaxed">{m.text}</p>
                </div>
                <span className="text-[9px] font-mono text-slate-500 mt-1 px-1">
                  {m.time}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-space-900/80 border border-white/10 w-20">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 bg-space-900/50 border-t border-white/[0.06] overflow-x-auto flex gap-1.5 scrollbar-none">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-space-950 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 text-[11px] font-mono transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Input Field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-space-900 border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything about H Square..."
              className="flex-1 px-3 py-2 rounded-xl bg-space-950 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 rounded-xl bg-cyan-500 text-space-950 hover:bg-cyan-400 disabled:opacity-40 transition-colors shrink-0"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
}

