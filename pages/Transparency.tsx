
import React from 'react';
import { ShieldCheck, Scale, Eye, AlertCircle, CheckCircle2, XCircle, ArrowRight, Zap, Target, Users, Lightbulb, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const Transparency: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000 bg-transparent selection:bg-vf-orange/30">
      {/* Hero Section - Explicit Left Alignment */}
      <section className="relative pt-6 pb-20 md:pt-8 md:pb-32 flex items-center overflow-hidden border-b border-gray-100 bg-transparent">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-vf-blue/5 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-vf-orange/5 blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-vf-blue text-[10px] font-bold uppercase tracking-wider mb-4 border border-blue-100">
              <Eye className="w-3 h-3 fill-current" />
              <span>Full Disclosure</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-vf-blue leading-[0.9] tracking-tighter mb-8">
              OUR <br />
              <span className="text-vf-orange italic">VALUES</span>
            </h1>
            <div className="h-1.5 w-20 bg-vf-blue mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl font-light">
              Venture Forge operates with radical transparency. We believe alignment is the foundation of every successful venture. Our model is simple: we focus on outcomes.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-vf-blue font-black text-[10px] uppercase tracking-[0.2em]">
                <ShieldCheck className="w-4 h-4 text-vf-orange" />
                <span>Verified Accountability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles - Bento Grid */}
      <section className="py-10 md:py-16 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-vf-orange mb-2">The Framework</h2>
            <p className="text-xl md:text-2xl font-bold text-vf-blue tracking-tight">
              Operating with <span className="italic text-gray-400">integrity</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            {/* Aligned Incentives */}
            <div className="md:col-span-8 bg-white/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between group">
              <div>
                <div className="w-9 h-9 bg-blue-50 text-vf-blue rounded-xl flex items-center justify-center mb-5">
                  <Scale className="w-4 h-4" />
                </div>
                <h2 className="text-lg md:text-xl font-bold text-vf-blue mb-3 tracking-tight">Aligned Incentives</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Venture Forge does not operate on traditional upfront advisory fees. Our model is strictly aligned with startup outcomes—meaning we grow only when the startup grows.
                </p>
              </div>
              <div className="mt-5 pt-5 border-t border-gray-50 flex items-center text-vf-blue font-bold text-[9px] uppercase tracking-widest">
                <CheckCircle2 className="mr-2 w-3 h-3 text-vf-orange" />
                <span>Zero Upfront Advisory Fees</span>
              </div>
            </div>

            {/* Conflict of Interest */}
            <div className="md:col-span-4 bg-vf-blue p-6 md:p-8 rounded-2xl shadow-lg text-white relative overflow-hidden">
              <div className="w-9 h-9 bg-white/10 text-vf-orange rounded-xl flex items-center justify-center mb-5">
                <AlertCircle className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-bold mb-3 tracking-tight">Conflicts</h2>
              <p className="text-blue-100 text-xs leading-relaxed">
                Our board members and experts operate with total integrity. Any equity participation is disclosed clearly and aligned with the startup's long-term success.
              </p>
            </div>

            {/* No Hidden Charges - Interactive Squares */}
            <div className="md:col-span-12">
              <div className="mb-8">
                <div className="w-9 h-9 bg-orange-50 text-vf-orange rounded-xl flex items-center justify-center mb-5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h2 className="text-lg md:text-xl font-bold text-vf-blue mb-2 tracking-tight">Financial Transparency</h2>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Zero hidden costs. Zero surprises.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { title: "No Application Fees", desc: "Applying to Venture Forge is and will always be free.", icon: <XCircle className="w-4 h-4" /> },
                  { title: "No Evaluation Charges", desc: "We don't charge for the time we spend reviewing your vision.", icon: <XCircle className="w-4 h-4" /> },
                  { title: "No Discussion Fees", desc: "Initial consultations and strategy sessions are on us.", icon: <XCircle className="w-4 h-4" /> },
                  { title: "No Retainers", desc: "We don't believe in monthly fees for 'access' or 'mentorship'.", icon: <XCircle className="w-4 h-4" /> }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 133, 27, 0.02)" }}
                    className="bg-white/40 backdrop-blur-sm p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center group transition-all"
                  >
                    <div className="mb-3 text-red-500 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-vf-blue text-[11px] mb-1 group-hover:text-vf-orange transition-colors">{item.title}</h3>
                    <p className="text-[9px] text-gray-400 leading-tight">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Selection Standards - Interactive Grid */}
            <div className="md:col-span-12 mt-8">
              <div className="mb-8">
                <div className="w-9 h-9 bg-blue-50 text-vf-blue rounded-xl flex items-center justify-center mb-5">
                  <Target className="w-4 h-4" />
                </div>
                <h2 className="text-lg md:text-xl font-bold text-vf-blue mb-2 tracking-tight">Selection Criteria</h2>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">How we identify high-signal ventures</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: "Clarity of Thought",
                    desc: "Ability to explain the problem without unnecessary complexity or buzzwords.",
                    icon: <Lightbulb className="w-5 h-5" />,
                    color: "bg-amber-50 text-amber-600 border-amber-100"
                  },
                  {
                    title: "Execution Ability",
                    desc: "Proof of what has been built with available resources. We value speed and iteration.",
                    icon: <Zap className="w-5 h-5" />,
                    color: "bg-blue-50 text-blue-600 border-blue-100"
                  },
                  {
                    title: "Integrity",
                    desc: "Radical honesty over inflated metrics or vanity projections. We value the truth.",
                    icon: <ShieldCheck className="w-5 h-5" />,
                    color: "bg-emerald-50 text-emerald-600 border-emerald-100"
                  },
                  {
                    title: "Scalability",
                    desc: "Genuine potential to grow exponentially beyond initial markets and create impact.",
                    icon: <TrendingUp className="w-5 h-5" />,
                    color: "bg-orange-50 text-vf-orange border-orange-100"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group cursor-default"
                  >
                    <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center mb-4 border transition-transform group-hover:scale-110`}>
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-vf-blue text-sm mb-2 group-hover:text-vf-orange transition-colors">{item.title}</h3>
                    <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
                    
                    <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Core Pillar</span>
                      <ArrowRight className="w-3 h-3 text-vf-orange" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Standard Section */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-vf-blue rounded-3xl p-6 md:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-vf-orange mb-3">Our Standard</h2>
                <p className="text-xl md:text-3xl font-bold mb-4 tracking-tight leading-tight">
                  WE BUILD A CLEAN <br />
                  <span className="text-vf-orange">ENVIRONMENT.</span>
                </p>
                <p className="text-blue-100 text-sm leading-relaxed max-w-md">
                  We eliminate the noise and focus on the signals that actually move the needle for high-growth ventures.
                </p>
              </div>
              
              <div className="space-y-3">
                {[
                  { title: "No Shortcuts", desc: "We build for the long-term, avoiding technical debt." },
                  { title: "No Inflated Promises", desc: "We commit only to what we can realistically execute." },
                  { title: "No Intermediaries", desc: "Direct access to operators and decision-makers." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <XCircle className="w-4 h-4 text-vf-orange shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-sm mb-0.5">{item.title}</h3>
                      <p className="text-[10px] text-blue-100/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer Branding */}
      <section className="py-12 border-t border-gray-100 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl font-bold text-vf-blue uppercase tracking-tighter mb-1">Venture Forge</p>
          <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">Building, fixing, and scaling startups through execution.</p>
        </div>
      </section>
    </div>
  );
};

export default Transparency;

