import React, { useState, useEffect, useRef } from 'react';
import { 
  Video, 
  Mic, 
  MicOff, 
  VideoOff, 
  MessageSquare, 
  Send, 
  StopCircle, 
  Play, 
  CheckCircle,
  AlertCircle,
  Clock,
  ChevronRight,
  TrendingUp,
  Sparkles,
  Trophy,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MockInterview() {
  const [isStarted, setIsStarted] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleStart = () => {
    setIsStarted(true);
    setIsThinking(true);
    setTimeout(() => {
      setMessages([
        { role: 'ai', text: "Welcome to your AI Practice Interview. I'm your interviewer today. Let's start with a brief introduction of your professional background and core expertise.", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ]);
      setIsThinking(false);
    }, 1500);
  };

  const handleSend = () => {
    if (!userInput.trim()) return;
    const newMsg = { role: 'user', text: userInput, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages([...messages, newMsg]);
    setUserInput('');
    setIsThinking(true);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: "That's an impressive background. Given your experience with architectural design, could you walk me through a complex technical challenge you faced and how you resolved it?",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      }]);
      setIsThinking(false);
    }, 2000);
  };

  return (
    <div className="h-full flex flex-col bg-[#F8F7F4] overflow-hidden">
      {!isStarted ? (
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-xl w-full bg-white rounded-[40px] p-12 text-center shadow-av-lg border border-[#EAEAEA]">
             <div className="w-20 h-20 bg-[#0078D4] rounded-[24px] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#0078D4]/20">
                <Video size={32} className="text-white" />
             </div>
             <h2 className="text-4xl font-bold text-[#111111] tracking-tight mb-4 leading-tight">Practice <span className="text-[#0078D4]">Interviews.</span></h2>
             <p className="text-[#605E5C] mb-10 font-medium text-base leading-relaxed">Prepare for enterprise-level mobility by practicing with our high-fidelity AI simulation. Real-time feedback included.</p>
             
             <div className="grid grid-cols-2 gap-4 mb-10 text-left">
                <div className="p-4 bg-[#F8F7F4] rounded-2xl border border-[#EAEAEA]">
                   <span className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest block mb-1">Target Role</span>
                   <span className="text-xs font-bold text-[#111111]">Staff Systems Architect</span>
                </div>
                <div className="p-4 bg-[#F8F7F4] rounded-2xl border border-[#EAEAEA]">
                   <span className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest block mb-1">Duration</span>
                   <span className="text-xs font-bold text-[#111111]">15 - 20 Minutes</span>
                </div>
             </div>

             <button 
                onClick={handleStart}
                className="w-full py-5 bg-[#111111] text-white rounded-2xl font-bold text-sm hover:bg-[#0078D4] transition-all shadow-2xl shadow-black/20 flex items-center justify-center gap-3"
             >
                <Play size={18} fill="white" /> Initialize AI Simulation
             </button>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex overflow-hidden">
          {/* Main Simulation Area (70%) */}
          <div className="flex-1 flex flex-col p-8 space-y-6">
            <div className="flex justify-between items-center bg-[#111111] p-4 rounded-2xl text-white shadow-xl">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0078D4] flex items-center justify-center">
                     <Activity size={18} />
                  </div>
                  <div>
                     <h4 className="text-sm font-bold tracking-tight">AI Role Simulation</h4>
                     <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Active • Interviewer 01</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-bold border border-white/10">
                     <Clock size={12} className="text-[#0078D4]" /> 00:04:15
                  </div>
                  <button 
                    onClick={() => setIsStarted(false)}
                    className="flex items-center gap-2 px-6 py-2 bg-[#EE3322] text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#B91C1C] transition-all shadow-xl shadow-[#EE3322]/20"
                  >
                     <StopCircle size={14} /> Stop Interview
                  </button>
               </div>
            </div>

            <div className="flex-1 bg-[#111111] rounded-[40px] relative overflow-hidden shadow-2xl border border-white/5">
                {/* AI Visual (Placeholder) */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-64 h-64 bg-[#0078D4]/10 rounded-full blur-3xl" />
                   <div className="relative z-10 flex flex-col items-center">
                      <div className="w-48 h-48 rounded-full border border-white/10 p-4 transition-all duration-300">
                         <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0078D4] to-[#005A9E] flex items-center justify-center shadow-2xl">
                            <Video size={64} className="text-white opacity-40" />
                         </div>
                      </div>
                      <div className="mt-8 flex gap-2">
                         {[1,2,3,4,5].map(i => (
                           <motion.div 
                             key={i}
                             animate={{ height: [12, 32, 12], opacity: [0.3, 1, 0.3] }}
                             transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
                             className="w-1 bg-[#0078D4] rounded-full"
                           />
                         ))}
                      </div>
                   </div>
                </div>

                {/* Candidate Feed (PiP) */}
                <div className="absolute bottom-8 right-8 w-64 h-40 bg-[#1A1A1A] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                   <div className="absolute top-3 left-3 flex items-center gap-2 px-2 py-0.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#107C10] animate-pulse" />
                      <span className="text-[8px] font-bold text-white uppercase tracking-widest">Candidate Live</span>
                   </div>
                   <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=200&fit=crop" alt="User" className="w-full h-full object-cover scale-x-[-1] opacity-60" />
                </div>
            </div>
          </div>

          {/* Transcript Panel (30%) */}
          <aside className="w-[450px] border-l border-[#EAEAEA] bg-white flex flex-col shrink-0 shadow-2xl relative z-10">
             <div className="p-8 border-b border-[#F8F7F4]">
                <div className="flex items-center gap-2 mb-2">
                   <Sparkles className="w-4 h-4 text-[#0078D4]" />
                   <span className="text-[10px] font-bold text-[#0078D4] uppercase tracking-[0.3em]">Live Feedback</span>
                </div>
                <h3 className="text-xl font-bold text-[#111111] tracking-tight">AI Transcript</h3>
             </div>

             <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar bg-[#F8F7F4]/30">
                <AnimatePresence mode="popLayout">
                  {messages.map((m, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: m.role === 'ai' ? -10 : 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`flex flex-col ${m.role === 'ai' ? 'items-start' : 'items-end'}`}
                    >
                      <div className={`max-w-[85%] p-6 rounded-3xl text-xs font-medium leading-relaxed shadow-sm border ${m.role === 'ai' ? 'bg-white text-[#111111] border-[#EAEAEA] rounded-tl-sm' : 'bg-[#111111] text-white border-[#111111] rounded-tr-sm shadow-xl'}`}>
                        {m.text}
                      </div>
                      <span className="text-[8px] font-bold text-[#A19F9D] uppercase tracking-widest mt-2 px-2">{m.time}</span>
                    </motion.div>
                  ))}
                  {isThinking && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-start">
                       <div className="px-6 py-4 bg-white border border-[#EAEAEA] rounded-3xl rounded-tl-sm shadow-sm">
                          <div className="flex gap-1.5">
                             {[1,2,3].map(i => (
                               <motion.div 
                                 key={i}
                                 animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }}
                                 transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                                 className="w-1.5 h-1.5 bg-[#0078D4] rounded-full"
                               />
                             ))}
                          </div>
                       </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div ref={chatEndRef} />
             </div>

             <div className="p-8 border-t border-[#F8F7F4] bg-white">
                <div className="relative">
                   <input 
                     type="text" 
                     value={userInput}
                     onChange={(e) => setUserInput(e.target.value)}
                     onKeyDown={(e) => e.key === 'ENTER' && handleSend()}
                     placeholder="Type your response..."
                     className="w-full pl-6 pr-16 py-5 bg-[#F8F7F4] border-none rounded-2xl text-xs font-bold text-[#111111] outline-none shadow-inner transition-all hover:bg-[#F3F2F1] focus:ring-2 focus:ring-[#0078D4]/10"
                   />
                   <button 
                     onClick={handleSend}
                     className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#111111] text-white rounded-xl flex items-center justify-center hover:bg-[#0078D4] transition-all shadow-lg"
                   >
                      <Send size={16} fill="white" />
                   </button>
                </div>
             </div>
          </aside>
        </div>
      )}
    </div>
  );
}
