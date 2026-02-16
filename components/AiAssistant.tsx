import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Terminal } from 'lucide-react';
import { chatWithAi } from '../services/geminiService';
import { ChatMessage } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface AiAssistantProps {
  contextTitle: string;
}

// Helper component for message formatting
const FormattedMessage = ({ text, role }: { text: string, role: 'user' | 'model' }) => {
  if (role === 'user') return <>{text}</>;

  const processBold = (str: string) => {
    const parts = str.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-white">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="space-y-3">
      {text.split('\n').map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return null;

        if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
           return (
            <div key={i} className="flex items-start gap-3 pl-1">
              <span className="text-red-500 mt-1.5 text-[8px] flex-shrink-0">●</span>
              <div className="flex-1">{processBold(trimmed.substring(2))}</div>
            </div>
          );
        }
        
        const numberMatch = trimmed.match(/^(\d+)\.\s*(.+)/);
        if (numberMatch) {
           return (
            <div key={i} className="flex items-start gap-3 pl-1">
              <span className="font-mono font-bold text-red-500 text-xs mt-0.5">{numberMatch[1]}.</span>
              <div className="flex-1">{processBold(numberMatch[2])}</div>
            </div>
          );
        }

        return <p key={i}>{processBold(line)}</p>;
      })}
    </div>
  );
};

const AiAssistant: React.FC<AiAssistantProps> = ({ contextTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await chatWithAi(userMessage.text, contextTitle);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "System Error. Unable to process request.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 right-8 bg-slate-900 dark:bg-red-700 text-white p-4 shadow-2xl hover:bg-slate-800 dark:hover:bg-red-800 transition-colors z-40 flex items-center gap-3 border border-slate-700 dark:border-red-900 group rounded-sm"
          >
            <Terminal className="w-5 h-5 group-hover:text-red-400 dark:group-hover:text-white transition-colors animate-pulse" />
            <span className="font-bold text-xs uppercase tracking-widest hidden group-hover:inline-block">Ask AI Helper</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-8 right-8 w-full max-w-[400px] h-[600px] bg-white dark:bg-slate-900 shadow-2xl z-50 flex flex-col border border-slate-200 dark:border-slate-700 rounded-sm overflow-hidden ring-1 ring-slate-900/5"
          >
            {/* Header */}
            <div className="bg-slate-900 dark:bg-black p-4 flex justify-between items-center text-white border-b border-slate-800 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="bg-slate-800 dark:bg-slate-900 p-1.5 rounded-sm">
                   <Terminal className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-widest">Prepedia AI</h3>
                  <p className="text-[10px] text-slate-400 font-mono">Topic: {contextTitle}</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition transform hover:rotate-90 duration-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow p-5 overflow-y-auto space-y-6 bg-slate-50 dark:bg-slate-950">
              {messages.length === 0 && (
                <div className="text-center mt-20">
                  <div className="w-16 h-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center mx-auto mb-4 rounded-sm shadow-sm">
                      <MessageSquare className="w-8 h-8 text-slate-300 dark:text-slate-600" />
                  </div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">Ready to Help</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 max-w-[200px] mx-auto leading-relaxed">
                    Ask a question about {contextTitle}. I can explain things simply or give you safety tips.
                  </p>
                </div>
              )}
              {messages.map((msg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={idx} 
                  className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 mb-1 font-bold">
                      {msg.role === 'user' ? 'You' : 'AI Helper'}
                  </span>
                  <div 
                    className={`max-w-[90%] p-4 text-sm leading-relaxed border rounded-sm shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200 border-slate-200 dark:border-slate-700' 
                        : 'bg-slate-900 dark:bg-black text-slate-300 border-slate-800 dark:border-slate-900'
                    }`}
                  >
                    <FormattedMessage text={msg.text} role={msg.role} />
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex items-start">
                  <div className="bg-slate-900 dark:bg-black border border-slate-800 dark:border-slate-900 px-4 py-3 rounded-sm">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce delay-75"></span>
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce delay-150"></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 border border-slate-300 dark:border-slate-700 p-1 focus-within:border-slate-900 dark:focus-within:border-red-500 transition-colors bg-white dark:bg-slate-950">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your question..."
                  className="bg-transparent border-none focus:outline-none flex-grow text-sm text-slate-900 dark:text-white placeholder-slate-400 px-2 py-2 font-sans-safe"
                />
                <button 
                  onClick={handleSend} 
                  disabled={isLoading || !input.trim()}
                  className="bg-slate-900 dark:bg-red-700 text-white p-2 hover:bg-red-700 dark:hover:bg-red-600 disabled:bg-slate-300 dark:disabled:bg-slate-800 transition-colors rounded-sm"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AiAssistant;