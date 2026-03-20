
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, Zap, Target, ShieldCheck, Layers, Search, Code, TrendingUp, Presentation, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Methodology: React.FC = () => {
  const [hoveredMarket, setHoveredMarket] = useState<'TAM' | 'SAM' | 'SOM' | null>(null);

  return (
    <div className="bg-white selection:bg-vf-orange/30">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl md:text-7xl font-black text-vf-blue leading-[0.9] tracking-tighter mb-8">
                  OUR <br />
                  <span className="text-vf-orange italic">METHODOLOGY</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl font-light">
                  A structured, execution-first approach to building real startups. We eliminate guesswork and replace it with systems.
                </p>
              </motion.div>
            </div>
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative z-10"
              >
                {/* TAM/SAM/SOM Market Visualization */}
                <div className="relative h-64 flex items-center justify-center">
                  {/* TAM */}
                  <motion.div 
                    onMouseEnter={() => setHoveredMarket('TAM')}
                    onMouseLeave={() => setHoveredMarket(null)}
                    whileHover={{ scale: 1.02 }}
                    className="absolute w-64 h-64 rounded-full border border-vf-blue/20 bg-vf-blue/5 flex items-start justify-center pt-4 cursor-help transition-colors hover:bg-vf-blue/10"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest text-vf-blue/40">TAM</span>
                  </motion.div>
                  {/* SAM */}
                  <motion.div 
                    onMouseEnter={() => setHoveredMarket('SAM')}
                    onMouseLeave={() => setHoveredMarket(null)}
                    whileHover={{ scale: 1.05 }}
                    className="absolute w-44 h-44 rounded-full border border-vf-orange/30 bg-vf-orange/5 flex items-start justify-center pt-4 cursor-help transition-colors hover:bg-vf-orange/10 z-10"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest text-vf-orange/60">SAM</span>
                  </motion.div>
                  {/* SOM */}
                  <motion.div 
                    onMouseEnter={() => setHoveredMarket('SOM')}
                    onMouseLeave={() => setHoveredMarket(null)}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="absolute w-24 h-24 rounded-full bg-vf-blue shadow-lg flex items-center justify-center text-center p-2 cursor-help z-20"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest text-white leading-tight">SOM</span>
                  </motion.div>
                  
                  {/* Floating Info Overlay */}
                  <AnimatePresence>
                    {hoveredMarket && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-gray-100 shadow-xl rounded-xl p-3 z-30 min-w-[200px] text-center"
                      >
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <Info className="w-3 h-3 text-vf-orange" />
                          <span className="text-[10px] font-black text-vf-blue uppercase tracking-tighter">
                            {hoveredMarket === 'TAM' ? 'Total Addressable' : hoveredMarket === 'SAM' ? 'Serviceable Addressable' : 'Serviceable Obtainable'}
                          </span>
                        </div>
                        <p className="text-[10px] text-gray-500 leading-tight">
                          {hoveredMarket === 'TAM' && 'The entire $3T+ global startup ecosystem.'}
                          {hoveredMarket === 'SAM' && 'High-growth tech ventures in our domains.'}
                          {hoveredMarket === 'SOM' && 'The 10-12 elite startups we build annually.'}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-vf-orange/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-vf-blue/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Execution Over Ideas",
                desc: "Ideas are cheap. Execution is everything. We prioritize doing over talking.",
                icon: <Zap className="w-6 h-6" />
              },
              {
                title: "Transparency by Default",
                desc: "No hidden agendas. We operate with radical honesty in every interaction.",
                icon: <ShieldCheck className="w-6 h-6" />
              },
              {
                title: "Systems, Not Guesswork",
                desc: "We use proven frameworks to scale, not random experiments.",
                icon: <Layers className="w-6 h-6" />
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-vf-blue/5 text-vf-blue rounded-xl flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-vf-blue mb-3">{pillar.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Venture Forge Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-vf-orange mb-4">The Main Section</h2>
            <h3 className="text-4xl font-bold text-vf-blue tracking-tight">The Venture Forge Process</h3>
          </div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Selection",
                desc: "We don’t select ideas—we select builders.",
                detail: "Our selection process focuses on founder grit, technical capability, and execution speed rather than just a polished pitch deck.",
                icon: <Target className="w-8 h-8" />
              },
              {
                step: "02",
                title: "Validation",
                desc: "Market reality check. No assumptions survive.",
                detail: "We stress-test your assumptions against real market data and user feedback before a single line of production code is written.",
                icon: <Search className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Build Phase",
                desc: "MVP creation with direct mentorship.",
                detail: "Rapid prototyping and development of a Minimum Viable Product that solves a core problem for a specific user group.",
                icon: <Code className="w-8 h-8" />
              },
              {
                step: "04",
                title: "Acceleration",
                desc: "Execution speed + strategic guidance.",
                detail: "Once the MVP is validated, we shift gears to focus on user acquisition, retention, and operational efficiency.",
                icon: <Zap className="w-8 h-8" />
              },
              {
                step: "05",
                title: "Demo / Funding Prep",
                desc: "Pitch, structure, and investor readiness.",
                detail: "We prepare you for the next stage of growth, whether that's venture capital, strategic partnerships, or sustainable revenue.",
                icon: <Presentation className="w-8 h-8" />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-8 bg-gray-50/50 p-8 rounded-3xl border border-gray-100"
              >
                <div className="text-6xl font-black text-vf-blue/10 shrink-0">{item.step}</div>
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-vf-orange shrink-0">
                  {item.icon}
                </div>
                <div className="flex-grow">
                  <h4 className="text-2xl font-bold text-vf-blue mb-2">{item.title}</h4>
                  <p className="text-vf-orange font-bold text-sm mb-4 italic">{item.desc}</p>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-vf-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">What Makes Us Different</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 border border-white/10 rounded-3xl overflow-hidden">
            <div className="p-12 bg-white/5 border-b md:border-b-0 md:border-r border-white/10">
              <h4 className="text-xl font-bold mb-8 text-gray-400 uppercase tracking-widest text-center">Traditional Accelerators</h4>
              <ul className="space-y-6">
                <li className="flex items-center space-x-4 text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  <span>Charge high upfront fees</span>
                </li>
                <li className="flex items-center space-x-4 text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  <span>Theory-heavy curriculum</span>
                </li>
                <li className="flex items-center space-x-4 text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  <span>Hidden terms & complex equity</span>
                </li>
                <li className="flex items-center space-x-4 text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  <span>Generic, high-level mentorship</span>
                </li>
              </ul>
            </div>
            <div className="p-12 bg-white/10">
              <h4 className="text-xl font-bold mb-8 text-vf-orange uppercase tracking-widest text-center">Venture Forge</h4>
              <ul className="space-y-6">
                <li className="flex items-center space-x-4">
                  <CheckCircle2 className="w-5 h-5 text-vf-orange" />
                  <span className="font-bold">No-fee model</span>
                </li>
                <li className="flex items-center space-x-4">
                  <CheckCircle2 className="w-5 h-5 text-vf-orange" />
                  <span className="font-bold">Execution-first approach</span>
                </li>
                <li className="flex items-center space-x-4">
                  <CheckCircle2 className="w-5 h-5 text-vf-orange" />
                  <span className="font-bold">Radical transparency</span>
                </li>
                <li className="flex items-center space-x-4">
                  <CheckCircle2 className="w-5 h-5 text-vf-orange" />
                  <span className="font-bold">Direct operator guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity (TAM/SAM/SOM) */}
      <section className="py-24 overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-vf-orange mb-4">Market Opportunity</h2>
            <h3 className="text-3xl font-bold text-vf-blue tracking-tight">TAM / SAM / SOM Analysis</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative flex items-center justify-center py-12">
              {/* Concentric Circles Visualization */}
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                {/* TAM */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredMarket('TAM')}
                  onMouseLeave={() => setHoveredMarket(null)}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(10, 10, 10, 0.08)' }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-vf-blue/20 bg-vf-blue/5 flex flex-col items-center justify-start pt-8 cursor-help transition-colors group/tam"
                >
                  <span className="text-xs font-black text-vf-blue/40 tracking-[0.2em]">TAM</span>
                  <span className="text-sm font-bold text-vf-blue/60 mt-1">Global Startup Ecosystem</span>
                </motion.div>
                
                {/* SAM */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  onMouseEnter={() => setHoveredMarket('SAM')}
                  onMouseLeave={() => setHoveredMarket(null)}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 99, 33, 0.08)' }}
                  className="absolute inset-[15%] rounded-full border-2 border-dashed border-vf-orange/30 bg-vf-orange/5 flex flex-col items-center justify-start pt-8 cursor-help transition-colors group/sam z-10"
                >
                  <span className="text-xs font-black text-vf-orange/60 tracking-[0.2em]">SAM</span>
                  <span className="text-sm font-bold text-vf-orange/80 mt-1">High-Growth Tech</span>
                </motion.div>
                
                {/* SOM */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  onMouseEnter={() => setHoveredMarket('SOM')}
                  onMouseLeave={() => setHoveredMarket(null)}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute inset-[35%] rounded-full bg-vf-blue shadow-2xl flex flex-col items-center justify-center text-center p-4 cursor-help group/som z-20"
                >
                  <span className="text-xs font-black text-white tracking-[0.2em] mb-1">SOM</span>
                  <span className="text-xs font-bold text-blue-100 leading-tight">Venture Forge Portfolio</span>
                </motion.div>

                {/* Unified Hover Info Overlay - Always on Top */}
                <AnimatePresence>
                  {hoveredMarket && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 20 }}
                      className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none p-8"
                    >
                      <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-gray-100 text-center max-w-[280px]">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <div className={`w-2 h-2 rounded-full ${hoveredMarket === 'TAM' ? 'bg-vf-blue' : hoveredMarket === 'SAM' ? 'bg-vf-orange' : 'bg-emerald-500'}`}></div>
                          <span className={`text-[10px] font-black uppercase tracking-widest ${hoveredMarket === 'TAM' ? 'text-vf-blue' : hoveredMarket === 'SAM' ? 'text-vf-orange' : 'text-emerald-500'}`}>
                            {hoveredMarket === 'TAM' ? 'Total Addressable' : hoveredMarket === 'SAM' ? 'Serviceable Addressable' : 'Serviceable Obtainable'}
                          </span>
                        </div>
                        <p className="text-sm font-bold text-vf-blue mb-2">
                          {hoveredMarket === 'TAM' && 'Global Startup Ecosystem'}
                          {hoveredMarket === 'SAM' && 'High-Growth Tech Ventures'}
                          {hoveredMarket === 'SOM' && 'Venture Forge Portfolio'}
                        </p>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {hoveredMarket === 'TAM' && 'Every startup, founder, and innovation project globally. The $3T+ ecosystem of potential builders.'}
                          {hoveredMarket === 'SAM' && 'Venture-scale software and hardware companies in our core domains where we have deep operator expertise.'}
                          {hoveredMarket === 'SOM' && 'The specific 10-12 elite startups we build each year with 100% focus and direct operational support.'}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <div 
                  onMouseEnter={() => setHoveredMarket('TAM')}
                  onMouseLeave={() => setHoveredMarket(null)}
                  className={`flex items-start gap-4 p-4 rounded-2xl transition-all group/item cursor-pointer ${hoveredMarket === 'TAM' ? 'bg-white shadow-md' : 'hover:bg-white hover:shadow-md'}`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-1 transition-colors ${hoveredMarket === 'TAM' ? 'bg-vf-blue text-white' : 'bg-vf-blue/10 group-hover/item:bg-vf-blue group-hover/item:text-white'}`}>
                    <div className={`w-2 h-2 rounded-full transition-colors ${hoveredMarket === 'TAM' ? 'bg-white' : 'bg-vf-blue group-hover/item:bg-white'}`}></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-vf-blue">TAM (Total Addressable Market)</h4>
                    <p className="text-gray-600 text-sm">The entire global startup market, representing the total demand for innovation and new venture creation.</p>
                    <div className="mt-2 flex gap-2">
                      <span className="text-[9px] font-bold bg-gray-100 px-2 py-0.5 rounded text-gray-500 uppercase tracking-tighter">Global Scope</span>
                      <span className="text-[9px] font-bold bg-gray-100 px-2 py-0.5 rounded text-gray-500 uppercase tracking-tighter">$3T+ Value</span>
                    </div>
                  </div>
                </div>
                <div 
                  onMouseEnter={() => setHoveredMarket('SAM')}
                  onMouseLeave={() => setHoveredMarket(null)}
                  className={`flex items-start gap-4 p-4 rounded-2xl transition-all group/item cursor-pointer ${hoveredMarket === 'SAM' ? 'bg-white shadow-md' : 'hover:bg-white hover:shadow-md'}`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-1 transition-colors ${hoveredMarket === 'SAM' ? 'bg-vf-orange text-white' : 'bg-vf-orange/10 group-hover/item:bg-vf-orange group-hover/item:text-white'}`}>
                    <div className={`w-2 h-2 rounded-full transition-colors ${hoveredMarket === 'SAM' ? 'bg-white' : 'bg-vf-orange group-hover/item:bg-white'}`}></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-vf-blue">SAM (Serviceable Addressable Market)</h4>
                    <p className="text-gray-600 text-sm">The segment of high-growth technology ventures that align with our operational expertise and infrastructure.</p>
                    <div className="mt-2 flex gap-2">
                      <span className="text-[9px] font-bold bg-vf-orange/10 px-2 py-0.5 rounded text-vf-orange uppercase tracking-tighter">Tech Focused</span>
                      <span className="text-[9px] font-bold bg-vf-orange/10 px-2 py-0.5 rounded text-vf-orange uppercase tracking-tighter">Scalable Models</span>
                    </div>
                  </div>
                </div>
                <div 
                  onMouseEnter={() => setHoveredMarket('SOM')}
                  onMouseLeave={() => setHoveredMarket(null)}
                  className={`flex items-start gap-4 p-4 rounded-2xl transition-all group/item cursor-pointer ${hoveredMarket === 'SOM' ? 'bg-white shadow-md' : 'hover:bg-white hover:shadow-md'}`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-1 transition-colors ${hoveredMarket === 'SOM' ? 'bg-vf-orange' : 'bg-vf-blue group-hover/item:bg-vf-orange'}`}>
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-vf-blue">SOM (Serviceable Obtainable Market)</h4>
                    <p className="text-gray-600 text-sm">The specific portfolio of companies we actively build and scale through our execution-first methodology.</p>
                    <div className="mt-2 flex gap-2">
                      <span className="text-[9px] font-bold bg-vf-blue px-2 py-0.5 rounded text-white uppercase tracking-tighter">Execution Core</span>
                      <span className="text-[9px] font-bold bg-vf-blue px-2 py-0.5 rounded text-white uppercase tracking-tighter">Active Support</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-white rounded-2xl border border-gray-100 italic text-gray-500 text-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-vf-orange group-hover:w-full transition-all duration-500 opacity-10"></div>
                <p className="relative z-10">"We don't just look at the market; we build the systems to capture it. Our focus is on the SOM—where real execution happens."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-vf-blue mb-8 tracking-tight">
            If you’re serious about building, <br />
            not just talking—apply.
          </h2>
          <Link 
            to="/apply" 
            className="inline-flex items-center px-10 py-5 bg-vf-blue text-white font-bold rounded-sm hover:bg-slate-800 transition-all group"
          >
            Apply Now
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Methodology;
