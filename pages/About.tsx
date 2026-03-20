import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, Zap, Hammer, Users, Rocket, ArrowRight, CheckCircle2, Globe, Cpu, BarChart3, Layers } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000 bg-transparent selection:bg-vf-orange/30">
      {/* Hero Section - Explicit Left Alignment */}
      <section className="relative pt-6 pb-12 md:pt-8 md:pb-16 flex items-center overflow-hidden border-b border-gray-100 bg-transparent">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] rounded-full bg-vf-blue/5 blur-[100px]"></div>
          <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] rounded-full bg-vf-orange/5 blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-blue-50 text-vf-blue text-[9px] font-bold uppercase tracking-wider mb-4 border border-blue-100">
              <Zap className="w-2.5 h-2.5 fill-current" />
              <span>The Execution Engine</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-vf-blue leading-[0.9] tracking-tighter mb-8">
              THE ARCHITECTURE OF <br />
              <span className="text-vf-orange italic">EXECUTION</span>
            </h1>
            <div className="h-1.5 w-20 bg-vf-blue mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl font-light">
              Venture Forge is a high-velocity startup execution system. We eliminate the gap between vision and reality through aggressive, data-driven building.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/methodology" className="px-8 py-4 bg-vf-blue text-white text-xs font-black uppercase tracking-widest rounded-sm hover:bg-slate-800 transition-all shadow-lg text-center">
                Our Methodology
              </Link>
              <Link to="/team" className="px-8 py-4 border-2 border-vf-blue text-vf-blue text-xs font-black uppercase tracking-widest rounded-sm hover:bg-vf-blue hover:text-white transition-all text-center">
                The Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy - Streamlined Bento Grid */}
      <section className="py-12 md:py-16 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-vf-orange mb-2">Our DNA</h2>
            <p className="text-2xl md:text-3xl font-bold text-vf-blue tracking-tight">
              A system built for <span className="italic text-gray-400">builders</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            {/* Who We Are */}
            <div className="md:col-span-8 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 bg-blue-50 text-vf-blue rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-5 h-5" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-vf-blue mb-3 tracking-tight">The Builders Behind the Forge</h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  We are a collective of battle-tested operators, engineers, and growth specialists. We don't sit in boardrooms giving advice; we sit in the trenches writing code, designing products, and scaling operations.
                </p>
              </div>
              <Link to="/team" className="mt-6 pt-6 border-t border-gray-50 flex items-center text-vf-blue font-bold text-[10px] uppercase tracking-widest cursor-pointer group-hover:text-vf-orange transition-colors">
                <span>Meet the Operators</span>
                <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Why We Exist */}
            <div className="md:col-span-4 bg-vf-blue p-6 md:p-8 rounded-2xl shadow-lg text-white relative overflow-hidden">
              <div className="w-10 h-10 bg-white/10 text-vf-orange rounded-lg flex items-center justify-center mb-6">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold mb-3 tracking-tight">The Mission</h2>
              <p className="text-blue-100 text-sm leading-relaxed">
                Ideas are cheap. Execution is the only currency that matters. We exist to bridge the gap between "what if" and "what is."
              </p>
            </div>

            {/* The Problem */}
            <div className="md:col-span-4 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-orange-50 text-vf-orange rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-vf-blue mb-3 tracking-tight">The Friction</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Startups die in the "theory loop." Endless meetings, over-planning, and zero momentum. We are the antidote to startup inertia.
              </p>
            </div>

            {/* Our Approach */}
            <div className="md:col-span-8 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-blue-50 text-vf-blue rounded-lg flex items-center justify-center mb-6">
                <Hammer className="w-5 h-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-vf-blue mb-6 tracking-tight">The Forge OS</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center space-x-2 mb-1.5">
                    <Cpu className="w-3.5 h-3.5 text-vf-orange" />
                    <h4 className="font-bold text-vf-blue uppercase text-[9px] tracking-widest">Tech-First</h4>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">We build robust, scalable foundations that don't need to be rewritten.</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1.5">
                    <BarChart3 className="w-3.5 h-3.5 text-vf-orange" />
                    <h4 className="font-bold text-vf-blue uppercase text-[9px] tracking-widest">Data-Driven</h4>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">Every decision is backed by high-signal feedback loops and metrics.</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1.5">
                    <Layers className="w-3.5 h-3.5 text-vf-orange" />
                    <h4 className="font-bold text-vf-blue uppercase text-[9px] tracking-widest">Modular Build</h4>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">Our approach allows for rapid pivoting without losing momentum.</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1.5">
                    <Globe className="w-3.5 h-3.5 text-vf-orange" />
                    <h4 className="font-bold text-vf-blue uppercase text-[9px] tracking-widest">Global Scale</h4>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">We design for international markets from day one.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Pillars Section - Simplified & Mobile Optimized */}
      <section className="py-12 md:py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-vf-orange mb-2">The Three Pillars</h2>
            <p className="text-2xl md:text-3xl font-bold text-vf-blue tracking-tight">How we define ourselves.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  id: "01",
                  title: "A Startup OS",
                  desc: "A structured, rigorous framework that guides founders from ideation to PMF and beyond."
                },
                {
                  id: "02",
                  title: "An Execution Engine",
                  desc: "We provide the heavy lifting. Whether it's engineering, growth, or operations, we provide the muscle."
                },
                {
                  id: "03",
                  title: "A High-Signal Filter",
                  desc: "We identify the most capable founders and the most promising ventures through proof of work."
                }
              ].map((pillar) => (
                <div key={pillar.id} className="flex items-start space-x-4">
                  <div className="text-3xl md:text-4xl font-bold text-gray-200 leading-none">
                    {pillar.id}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-vf-blue mb-1 tracking-tight">{pillar.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-vf-blue/10"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-sm">
                  <p className="text-vf-blue text-sm font-bold italic leading-snug">
                    "Execution is the only thing that matters."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Simplified */}
      <section className="py-12 bg-vf-blue relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 tracking-tight">
            READY TO <span className="text-vf-orange">FORGE</span> YOUR FUTURE?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/apply" className="w-full sm:w-auto px-6 py-3.5 bg-vf-orange text-white font-bold uppercase tracking-widest text-[10px] rounded-lg hover:bg-orange-600 transition-all flex items-center justify-center group">
              Apply to Program
              <Rocket className="ml-2 w-3.5 h-3.5 group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />
            </Link>
            <Link to="/partners" className="w-full sm:w-auto px-6 py-3.5 bg-white/10 text-white font-bold uppercase tracking-widest text-[10px] rounded-lg hover:bg-white/20 transition-all backdrop-blur-md border border-white/10 flex items-center justify-center">
              View Partners
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;

