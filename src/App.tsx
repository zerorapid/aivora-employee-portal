import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail,
  Users,
  Award,
  Sparkles,
  Search,
  LayoutDashboard,
  FileText,
  Video,
  Briefcase,
  Bell,
  Menu,
  ChevronRight,
  ChevronDown,
  LogOut,
  Settings,
  Shield,
  Clock,
  CheckCircle,
  AlertCircle,
  X,
  ArrowUpRight,
  ArrowRight,
  Star,
  Target,
  Trophy,
  Zap,
  TrendingUp,
  BarChart3,
  ShieldCheck,
  Filter,
  CreditCard,
  Lock,
  Eye,
  Settings2,
  BellRing,
  History,
  PlayCircle,
  Download,
  Terminal,
  Mic,
  Activity,
  Plus,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  Radar, 
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

import ResumeBuilder from './components/ResumeBuilder';
import MockInterview from './components/MockInterview';
import MarketMatching from './components/MarketMatching';

const resilienceData = [
  { subject: 'Technical', A: 92, fullMark: 100 },
  { subject: 'Leadership', A: 84, fullMark: 100 },
  { subject: 'Strategy', A: 78, fullMark: 100 },
  { subject: 'Adaptability', A: 95, fullMark: 100 },
  { subject: 'Impact', A: 88, fullMark: 100 },
];

