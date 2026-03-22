
import React, { useState } from 'react';
import { Plus, Trash2, User, Users, ArrowRight, Check, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { insforge } from '../lib/insforge';
import { ApplicationSchema } from '../lib/schemas';
import { z } from 'zod';

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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationErrors({});
    
    // Validate with Zod
    try {
      ApplicationSchema.parse({ ...formData, role });
    } catch (err) {
      if (err instanceof z.ZodError) {
        const errors: Record<string, string> = {};
        err.issues.forEach(e => {
          if (e.path[0]) errors[e.path[0] as string] = e.message;
        });
        setValidationErrors(errors);
        return;
      }
    }

    // Save to InsForge
    setIsSubmitting(true);
    try {
      const { error } = await insforge.database.from('applications').insert({
        full_name: formData.fullName,
        email: formData.email,
        linkedin: formData.linkedIn,
        location: formData.location,
        startup_name: formData.startupName,
        sector: formData.sector,
        startup_type: formData.startupType,
        launch_time: formData.launchTime,
        stage: formData.stage,
        problem: formData.problem,
        solution: formData.solution,
        target_market: formData.targetMarket,
        traction: formData.traction,
        team: formData.team,
        team_size: formData.teamSize,
        why_venture_forge: formData.whyVentureForge,
        status: 'Pending'
      });

      if (error) throw error;
      
      setIsSubmitted(true);
      console.log('Application saved to database');
    } catch (err) {
      console.error('Error saving application:', err);
      alert('There was an error saving your application to our database. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="animate-in fade-in zoom-in duration-500 min-h-[80vh] flex flex-col items-center justify-center px-4 bg-transparent text-center">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-8 shadow-xl shadow-emerald-500/20"
        >
          <Check className="w-10 h-10" />
        </motion.div>
        <h1 className="text-4xl font-black text-vf-blue mb-4 tracking-tight">Application Received</h1>
        <p className="text-xl text-gray-600 max-w-lg mx-auto mb-10 font-medium">
          Thank you, {formData.fullName.split(' ')[0]}. Your application for {formData.startupName || 'your startup'} has been successfully submitted to Venture Forge.
        </p>
        <div className="space-y-4">
          <p className="text-sm text-gray-400 uppercase tracking-widest font-black">Next Steps</p>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Our team will review your application within 3-5 business days. You will receive an update via email.
          </p>
          <div className="pt-8">
            <button 
              onClick={() => window.location.href = '/'}
              className="px-8 py-4 bg-vf-blue text-white text-xs font-black uppercase tracking-widest rounded-sm hover:bg-slate-800 transition-all shadow-lg"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!role) {
    return (
      <div className="animate-in fade-in zoom-in duration-500 min-h-[85vh] flex flex-col items-center justify-start md:justify-center px-4 pt-4 md:pt-0 bg-transparent">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-vf-blue mb-2 md:mb-4 tracking-tight">Choose Your Path</h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-12">Are you applying as a primary founder or as a co-founder of an existing team?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <button 
              onClick={() => setRole('founder')}
              className="group p-8 bg-white/40 backdrop-blur-sm border-2 border-gray-100 rounded-sm hover:border-vf-blue transition-all text-left shadow-sm hover:shadow-xl"
            >
              <motion.div 
                whileHover={{ scale: 1.15, rotate: 8 }}
                className="w-12 h-12 bg-vf-blue/5 text-vf-blue rounded-full flex items-center justify-center mb-6 transition-all duration-300 shadow-md border-2 border-transparent group-hover:border-vf-blue/30 group-hover:bg-vf-blue/10"
              >
                <User className="w-6 h-6" />
              </motion.div>
              <h3 className="text-xl font-bold text-vf-blue mb-2">Apply as Founder</h3>
              <p className="text-sm text-gray-500 mb-6 font-medium italic">"Forge the vision, lead the mission."</p>
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
              <motion.div 
                whileHover={{ scale: 1.15, rotate: -8 }}
                className="w-12 h-12 bg-vf-orange/5 text-vf-orange rounded-full flex items-center justify-center mb-6 transition-all duration-300 shadow-md border-2 border-transparent group-hover:border-vf-orange/30 group-hover:bg-vf-orange/10"
              >
                <Users className="w-6 h-6" />
              </motion.div>
              <h3 className="text-xl font-bold text-vf-blue mb-2">Apply as Co-Founder</h3>
              <p className="text-sm text-gray-500 mb-6 font-medium italic">"Scale faster, win together."</p>
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
                  <input required name="fullName" value={formData.fullName} onChange={handleChange} type="text" className={`w-full px-4 py-3 border rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm ${validationErrors.fullName ? 'border-red-500' : 'border-gray-300'}`} placeholder="Arjun Das" />
                  {validationErrors.fullName && <p className="text-[10px] text-red-500 mt-1 font-bold">{validationErrors.fullName}</p>}
                </div>
                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Official Email</label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" className={`w-full px-4 py-3 border rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm ${validationErrors.email ? 'border-red-500' : 'border-gray-300'}`} placeholder="arjun@startup.com" />
                  {validationErrors.email && <p className="text-[10px] text-red-500 mt-1 font-bold">{validationErrors.email}</p>}
                </div>
                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">LinkedIn Profile</label>
                  <input required name="linkedIn" value={formData.linkedIn} onChange={handleChange} type="url" className={`w-full px-4 py-3 border rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm ${validationErrors.linkedIn ? 'border-red-500' : 'border-gray-300'}`} placeholder="https://linkedin.com/in/username" />
                  {validationErrors.linkedIn && <p className="text-[10px] text-red-500 mt-1 font-bold">{validationErrors.linkedIn}</p>}
                </div>
                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Current Location</label>
                  <input required name="location" value={formData.location} onChange={handleChange} type="text" className={`w-full px-4 py-3 border rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm ${validationErrors.location ? 'border-red-500' : 'border-gray-300'}`} placeholder="e.g. Bangalore, India" />
                  {validationErrors.location && <p className="text-[10px] text-red-500 mt-1 font-bold">{validationErrors.location}</p>}
                </div>
              </div>
            </section>

            {/* Section 1.5: Co-Founder Details (Only for Co-Founder role) */}
            {role === 'co-founder' && (
              <section className="animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-2">
                  <h2 className="text-xs font-black text-vf-blue uppercase tracking-[0.3em]">01b. Co-Founder Details</h2>
                  <motion.button 
                    type="button" 
                    onClick={addCoFounder}
                    whileTap={{ scale: 0.92, y: 1.5 }}
                    className="flex items-center px-4 py-2 bg-vf-orange/5 border border-vf-orange/20 rounded-sm text-[10px] font-black text-vf-orange uppercase tracking-widest transition-all duration-150 shadow-sm"
                  >
                    <Plus className="w-3 h-3 mr-2" /> Add Co-Founder
                  </motion.button>
                </div>
                
                <div className="space-y-8">
                  {formData.coFounders.map((cf, index) => (
                    <div key={index} className="p-6 bg-white/20 backdrop-blur-sm border border-gray-200 rounded-sm relative group">
                      <motion.button 
                        type="button" 
                        onClick={() => removeCoFounder(index)}
                        whileTap={{ scale: 0.8 }}
                        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                      
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
                      <motion.button 
                        type="button" 
                        onClick={addCoFounder}
                        whileTap={{ scale: 0.94, y: 2 }}
                        className="px-6 py-3 bg-vf-blue text-white text-xs font-black uppercase tracking-widest rounded-sm transition-all duration-150"
                      >
                        Add Your First Co-Founder
                      </motion.button>
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
                  <input required name="startupName" value={formData.startupName} onChange={handleChange} type="text" className={`w-full px-4 py-3 border rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm ${validationErrors.startupName ? 'border-red-500' : 'border-gray-300'}`} placeholder="e.g. AgriForge" />
                  {validationErrors.startupName && <p className="text-[10px] text-red-500 mt-1 font-bold">{validationErrors.startupName}</p>}
                </div>
                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Sector</label>
                  <input required name="sector" value={formData.sector} onChange={handleChange} type="text" className={`w-full px-4 py-3 border rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm ${validationErrors.sector ? 'border-red-500' : 'border-gray-300'}`} placeholder="e.g. AgriTech, EdTech" />
                  {validationErrors.sector && <p className="text-[10px] text-red-500 mt-1 font-bold">{validationErrors.sector}</p>}
                </div>
                
                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Startup Type (Suggestions)</label>
                  <div className="relative">
                    <select 
                      name="startupType" 
                      value={formData.startupType} 
                      onChange={handleChange} 
                      className={`w-full px-4 py-3 border rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm bg-white appearance-none pr-10 ${validationErrors.startupType ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="">Select Type</option>
                      {startupTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                    {formData.startupType === 'Other' && (
                      <input 
                        required 
                        name="startupType" 
                        onChange={handleChange} 
                        type="text" 
                        className={`mt-4 w-full px-4 py-3 border rounded-sm text-sm ${validationErrors.startupType ? 'border-red-500' : 'border-gray-300'}`} 
                        placeholder="Specify your startup type" 
                      />
                    )}
                    {validationErrors.startupType && <p className="text-[10px] text-red-500 mt-1 font-bold">{validationErrors.startupType}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Expected Launching Time</label>
                  <input required name="launchTime" value={formData.launchTime} onChange={handleChange} type="text" className={`w-full px-4 py-3 border rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm ${validationErrors.launchTime ? 'border-red-500' : 'border-gray-300'}`} placeholder="e.g. Q3 2025, Next 6 months" />
                  {validationErrors.launchTime && <p className="text-[10px] text-red-500 mt-1 font-bold">{validationErrors.launchTime}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Current Stage</label>
                  <div className="relative">
                    <select 
                      name="stage" 
                      value={formData.stage} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm bg-white appearance-none pr-10"
                    >
                      <option value="Idea">Idea Stage</option>
                      <option value="MVP">MVP / Prototype</option>
                      <option value="Early Traction">Early Traction / Revenue</option>
                      <option value="Scaling">Scaling</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Product & Market */}
            <section>
              <h2 className="text-xs font-black text-vf-blue uppercase tracking-[0.3em] mb-8 border-b border-gray-100 pb-2">03. Product & Market</h2>
              <div className="space-y-8">
                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">What problem are you solving?</label>
                  <textarea required name="problem" value={formData.problem} onChange={handleChange} rows={3} className={`w-full px-4 py-3 border rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm ${validationErrors.problem ? 'border-red-500' : 'border-gray-300'}`} placeholder="Describe the pain point you've identified..."></textarea>
                  {validationErrors.problem && <p className="text-[10px] text-red-500 mt-1 font-bold">{validationErrors.problem}</p>}
                </div>
                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">What is your solution?</label>
                  <textarea required name="solution" value={formData.solution} onChange={handleChange} rows={3} className={`w-full px-4 py-3 border rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm ${validationErrors.solution ? 'border-red-500' : 'border-gray-300'}`} placeholder="How does your product solve the problem?"></textarea>
                  {validationErrors.solution && <p className="text-[10px] text-red-500 mt-1 font-bold">{validationErrors.solution}</p>}
                </div>
                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Who is your target market?</label>
                  <input required name="targetMarket" value={formData.targetMarket} onChange={handleChange} type="text" className={`w-full px-4 py-3 border rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm ${validationErrors.targetMarket ? 'border-red-500' : 'border-gray-300'}`} placeholder="e.g. Small-scale farmers in North India" />
                  {validationErrors.targetMarket && <p className="text-[10px] text-red-500 mt-1 font-bold">{validationErrors.targetMarket}</p>}
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
                  <textarea required name="traction" value={formData.traction} onChange={handleChange} rows={3} className={`w-full px-4 py-3 border rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm ${validationErrors.traction ? 'border-red-500' : 'border-gray-300'}`} placeholder="Users, revenue, waitlist, or technical milestones achieved..."></textarea>
                  {validationErrors.traction && <p className="text-[10px] text-red-500 mt-1 font-bold">{validationErrors.traction}</p>}
                </div>
                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Team Background</label>
                  <textarea required name="team" value={formData.team} onChange={handleChange} rows={3} className={`w-full px-4 py-3 border rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm ${validationErrors.team ? 'border-red-500' : 'border-gray-300'}`} placeholder="Who are the founders? What is your relevant experience?"></textarea>
                  {validationErrors.team && <p className="text-[10px] text-red-500 mt-1 font-bold">{validationErrors.team}</p>}
                </div>
              </div>
            </section>

            {/* Section 5: Why Startup OS */}
            <section>
              <h2 className="text-xs font-black text-vf-blue uppercase tracking-[0.3em] mb-8 border-b border-gray-100 pb-2">05. Why Venture Forge?</h2>
              <div>
                <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Why do you want to join Startup OS?</label>
                <textarea required name="whyVentureForge" value={formData.whyVentureForge} onChange={handleChange} rows={3} className={`w-full px-4 py-3 border rounded-sm focus:ring-1 focus:ring-vf-blue focus:border-vf-blue text-sm ${validationErrors.whyVentureForge ? 'border-red-500' : 'border-gray-300'}`} placeholder="What specific help do you need from us?"></textarea>
                {validationErrors.whyVentureForge && <p className="text-[10px] text-red-500 mt-1 font-bold">{validationErrors.whyVentureForge}</p>}
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
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-5 bg-vf-blue text-white font-black text-xl rounded-sm hover:bg-slate-800 transition-all shadow-xl shadow-blue-900/10 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  'Submit Application'
                )}
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


