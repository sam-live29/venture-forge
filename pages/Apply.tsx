
import React, { useState } from 'react';
import { Plus, Trash2, User, Users, ArrowRight, Check } from 'lucide-react';

const Apply: React.FC = () => {
  const [role, setRole] = useState<'founder' | 'co-founder' | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    linkedIn: '',
    location: '',
    startupName: '',
    sector: '',
    startupType: '',
    launchTime: '',
    stage: 'Idea',
    problem: '',
    solution: '',
    targetMarket: '',
    traction: '',
    team: '',
    teamSize: '1',
    whyVentureForge: '',
    coFounders: [] as { name: string; role: string; linkedIn: string }[]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCoFounderChange = (index: number, field: string, value: string) => {
    const updatedCoFounders = [...formData.coFounders];
    updatedCoFounders[index] = { ...updatedCoFounders[index], [field]: value };
    setFormData(prev => ({ ...prev, coFounders: updatedCoFounders }));
  };

  const addCoFounder = () => {
    setFormData(prev => ({
      ...prev,
      coFounders: [...prev.coFounders, { name: '', role: '', linkedIn: '' }]
    }));
  };

  const removeCoFounder = (index: number) => {
    setFormData(prev => ({
      ...prev,
      coFounders: prev.coFounders.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Startup OS Application - ${formData.startupName || 'New Idea'} (${role})`;
    
    let coFoundersText = '';
    if (formData.coFounders.length > 0) {
      coFoundersText = '\nCo-Founders:\n' + formData.coFounders.map((cf, i) => 
        `${i+1}. ${cf.name} (${cf.role}) - ${cf.linkedIn}`
      ).join('\n');
    }

    const body = `
Startup OS Application Details:
-------------------------------
Role: ${role === 'founder' ? 'Founder' : 'Co-Founder'}
Full Name: ${formData.fullName}
Email: ${formData.email}
LinkedIn: ${formData.linkedIn}
Location: ${formData.location}
${coFoundersText}

Startup Name: ${formData.startupName}
Sector: ${formData.sector}
Startup Type: ${formData.startupType}
Expected Launch: ${formData.launchTime}
Current Stage: ${formData.stage}
Team Size: ${formData.teamSize}

Problem:
${formData.problem}

Solution:
${formData.solution}

Target Market:
${formData.targetMarket}

Current Traction/Progress:
${formData.traction}

Team Background:
${formData.team}

Why Startup OS?
${formData.whyVentureForge}
    `.trim();

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const gmailUrl = isMobile 
      ? `mailto:ventureforge.corp@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      : `https://mail.google.com/mail/?view=cm&fs=1&to=ventureforge.corp@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(gmailUrl, '_blank');
  };

  if (!role) {
    return (
      <div className="animate-in fade-in zoom-in duration-500 min-h-[70vh] flex items-center justify-center px-4 bg-transparent">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold text-vf-blue mb-4 tracking-tight">Choose Your Path</h1>
          <p className="text-lg text-gray-600 mb-12">Are you applying as the primary founder or as a co-founder of an existing team?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <button 
              onClick={() => setRole('founder')}
              className="group p-8 bg-white/40 backdrop-blur-sm border-2 border-gray-100 rounded-sm hover:border-vf-blue transition-all text-left shadow-sm hover:shadow-xl"
            >
              <div className="w-12 h-12 bg-vf-blue/5 text-vf-blue rounded-full flex items-center justify-center mb-6 group-hover:bg-vf-blue group-hover:text-white transition-colors">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-vf-blue mb-2">Apply as Founder</h3>
              <p className="text-sm text-gray-500 mb-6">You are the primary visionary or a solo founder starting a new journey.</p>
              <div className="flex items-center text-vf-blue font-bold text-sm">
                Get Started <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </button>

            <button 
              onClick={() => {
                setRole('co-founder');
                // Initialize with one co-founder slot if co-founder role is chosen
                setFormData(prev => ({ ...prev, coFounders: [{ name: '', role: '', linkedIn: '' }] }));
              }}
              className="group p-8 bg-white/40 backdrop-blur-sm border-2 border-gray-100 rounded-sm hover:border-vf-orange transition-all text-left shadow-sm hover:shadow-xl"
            >
              <div className="w-12 h-12 bg-vf-orange/5 text-vf-orange rounded-full flex items-center justify-center mb-6 group-hover:bg-vf-orange group-hover:text-white transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-vf-blue mb-2">Apply as Co-Founder</h3>
              <p className="text-sm text-gray-500 mb-6">You are part of a founding team and want to bring your co-founders along.</p>
              <div className="flex items-center text-vf-orange font-bold text-sm">
                Join as Team <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const startupTypes = [
    "SaaS", "FinTech", "EdTech", "HealthTech", "E-commerce", 
    "AI/ML", "CleanTech", "PropTech", "Logistics", "Consumer Tech"
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        <button 
          onClick={() => setRole(null)}
          className="mb-6 text-xs text-gray-500 hover:text-vf-blue flex items-center transition-colors"
        >
          ← Back to selection
        </button>

        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-vf-blue/5 text-vf-blue text-[9px] font-black uppercase tracking-widest rounded-full mb-3">
            Applying as {role === 'founder' ? 'Founder' : 'Co-Founder'}
          </div>
          <h1 className="text-3xl font-bold text-vf-blue mb-3 tracking-tight">Apply for Startup OS</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">We work with a small number of founders through our flagship program. Most applicants are rejected. This signals quality.</p>
        </div>

        <div className="bg-white/40 backdrop-blur-sm border border-gray-200 shadow-xl rounded-sm overflow-hidden">
          <div className="p-5 bg-vf-blue text-white">
            <h3 className="font-bold mb-1.5 flex items-center text-sm">
              <span className="w-1.5 h-1.5 bg-vf-orange rounded-full mr-2"></span>
              Before you apply:
            </h3>
            <p className="text-xs text-gray-300 italic">"We value honesty over hype. If you are caught exaggerating numbers or building for the sake of 'getting funded', your application will be permanently blacklisted."</p>
          </div>

          <form className="p-6 md:p-10 space-y-10" onSubmit={handleSubmit}>
            {/* Section 1: Founder Details */}
            <section>
              <h2 className="text-xs font-black text-vf-blue uppercase tracking-[0.3em] mb-8 border-b border-gray-100 pb-2">01. {role === 'founder' ? 'Founder' : 'Your'} Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Full Name</label>
                  <input required name="fullName" value={formData.fullName} onChange={handleChange} type="text" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm" placeholder="Arjun Das" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Official Email</label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm" placeholder="arjun@startup.com" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">LinkedIn Profile</label>
                  <input required name="linkedIn" value={formData.linkedIn} onChange={handleChange} type="url" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm" placeholder="https://linkedin.com/in/username" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Current Location</label>
                  <input required name="location" value={formData.location} onChange={handleChange} type="text" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm" placeholder="e.g. Bangalore, India" />
                </div>
              </div>
            </section>

            {/* Section 1.5: Co-Founder Details (Only for Co-Founder role) */}
            {role === 'co-founder' && (
              <section className="animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-2">
                  <h2 className="text-xs font-black text-vf-blue uppercase tracking-[0.3em]">01b. Co-Founder Details</h2>
                  <button 
                    type="button" 
                    onClick={addCoFounder}
                    className="flex items-center text-[10px] font-black text-vf-orange uppercase tracking-widest hover:text-orange-600 transition-colors"
                  >
                    <Plus className="w-3 h-3 mr-1" /> Add Co-Founder
                  </button>
                </div>
                
                <div className="space-y-8">
                  {formData.coFounders.map((cf, index) => (
                    <div key={index} className="p-6 bg-white/20 backdrop-blur-sm border border-gray-200 rounded-sm relative group">
                      <button 
                        type="button" 
                        onClick={() => removeCoFounder(index)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Name</label>
                          <input 
                            required 
                            value={cf.name} 
                            onChange={(e) => handleCoFounderChange(index, 'name', e.target.value)} 
                            type="text" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-sm text-xs" 
                            placeholder="Co-founder Name" 
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Role / Expertise</label>
                          <input 
                            required 
                            value={cf.role} 
                            onChange={(e) => handleCoFounderChange(index, 'role', e.target.value)} 
                            type="text" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-sm text-xs" 
                            placeholder="e.g. CTO, Designer" 
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">LinkedIn URL</label>
                          <input 
                            required 
                            value={cf.linkedIn} 
                            onChange={(e) => handleCoFounderChange(index, 'linkedIn', e.target.value)} 
                            type="url" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-sm text-xs" 
                            placeholder="LinkedIn Profile" 
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {formData.coFounders.length === 0 && (
                    <div className="text-center py-8 border-2 border-dashed border-gray-200 rounded-sm">
                      <p className="text-sm text-gray-400 mb-4">No co-founders added yet.</p>
                      <button 
                        type="button" 
                        onClick={addCoFounder}
                        className="px-4 py-2 bg-vf-blue text-white text-xs font-bold rounded-sm"
                      >
                        Add Your First Co-Founder
                      </button>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Section 2: Startup Details */}
            <section>
              <h2 className="text-xs font-black text-vf-blue uppercase tracking-[0.3em] mb-8 border-b border-gray-100 pb-2">02. Startup / Idea</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Startup Name</label>
                  <input required name="startupName" value={formData.startupName} onChange={handleChange} type="text" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm" placeholder="e.g. AgriForge" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Sector</label>
                  <input required name="sector" value={formData.sector} onChange={handleChange} type="text" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm" placeholder="e.g. AgriTech, EdTech" />
                </div>
                
                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Startup Type (Suggestions)</label>
                  <div className="relative">
                    <select 
                      name="startupType" 
                      value={formData.startupType} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm bg-white appearance-none"
                    >
                      <option value="">Select Type</option>
                      {startupTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                    {formData.startupType === 'Other' && (
                      <input 
                        required 
                        name="startupType" 
                        onChange={handleChange} 
                        type="text" 
                        className="mt-4 w-full px-4 py-3 border border-gray-300 rounded-sm text-sm" 
                        placeholder="Specify your startup type" 
                      />
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Expected Launching Time</label>
                  <input required name="launchTime" value={formData.launchTime} onChange={handleChange} type="text" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm" placeholder="e.g. Q3 2025, Next 6 months" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Current Stage</label>
                  <select name="stage" value={formData.stage} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm bg-white">
                    <option value="Idea">Idea Stage</option>
                    <option value="MVP">MVP / Prototype</option>
                    <option value="Early Traction">Early Traction / Revenue</option>
                    <option value="Scaling">Scaling</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Section 3: Product & Market */}
            <section>
              <h2 className="text-xs font-black text-vf-blue uppercase tracking-[0.3em] mb-8 border-b border-gray-100 pb-2">03. Product & Market</h2>
              <div className="space-y-8">
                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">What problem are you solving?</label>
                  <textarea required name="problem" value={formData.problem} onChange={handleChange} rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm" placeholder="Describe the pain point you've identified..."></textarea>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">What is your solution?</label>
                  <textarea required name="solution" value={formData.solution} onChange={handleChange} rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm" placeholder="How does your product solve the problem?"></textarea>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Who is your target market?</label>
                  <input required name="targetMarket" value={formData.targetMarket} onChange={handleChange} type="text" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm" placeholder="e.g. Small-scale farmers in North India" />
                </div>
              </div>
            </section>

            {/* Section 4: Traction & Team */}
            <section>
              <h2 className="text-xs font-black text-vf-blue uppercase tracking-[0.3em] mb-8 border-b border-gray-100 pb-2">04. Traction & Team</h2>
              <div className="space-y-8">
                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">How many team members do you have?</label>
                  <div className="flex flex-wrap gap-4">
                    {['1', '2-5', '6-10', '11-20', '20+'].map(size => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, teamSize: size }))}
                        className={`px-6 py-2 text-xs font-bold rounded-full border transition-all ${
                          formData.teamSize === size 
                            ? 'bg-vf-blue text-white border-vf-blue' 
                            : 'bg-white text-gray-500 border-gray-200 hover:border-vf-blue'
                        }`}
                      >
                        {size} {formData.teamSize === size && <Check className="inline-block ml-1 w-3 h-3" />}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Current Traction / Progress</label>
                  <textarea required name="traction" value={formData.traction} onChange={handleChange} rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm" placeholder="Users, revenue, waitlist, or technical milestones achieved..."></textarea>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Team Background</label>
                  <textarea required name="team" value={formData.team} onChange={handleChange} rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm" placeholder="Who are the founders? What is your relevant experience?"></textarea>
                </div>
              </div>
            </section>

            {/* Section 5: Why Startup OS */}
            <section>
              <h2 className="text-xs font-black text-vf-blue uppercase tracking-[0.3em] mb-8 border-b border-gray-100 pb-2">05. Why Venture Forge?</h2>
              <div>
                <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Why do you want to join Startup OS?</label>
                <textarea required name="whyVentureForge" value={formData.whyVentureForge} onChange={handleChange} rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm" placeholder="What specific help do you need from us?"></textarea>
              </div>
            </section>

            <div className="flex items-start space-x-3 pt-6 border-t border-gray-100">
              <input 
                id="terms" 
                type="checkbox" 
                className="mt-1 h-4 w-4 text-vf-blue border-gray-300 rounded focus:ring-vf-blue" 
                required 
              />
              <label htmlFor="terms" className="text-xs text-gray-600 leading-relaxed">
                I have read and agree to the <a href="#" className="text-vf-blue font-bold hover:underline">Terms & Conditions</a> and <a href="#" className="text-vf-blue font-bold hover:underline">Privacy Policy</a>. I confirm that all information provided is accurate and honest. I understand that submitting this form will redirect me to Gmail to send the final application.
              </label>
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full py-5 bg-vf-blue text-white font-black text-xl rounded-sm hover:bg-slate-800 transition-all shadow-xl shadow-blue-900/10 active:scale-[0.98]">
                Submit & Open Gmail
              </button>
              <p className="mt-6 text-[10px] text-center text-gray-400 uppercase tracking-widest">
                By submitting, you agree to our Ethics Statement and Selection Criteria.
              </p>
            </div>
          </form>
        </div>

        <div className="mt-20 text-center text-gray-500">
          <p className="text-sm">No WhatsApp contact. No office visits without appointment.</p>
          <p className="text-xs mt-2">Direct inquiries: <a href="mailto:ventureforge.corp@gmail.com" className="text-vf-blue hover:underline">ventureforge.corp@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default Apply;