const analyticStats = [
  { label: 'OVERALL SCORE', value: '84/100', trend: '+5%', icon: Award, color: 'text-[#0078D4]', bg: 'bg-[#0078D4]/5' },
  { label: 'TECHNICAL SKILLS', value: '88%', trend: '+12%', icon: Terminal, color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'COMMUNICATION', value: '76%', trend: '-2%', icon: Mic, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'CONFIDENCE', value: '92%', trend: '+8%', icon: Sparkles, color: 'text-[#0078D4]', bg: 'bg-[#0078D4]/5' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showInterviewSetupModal, setShowInterviewSetupModal] = useState(false);
  const [profileCompletion, setProfileCompletion] = useState(82);

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardView onNavigate={handleNavigate} profileCompletion={profileCompletion} />;
      case 'resume': return <ResumeBuilder />;
      case 'interview': return <MockInterview />;
      case 'analytics': return <AnalyticsView />;
      case 'settings': return <SettingsView />;
      case 'notifications': return <NotificationsView />;
      default: return <DashboardView onNavigate={handleNavigate} profileCompletion={profileCompletion} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#F8F7F4] font-sans antialiased text-[#111111] overflow-hidden">
      {/* Sidebar - High Fidelity Shell */}
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.aside 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 280, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="h-full bg-white border-r border-[#EAEAEA] flex flex-col z-50 overflow-hidden shrink-0"
          >
            <div className="p-8 flex items-center gap-4 border-b border-[#F8F7F4]">
              <div className="w-10 h-10 rounded-2xl bg-[#0078D4] flex items-center justify-center text-white shadow-lg shadow-[#0078D4]/20">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#111111] tracking-tight">AIVORA</h1>
                <p className="text-[10px] font-bold text-[#0078D4] uppercase tracking-widest mt-0.5">Transit Portal</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar py-6">
              <div className="px-6 mb-8">
                <p className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-[0.25em] mb-4">Core Actions</p>
                <nav className="space-y-1">
                  <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => handleNavigate('dashboard')} />
                  <SidebarItem icon={<FileText size={18} />} label="My Resume" active={activeTab === 'resume'} onClick={() => handleNavigate('resume')} />
                  <SidebarItem icon={<Video size={18} />} label="Practice Interviews" active={activeTab === 'interview'} onClick={() => handleNavigate('interview')} />
                  <SidebarItem icon={<BarChart3 size={18} />} label="My Analytics" active={activeTab === 'analytics'} onClick={() => handleNavigate('analytics')} />
                </nav>
              </div>

              <div className="px-6">
                <p className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-[0.25em] mb-4">Account</p>
                <nav className="space-y-1">
                  <SidebarItem icon={<Settings size={18} />} label="Control Center" active={activeTab === 'settings'} onClick={() => handleNavigate('settings')} />
                </nav>
              </div>
            </div>

            <div className="p-8 border-t border-[#F8F7F4] bg-[#F8F7F4]/30">
               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden bg-gray-200">
                     <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="User" />
                  </div>
                  <div className="flex-1 truncate">
                     <p className="text-sm font-bold text-[#111111] truncate">Sarah Miller</p>
                     <p className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-tight">Staff Architect</p>
                  </div>
                  <LogOut size={16} className="text-[#A19F9D] group-hover:text-[#D13438] transition-all" />
               </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <header className="h-20 bg-white/80 backdrop-blur-xl border-b border-[#EAEAEA] flex items-center justify-between px-10 shrink-0 sticky top-0 z-40">
          <div className="flex items-center gap-6 flex-1">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2.5 hover:bg-[#F8F7F4] rounded-xl transition-all text-[#605E5C] border border-[#EAEAEA]"
            >
              <Menu size={20} />
            </button>
            <div className="relative max-w-md w-full hidden md:block group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A19F9D] group-focus-within:text-[#0078D4] transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="Search tools, jobs, or analytics..." 
                className="w-full pl-12 pr-4 py-3 bg-[#F8F7F4] border border-[#EAEAEA] focus:border-[#0078D4] focus:bg-white focus:ring-4 focus:ring-[#0078D4]/5 rounded-2xl text-[13px] outline-none transition-all font-semibold placeholder:text-[#A19F9D]"
              />
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="relative cursor-pointer group" onClick={() => handleNavigate('notifications')}>
              <div className="p-3 hover:bg-[#F8F7F4] border border-[#EAEAEA] rounded-xl transition-all">
                <Bell className="text-[#605E5C] group-hover:text-[#111111]" size={20} />
                <span className="absolute top-2.5 right-2.5 w-4 h-4 bg-[#FF9800] text-white text-[9px] font-bold flex items-center justify-center rounded-full border-2 border-white group-hover:scale-110 transition-transform shadow-md">8</span>
              </div>
            </div>
            <div className="flex items-center gap-4 pl-8 border-l border-[#EAEAEA]">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-bold text-[#111111] tracking-tight">Active Session</div>
                <div className="text-[9px] font-bold text-[#0078D4] uppercase tracking-widest mt-0.5">READY • 82%</div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full w-full"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Modals from Audit Portal */}
      <AnimatePresence>
        {showProfileModal && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowProfileModal(false)}
              className="absolute inset-0 bg-[#111111]/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden"
            >
              <div className="p-10">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-[#0078D4]" />
                      <span className="text-[10px] font-bold text-[#0078D4] uppercase tracking-[0.3em]">Profile Booster</span>
                    </div>
                    <h2 className="text-4xl font-bold text-[#111111] tracking-tight">Complete Your Profile</h2>
                    <p className="text-[#605E5C] mt-2 font-semibold text-sm">Follow these checkpoints to maximize your role matches.</p>
                  </div>
                  <button onClick={() => setShowProfileModal(false)} className="w-12 h-12 rounded-2xl bg-[#F8F7F4] flex items-center justify-center text-[#A19F9D] hover:bg-[#EAEAEA] transition-colors"><X size={24} /></button>
                </div>
                <div className="space-y-4 mb-10 text-left">
                  {[
                    { id: 'basic', label: 'Identity Check', done: true, value: 40 },
                    { id: 'academic', label: 'Professional History', done: true, value: 42 },
                    { id: 'gate', label: 'Sync Enterprise Skills', done: false, bonus: '+10%', value: 10 },
                    { id: 'certs', label: 'Verify Credentials', done: false, bonus: '+8%', value: 8 },
                  ].map((step) => (
                    <div key={step.id} className={`p-6 rounded-[24px] border transition-all ${step.done ? 'bg-[#0078D4]/5 border-[#0078D4]/10' : 'bg-white border-[#EAEAEA] hover:border-[#0078D4]/20'}`}>
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-5">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${step.done ? 'bg-[#0078D4] text-white shadow-lg shadow-[#0078D4]/20' : 'bg-[#F8F7F4] text-[#A19F9D]'}`}>
                               {step.done ? <CheckCircle size={22} /> : <AlertCircle size={22} />}
                            </div>
                            <div>
                               <h4 className="text-base font-bold text-[#111111] tracking-tight">{step.label}</h4>
                               <p className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest mt-1">{step.done ? 'Verified' : `${step.bonus} Readiness Bonus`}</p>
                            </div>
                         </div>
                         {!step.done && <button className="av-btn av-btn-primary !py-2.5 !px-6 !text-[10px]">COMPLETE NOW</button>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SidebarItem({ icon, label, active, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={`fluent-sidebar-item ${active ? 'active text-[#111111] bg-[#F8F7F4]' : 'text-[#605E5C] hover:bg-[#F8F7F4]'}`}
    >
      <span className={active ? 'text-[#0078D4]' : 'text-inherit'}>{icon}</span>
      <span className="flex-1">{label}</span>
    </button>
  );
}

function DashboardView({ onNavigate, profileCompletion }: any) {
  return (
    <div className="h-full overflow-y-auto px-12 py-12 space-y-12 custom-scrollbar pb-32">
        <header className="flex flex-col xl:flex-row justify-between items-start gap-12">
           <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                 <div className="w-2.5 h-2.5 rounded-full bg-[#0078D4]" />
                 <span className="text-[11px] font-bold text-[#0078D4] uppercase tracking-[0.4em]">Corporate Talent Hub</span>
              </div>
              <h2 className="text-6xl font-bold text-[#111111] tracking-tight leading-[1.1]">
                Command Your <br/><span className="text-[#0078D4]">Next Chapter.</span>
              </h2>
              <p className="text-lg font-medium text-[#605E5C] leading-relaxed max-w-2xl">
                Optimize your identity for premium internal roles. Our AI suite analyzes your impact and prepares you for high-stakes simulations.
              </p>
           </div>
           
           <div className="shrink-0 relative group">
              <div className="absolute inset-0 bg-[#0078D4]/15 blur-[60px] rounded-full group-hover:bg-[#0078D4]/25 transition-all animate-pulse"></div>
              <div className="relative w-80 h-80 bg-white rounded-full shadow-av-lg border border-[#EAEAEA] flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:scale-105">
                <svg className="w-64 h-64 -rotate-90">
                  <circle cx="128" cy="128" r="110" fill="transparent" stroke="#F1F0EC" strokeWidth="16" />
                  <motion.circle 
                    cx="128" cy="128" r="110" fill="transparent" stroke="#0078D4" strokeWidth="16" strokeDasharray={691} 
                    initial={{ strokeDashoffset: 691 }}
                    animate={{ strokeDashoffset: 691 - (691 * profileCompletion) / 100 }}
                    transition={{ duration: 2, ease: "circOut" }}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-7xl font-bold text-[#111111] tracking-tight">{profileCompletion}%</span>
                  <p className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-[0.4em] mt-2">Readiness Score</p>
                </div>
              </div>
           </div>
        </header>

        <section className="bg-white rounded-[32px] p-10 shadow-sm border border-[#EAEAEA] relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#0078D4]/5 blur-[80px] pointer-events-none group-hover:bg-[#0078D4]/10 transition-all"></div>
           <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-24 h-24 rounded-[32px] bg-[#F8F7F4] shadow-xl border-4 border-white overflow-hidden shrink-0 group-hover:scale-110 transition-transform">
                 <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center md:text-left">
                 <h3 className="text-3xl font-bold text-[#111111] tracking-tight mb-2">Sarah Miller</h3>
                 <p className="text-sm font-bold text-[#0078D4] uppercase tracking-widest mb-6">Staff Solutions Architect • Cloud Infrastructure</p>
                 <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {['SYSTEM DESIGN', 'KUBERNETES', 'AI OPS', 'STRATEGIC PLANNING'].map(tag => (
                       <span key={tag} className="av-badge !bg-white">{tag}</span>
                    ))}
                 </div>
              </div>
              <div className="flex flex-wrap gap-4 pt-4 md:pt-0">
                 <button onClick={() => onNavigate('resume')} className="av-btn av-btn-primary">Optimize Profile</button>
                 <button onClick={() => onNavigate('settings')} className="av-btn av-btn-secondary !bg-white">Update Bio</button>
              </div>
           </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
           <ToolCard 
              icon={<Zap size={28} className="text-[#0078D4]" />}
              title="Career Simulation"
              desc="Experience high-fidelity role simulations tailored to your target unit requirements."
              action="Start Prep"
              onClick={() => onNavigate('interview')}
              primary
           />
           <ToolCard 
              icon={<BarChart3 size={28} className="text-[#111111]" />}
              title="Talent Analytics"
              desc="Deep dive into your performance trajectory and technical impact benchmarks."
              action="View Reports"
              onClick={() => onNavigate('analytics')}
           />
        </section>
    </div>
  );
}

function ToolCard({ icon, title, desc, action, onClick, primary = false }: any) {
  return (
    <div className="av-card group hover:scale-[1.02] active:scale-[0.98]">
       <div className="flex justify-between items-start mb-10">
          <div className="w-16 h-16 bg-[#F8F7F4] rounded-2xl flex items-center justify-center shadow-sm border border-[#EAEAEA] group-hover:bg-[#0078D4]/10 group-hover:border-[#0078D4]/20 transition-all">
             {icon}
          </div>
          <div className="p-2 border border-[#EAEAEA] rounded-xl hover:bg-[#F8F7F4] transition-all cursor-pointer">
             <ArrowUpRight size={18} className="text-[#A19F9D]" />
          </div>
       </div>
       <h4 className="text-2xl font-bold text-[#111111] tracking-tight mb-3">{title}</h4>
       <p className="text-sm font-medium text-[#605E5C] leading-relaxed mb-10">{desc}</p>
       <button 
         onClick={onClick}
         className={`w-full h-14 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-xl ${primary ? 'bg-[#0078D4] text-white hover:bg-[#005A9E] shadow-[#0078D4]/20' : 'bg-[#111111] text-white hover:bg-black shadow-black/20'}`}
       >
          {action}
       </button>
    </div>
  );
}

function AnalyticsView() {
  return (
    <div className="h-full overflow-y-auto px-12 py-12 space-y-12 custom-scrollbar pb-32 bg-[#F8F7F4]">
       <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
             <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#0078D4]" />
                <span className="text-[10px] font-bold text-[#0078D4] uppercase tracking-[0.4em]">Performance Intelligence</span>
             </div>
             <h2 className="text-5xl font-bold text-[#111111] tracking-tight leading-tight">Impact <span className="text-[#0078D4]">Analytics.</span></h2>
          </div>
          <div className="flex gap-4">
             <button className="av-btn av-btn-secondary !bg-white h-12 flex items-center gap-2">
                <Download size={16} /> Export Detailed PDF
             </button>
             <button className="av-btn av-btn-primary h-12 shadow-xl shadow-[#0078D4]/20">
                <Sparkles size={16} /> AI Optimization Plan
             </button>
          </div>
       </header>

       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {analyticStats.map((stat, i) => (
             <div key={i} className="av-card transition-all group hover:scale-[1.05]">
                <div className="flex justify-between items-start mb-8">
                   <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center text-[#111111] shadow-sm border border-[#EAEAEA] group-hover:bg-[#0078D4]/10 group-hover:border-[#0078D4]/20 transition-all`}>
                      <stat.icon size={20} className={stat.color} />
                   </div>
                   <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest border border-green-100 uppercase">{stat.trend}</div>
                </div>
                <p className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-[0.25em] mb-2">{stat.label}</p>
                <p className="text-4xl font-bold text-[#111111] tracking-tight">{stat.value}</p>
             </div>
          ))}
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-12">
          <div className="av-card p-10">
             <div className="flex justify-between items-center mb-12">
                <h3 className="text-xl font-bold text-[#111111] tracking-tight">Technical Mastery Breakdown</h3>
                <div className="flex gap-6">
                   <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0078D4]" />
                      <span className="text-[10px] font-bold text-[#111111] uppercase tracking-widest">Efficiency</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
                      <span className="text-[10px] font-bold text-[#111111] uppercase tracking-widest">Consistency</span>
                   </div>
                </div>
             </div>
             <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={[
                      { name: 'Mon', high: 82, low: 65, avg: 72 },
                      { name: 'Tue', high: 88, low: 68, avg: 78 },
                      { name: 'Wed', high: 84, low: 72, avg: 80 },
                      { name: 'Thu', high: 92, low: 78, avg: 85 },
                      { name: 'Fri', high: 95, low: 80, avg: 90 },
                   ]}>
                      <defs>
                         <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0078D4" stopOpacity={0.15}/>
                            <stop offset="95%" stopColor="#0078D4" stopOpacity={0}/>
                         </linearGradient>
                      </defs>
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#A19F9D', fontWeight: 700 }} dy={15} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#A19F9D', fontWeight: 700 }} />
                      <Tooltip contentStyle={{ borderRadius: '24px', border: '1px solid #EAEAEA', boxShadow: '0 12px 32px rgba(0,0,0,0.08)', fontFamily: 'Montserrat', fontWeight: 700, fontSize: 12 }} />
                      <Area type="monotone" dataKey="high" stroke="#0078D4" strokeWidth={5} fillOpacity={1} fill="url(#blueGradient)" />
                      <Area type="monotone" dataKey="low" stroke="#111111" strokeWidth={2} strokeDasharray="6 6" fill="transparent" />
                   </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>

          <div className="space-y-12">
             <div className="av-card !bg-[#111111] text-white border-none p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0078D4] blur-[120px] opacity-20 pointer-events-none group-hover:opacity-40 transition-all duration-700"></div>
                <div className="relative z-10 space-y-8">
                   <div className="w-16 h-16 bg-white/10 rounded-3xl backdrop-blur-md flex items-center justify-center border border-white/20 shadow-2xl group-hover:scale-110 transition-transform">
                      <Trophy size={28} className="text-[#0078D4]" />
                   </div>
                   <h4 className="text-2xl font-bold tracking-tight">Recent Achievement</h4>
                   <p className="text-sm font-medium text-white/50 leading-relaxed">"Optimized cloud scaling procedures by 42% in Q4 simulation environment."</p>
                   <button className="w-full h-14 bg-[#0078D4] text-white rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] shadow-2xl shadow-[#0078D4]/30 hover:bg-[#005A9E] transition-all">
                      Details Header
                   </button>
                </div>
             </div>

             <div className="av-card p-10">
                <h4 className="text-xl font-bold text-[#111111] tracking-tight mb-8">Skill Trajectory</h4>
                <div className="space-y-10">
                   {[
                      { name: 'System Architecture', value: 92, target: 95 },
                      { name: 'Distributed Computing', value: 84, target: 90 },
                      { name: 'Algorithm Optimization', value: 78, target: 95 },
                      { name: 'Engineering Leadership', value: 95, target: 95 },
                   ].map(skill => (
                      <div key={skill.name} className="space-y-3">
                         <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#111111]">
                            <span>{skill.name}</span>
                            <span className="text-[#0078D4]">{skill.value}%</span>
                         </div>
                         <div className="h-2 bg-[#F8F7F4] rounded-full overflow-hidden relative shadow-inner">
                            <motion.div 
                               initial={{ width: 0 }} 
                               animate={{ width: `${skill.value}%` }} 
                               transition={{ duration: 1.5, ease: "circOut" }}
                               className="absolute inset-y-0 bg-[#0078D4] rounded-full shadow-[0_0_15px_rgba(0,120,212,0.4)]" 
                            />
                            <div className="absolute inset-y-0 bg-[#111111]/10 rounded-full" style={{ width: `${skill.target}%` }} />
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>
       </div>

       <div className="av-card !p-0 overflow-hidden">
          <div className="p-10 border-b border-[#F8F7F4] flex items-center justify-between">
             <h4 className="text-2xl font-bold text-[#111111] tracking-tight">Simulation Audit Log</h4>
             <button className="p-3 hover:bg-[#F8F7F4] rounded-2xl transition-all border border-[#EAEAEA]"><Filter size={18} className="text-[#A19F9D]" /></button>
          </div>
          <div className="overflow-x-auto">
             <table className="w-full">
                <thead>
                   <tr className="bg-[#F8F7F4]/50 text-[10px] font-bold text-[#A19F9D] uppercase tracking-[0.3em]">
                      <th className="px-12 py-8 text-left">Internal Target Role</th>
                      <th className="px-12 py-8 text-left">Evaluation Unit</th>
                      <th className="px-12 py-8 text-left">Readiness</th>
                      <th className="px-12 py-8 text-right">Activity Timestamp</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-[#F8F7F4]">
                   {[
                      { role: 'Staff SRE Practice', unit: 'Cloud Reliability Hub', score: 84, date: 'Mar 12, 10:42 AM' },
                      { role: 'Architectural Benchmark', unit: 'System Design Division', score: 92, date: 'Mar 08, 04:15 PM' },
                      { role: 'Leadership Validation', unit: 'Strategy & Ops', score: 71, date: 'Feb 28, 11:30 AM' },
                      { role: 'Security Ops Audit', unit: 'Cyber Defense Center', score: 95, date: 'Feb 12, 09:12 AM' },
                   ].map((log, i) => (
                      <tr key={i} className="group hover:bg-[#0078D4]/[0.02] cursor-pointer transition-all">
                         <td className="px-12 py-10">
                            <div className="text-base font-bold text-[#111111] group-hover:text-[#0078D4] transition-colors">{log.role}</div>
                            <p className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest mt-1">SIMULATION ID: #{1024 + i}</p>
                         </td>
                         <td className="px-12 py-10">
                            <span className="text-sm font-bold text-[#605E5C] flex items-center gap-3"><Globe size={16} className="text-[#0078D4]" /> {log.unit}</span>
                         </td>
                         <td className="px-12 py-10 text-center">
                            <span className={`av-badge ${log.score > 80 ? 'bg-green-50 text-green-700 border-green-100' : 'bg-[#111111]/5 text-[#111111]'}`}>
                               {log.score}/100 READY
                            </span>
                         </td>
                         <td className="px-12 py-10 text-right text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest group-hover:text-[#111111] transition-colors">{log.date}</td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
       </div>
    </div>
  );
}

function SettingsView() {
  const [activeSubTab, setActiveSubTab] = useState('personal');
  const [toggles, setToggles] = useState({ tfa: true, ai: true, dark: false });

  const renderTabContent = () => {
    switch (activeSubTab) {
      case 'personal':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-12">
             <div className="av-card p-12 space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                   <div className="space-y-4">
                      <label className="text-[10px] font-bold text-[#605E5C] uppercase tracking-[0.3em] ml-1">Legal Full Name</label>
                      <input type="text" defaultValue="Sarah Miller" className="w-full bg-[#F8F7F4] border-none p-5 rounded-[24px] font-bold text-base outline-none focus:ring-4 focus:ring-[#0078D4]/5 transition-all shadow-sm" />
                   </div>
                   <div className="space-y-4">
                      <label className="text-[10px] font-bold text-[#605E5C] uppercase tracking-[0.3em] ml-1">Professional Title</label>
                      <input type="text" defaultValue="Staff Solutions Architect" className="w-full bg-[#F8F7F4] border-none p-5 rounded-[24px] font-bold text-base outline-none focus:ring-4 focus:ring-[#0078D4]/5 transition-all shadow-sm" />
                   </div>
                   <div className="space-y-4">
                      <label className="text-[10px] font-bold text-[#605E5C] uppercase tracking-[0.3em] ml-1">Primary Skill Set</label>
                      <input type="text" defaultValue="Cloud Infra, System Design" className="w-full bg-[#F8F7F4] border-none p-5 rounded-[24px] font-bold text-base outline-none focus:ring-4 focus:ring-[#0078D4]/5 transition-all shadow-sm" />
                   </div>
                   <div className="space-y-4">
                      <label className="text-[10px] font-bold text-[#605E5C] uppercase tracking-[0.3em] ml-1">Target Internal Unit</label>
                      <input type="text" defaultValue="Reliability Division" className="w-full bg-[#F8F7F4] border-none p-5 rounded-[24px] font-bold text-base outline-none focus:ring-4 focus:ring-[#0078D4]/5 transition-all shadow-sm" />
                   </div>
                </div>

                <div className="pt-8 border-t border-[#F8F7F4] flex justify-end gap-5">
                   <button className="av-btn av-btn-secondary h-12">Cancel Changes</button>
                   <button className="av-btn av-btn-primary h-12 shadow-lg shadow-[#0078D4]/20">Update Identity</button>
                </div>
             </div>
          </div>
        );
      case 'security':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-12">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <SecurityCard icon={<ShieldCheck size={24} />} title="Two-Factor Auth" desc="Enterprise-grade protection" active={toggles.tfa} onClick={() => setToggles({...toggles, tfa: !toggles.tfa})} />
                <SecurityCard icon={<Lock size={24} />} title="Session Recovery" desc="Multi-device log-off" action="Secure" />
             </div>
             
             <div className="av-card p-10 space-y-8">
                <h4 className="text-xl font-bold text-[#111111] tracking-tight mb-8">Login History</h4>
                {[
                   { device: 'MacBook Pro (Sonoma)', location: 'Hyderabad, IN', status: 'Active Now', time: 'IP: 192.168.1.1' },
                   { device: 'iPhone 15 Pro', location: 'Hyderabad, IN', status: '2h ago', time: 'IP: 192.168.1.42' },
                ].map((login, i) => (
                   <div key={i} className="flex items-center justify-between p-6 hover:bg-[#F8F7F4] rounded-[24px] border border-transparent hover:border-[#EAEAEA] transition-all">
                      <div className="flex items-center gap-5">
                         <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#111111] shadow-sm border border-[#EAEAEA]">
                            <Activity size={20} />
                         </div>
                         <div>
                            <p className="text-sm font-bold text-[#111111]">{login.device}</p>
                            <p className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest mt-1">{login.location} • {login.time}</p>
                         </div>
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${login.status === 'Active Now' ? 'text-[#0078D4]' : 'text-[#A19F9D]'}`}>{login.status}</span>
                   </div>
                ))}
             </div>
          </div>
        );
      case 'notifications':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-12">
             <div className="av-card p-12 space-y-8">
                <h4 className="text-xl font-bold text-[#111111] tracking-tight mb-10">Communications Center</h4>
                {[
                   { title: 'Job Match Alerts', desc: 'Real-time notifications for internal openings.' },
                   { title: 'Simulation Results', desc: 'Detailed report generation notifications.' },
                   { title: 'Corporate Updates', desc: 'General talent strategy updates from HR.' },
                   { title: 'Security Alerts', desc: 'Critical account and login information.' },
                ].map((pref, i) => (
                   <div key={i} className="flex items-center justify-between py-6 border-b border-[#F8F7F4] last:border-none group">
                      <div className="space-y-1">
                         <h5 className="font-bold text-[#111111] group-hover:text-[#0078D4] transition-colors">{pref.title}</h5>
                         <p className="text-xs font-medium text-[#605E5C]">{pref.desc}</p>
                      </div>
                      <div className="w-12 h-6 bg-[#0078D4] rounded-full p-1 cursor-pointer"><div className="w-4 h-4 bg-white rounded-full ml-auto shadow-md" /></div>
                   </div>
                ))}
             </div>
          </div>
        );
      case 'billing':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 bg-[#111111] rounded-[40px] p-12 text-white relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-80 h-80 bg-[#0078D4] blur-[120px] opacity-20 pointer-events-none group-hover:opacity-40 transition-all duration-700"></div>
             <div className="relative z-10 space-y-10">
                <div className="flex justify-between items-start">
                   <div>
                      <h3 className="text-3xl font-bold tracking-tight mb-3">Enterprise Premium</h3>
                      <p className="text-white/40 font-bold uppercase text-[10px] tracking-[0.3em]">Managed by Corporate HR Unit</p>
                   </div>
                   <div className="bg-[#0078D4] px-6 py-2 rounded-full text-[10px] font-bold tracking-widest shadow-xl shadow-[#0078D4]/30">ACTIVE PLAN</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="p-8 bg-white/5 border border-white/10 rounded-[32px] hover:bg-white/10 transition-all group/card">
                      <CreditCard className="text-[#0078D4] mb-4 group-hover/card:scale-110 transition-transform" />
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Payment Method</p>
                      <p className="text-lg font-bold tracking-tight mb-1">Visa ending in 4421</p>
                      <p className="text-[10px] font-bold text-white/30 truncate">NEXT SPOOLING: APR 12, 2026</p>
                   </div>
                   <div className="p-8 bg-white/5 border border-white/10 rounded-[32px] hover:bg-white/10 transition-all group/card">
                      <ShieldCheck className="text-[#0078D4] mb-4 group-hover/card:scale-110 transition-transform" />
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Usage Quota</p>
                      <p className="text-lg font-bold tracking-tight mb-1">Unlimited Sessions</p>
                      <p className="text-[10px] font-bold text-white/30 truncate">REMAINING THIS PERIOD: 1,482m</p>
                   </div>
                </div>

                <div className="pt-6">
                   <button className="w-full h-14 bg-white text-[#111111] rounded-2xl font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-[#0078D4] hover:text-white transition-all shadow-2xl">Download Detailed Invoices</button>
                </div>
             </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="h-full overflow-y-auto p-12 custom-scrollbar bg-[#F8F7F4]">
       <div className="max-w-6xl mx-auto space-y-12">
          <header>
             <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 bg-[#0078D4] rounded-lg shadow-lg shadow-[#0078D4]/30" />
                <span className="text-[10px] font-bold text-[#0078D4] uppercase tracking-[0.4em]">System Configuration</span>
             </div>
             <h2 className="text-6xl font-bold text-[#111111] tracking-tight leading-tight">Identity <span className="text-[#0078D4]">Controls.</span></h2>
             <p className="text-[#605E5C] mt-4 font-medium text-lg max-w-2xl leading-relaxed">Manage your professional profile, security protocols, and system preferences for the Transit optimization engine.</p>
          </header>

          <div className="flex gap-10 border-b border-[#EAEAEA] overflow-x-auto no-scrollbar pb-1">
             {['personal', 'security', 'notifications', 'billing'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveSubTab(tab)}
                  className={`pb-6 px-4 text-[11px] font-bold uppercase tracking-[0.3em] transition-all relative border-b-4 ${activeSubTab === tab ? 'text-[#0078D4] border-[#0078D4]' : 'text-[#A19F9D] border-transparent hover:text-[#111111]'}`}
                >
                   {tab}
                   {activeSubTab === tab && <motion.div layoutId="settingTab" className="absolute bottom-0 left-0 right-0 h-1 bg-[#0078D4] shadow-[0_4px_15px_rgba(0,120,212,0.6)]" />}
                </button>
             ))}
          </div>

          <div className="pt-8">
             {renderTabContent()}
          </div>
       </div>
    </div>
  );
}

function SecurityCard({ icon, title, desc, active, onClick, action }: any) {
  return (
    <div className="av-card group hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-between p-8 border hover:border-[#0078D4]/20">
       <div className="flex items-center gap-6">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border border-[#EAEAEA] ${active ? 'bg-[#0078D4] text-white' : 'bg-[#F8F7F4] text-[#A19F9D]'}`}>
             {icon}
          </div>
          <div>
             <h5 className="text-lg font-bold text-[#111111]">{title}</h5>
             <p className="text-xs font-semibold text-[#A19F9D] uppercase tracking-widest mt-1">{desc}</p>
          </div>
       </div>
       {action ? (
          <button className="av-btn av-btn-secondary !bg-[#F8F7F4] !py-2.5 !px-8">{action}</button>
       ) : (
          <div 
             onClick={onClick}
             className={`w-14 h-7 rounded-full relative p-1 cursor-pointer transition-all duration-500 ${active ? 'bg-[#0078D4]' : 'bg-[#EAEAEA]'}`}
          >
             <motion.div animate={{ x: active ? 28 : 0 }} className="w-5 h-5 bg-white rounded-full shadow-lg" />
          </div>
       )}
    </div>
  );
}

function NotificationsView() {
  const [activeFilter, setActiveFilter] = useState('all');
  const alerts = [
    { id: 1, title: "Critical Match: Senior Architect", type: "mobility", msg: "A high-tier strategic role has been posted in the Cloud Infrastructure unit that matches 98% of your profile.", time: "2m ago", priority: "HIGH" },
    { id: 2, title: "Simulation Milestone Achieved", type: "ready", msg: "Excellent performance in the System Design simulation. Your Readiness Score increased by +4% overall.", time: "1h ago", priority: "NORMAL" },
    { id: 3, title: "Corporate Talent Feed", type: "system", msg: "The internal mobility pulse has increased by 12.4% this quarter across all Engineering divisions.", time: "4h ago", priority: "LOW" },
    { id: 4, title: "Security Protocols Verified", type: "system", msg: "Successful 2FA verification from a New Device (MacBook Pro Sonoma). Access has been granted.", time: "1d ago", priority: "NORMAL" }
  ];

  return (
    <div className="h-full overflow-y-auto p-12 custom-scrollbar bg-[#F8F7F4] pb-32">
       <div className="max-w-5xl mx-auto space-y-12">
          <header className="flex justify-between items-end gap-12 flex-wrap">
             <div>
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-2 h-2 rounded-full bg-[#0078D4]" />
                   <span className="text-[10px] font-bold text-[#0078D4] uppercase tracking-[0.4em]">Intelligence Stream</span>
                </div>
                <h2 className="text-6xl font-bold text-[#111111] tracking-tight leading-tight">Active <span className="text-[#0078D4]">Alerts.</span></h2>
             </div>
             <button className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest flex items-center gap-2 hover:text-[#0078D4] transition-all"><CheckCircle size={14} /> Mark all as read</button>
          </header>

          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-2">
             {['all', 'mobility', 'simulation', 'system'].map(cat => (
                <button 
                   key={cat}
                   onClick={() => setActiveFilter(cat)}
                   className={`px-8 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest border transition-all ${activeFilter === cat ? 'bg-[#111111] text-white border-[#111111] shadow-xl shadow-black/20' : 'bg-white text-[#A19F9D] border-[#EAEAEA] hover:border-[#0078D4]/20 hover:text-[#0078D4]'}`}
                >
                   {cat}
                </button>
             ))}
          </div>

          <div className="grid grid-cols-1 gap-6">
             {alerts.filter(a => activeFilter === 'all' || a.type === activeFilter).map((alert) => (
                <motion.div 
                   key={alert.id}
                   layout
                   initial={{ opacity: 0, scale: 0.98, y: 20 }}
                   animate={{ opacity: 1, scale: 1, y: 0 }}
                   className="av-card hover:bg-white transition-all group flex items-start gap-10 border-2 border-transparent hover:border-[#0078D4]/10 p-10 relative overflow-hidden"
                >
                   <div className={`w-16 h-16 rounded-[28px] flex items-center justify-center shadow-xl shrink-0 group-hover:scale-105 transition-transform ${alert.type === 'mobility' ? 'bg-[#0078D4] text-white' : 'bg-white text-[#111111] border border-[#EAEAEA]'}`}>
                      {alert.type === 'mobility' ? <Zap size={24} fill="white" /> : <BellRing size={24} />}
                   </div>
                   <div className="flex-1 space-y-4">
                      <div className="flex justify-between items-start">
                         <div>
                            <span className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block ${alert.priority === 'HIGH' ? 'bg-[#D13438]/10 text-[#D13438]' : 'bg-[#F8F7F4] text-[#A19F9D]'}`}>{alert.priority} PRIORITY</span>
                            <h4 className="text-2xl font-bold text-[#111111] group-hover:text-[#0078D4] transition-colors tracking-tight">{alert.title}</h4>
                         </div>
                         <span className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest">{alert.time}</span>
                      </div>
                      <p className="text-base font-medium text-[#605E5C] leading-relaxed max-w-2xl">"{alert.msg}"</p>
                      <div className="flex items-center gap-6 pt-4">
                         <button className="av-btn av-btn-primary !px-8 !py-3 !text-[10px] shadow-lg shadow-[#0078D4]/20 hover:scale-105">ANALYZE CONTEXT</button>
                         <button className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest hover:text-[#D13438] transition-all">DISMISS ALERT</button>
                      </div>
                   </div>
                   {alert.priority === 'HIGH' && <div className="absolute right-0 top-0 w-2 h-full bg-[#D13438]/20" />}
                </motion.div>
             ))}
          </div>
       </div>
    </div>
  );
}
