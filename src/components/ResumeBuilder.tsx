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
  const [formData, setFormData] = useState({
    fullName: 'Sarah J. Miller',
    role: 'Staff Solutions Architect',
    email: 'sarah.miller@aivora.com',
    phone: '+1 (555) 987-6543',
    location: 'Seattle, WA',
    summary: 'Diligent Staff Solutions Architect with expertise in Cloud-Native Distributed Systems and high-scale Infrastructure. Demonstrated success in building resilient systems and optimizing performance. Active contributor to internal engineering councils and mentor for senior engineering talent.',
    skills: ['Go', 'Java', 'JavaScript', 'SQL', 'Kubernetes', 'AWS', 'Docker', 'Redis'],
    experience: [
      { role: 'Staff Systems Architect', company: 'Aivora Global Ops', location: 'Seattle', period: '2022 - PRESENT', points: ['Architected low-latency core infrastructure', 'Reduced overhead by 40%', 'Managed 45+ engineers'] }
    ],
    education: { degree: 'M.S. Computer Science', school: 'University of Washington', year: '2018' },
    projects: [
      { title: 'Aivora Core v2', tech: 'Go, Kubernetes', desc: 'Re-architected the core messaging engine for 200% throughput increase.' }
    ],
    certifications: [
      { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', date: '2023' }
    ],
    languages: ['English (Native)', 'German (Native)', 'Mandarin (B2)'],
    socials: { linkedin: 'linkedin.com/in/sarahmiller', github: 'github.com/sarahmiller-ai', portfolio: 'sarahmiller.design' }
  });

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
                        <input 
                          type="text" 
                          value={formData.phone} 
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className="w-full bg-white border border-[#EAEAEA] rounded-xl px-4 py-3 text-sm font-bold text-[#111111] outline-none focus:ring-2 focus:ring-[#0078D4]/10 focus:border-[#0078D4] transition-all" 
                        />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest ml-1">Location</label>
                       <input 
                          type="text" 
                          value={formData.location} 
                          onChange={(e) => handleChange('location', e.target.value)}
                          className="w-full bg-white border border-[#EAEAEA] rounded-xl px-4 py-3 text-sm font-bold text-[#111111] outline-none focus:ring-2 focus:ring-[#0078D4]/10 focus:border-[#0078D4] transition-all" 
                        />
                    </div>
                 </div>
              </div>
           </EditorCard>

           {/* Section: Professional Summary */}
           <EditorCard title="Professional Summary" action="IMPROVE WITH AI">
              <textarea 
                value={formData.summary}
                onChange={(e) => handleChange('summary', e.target.value)}
                className="w-full h-48 bg-white border border-[#EAEAEA] rounded-2xl p-6 text-sm font-medium text-[#323130] leading-relaxed outline-none focus:ring-2 focus:ring-[#0078D4]/10 focus:border-[#0078D4] resize-none transition-all"
                rows={6}
              />
              <div className="flex justify-end mt-3">
                 <span className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest">325 / 500 CHARACTERS</span>
              </div>
           </EditorCard>

            {/* Section: Professional Experience */}
           <EditorCard title="Work Experience" icon={<Plus size={14} />}>
              <div className="space-y-6">
                 {formData.experience.map((exp, idx) => (
                   <div key={idx} className="p-6 bg-[#F8F7F4] rounded-2xl border border-[#EAEAEA] space-y-4 relative group">
                      <button className="absolute top-4 right-4 text-[#A19F9D] hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><Trash2 size={14} /></button>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="space-y-2">
                            <label className="text-[9px] font-bold text-[#A19F9D] uppercase tracking-widest">Role</label>
                            <input 
                              value={exp.role} 
                              onChange={(e) => {
                                const newExp = [...formData.experience];
                                newExp[idx].role = e.target.value;
                                handleChange('experience', newExp);
                              }}
                              className="w-full bg-white border border-[#EAEAEA] rounded-xl px-3 py-2 text-xs font-bold outline-none focus:border-[#0078D4]" 
                            />
                         </div>
                         <div className="space-y-2">
                            <label className="text-[9px] font-bold text-[#A19F9D] uppercase tracking-widest">Company</label>
                            <input 
                              value={exp.company} 
                              onChange={(e) => {
                                const newExp = [...formData.experience];
                                newExp[idx].company = e.target.value;
                                handleChange('experience', newExp);
                              }}
                              className="w-full bg-white border border-[#EAEAEA] rounded-xl px-3 py-2 text-xs font-bold outline-none focus:border-[#0078D4]" 
                            />
                         </div>
                      </div>
                      <div className="space-y-2">
                         <label className="text-[9px] font-bold text-[#A19F9D] uppercase tracking-widest">Key Impact</label>
                         <textarea 
                           value={exp.points.join('\n')} 
                           onChange={(e) => {
                             const newExp = [...formData.experience];
                             newExp[idx].points = e.target.value.split('\n');
                             handleChange('experience', newExp);
                           }}
                           className="w-full bg-white border border-[#EAEAEA] rounded-xl px-3 py-2 text-xs font-medium min-h-[80px] outline-none focus:border-[#0078D4]" 
                         />
                      </div>
                   </div>
                 ))}
                 <button className="w-full py-4 border-2 border-dashed border-[#EAEAEA] rounded-2xl text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest hover:border-[#0078D4] hover:text-[#0078D4] transition-all flex items-center justify-center gap-2">
                    <Plus size={14} /> Add Experience Entry
                 </button>
              </div>
           </EditorCard>

           {/* Section: Education */}
           <EditorCard title="Education & Certs">
              <div className="grid grid-cols-1 gap-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest">Degree & Major</label>
                    <input 
                      type="text" 
                      value={formData.education.degree} 
                      onChange={(e) => setFormData({...formData, education: {...formData.education, degree: e.target.value}})}
                      className="w-full bg-white border border-[#EAEAEA] rounded-xl px-4 py-3 text-sm font-bold" 
                    />
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest">School</label>
                       <input 
                         type="text" 
                         value={formData.education.school} 
                         onChange={(e) => setFormData({...formData, education: {...formData.education, school: e.target.value}})}
                         className="w-full bg-white border border-[#EAEAEA] rounded-xl px-4 py-3 text-sm font-bold" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest">Year</label>
                       <input 
                         type="text" 
                         value={formData.education.year} 
                         onChange={(e) => setFormData({...formData, education: {...formData.education, year: e.target.value}})}
                         className="w-full bg-white border border-[#EAEAEA] rounded-xl px-4 py-3 text-sm font-bold" 
                       />
                    </div>
                 </div>
              </div>
           </EditorCard>

           {/* Section: Technical Skills */}
           <EditorCard title="Technical Proficiencies" icon={<Zap size={14} />}>
              <div className="flex flex-wrap gap-2">
                 {formData.skills.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-[#F8F7F4] border border-[#EAEAEA] rounded-lg group">
                       <span className="text-[10px] font-bold text-[#111111]">{s}</span>
                       <button 
                         onClick={() => handleChange('skills', formData.skills.filter((_, i) => i !== idx))}
                         className="text-[#A19F9D] hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all font-bold"
                       >
                          <X size={10} />
                       </button>
                    </div>
                 ))}
                 <div className="flex w-full mt-3 gap-2">
                    <input id="newSkill" type="text" placeholder="Add skill..." className="flex-1 bg-white border border-[#EAEAEA] rounded-xl px-4 py-2 text-xs font-bold outline-none focus:border-[#0078D4]" />
                    <button 
                      onClick={() => {
                        const input = document.getElementById('newSkill') as HTMLInputElement;
                        if (input.value) {
                           handleChange('skills', [...formData.skills, input.value]);
                           input.value = '';
                        }
                      }}
                      className="w-10 h-10 bg-[#0078D4] text-white rounded-xl flex items-center justify-center"
                    >
                       <Plus size={16} />
                    </button>
                 </div>
              </div>
           </EditorCard>

           {/* Section: Projects */}
           <EditorCard title="Strategic Projects" icon={<Plus size={14} />}>
              <div className="space-y-4">
                 {formData.projects.map((p, idx) => (
                    <div key={idx} className="p-5 bg-[#F8F7F4] rounded-2xl border border-[#EAEAEA] space-y-3 relative group">
                       <button className="absolute top-4 right-4 text-[#A19F9D] hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><X size={12} /></button>
                       <input 
                         value={p.title} 
                         onChange={(e) => {
                            const newProj = [...formData.projects];
                            newProj[idx].title = e.target.value;
                            handleChange('projects', newProj);
                         }}
                         placeholder="Project Title" 
                         className="w-full bg-white border border-[#EAEAEA] rounded-xl px-3 py-2 text-xs font-bold" 
                       />
                       <input 
                         value={p.tech} 
                         onChange={(e) => {
                            const newProj = [...formData.projects];
                            newProj[idx].tech = e.target.value;
                            handleChange('projects', newProj);
                         }}
                         placeholder="Technologies" 
                         className="w-full bg-white border border-[#EAEAEA] rounded-xl px-3 py-2 text-[10px] font-bold text-[#0078D4]" 
                       />
                       <textarea 
                         value={p.desc} 
                         onChange={(e) => {
                            const newProj = [...formData.projects];
                            newProj[idx].desc = e.target.value;
                            handleChange('projects', newProj);
                         }}
                         placeholder="Impact & Description" 
                         className="w-full bg-white border border-[#EAEAEA] rounded-xl px-3 py-2 text-[10px] font-medium min-h-[60px]" 
                       />
                    </div>
                 ))}
                 <button 
                   onClick={() => handleChange('projects', [...formData.projects, { title: '', tech: '', desc: '' }])}
                   className="w-full py-4 border-2 border-dashed border-[#EAEAEA] rounded-2xl text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest hover:border-[#0078D4] hover:text-[#0078D4] transition-all"
                 >
                    + Add Project
                 </button>
              </div>
           </EditorCard>

           {/* Section: Certifications */}
           <EditorCard title="Certifications" icon={<Award size={14} />}>
              <div className="space-y-4">
                 {formData.certifications.map((c, idx) => (
                    <div key={idx} className="p-4 bg-[#F8F7F4] rounded-xl border border-[#EAEAEA] grid grid-cols-2 gap-3 relative">
                       <input 
                         value={c.name} 
                         onChange={(e) => {
                            const newCerts = [...formData.certifications];
                            newCerts[idx].name = e.target.value;
                            handleChange('certifications', newCerts);
                         }}
                         className="col-span-2 bg-white border border-[#EAEAEA] rounded-lg px-3 py-1.5 text-xs font-bold" 
                       />
                       <input 
                         value={c.issuer} 
                         onChange={(e) => {
                            const newCerts = [...formData.certifications];
                            newCerts[idx].issuer = e.target.value;
                            handleChange('certifications', newCerts);
                         }}
                         className="bg-white border border-[#EAEAEA] rounded-lg px-3 py-1.5 text-[10px] font-bold" 
                       />
                       <input 
                         value={c.date} 
                         onChange={(e) => {
                            const newCerts = [...formData.certifications];
                            newCerts[idx].date = e.target.value;
                            handleChange('certifications', newCerts);
                         }}
                         className="bg-white border border-[#EAEAEA] rounded-lg px-3 py-1.5 text-[10px] font-bold" 
                       />
                    </div>
                 ))}
              </div>
           </EditorCard>

           {/* Section: Social & Modern Links */}
           <EditorCard title="Social Connectivity" icon={<Globe size={14} />}>
              <div className="space-y-4">
                 <div className="space-y-2">
                    <label className="text-[9px] font-bold text-[#A19F9D] uppercase tracking-widest">LinkedIn</label>
                    <input 
                      value={formData.socials.linkedin} 
                      onChange={(e) => handleChange('socials', {...formData.socials, linkedin: e.target.value})}
                      className="w-full bg-[#F3F2F1] border-none rounded-xl px-4 py-2 text-xs font-bold" 
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[9px] font-bold text-[#A19F9D] uppercase tracking-widest">GitHub</label>
                    <input 
                      value={formData.socials.github} 
                      onChange={(e) => handleChange('socials', {...formData.socials, github: e.target.value})}
                      className="w-full bg-[#F3F2F1] border-none rounded-xl px-4 py-2 text-xs font-bold" 
                    />
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
                          {formData.experience.map((exp, idx) => (
                            <div key={idx} className="relative pl-6 border-l border-[#EAEAEA]">
                               <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#0078D4]" />
                               <div className="flex justify-between items-baseline mb-2">
                                  <h5 className="text-base font-bold text-[#111111]">{exp.role}</h5>
                                  <span className="text-[10px] font-bold text-[#A19F9D] uppercase">{exp.period}</span>
                               </div>
                               <p className="text-[10px] font-bold text-[#0078D4] uppercase tracking-widest mb-4">{exp.company} • {exp.location}</p>
                               <ul className="space-y-3 text-xs font-semibold text-[#605E5C] leading-relaxed">
                                  {exp.points.map((p, i) => (
                                    <li key={i} className="flex gap-2"><div className="w-1 h-1 rounded-full bg-[#111111] mt-1.5 shrink-0" /> {p}</li>
                                  ))}
                               </ul>
                            </div>
                          ))}
                       </div>
                    </div>

                    <div>
                       <h4 className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.4em] mb-6 border-l-4 border-[#0078D4] pl-4">Education</h4>
                       <div className="relative pl-6 border-l border-[#EAEAEA]">
                          <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#0078D4]" />
                          <div className="flex justify-between items-baseline mb-2">
                             <h5 className="text-base font-bold text-[#111111]">{formData.education.degree}</h5>
                             <span className="text-[10px] font-bold text-[#A19F9D] uppercase">{formData.education.year}</span>
                          </div>
                          <p className="text-[10px] font-bold text-[#605E5C] uppercase tracking-widest">{formData.education.school}</p>
                       </div>
                    </div>

                    <div>
                       <h4 className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.4em] mb-6 border-l-4 border-[#0078D4] pl-4">Strategic Projects</h4>
                       <div className="space-y-8">
                          {formData.projects.map((p, idx) => (
                             <div key={idx}>
                                <div className="flex justify-between items-baseline mb-2">
                                   <h5 className="text-sm font-bold text-[#111111]">{p.title}</h5>
                                   <span className="text-[9px] font-bold text-[#0078D4] uppercase">{p.tech}</span>
                                </div>
                                <p className="text-[11px] font-medium text-[#605E5C] leading-relaxed italic">{p.desc}</p>
                             </div>
                          ))}
                       </div>
                    </div>

                    <div className="grid grid-cols-2 gap-10">
                       <div>
                          <h4 className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.4em] mb-6 border-l-4 border-[#0078D4] pl-4">Certifications</h4>
                          <div className="space-y-4">
                             {formData.certifications.map((c, idx) => (
                                <div key={idx}>
                                   <p className="text-[11px] font-bold text-[#111111] mb-0.5">{c.name}</p>
                                   <p className="text-[9px] font-bold text-[#A19F9D] uppercase">{c.issuer} • {c.date}</p>
                                </div>
                             ))}
                          </div>
                       </div>
                       <div>
                          <h4 className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.4em] mb-6 border-l-4 border-[#0078D4] pl-4">Languages</h4>
                          <div className="flex flex-wrap gap-2">
                             {formData.languages.map(l => (
                                <span key={l} className="text-[10px] font-bold text-[#111111] px-2 py-1 bg-[#F8F7F4] rounded">{l}</span>
                             ))}
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
