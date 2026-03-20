
import React from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'motion/react';
import { Users, Zap, TrendingUp, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

const Accelerator: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 bg-transparent">
      <header className="py-12 md:py-16 bg-vf-blue text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-block px-3 py-1 bg-vf-orange text-white text-[10px] font-bold uppercase tracking-widest mb-4">The Flagship Program</div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Startup OS</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl font-light">The Operating System for Early-Stage Startups. We don't just advise; we are your on-demand execution team.</p>
        </div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
          <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.13 22.19L11.5 18.36L10.13 22.19L6.5 21.03L8.91 17.6L5.5 15.19L9.33 13.56L7.96 9.73L11.5 10.89L13.91 7.46L16.32 10.89L19.87 9.73L18.5 13.56L22.33 15.19L18.91 17.6L21.32 21.03L17.69 22.19L16.32 18.36L14.96 22.19H13.13M12 2L1 21H23L12 2Z" />
          </svg>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Problem Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-vf-blue mb-8">The Problem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border-l-4 border-red-500 bg-white/40 backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-2">80% of Startups Fail</h3>
              <p className="text-gray-600 text-xs">Not from bad ideas, but poor execution. Most founders get stuck in the "execution gap."</p>
            </div>
            <div className="p-6 border-l-4 border-red-500 bg-white/40 backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-2">Founders are Alone</h3>
              <p className="text-gray-600 text-xs">No affordable expert guidance when they need it most — during the first 12 months.</p>
            </div>
            <div className="p-6 border-l-4 border-red-500 bg-white/40 backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-2">The Execution Gap</h3>
              <p className="text-gray-600 text-xs">Knowing what to do vs. actually getting it done. Startup OS bridges this divide.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-vf-blue mb-6">The Solution: Startup OS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { 
                    title: "Multi-Domain Experts", 
                    desc: "Marketing, sales, tech, and ops — all in one place. We act as your fractional leadership team.", 
                    icon: <Users className="w-5 h-5" /> 
                  },
                  { 
                    title: "Execution-First", 
                    desc: "We don't just advise. We help you get it done. From setting up CRM to launching ads.", 
                    icon: <Zap className="w-5 h-5" /> 
                  },
                  { 
                    title: "Performance-Based", 
                    desc: "We only win when you win. Fully aligned incentives with zero upfront risk for founders.", 
                    icon: <TrendingUp className="w-5 h-5" /> 
                  },
                  { 
                    title: "Community Built-In", 
                    desc: "800+ founder network ready to support you. Peer-to-peer learning and network effects.", 
                    icon: <Globe className="w-5 h-5" /> 
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5, backgroundColor: "rgba(255, 133, 27, 0.02)" }}
                    className="p-6 bg-white/40 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-sm group transition-all"
                  >
                    <div className="w-10 h-10 bg-vf-orange/10 text-vf-orange rounded-xl flex items-center justify-center mb-4 group-hover:bg-vf-orange group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-vf-blue mb-2 group-hover:text-vf-orange transition-colors">{item.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-vf-blue mb-6">Program Framework</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { phase: "01", title: "Validation & User Insight", detail: "Deep dive into problem-solution fit and customer interviews." },
                  { phase: "02", title: "Execution & Product Velocity", detail: "Accelerating build cycles and measuring traction metrics." },
                  { phase: "03", title: "Unit Economics & Roadmap", detail: "Structuring the business for scalability and financial clarity." },
                  { phase: "04", title: "Fundraising & Demo Prep", detail: "Finalizing the narrative for govt grants and angel investors." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex gap-4 p-5 bg-white/40 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="text-2xl font-black text-gray-100 group-hover:text-vf-orange transition-colors leading-none shrink-0">{item.phase}</div>
                    <div>
                      <h4 className="font-bold text-vf-blue text-sm group-hover:text-vf-orange transition-colors">{item.title}</h4>
                      <p className="text-[10px] text-gray-500 mt-1 leading-relaxed">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-vf-orange text-white p-8 rounded-sm shadow-xl shadow-orange-600/20">
              <h2 className="text-xl font-bold mb-4">The Business Model</h2>
              <div className="text-3xl font-black mb-2">5-10%</div>
              <p className="text-sm opacity-90 mb-6">Performance Fee on Growth Generated</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start"><span className="mr-2">✓</span> Fully aligned incentives</li>
                <li className="flex items-start"><span className="mr-2">✓</span> Zero upfront risk</li>
                <li className="flex items-start"><span className="mr-2">✓</span> High upside potential</li>
              </ul>
            </div>

            <div className="bg-vf-blue text-white p-8 rounded-sm">
              <h2 className="text-xl font-bold mb-6">Traction to Date</h2>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-vf-orange">800+</div>
                  <div className="text-xs uppercase tracking-wider opacity-60">Founders in Community</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-vf-orange">3</div>
                  <div className="text-xs uppercase tracking-wider opacity-60">Multi-Domain Experts</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-vf-orange">5</div>
                  <div className="text-xs uppercase tracking-wider opacity-60">Proven Frameworks</div>
                </div>
              </div>
            </div>

            <Link 
              to="/apply" 
              className="block w-full text-center py-4 bg-vf-blue text-white font-bold rounded-sm hover:bg-slate-800 transition-all"
            >
              Apply for Startup OS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accelerator;
