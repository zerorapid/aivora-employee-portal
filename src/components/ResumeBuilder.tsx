import React, { useState } from 'react';
import { 
  Sparkles, 
  Trash2, 
  CheckCircle, 
  Download,
  Save,
  Search,
  Maximize2,
  Phone,
  Mail,
  MapPin,
  Globe,
  Award,
  BookOpen,
  Briefcase,
  X,
  TrendingUp,
  Zap,
  Star,
  ShieldCheck,
  RefreshCw,
  Users,
  FileText,
  ArrowRight,
  Plus,
  RotateCcw,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ResumeBuilder() {
  const [formData] = useState({
    fullName: 'Sarah J. Miller',
    role: 'Staff Solutions Architect',
    email: 'sarah.miller@aivora.com',
    phone: '+1 (555) 987-6543',
    location: 'Seattle, WA',
    summary: 'Diligent Staff Solutions Architect with expertise in Cloud-Native Distributed Systems and high-scale Infrastructure. Demonstrated success in building resilient systems and optimizing performance. Active contributor to internal engineering councils and mentor for senior engineering talent.'
  });

  return (
    <div className="h-full flex flex-col bg-[#F8F7F4] overflow-hidden">
      {/* Page Header */}
      <div className="h-20 bg-[#F8F7F4] px-10 flex items-center justify-between shrink-0 border-b border-[#EAEAEA]">
        <div>
          <h2 className="text-3xl font-bold text-[#111111] tracking-tight mb-1">My Resume</h2>
          <p className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest">Optimizing for Internal Mobility</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-8 py-2.5 bg-white border border-[#EAEAEA] rounded-full text-[10px] font-bold uppercase tracking-widest text-[#111111] hover:bg-[#F8F7F4] transition-all">Discard</button>
          <button className="flex items-center gap-2 px-8 py-2.5 bg-[#111111] text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#0078D4] transition-all shadow-xl shadow-black/10">
            <Save size={14} /> Save Changes
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden p-6 gap-6">
        {/* Left Side: Editor (40%) */}
        <div className="w-[480px] shrink-0 overflow-y-auto no-scrollbar space-y-6">
           
           {/* Section: Personal Information */}
           <EditorCard title="Personal Information" badge="UNIVERSITY LOCKED">
              <div className="grid grid-cols-1 gap-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest ml-1">Full Name</label>
                    <input type="text" value={formData.fullName} className="w-full bg-[#F3F2F1] border-none rounded-xl px-4 py-3 text-sm font-bold text-[#111111] outline-none" disabled />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest ml-1">Office Email</label>
                    <input type="text" value={formData.email} className="w-full bg-[#F3F2F1] border-none rounded-xl px-4 py-3 text-sm font-bold text-[#111111] outline-none" disabled />
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest ml-1">Phone</label>
                       <input type="text" value={formData.phone} className="w-full bg-white border border-[#EAEAEA] rounded-xl px-4 py-3 text-sm font-bold text-[#111111] outline-none focus:ring-2 focus:ring-[#0078D4]/10 focus:border-[#0078D4] transition-all" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest ml-1">Location</label>
                       <input type="text" value={formData.location} className="w-full bg-white border border-[#EAEAEA] rounded-xl px-4 py-3 text-sm font-bold text-[#111111] outline-none focus:ring-2 focus:ring-[#0078D4]/10 focus:border-[#0078D4] transition-all" />
                    </div>
                 </div>
              </div>
           </EditorCard>

           {/* Section: Professional Summary */}
           <EditorCard title="Professional Summary" action="IMPROVE WITH AI">
              <textarea 
                value={formData.summary}
                className="w-full h-48 bg-white border border-[#EAEAEA] rounded-2xl p-6 text-sm font-medium text-[#323130] leading-relaxed outline-none focus:ring-2 focus:ring-[#0078D4]/10 focus:border-[#0078D4] resize-none transition-all"
                rows={6}
              />
              <div className="flex justify-end mt-3">
                 <span className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest">325 / 500 CHARACTERS</span>
              </div>
           </EditorCard>

           {/* Section: Technical Skills */}
           <EditorCard title="Technical Skills" icon={<Plus size={14} />}>
              <div className="space-y-6">
                 <div className="space-y-3">
                    <label className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest ml-1">Languages</label>
                    <div className="flex flex-wrap gap-2 p-4 bg-[#F8F7F4] rounded-2xl border border-[#EAEAEA]">
                       {['Go', 'Java', 'JavaScript', 'C++', 'SQL'].map(s => (
                          <span key={s} className="px-3 py-1.5 bg-white border border-[#EAEAEA] rounded-lg text-[10px] font-bold text-[#111111] shadow-sm">{s}</span>
                       ))}
                    </div>
                 </div>
                 <div className="space-y-3">
                    <label className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest ml-1">Systems</label>
                    <div className="flex flex-wrap gap-2 p-4 bg-[#F8F7F4] rounded-2xl border border-[#EAEAEA]">
                       {['Kubernetes', 'AWS', 'GCP', 'PostgreSQL', 'Redis'].map(s => (
                          <span key={s} className="px-3 py-1.5 bg-white border border-[#EAEAEA] rounded-lg text-[10px] font-bold text-[#111111] shadow-sm">{s}</span>
                       ))}
                    </div>
                 </div>
              </div>
           </EditorCard>
        </div>

        {/* Right Side: Preview (60%) */}
        <div className="flex-1 bg-white rounded-[40px] shadow-av-lg border border-[#EAEAEA] flex flex-col overflow-hidden relative">
           {/* Control Bar */}
           <div className="h-20 px-8 flex items-center justify-between border-b border-[#F8F7F4] bg-[#F8F7F4]/30 backdrop-blur-md sticky top-0 z-10">
              <div className="flex items-center gap-6">
                 <div className="relative w-12 h-12">
                    <svg className="w-full h-full -rotate-90">
                       <circle cx="24" cy="24" r="21" fill="transparent" stroke="#EAEAEA" strokeWidth="4" />
                       <circle cx="24" cy="24" r="21" fill="transparent" stroke="#0078D4" strokeWidth="4" strokeDasharray={131.8} strokeDashoffset={131.8 * (1 - 0.88)} strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                       <span className="text-[10px] font-bold text-[#111111]">88</span>
                    </div>
                 </div>
                 <div>
                    <h4 className="text-[10px] font-bold text-[#0078D4] uppercase tracking-widest mb-0.5">ATS Match Score</h4>
                    <p className="text-xs font-bold text-[#111111]">Optimized for <span className="text-[#0078D4]">Staff Engineer Roles</span></p>
                 </div>
              </div>

              <div className="flex items-center gap-4">
                 <div className="flex items-center gap-2 px-4 py-2 bg-[#F8F7F4] rounded-xl border border-[#EAEAEA]">
                    <Search size={14} className="text-[#A19F9D]" />
                    <span className="text-[10px] font-bold text-[#111111]">100% ZOOM</span>
                 </div>
                 <button className="flex items-center gap-2 px-6 py-2 bg-[#111111] text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#0078D4] transition-all shadow-lg shadow-black/10">
                    <Download size={14} /> Download PDF
                 </button>
              </div>
           </div>

           {/* Resume Document */}
           <div className="flex-1 overflow-y-auto p-12 custom-scrollbar bg-[#F1F0EC]/20">
              <div className="bg-white shadow-2xl mx-auto w-full max-w-[800px] min-h-[1050px] p-16 relative rounded-2xl border border-[#EAEAEA]">
                 <header className="mb-12 border-b-2 border-[#111111] pb-10">
                    <h1 className="text-4xl font-bold text-[#111111] tracking-tight mb-2 uppercase">{formData.fullName}</h1>
                    <p className="text-sm font-bold text-[#323130] uppercase tracking-widest mb-6">{formData.role}</p>
                    <div className="flex flex-wrap gap-5 text-[10px] font-bold text-[#605E5C] uppercase tracking-widest">
                       <span className="flex items-center gap-2 px-3 py-1 bg-[#F8F7F4] rounded-full"><Mail size={12} className="text-[#0078D4]" /> {formData.email}</span>
                       <span className="flex items-center gap-2 px-3 py-1 bg-[#F8F7F4] rounded-full"><Phone size={12} className="text-[#0078D4]" /> {formData.phone}</span>
                       <span className="flex items-center gap-2 px-3 py-1 bg-[#F8F7F4] rounded-full"><MapPin size={12} className="text-[#0078D4]" /> {formData.location}</span>
                    </div>
                 </header>

                 <section className="space-y-12">
                    <div>
                       <h4 className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.4em] mb-6 border-l-4 border-[#0078D4] pl-4">Professional Summary</h4>
                       <p className="text-sm font-medium text-[#323130] leading-relaxed opacity-90 max-w-2xl">{formData.summary}</p>
                    </div>

                    <div>
                       <h4 className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.4em] mb-6 border-l-4 border-[#0078D4] pl-4">Core Experience</h4>
                       <div className="space-y-10">
                          <div className="relative pl-6 border-l border-[#EAEAEA]">
                             <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#0078D4]" />
                             <div className="flex justify-between items-baseline mb-2">
                                <h5 className="text-base font-bold text-[#111111]">Staff Systems Architect</h5>
                                <span className="text-[10px] font-bold text-[#A19F9D] uppercase">2022 - PRESENT</span>
                             </div>
                             <p className="text-[10px] font-bold text-[#0078D4] uppercase tracking-widest mb-4">Aivora Global Ops • Seattle</p>
                             <ul className="space-y-3 text-xs font-semibold text-[#605E5C] leading-relaxed">
                                <li className="flex gap-2"><div className="w-1 h-1 rounded-full bg-[#111111] mt-1.5 shrink-0" /> Architected the low-latency core infrastructure for enterprise-scale B2B systems.</li>
                                <li className="flex gap-2"><div className="w-1 h-1 rounded-full bg-[#111111] mt-1.5 shrink-0" /> Reduced operational overhead by 40% through intelligent automation frameworks.</li>
                                <li className="flex gap-2"><div className="w-1 h-1 rounded-full bg-[#111111] mt-1.5 shrink-0" /> Headed a cross-functional organization of 45+ engineers across 3 timezones.</li>
                             </ul>
                          </div>
                       </div>
                    </div>

                    <div>
                       <h4 className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.4em] mb-6 border-l-4 border-[#0078D4] pl-4">Technical Skillset</h4>
                       <div className="grid grid-cols-2 gap-8">
                          <div>
                             <h6 className="text-[9px] font-bold text-[#A19F9D] uppercase tracking-widest mb-3">Programming & Logic</h6>
                             <div className="flex flex-wrap gap-2">
                                {['Go', 'Java', 'JavaScript', 'SQL'].map(s => (
                                   <span key={s} className="text-[10px] font-bold text-[#111111] px-2 py-0.5 bg-[#F8F7F4] rounded">{s}</span>
                                ))}
                             </div>
                          </div>
                          <div>
                             <h6 className="text-[9px] font-bold text-[#A19F9D] uppercase tracking-widest mb-3">Infrastructure & Ops</h6>
                             <div className="flex flex-wrap gap-2">
                                {['Kubernetes', 'AWS', 'Docker', 'Redis'].map(s => (
                                   <span key={s} className="text-[10px] font-bold text-[#111111] px-2 py-0.5 bg-[#F8F7F4] rounded">{s}</span>
                                ))}
                             </div>
                          </div>
                       </div>
                    </div>
                 </section>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function EditorCard({ title, badge, action, icon, children }: any) {
  return (
    <div className="bg-white rounded-[24px] border border-[#EAEAEA] shadow-sm overflow-hidden flex flex-col group hover:border-[#0078D4]/20 transition-all">
       <div className="px-6 py-4 bg-[#F8F7F4]/50 border-b border-[#F8F7F4] flex items-center justify-between">
          <h3 className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] inline-flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-[#0078D4]" /> {title}
          </h3>
          <div className="flex items-center gap-3">
            {badge && <span className="text-[8px] font-bold text-[#0078D4] bg-[#0078D4]/5 px-2.5 py-1 rounded tracking-widest">{badge}</span>}
            {action && <button className="text-[9px] font-bold text-[#0078D4] hover:underline tracking-widest flex items-center gap-1.5"><Sparkles size={10} /> {action}</button>}
            {icon && <button className="w-7 h-7 rounded-lg bg-white border border-[#EAEAEA] flex items-center justify-center text-[#A19F9D] hover:text-[#0078D4] transition-all shadow-sm">{icon}</button>}
          </div>
       </div>
       <div className="p-8">
          {children}
       </div>
    </div>
  );
}
