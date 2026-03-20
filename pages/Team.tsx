
import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Twitter, ArrowRight, Zap, ShieldCheck, Users, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Team: React.FC = () => {
  return (
    <div className="bg-white selection:bg-vf-orange/30">
      {/* Hero Section */}
      <section className="relative pt-6 pb-4 md:pt-8 md:pb-6 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-vf-blue leading-[0.9] tracking-tighter mb-8">
              THE PEOPLE BEHIND <br />
              <span className="text-vf-orange italic">VENTURE FORGE</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-light">
              Builders, operators, and thinkers focused on execution. We are a lean team of experts who have built and scaled real ventures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Team */}
      <section className="pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                name: "Sam",
                role: "Founder",
                identity: "Builder focused on execution and systems",
                image: "https://picsum.photos/seed/sam/400/400"
              },
              {
                name: "Alex",
                role: "Operations Lead",
                identity: "Scaling systems and optimizing founder workflows",
                image: "https://picsum.photos/seed/alex/400/400"
              },
              {
                name: "Jordan",
                role: "Technical Advisor",
                identity: "Full-stack architect with a focus on MVP speed",
                image: "https://picsum.photos/seed/jordan/400/400"
              }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative mb-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-white shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-vf-blue text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {member.role}
                  </div>
                </div>
                <div className="text-center">
                  <div className="h-8 w-32 bg-gray-300 rounded-md mx-auto mb-2 relative overflow-hidden group-hover:bg-gray-400 transition-colors" title="Identity protected">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  <p className="text-gray-500 text-sm italic mb-6">"{member.identity}"</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-gray-400 hover:text-vf-blue transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-vf-blue transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors & Advisors */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-vf-orange mb-4">The Network</h2>
            <h3 className="text-3xl font-bold text-vf-blue tracking-tight">Mentors & Advisors</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Sarah Chen", domain: "Startup / Tech" },
              { name: "Marcus Thorne", domain: "Finance / VC" },
              { name: "Elena Rossi", domain: "Product Design" },
              { name: "David Wu", domain: "Go-to-Market" },
              { name: "Lisa Park", domain: "Legal / IP" },
              { name: "Kevin Smith", domain: "Engineering" },
              { name: "Maria Garcia", domain: "Operations" },
              { name: "Tom Baker", domain: "Sales" }
            ].map((mentor, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group/mentor">
                <div className="h-4 w-24 bg-gray-300 rounded-sm mx-auto mb-1" title="Identity protected"></div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{mentor.domain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy About Team */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-vf-blue">Our Philosophy About Team</h2>
            <div className="h-1 w-20 bg-vf-orange mx-auto"></div>
            <div className="space-y-6 text-xl text-gray-600 font-light leading-relaxed italic">
              <p>"We believe small teams move faster."</p>
              <p>"We value operators over advisors."</p>
              <p>"We prioritize real experience over titles."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Call */}
      <section className="py-16 bg-vf-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-vf-orange/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Join Venture Forge</h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-light">
                We’re building a network of thinkers, builders, and domain experts. If you believe in execution and open systems, you can contribute.
              </p>
              <Link 
                to="/apply" 
                className="inline-flex items-center px-10 py-5 bg-vf-orange text-white font-bold rounded-sm hover:bg-orange-600 transition-all group"
              >
                Apply to Join
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Snapshot */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Speed over perfection",
                desc: "We ship, we learn, we iterate. Perfection is the enemy of progress.",
                icon: <Zap className="w-6 h-6" />
              },
              {
                title: "Transparency over politics",
                desc: "We speak the truth, even when it's uncomfortable. No corporate games.",
                icon: <ShieldCheck className="w-6 h-6" />
              },
              {
                title: "Builders over talkers",
                desc: "We value those who can build, not just those who can present.",
                icon: <Users className="w-6 h-6" />
              }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center group hover:bg-white hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-vf-blue/5 text-vf-blue rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-vf-blue group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-vf-blue mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
