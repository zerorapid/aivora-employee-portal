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
  Activity,
  X,
  FileText,
  ArrowRight,
  Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MockInterview() {
  const [isStarted, setIsStarted] = useState(false);
  const [showSetup, setShowSetup] = useState(false);
  const [selectedResume, setSelectedResume] = useState('Sarah_Miller_Staff_Arch.pdf');
  const [selectedRole, setSelectedRole] = useState('Senior Cloud Architect');
  const [experienceLevel, setExperienceLevel] = useState('Staff');
  const [customJD, setCustomJD] = useState('');
  const [focusArea, setFocusArea] = useState('System Design');
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
    setShowSetup(false);
    setIsStarted(true);
    setIsThinking(true);
    setTimeout(() => {
      const roleText = customJD ? "this custom role" : selectedRole;
      const skillText = selectedResume.includes('Staff') ? "distributed microservices" : "technical implementation";
      setMessages([
        { 
          role: 'ai', 
          text: `Welcome, Sarah. I've analyzed your ${selectedResume} for this ${experienceLevel}-level ${roleText} session. Given your background in ${skillText}, let's start with a high-stakes scenario. How would you...`, 
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
        }
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
      <AnimatePresence>
        {showSetup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setShowSetup(false)}
              className="absolute inset-0 bg-[#111111]/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden border border-[#EAEAEA]"
            >
               <div className="p-10">
                  <div className="flex justify-between items-start mb-10">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-[#0078D4]" />
                        <span className="text-[10px] font-bold text-[#0078D4] uppercase tracking-[0.3em]">Simulation Architect</span>
                      </div>
                      <h2 className="text-4xl font-bold text-[#111111] tracking-tight">Personalize Your Session</h2>
                      <p className="text-[#605E5C] mt-2 font-semibold text-sm">Select the source context for your AI interviewer.</p>
                    </div>
                    <button onClick={() => setShowSetup(false)} className="w-12 h-12 rounded-2xl bg-[#F8F7F4] flex items-center justify-center hover:bg-[#EAEAEA]"><X className="text-[#A19F9D]" size={24} /></button>
                  </div>

                  <div className="space-y-10 overflow-y-auto max-h-[60vh] pr-4 custom-scrollbar">
                     <div className="space-y-4">
                        <label className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest ml-1">Select Active Resume</label>
                        <div className="grid grid-cols-2 gap-3">
                           {['Sarah_Miller_Staff_Arch.pdf', 'Solutions_Architect_V3.pdf'].map(r => (
                              <div 
                                key={r} 
                                onClick={() => setSelectedResume(r)}
                                className={`p-4 rounded-[20px] border-2 cursor-pointer transition-all flex items-center gap-3 ${selectedResume === r ? 'bg-[#0078D4]/5 border-[#0078D4]' : 'bg-white border-[#EAEAEA] hover:border-[#0078D4]/20'}`}
                              >
                                 <FileText size={16} className={selectedResume === r ? 'text-[#0078D4]' : 'text-[#A19F9D]'} />
                                 <span className="text-[11px] font-bold text-[#111111] truncate">{r}</span>
                              </div>
                           ))}
                        </div>
                     </div>

                     <div className="space-y-4">
                        <label className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest ml-1">Target Internal Role</label>
                        <div className="grid grid-cols-1 gap-3">
                           {['Senior Cloud Architect', 'Platform Engineering Lead', 'Staff SRE Integration'].map(role => (
                              <div 
                                key={role} 
                                onClick={() => { setSelectedRole(role); setCustomJD(''); }}
                                className={`p-4 rounded-[20px] border-2 cursor-pointer transition-all flex items-center justify-between ${selectedRole === role && !customJD ? 'bg-[#0078D4]/5 border-[#0078D4]' : 'bg-white border-[#EAEAEA] hover:border-[#0078D4]/20'}`}
                              >
                                 <div className="flex items-center gap-3">
                                    <Briefcase size={16} className={selectedRole === role ? 'text-[#0078D4]' : 'text-[#A19F9D]'} />
                                    <span className="text-xs font-bold text-[#111111]">{role}</span>
                                 </div>
                                 <div className="bg-[#111111]/5 px-3 py-1 rounded-full text-[8px] font-bold text-[#A19F9D]">URGENT</div>
                              </div>
                           ))}
                        </div>
                        <div className="pt-2">
                           <label className="text-[9px] font-bold text-[#A19F9D] uppercase tracking-widest ml-1 mb-2 block">OR Paste Specific Job Description</label>
                           <textarea 
                             value={customJD}
                             onChange={(e) => setCustomJD(e.target.value)}
                             placeholder="Paste JD requirements here for customized AI analysis..."
                             className="w-full bg-[#F8F7F4] border border-[#EAEAEA] rounded-[24px] p-5 text-xs font-medium min-h-[120px] outline-none focus:border-[#0078D4] transition-all"
                           />
                        </div>
                     </div>

                     <div className="space-y-4">
                        <label className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest ml-1">Target Complexity Level</label>
                        <div className="flex gap-2">
                           {['Associate', 'Senior', 'Staff', 'Executive'].map(lvl => (
                              <button 
                                key={lvl}
                                onClick={() => setExperienceLevel(lvl)}
                                className={`flex-1 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest border transition-all ${experienceLevel === lvl ? 'bg-[#0078D4] text-white border-[#0078D4] shadow-lg shadow-[#0078D4]/20' : 'bg-[#F8F7F4] text-[#A19F9D] border-[#EAEAEA] hover:border-[#0078D4]/10'}`}
                              >
                                 {lvl}
                              </button>
                           ))}
                        </div>
                     </div>

                     <div className="space-y-4 pb-4">
                        <label className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest ml-1">Interview Depth</label>
                        <div className="flex flex-wrap gap-2">
                           {['Technical Depth', 'Leadership', 'System Design', 'Strategic Vision'].map(f => (
                              <button 
                                key={f}
                                onClick={() => setFocusArea(f)}
                                className={`px-5 py-2.5 rounded-full text-[9px] font-bold uppercase tracking-widest border transition-all ${focusArea === f ? 'bg-[#111111] text-white border-[#111111]' : 'bg-white text-[#A19F9D] border-[#EAEAEA]'}`}
                              >
                                 {f}
                              </button>
                           ))}
                        </div>
                     </div>
                  </div>

                  <button 
                    onClick={handleStart}
                    className="w-full mt-12 py-5 bg-[#0078D4] text-white rounded-[24px] font-bold text-sm uppercase tracking-widest hover:bg-[#005A9E] transition-all shadow-2xl shadow-[#0078D4]/20 flex items-center justify-center gap-3"
                  >
                     Launch Personalized Simulation <ArrowRight size={18} />
                  </button>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
                onClick={() => setShowSetup(true)}
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
