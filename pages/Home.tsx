
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Zap, 
  Target, 
  Globe, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  ShieldCheck,
  Rocket
} from 'lucide-react';

const Home: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = React.useState<number | null>(null);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-6 pb-12 lg:pt-10 lg:pb-24 bg-transparent overflow-hidden min-h-[70vh] flex items-center">
        {/* Advanced Hero Illustration / Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-[40%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] z-0"
          >
            <svg 
              viewBox="0 0 1000 1000" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-full h-full opacity-15"
              role="img"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#001F3F', stopOpacity: 0.2 }} />
                  <stop offset="100%" style={{ stopColor: '#FF851B', stopOpacity: 0.1 }} />
                </linearGradient>
              </defs>
              <circle cx="500" cy="500" r="400" fill="none" stroke="url(#grad1)" strokeWidth="0.5" />
              <circle cx="500" cy="500" r="300" fill="none" stroke="url(#grad1)" strokeWidth="0.5" strokeDasharray="10 10" />
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="140" fontWeight="900" fill="url(#grad1)" className="select-none pointer-events-none opacity-20">GENERATION</text>
            </svg>
          </motion.div>
          
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-vf-blue/5 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-vf-orange/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-vf-blue tracking-tighter leading-tight mb-8">
              Forging the Next <br className="hidden md:block" /> <span className="text-vf-orange">Generation</span>
            </h1>
            
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-10">
              Venture Forge is a founder-first ecosystem helping early-stage startups through <strong>Startup OS</strong> — the operating system for execution-driven growth.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                to="/apply" 
                aria-label="Apply to the Venture Forge accelerator as a founder"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center bg-vf-blue text-white px-8 py-4 text-lg font-black rounded-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                <span className="relative z-10 flex items-center">
                  Apply as a Founder <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-vf-blue via-slate-800 to-vf-blue bg-[length:200%_100%] animate-shimmer group-hover:opacity-100 transition-opacity"></div>
              </Link>
              
              <Link 
                to="/partners" 
                aria-label="Partner with Venture Forge"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center border-2 border-vf-blue text-vf-blue px-8 py-4 text-lg font-black rounded-sm overflow-hidden transition-all hover:scale-105 active:scale-95 hover:text-white"
              >
                <span className="relative z-10">Partner with Us</span>
                <div className="absolute inset-0 bg-vf-blue -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Redesigned What We Do */}
      <section className="py-16 bg-white/40 backdrop-blur-sm border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-black text-vf-blue tracking-tighter leading-none">
                We build founders, <br />
                <span className="text-vf-orange">not pitch decks.</span>
              </h2>
              <div className="h-1.5 w-16 bg-vf-blue"></div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-gray-500 font-light leading-relaxed lg:hidden">
                We help early-stage founders validate ideas, execute fast, and access the right funding.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 border-y border-gray-100">
            {[
              { 
                title: "First-time Founders", 
                desc: "Dedicated support for navigating the ecosystem.",
                icon: <Users className="w-5 h-5" />
              },
              { 
                title: "Early Ideas & MVPs", 
                desc: "Bridging the gap from concept to product.",
                icon: <Zap className="w-5 h-5" />
              },
              { 
                title: "Global Access", 
                desc: "Capital for talent, regardless of location.",
                icon: <Globe className="w-5 h-5" />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 lg:p-12 group hover:bg-gray-50/80 transition-all duration-500 cursor-default"
              >
                <div className="flex items-center space-x-3 mb-4 text-gray-400 group-hover:text-vf-orange transition-colors duration-300">
                  {item.icon}
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Focus {i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-vf-blue mb-3 group-hover:text-vf-orange transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm group-hover:text-gray-600 transition-colors duration-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.5em]">No agents • No shortcuts • Only execution</p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section className="py-16 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-vf-blue mb-12 text-center"
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-gray-100 z-0"></div>
            
            {[
              { 
                num: "01", 
                title: "Apply", 
                desc: "Founders apply directly to Venture Forge. No consultants. No intermediaries.",
                sub: null
              },
              { 
                num: "02", 
                title: "StartupOS", 
                desc: "Selected startups enter StartupOS — our execution-driven system.",
                sub: "You work with a structured board across tech, finance, and growth to identify problems, build solutions, and move fast."
              },
              { 
                num: "03", 
                title: "Execute & Grow", 
                desc: "We focus on real outcomes — product, users, and revenue.",
                sub: "Whether you launch, fix, or scale, progress is measurable. Funding may follow — but execution comes first."
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center relative z-10"
              >
                <div className="w-20 h-20 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group hover:border-vf-orange transition-colors duration-500">
                  <span className="text-3xl font-black text-vf-orange transition-colors duration-500">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold text-vf-blue mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-3 px-4 text-sm">{step.desc}</p>
                {step.sub && (
                  <p className="text-xs text-gray-400 leading-relaxed italic px-6">{step.sub}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Startups Under Us */}
      <section className="py-16 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-vf-blue tracking-tight mb-3">
                Startups Under Us
              </h2>
              <p className="text-gray-500 max-w-xl text-sm">
                A selection of startups currently executing within the Startup OS ecosystem. We focus on measurable progress over hype.
              </p>
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/apply" className="inline-flex items-center px-5 py-2.5 bg-vf-blue text-white text-xs font-bold rounded-sm hover:bg-slate-800 transition-all group">
                Join the Next Cohort <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                name: "Startup Slot 01", 
                sector: "Sector Placeholder", 
                progress: "0%", 
                desc: "Upcoming startup currently in the selection process for the Startup OS cohort.", 
                milestone: "Selection in progress",
                status: "Pending"
              },
              { 
                name: "Startup Slot 02", 
                sector: "Sector Placeholder", 
                progress: "0%", 
                desc: "Upcoming startup currently in the selection process for the Startup OS cohort.", 
                milestone: "Selection in progress",
                status: "Pending"
              },
              { 
                name: "Startup Slot 03", 
                sector: "Sector Placeholder", 
                progress: "0%", 
                desc: "Upcoming startup currently in the selection process for the Startup OS cohort.", 
                milestone: "Selection in progress",
                status: "Pending"
              }
            ].map((startup, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white border border-dashed border-gray-200 p-8 hover:border-vf-orange hover:shadow-2xl transition-all duration-500 shadow-sm opacity-60 hover:opacity-100 overflow-hidden rounded-xl"
              >
                {/* Interactive background element */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-vf-orange/5 rounded-full group-hover:scale-[4] group-hover:bg-vf-orange/10 transition-all duration-1000 ease-out"></div>
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="px-3 py-1.5 bg-gray-100 text-gray-400 text-[10px] font-black uppercase tracking-widest rounded-full group-hover:bg-vf-orange group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
                    {startup.sector}
                  </div>
                  <div className="flex items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-vf-blue transition-colors">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-2 group-hover:bg-vf-orange group-hover:animate-ping"></div>
                    {startup.status}
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-gray-300 mb-3 group-hover:text-vf-blue transition-all duration-300 relative z-10 group-hover:tracking-tight">{startup.name}</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed h-12 overflow-hidden italic group-hover:text-gray-600 transition-colors relative z-10">{startup.desc}</p>
                
                <div className="pt-6 border-t border-gray-100 relative z-10 text-center">
                  <span className="text-[10px] font-black text-gray-200 uppercase tracking-widest block group-hover:text-vf-blue transition-colors mb-2">Available Slot</span>
                  <p className="text-xs font-bold text-gray-300 group-hover:text-gray-600 transition-colors">Join the next cohort to fill this space.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: What Makes Us Different - Interactive Squares */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-vf-blue mb-3 tracking-tight">What Makes Us Different</h2>
            <p className="text-gray-500 text-sm max-w-xl">We've eliminated the fluff to focus on what actually builds companies.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { 
                title: "Founder-First", 
                desc: "We work directly with founders—no intermediaries, no layers. You get direct access to decision-makers.", 
                icon: <Users className="w-5 h-5" />,
                tag: "Direct Access"
              },
              { 
                title: "Outcome-Aligned", 
                desc: "We don’t operate on fixed advisory fees. Our incentives are strictly tied to your growth and execution.", 
                icon: <TrendingUp className="w-5 h-5" />,
                tag: "Performance"
              },
              { 
                title: "Merit-Based", 
                desc: "We choose startups based on clarity, execution ability, and seriousness—not connections or pedigree.", 
                icon: <Target className="w-5 h-5" />,
                tag: "Fairness"
              },
              { 
                title: "Execution Over Talk", 
                desc: "Weekly progress matters more than presentations. We focus on building, fixing, and moving forward.", 
                icon: <Zap className="w-5 h-5" />,
                tag: "Speed"
              },
              { 
                title: "Board System", 
                desc: "Work with a coordinated board across tech, finance, and growth—focused on solving real problems.", 
                icon: <ShieldCheck className="w-5 h-5" />,
                tag: "Structured"
              },
              { 
                title: "Clean Environment", 
                desc: "No political interference, no bureaucratic delays. Just pure execution and growth focus.", 
                icon: <Rocket className="w-5 h-5" />,
                tag: "Integrity"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                onMouseEnter={() => setHoveredFeature(i)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="group relative bg-white p-8 rounded-3xl border border-gray-200 hover:border-vf-orange/60 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                  <div className="w-24 h-24 bg-vf-orange rounded-full -mr-12 -mt-12"></div>
                </div>
                
                <motion.div 
                  animate={hoveredFeature === i ? { scale: 1.15, rotate: 10 } : { scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className={`flex-shrink-0 mb-6 p-3 rounded-xl shadow-sm transition-all duration-300 w-fit relative z-10 ${
                    hoveredFeature === i ? 'bg-vf-blue text-white shadow-vf-blue/20' : 'bg-white text-vf-blue'
                  }`}
                >
                  {item.icon}
                </motion.div>
                
                <div className="mb-4">
                  <span className="text-[9px] font-black text-vf-orange uppercase tracking-[0.2em] mb-1 block">{item.tag}</span>
                  <h3 className="text-xl font-bold text-vf-blue group-hover:text-vf-orange transition-colors">{item.title}</h3>
                </div>
                
                <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-600 transition-colors">{item.desc}</p>
                
                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center text-[9px] font-black text-gray-300 uppercase tracking-widest group-hover:text-vf-blue transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: What We Don’t Do */}
      <section className="py-16 bg-transparent relative overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-3 py-1 bg-red-50 text-red-600 font-bold text-[9px] uppercase tracking-[0.2em] rounded-full mb-6 border border-red-100">
              <ShieldCheck className="w-3 h-3 mr-1.5" /> Commitment to Integrity
            </div>
            <h2 className="text-3xl font-bold text-vf-blue mb-6">What We Don’t Do</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">To stay focused on real outcomes, Venture Forge does <strong>not</strong>:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
              {[
                "Guarantee funding or promise unrealistic results",
                "Charge for advice without being involved in execution",
                "Sell pitch decks, templates, or surface-level services",
                "Act as brokers, middlemen, or commission-based agents",
                "Work with founders who are not ready to execute"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-800 p-4 bg-white border border-gray-100 rounded-sm shadow-sm"
                >
                  <XCircle className="text-red-500 w-4 h-4 flex-shrink-0" />
                  <span className="text-xs font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-6 bg-white border border-gray-100 shadow-lg rounded-sm"
            >
              <p className="text-gray-500 font-medium mb-1 text-sm">We don’t operate on empty deliverables.</p>
              <p className="text-vf-blue font-black text-xl uppercase tracking-tight">We work on outcomes—and we grow when you grow.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* New Section: Institutional Partners */}
      <section className="py-16 bg-white/40 backdrop-blur-sm border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-vf-blue mb-4">Institutional Partners</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              We are currently inviting institutional partners to collaborate on building a high-signal startup ecosystem.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            {[
              "Partner Placeholder 01",
              "Partner Placeholder 02",
              "Partner Placeholder 03",
              "Partner Placeholder 04",
              "Partner Placeholder 05",
              "Partner Placeholder 06",
              "Partner Placeholder 07",
              "Partner Placeholder 08"
            ].map((partner, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 bg-white border border-dashed border-gray-200 rounded-sm flex items-center justify-center h-24 shadow-sm opacity-50"
              >
                <span className="text-[9px] font-black text-gray-300 tracking-widest uppercase text-center leading-tight">{partner}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12">
            <Link to="/partners" className="group inline-flex items-center text-vf-blue font-bold text-base">
              <span className="border-b-2 border-vf-orange pb-1 group-hover:text-vf-orange transition-colors">Inquire for Partnership</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform text-vf-orange" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-vf-blue relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-white blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-vf-orange blur-[120px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-vf-orange rounded-full mb-8 shadow-2xl shadow-orange-500/50">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to build something real?</h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Whether you’re a founder, investor, or institutional partner — Venture Forge is building a clean, execution-driven startup pipeline for the next generation of Indian founders.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/apply" 
                className="bg-vf-orange text-white px-10 py-4 text-lg font-bold rounded-sm hover:bg-orange-600 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-orange-500/20"
              >
                Apply as a Founder
              </Link>
              <Link 
                to="/partners" 
                className="bg-white text-vf-blue px-10 py-4 text-lg font-bold rounded-sm hover:bg-gray-100 transition-all hover:scale-105 active:scale-95"
              >
                Partner with Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
