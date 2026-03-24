import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Clock, 
  DollarSign, 
  ChevronRight, 
  Filter,
  CheckCircle,
  Zap,
  Star,
  Building,
  ArrowUpRight,
  TrendingUp,
  LayoutGrid,
  List as ListIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MarketMatching() {
  const [filterType, setFilterType] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const jobs = [
    {
      id: 1,
      title: 'Senior Network Architect',
      company: 'Aivora Systems',
      location: 'Hybrid (Seattle)',
      type: 'FULL-TIME',
      salary: '$180K - $240K',
      match: 94,
      skills: ['SD-WAN', 'BGP', 'Project Mgmt'],
      posted: '2d ago'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Lead',
      company: 'Global Ops Div',
      location: 'Remote',
      type: 'CONTRACT',
      salary: '$95/hr - $120/hr',
      match: 88,
      skills: ['AWS', 'K8s', 'Terraform'],
      posted: '5h ago'
    },
    {
      id: 3,
      title: 'Security Operations Mgr',
      company: 'Internal Security',
      location: 'On-site (Austin)',
      type: 'FULL-TIME',
      salary: '$165K - $210K',
      match: 82,
      skills: ['SIEM', 'ISO 27001', 'Leadership'],
      posted: '1w ago'
    }
  ];

  return (
    <div className="h-full flex bg-[#F8F7F4] overflow-hidden">
      {/* Search & Filter Sidebar */}
      <aside className="w-80 border-r border-[#EAEAEA] bg-white flex flex-col shrink-0">
         <div className="p-8 border-b border-[#F8F7F4]">
            <h3 className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-[0.2em] mb-6">Refine Results</h3>
            <div className="relative group">
               <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A19F9D] group-focus-within:text-[#0078D4] transition-colors" />
               <input 
                  type="text" 
                  placeholder="Search roles or skills..." 
                  className="w-full pl-12 pr-4 py-4 bg-[#F8F7F4] border-none rounded-2xl text-sm font-bold text-[#111111] outline-none ring-2 ring-transparent focus:ring-[#0078D4]/10 transition-all placeholder:text-[#A19F9D]" 
               />
            </div>
         </div>
         
         <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">
            <section>
               <h4 className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest mb-4">Job Category</h4>
               <div className="space-y-3">
                  {['Software & Systems', 'Operations', 'Security', 'Management'].map(cat => (
                     <label key={cat} className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-5 h-5 rounded-lg border-2 border-[#EAEAEA] group-hover:border-[#0078D4]/20 flex items-center justify-center transition-all bg-white relative">
                           {cat === 'Software & Systems' && <div className="w-2.5 h-2.5 bg-[#0078D4] rounded-md" />}
                        </div>
                        <span className="text-xs font-bold text-[#605E5C] group-hover:text-[#111111]">{cat}</span>
                     </label>
                  ))}
               </div>
            </section>
            
            <section>
               <h4 className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest mb-4">Contract Type</h4>
               <div className="flex flex-wrap gap-2">
                  {['Full-time', 'Contract', 'Remote', 'Internship'].map(t => (
                     <button key={t} className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all border ${t === 'Full-time' ? 'bg-[#111111] text-white border-[#111111]' : 'bg-white text-[#A19F9D] border-[#EAEAEA] hover:border-[#111111]'}`}>
                        {t}
                     </button>
                  ))}
               </div>
            </section>

            <section className="bg-[#111111] rounded-3xl p-6 text-white text-center">
               <div className="w-12 h-12 bg-[#0078D4] rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  <Star size={20} fill="white" />
               </div>
               <h5 className="font-bold text-sm mb-2">Power Matching</h5>
               <p className="text-[10px] text-white/50 leading-relaxed font-semibold uppercase tracking-widest">Aivora Intelligence is analyzing your profile</p>
            </section>
         </div>
      </aside>

      {/* Main Jobs Feed */}
      <main className="flex-1 flex flex-col overflow-hidden">
         <div className="flex-1 overflow-y-auto p-12 custom-scrollbar">
           <header className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-2 h-2 rounded-full bg-[#0078D4]" />
                 <span className="text-[10px] font-bold text-[#0078D4] uppercase tracking-[0.4em]">Internal Opportunities</span>
              </div>
              <h2 className="text-5xl font-bold text-[#111111] tracking-tight leading-tight">Job <span className="text-[#0078D4]">Openings.</span></h2>
              <p className="text-[#605E5C] mt-4 font-medium text-lg opacity-80 max-w-2xl leading-relaxed">Discover your next career milestone within the Aivora enterprise ecosystem.</p>
           </header>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {jobs.map(job => (
                 <motion.div 
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-[32px] p-10 border border-[#EAEAEA] shadow-sm hover:shadow-av-lg hover:border-[#0078D4]/20 transition-all group flex flex-col h-full"
                 >
                    <div className="flex justify-between items-start mb-10">
                       <div className="flex gap-4">
                          <div className="w-14 h-14 bg-[#F8F7F4] rounded-2xl flex items-center justify-center group-hover:bg-[#0078D4] group-hover:text-white transition-colors duration-300">
                             <Building size={24} />
                          </div>
                          <div>
                             <h4 className="text-xl font-bold text-[#111111] tracking-tight group-hover:text-[#0078D4] transition-colors mb-2">{job.title}</h4>
                             <div className="flex items-center gap-4 text-[10px] font-bold text-[#A19F9D] uppercase tracking-widest mt-1">
                                <span className="flex items-center gap-1"><MapPin size={10} /> {job.location}</span>
                                <span className="flex items-center gap-1"><Clock size={10} /> {job.posted}</span>
                             </div>
                          </div>
                       </div>
                       <div className="flex flex-wrap gap-2 justify-end">
                          {job.skills.map(skill => (
                             <span key={skill} className="px-3 py-1 bg-[#F8F7F4] rounded-lg text-[9px] font-bold text-[#605E5C] border border-[#EAEAEA]">{skill}</span>
                          ))}
                       </div>
                    </div>

                    <div className="mt-auto">
                       <div className="flex items-center gap-2 mb-8">
                          <div className="bg-[#0078D4]/5 px-3 py-1 rounded-full flex items-center gap-2">
                             <TrendingUp size={12} className="text-[#0078D4]" />
                             <span className="text-[10px] font-bold text-[#0078D4] uppercase tracking-widest">AI Match: {job.match}%</span>
                          </div>
                          <span className="text-[10px] font-bold text-[#107C10] bg-[#107C10]/5 px-3 py-1 rounded-full uppercase tracking-widest">{job.type}</span>
                       </div>

                       <div className="flex items-center justify-between pt-8 border-t border-[#F8F7F4]">
                          <div>
                             <span className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-[0.2em] block mb-1">Expected LPA</span>
                             <h5 className="text-3xl font-bold text-[#111111] uppercase tracking-tight">{job.salary}</h5>
                          </div>
                          <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest py-4 px-8 bg-[#111111] text-white rounded-2xl hover:bg-[#0078D4] transition-all shadow-xl shadow-black/10">
                             Express Interest <ChevronRight size={14} />
                          </button>
                       </div>
                    </div>
                 </motion.div>
              ))}
           </div>
         </div>
      </main>
    </div>
  );
}
