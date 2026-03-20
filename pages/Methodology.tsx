
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, Zap, Target, ShieldCheck, Layers, Search, Code, TrendingUp, Presentation, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Methodology: React.FC = () => {
  const [hoveredMarket, setHoveredMarket] = useState<'TAM' | 'SAM' | 'SOM' | null>(null);

  return (
    <div className="bg-white selection:bg-vf-orange/30">
      {/* Hero Section */}
      <section className="relative pt-6 pb-12 md:pt-8 md:pb-16 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-black text-vf-blue leading-[0.9] tracking-tighter mb-8">
              OUR <br />
              <span className="text-vf-orange italic">METHODOLOGY</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              A structured, execution-first approach to building real startups. We eliminate guesswork and replace it with systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-vf-orange mb-4">Our Values</h2>
            <h3 className="text-3xl font-bold text-vf-blue tracking-tight">Core Philosophy</h3>
          </div>
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-vf-orange mb-4">The Main Section</h2>
            <h3 className="text-3xl font-bold text-vf-blue tracking-tight">The Venture Forge Process</h3>
          </div>

          <div className="relative space-y-12">
            {/* Timeline Connector Line */}
            <div className="absolute left-[88px] top-6 bottom-6 w-0.5 bg-gray-100 hidden lg:block"></div>

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
                whileHover={{ y: -5, borderColor: 'rgba(255, 99, 33, 0.3)', scale: 1.01 }}
                className="relative flex flex-col md:flex-row items-center gap-8 bg-gray-50/50 p-8 rounded-3xl border border-gray-100 transition-all duration-300 z-10 hover:bg-white hover:shadow-xl group"
              >
                <div className="text-7xl font-black text-vf-blue/20 shrink-0 select-none group-hover:text-vf-blue/30 transition-colors">{item.step}</div>
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1, transition: { duration: 0.5 } }}
                  className="w-20 h-20 bg-vf-orange/5 rounded-3xl shadow-sm flex items-center justify-center text-vf-orange shrink-0 border border-vf-orange/10 mb-4 md:mb-0"
                >
                  {/* Icon size increased */}
                  {React.cloneElement(item.icon as React.ReactElement, { className: 'w-10 h-10' })}
                </motion.div>
                <div className="flex-grow text-center md:text-left">
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
      <section className="py-16 bg-vf-blue text-white">
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
      <section className="py-16 overflow-hidden bg-gray-50">
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
                  animate={{ 
                    scale: hoveredMarket === 'TAM' ? 1.05 : 1,
                    backgroundColor: hoveredMarket === 'TAM' ? 'rgba(10, 10, 10, 0.08)' : 'rgba(10, 10, 10, 0.05)',
                    borderColor: hoveredMarket === 'TAM' ? 'rgba(10, 10, 10, 0.3)' : 'rgba(10, 10, 10, 0.1)'
                  }}
                  className="absolute inset-0 rounded-full border-2 border-dashed flex flex-col items-center justify-start pt-8 cursor-help transition-colors group/tam"
                >
                  <span className={`text-xs font-black tracking-[0.2em] transition-colors ${hoveredMarket === 'TAM' ? 'text-vf-blue' : 'text-vf-blue/40'}`}>TAM</span>
                  <span className={`text-sm font-bold mt-1 transition-colors ${hoveredMarket === 'TAM' ? 'text-vf-blue' : 'text-vf-blue/60'}`}>Global Startup Ecosystem</span>
                </motion.div>
                
                {/* SAM */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  onMouseEnter={() => setHoveredMarket('SAM')}
                  onMouseLeave={() => setHoveredMarket(null)}
                  animate={{ 
                    scale: hoveredMarket === 'SAM' ? 1.08 : 1,
                    backgroundColor: hoveredMarket === 'SAM' ? 'rgba(255, 99, 33, 0.12)' : 'rgba(255, 99, 33, 0.05)',
                    borderColor: hoveredMarket === 'SAM' ? 'rgba(255, 99, 33, 0.5)' : 'rgba(255, 99, 33, 0.2)'
                  }}
                  className="absolute inset-[15%] rounded-full border-2 border-dashed flex flex-col items-center justify-start pt-8 cursor-help transition-colors group/sam z-10"
                >
                  <span className={`text-xs font-black tracking-[0.2em] transition-colors ${hoveredMarket === 'SAM' ? 'text-vf-orange' : 'text-vf-orange/60'}`}>SAM</span>
                  <span className={`text-sm font-bold mt-1 transition-colors ${hoveredMarket === 'SAM' ? 'text-vf-orange' : 'text-vf-orange/80'}`}>High-Growth Tech</span>
                </motion.div>
                
                {/* SOM */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  onMouseEnter={() => setHoveredMarket('SOM')}
                  onMouseLeave={() => setHoveredMarket(null)}
                  animate={{ 
                    scale: hoveredMarket === 'SOM' ? 1.15 : 1,
                    rotate: hoveredMarket === 'SOM' ? 5 : 0,
                    backgroundColor: hoveredMarket === 'SOM' ? '#0f172a' : '#0a0a0a'
                  }}
                  className="absolute inset-[35%] rounded-full shadow-2xl flex flex-col items-center justify-center text-center p-4 cursor-help group/som z-20"
                >
                  <span className="text-xs font-black text-white tracking-[0.2em] mb-1">SOM</span>
                  <span className="text-xs font-bold text-blue-100 leading-tight">Venture Forge Portfolio</span>
                </motion.div>

                {/* Dynamic Precision Proximity Captions - Desktop */}
                <div className={`absolute lg:w-80 left-1/2 -translate-x-1/2 -bottom-32 w-full max-w-[320px] h-32 flex items-center justify-center pointer-events-none z-50 transition-all duration-500 ease-out ${
                  hoveredMarket === 'TAM' ? 'lg:top-[0%] lg:left-[101%]' : 
                  hoveredMarket === 'SAM' ? 'lg:top-[15%] lg:left-[86%]' : 
                  hoveredMarket === 'SOM' ? 'lg:top-[35%] lg:left-[66%]' : 
                  'lg:top-[50%] lg:left-[101%]'
                }`}
                  style={{ 
                    transform: hoveredMarket ? 'none' : 'translateY(20px)'
                  }}
                >
                  <AnimatePresence mode="wait">
                    {hoveredMarket && (
                      <motion.div 
                        key={hoveredMarket}
                        initial={{ opacity: 0, x: 10, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 10, scale: 0.95 }}
                        className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 text-left w-full relative"
                      >
                        {/* Pointing Shape/Notch */}
                        <div className="hidden lg:block absolute top-1/2 -left-2.5 -translate-y-1/2 w-5 h-5 bg-white rotate-45 border-l border-b border-gray-100/50 z-0"></div>
                        
                        <div className="flex items-center gap-2 mb-3 relative z-10">
                          <div className={`w-2.5 h-2.5 rounded-full ${hoveredMarket === 'TAM' ? 'bg-vf-blue' : hoveredMarket === 'SAM' ? 'bg-vf-orange' : 'bg-vf-blue'}`}></div>
                          <span className={`text-[11px] font-black uppercase tracking-widest ${hoveredMarket === 'TAM' ? 'text-vf-blue' : hoveredMarket === 'SAM' ? 'text-vf-orange' : 'text-vf-blue'}`}>
                            {hoveredMarket === 'TAM' ? 'Total Addressable' : hoveredMarket === 'SAM' ? 'Serviceable Addressable' : 'Serviceable Obtainable'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium relative z-10">
                          {hoveredMarket === 'TAM' && 'Every startup, founder, and innovation project globally. The $3T+ ecosystem of potential builders.'}
                          {hoveredMarket === 'SAM' && 'Venture-scale software and hardware companies in our core domains where we have deep operator expertise.'}
                          {hoveredMarket === 'SOM' && 'The specific 10-12 elite startups we build each year with 100% focus and direct operational support.'}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <div 
                  onMouseEnter={() => setHoveredMarket('TAM')}
                  onMouseLeave={() => setHoveredMarket(null)}
                  className={`flex items-start gap-4 p-4 rounded-2xl transition-all group/item cursor-pointer ${hoveredMarket === 'TAM' ? 'bg-white shadow-md' : 'hover:bg-white hover:shadow-md'}`}
                >
                  <motion.div 
                    animate={hoveredMarket === 'TAM' ? { scale: [1, 1.1, 1], transition: { repeat: Infinity, duration: 2 } } : { scale: 1 }}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-1 transition-colors ${hoveredMarket === 'TAM' ? 'bg-vf-blue text-white' : 'bg-vf-blue/10 group-hover/item:bg-vf-blue group-hover/item:text-white'}`}
                  >
                    <div className={`w-2 h-2 rounded-full transition-colors ${hoveredMarket === 'TAM' ? 'bg-white' : 'bg-vf-blue group-hover/item:bg-white'}`}></div>
                  </motion.div>
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
                  <motion.div 
                    animate={hoveredMarket === 'SAM' ? { scale: [1, 1.1, 1], transition: { repeat: Infinity, duration: 2 } } : { scale: 1 }}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-1 transition-colors ${hoveredMarket === 'SAM' ? 'bg-vf-orange text-white' : 'bg-vf-orange/10 group-hover/item:bg-vf-orange group-hover/item:text-white'}`}
                  >
                    <div className={`w-2 h-2 rounded-full transition-colors ${hoveredMarket === 'SAM' ? 'bg-white' : 'bg-vf-orange group-hover/item:bg-white'}`}></div>
                  </motion.div>
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
                  <motion.div 
                    animate={hoveredMarket === 'SOM' ? { scale: [1, 1.1, 1], transition: { repeat: Infinity, duration: 2 } } : { scale: 1 }}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-1 transition-colors ${hoveredMarket === 'SOM' ? 'bg-vf-orange' : 'bg-vf-blue group-hover/item:bg-vf-orange'}`}
                  >
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </motion.div>
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
      <section className="py-16 border-t border-gray-100">
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
