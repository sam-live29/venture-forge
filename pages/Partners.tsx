import React, { useState } from 'react';
import { Building2, Briefcase, Users, PieChart, Globe, Mail, Clock, CheckCircle2, ChevronRight, Info, Rocket, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { insforge } from '../lib/insforge';
import { PartnershipSchema } from '../lib/schemas';
import { z } from 'zod';
import DOMPurify from 'dompurify';
import { useRateLimit } from '../hooks/useRateLimit';
const LabelWithTooltip: React.FC<{ label: string; tooltip: string }> = ({ label, tooltip }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center mb-2">
      <label className="block text-xs font-bold text-vf-blue uppercase tracking-widest">{label}</label>
      <div 
        className="relative ml-2 flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Info className={`w-3.5 h-3.5 cursor-help transition-colors ${isHovered ? 'text-vf-blue' : 'text-gray-400'}`} />
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute bottom-full left-0 mb-2 w-64 p-3 bg-vf-blue text-white text-[11px] font-normal rounded-lg shadow-2xl z-50 leading-relaxed border border-blue-800 normal-case tracking-normal backdrop-blur-md"
            >
              <div className="relative z-10">
                {tooltip}
              </div>
              <div className="absolute -bottom-1 left-2 w-2 h-2 bg-vf-blue rotate-45 border-r border-b border-blue-800"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Partners: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { isRateLimited, timeLeft, trigger: triggerRateLimit } = useRateLimit('partners_form', 60);
  const [formData, setFormData] = useState({
    organization: "",
    role: "",
    interestArea: "",
    email: "",
    goals: "",
    terms: false
  });

  const interestDescriptions: Record<string, string> = {
    funding: "For angel investors and VCs seeking pre-vetted, high-signal deal flow from the Startup OS program.",
    grants: "For government departments looking to facilitate startup grants and state schemes for Startup OS cohorts.",
    mentorship: "For experienced operators and domain experts wanting to support founders in the Startup OS program.",
    csr: "For corporations looking to drive impact through structured support for Startup OS.",
    other: "For other institutional or ecosystem partnership inquiries regarding Startup OS."
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isRateLimited) {
      alert(`Too many requests. Please wait ${timeLeft} seconds before submitting again.`);
      return;
    }
    
    setErrors({});
    
    // Deep sanitize fields to prevent XSS string injections
    const sanitizedData = {
      organization: DOMPurify.sanitize(formData.organization),
      role: DOMPurify.sanitize(formData.role),
      interestArea: DOMPurify.sanitize(formData.interestArea),
      email: DOMPurify.sanitize(formData.email),
      goals: DOMPurify.sanitize(formData.goals),
      terms: formData.terms
    };
    
    try {
      PartnershipSchema.parse(sanitizedData);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        err.issues.forEach(issue => {
          if (issue.path[0]) newErrors[issue.path[0] as string] = issue.message;
        });
        setErrors(newErrors);
        return;
      }
    }
    
    try {
      const { error } = await insforge.database.from('partnerships').insert({
        organization: sanitizedData.organization,
        role: sanitizedData.role,
        interest_area: sanitizedData.interestArea,
        email: sanitizedData.email,
        goals: sanitizedData.goals
      });
      
      if (error) throw error;
      
      triggerRateLimit();
      setSubmitted(true);
      window.scrollTo(0, 0);
    } catch (err) {
      console.error(err);
      alert('There was an error submitting your inquiry. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({ ...prev, [name]: val }));
    
    // Clear error when user starts typing/changing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <div className="animate-in fade-in duration-700 bg-transparent">
      {/* Header Section */}
      <header className="relative pt-6 pb-12 md:pt-8 md:pb-16 bg-transparent border-b border-gray-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/50 skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-vf-blue text-[10px] font-bold uppercase tracking-wider mb-4">
            <Globe className="w-3 h-3" />
            <span>Global Ecosystem Partnership</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-vf-blue tracking-tight">
            Institutional <span className="text-vf-orange">Collaboration</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl leading-relaxed">
            Building a structured, high-signal startup pipeline for serious partners who value execution over hype.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 items-center">
          <div>
            <h2 className="text-2xl font-bold text-vf-blue mb-6">For Institutions & Strategic Partners</h2>
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                Venture Forge works with select partners to provide access to execution-ready startups. We bridge the gap between institutional support and founder execution.
              </p>
              <div className="p-5 bg-orange-50 border-l-4 border-vf-orange rounded-r-xl">
                <p className="font-bold text-vf-blue text-sm">
                  We don’t push volume. We focus on quality—startups that are actively building, improving, and showing measurable progress.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 bg-white/40 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center sm:text-left">
              <div className="w-10 h-10 bg-blue-50 text-vf-blue rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-vf-blue mb-1 text-sm">Pre-vetted</h3>
              <p className="text-[11px] text-gray-500">Startups with real execution progress and validated metrics.</p>
            </div>
            <div className="p-5 bg-white/40 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center sm:text-left">
              <div className="w-10 h-10 bg-orange-50 text-vf-orange rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <PieChart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-vf-blue mb-1 text-sm">Performance Data</h3>
              <p className="text-[11px] text-gray-500">Structured visibility into founder performance and growth trajectory.</p>
            </div>
            <div className="p-5 bg-white/40 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center sm:text-left">
              <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-vf-blue mb-1 text-sm">Alignment</h3>
              <p className="text-[11px] text-gray-500">Clear alignment between capital, support, and long-term outcomes.</p>
            </div>
            <div className="p-5 bg-white/40 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center sm:text-left">
              <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-vf-blue mb-1 text-sm">Merit-Based</h3>
              <p className="text-[11px] text-gray-500">Independent operation to maintain merit-based selection and high standards.</p>
            </div>
          </div>
        </div>

        {/* Investor Highlight */}
        <section className="bg-vf-blue text-white p-8 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden mb-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">For Investors & Strategic Partners</h2>
              <p className="text-lg text-blue-100 mb-8">We prepare startups for real growth—not just presentations. Our portfolio companies are:</p>
              <ul className="space-y-4">
                {[
                  "Actively building and iterating daily",
                  "Working within a structured execution system",
                  "Focused on product, users, and revenue"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-vf-orange rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-base text-blue-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
              <div className="text-center">
                <Building2 className="w-12 h-12 text-vf-orange mx-auto mb-4" />
                <p className="text-xl font-bold italic leading-relaxed">
                  "We bridge the gap between institutional capital and the raw execution needed to scale."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="scroll-mt-20">
          {!submitted ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <h2 className="text-2xl font-bold text-vf-blue mb-4">Start a Discussion</h2>
                <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                  If you represent an investment firm, strategic partner, or institutional body, connect with us to explore collaboration opportunities.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-9 h-9 bg-blue-50 text-vf-blue rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-vf-blue uppercase tracking-widest mb-0.5">Direct Email</h4>
                      <a href="mailto:partnerships.ventureforge@gmail.com" className="text-vf-orange font-bold text-sm hover:underline">partnerships.ventureforge@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-9 h-9 bg-orange-50 text-vf-orange rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-vf-blue uppercase tracking-widest mb-0.5">Response Time</h4>
                      <p className="text-xs text-gray-600">Within 24–48 hours for verified inquiries</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <form onSubmit={handleSubmit} noValidate className="bg-white/40 backdrop-blur-sm p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <LabelWithTooltip 
                        label="Organization Name" 
                        tooltip="The formal name of the government department, CSR wing, or investment firm." 
                      />
                      <input 
                        type="text" 
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 outline-none transition-all bg-gray-50/50 text-sm ${
                          errors.organization ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : 'border-gray-200 focus:ring-vf-blue/20 focus:border-vf-blue'
                        }`} 
                        placeholder="e.g. Dept of IT & Electronics" 
                      />
                      {errors.organization && (
                        <p className="mt-1.5 text-[10px] text-red-500 font-bold flex items-center animate-in slide-in-from-top-1 duration-200">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.organization}
                        </p>
                      )}
                    </div>
                    <div>
                      <LabelWithTooltip 
                        label="Role / Title" 
                        tooltip="This helps us verify your authority to initiate formal partnerships and ensures we connect with the right decision-maker." 
                      />
                      <input 
                        type="text" 
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 outline-none transition-all bg-gray-50/50 text-sm ${
                          errors.role ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : 'border-gray-200 focus:ring-vf-blue/20 focus:border-vf-blue'
                        }`} 
                        placeholder="Director of Innovation" 
                      />
                      {errors.role && (
                        <p className="mt-1.5 text-[10px] text-red-500 font-bold flex items-center animate-in slide-in-from-top-1 duration-200">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.role}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <LabelWithTooltip 
                        label="Interest Area" 
                        tooltip="The primary way you intend to collaborate with Venture Forge's startups." 
                      />
                      <select 
                        name="interestArea"
                        value={formData.interestArea}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 outline-none transition-all bg-gray-50/50 text-sm appearance-none cursor-pointer ${
                          errors.interestArea ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : 'border-gray-200 focus:ring-vf-blue/20 focus:border-vf-blue'
                        }`}
                      >
                        <option value="">Select interest area</option>
                        <option value="funding">Angel / VC Funding</option>
                        <option value="grants">Government Grants</option>
                        <option value="mentorship">Mentorship & Ecosystem</option>
                        <option value="csr">CSR Partnerships</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.interestArea ? (
                        <p className="mt-1.5 text-[10px] text-red-500 font-bold flex items-center animate-in slide-in-from-top-1 duration-200">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.interestArea}
                        </p>
                      ) : formData.interestArea && (
                        <p className="mt-2 text-[10px] text-gray-500 italic animate-in fade-in slide-in-from-top-1 duration-300 flex items-center">
                          <Info className="w-3 h-3 mr-1.5 shrink-0" />
                          {interestDescriptions[formData.interestArea]}
                        </p>
                      )}
                    </div>
                    <div>
                      <LabelWithTooltip 
                        label="Official Email" 
                        tooltip="Please provide a domain-verified official email for formal correspondence." 
                      />
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 outline-none transition-all bg-gray-50/50 text-sm ${
                          errors.email ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : 'border-gray-200 focus:ring-vf-blue/20 focus:border-vf-blue'
                        }`} 
                        placeholder="official@org.gov.in" 
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-[10px] text-red-500 font-bold flex items-center animate-in slide-in-from-top-1 duration-200">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <LabelWithTooltip 
                      label="Partnership Goals" 
                      tooltip="Specify key objectives, KPIs, or specific startup sectors of interest." 
                    />
                    <textarea 
                      rows={3} 
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 outline-none transition-all bg-gray-50/50 text-sm resize-none ${
                        errors.goals ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : 'border-gray-200 focus:ring-vf-blue/20 focus:border-vf-blue'
                      }`} 
                      placeholder="Briefly describe what you aim to achieve with Venture Forge..."
                    ></textarea>
                    {errors.goals && (
                      <p className="mt-1.5 text-[10px] text-red-500 font-bold flex items-center animate-in slide-in-from-top-1 duration-200">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.goals}
                      </p>
                    )}
                  </div>

                  <div className={`flex items-start space-x-3 p-3 rounded-xl border transition-colors ${
                    errors.terms ? 'bg-red-50 border-red-100' : 'bg-gray-50 border-gray-100'
                  }`}>
                    <input 
                      id="partner-terms" 
                      type="checkbox" 
                      name="terms"
                      checked={formData.terms}
                      onChange={handleInputChange}
                      className={`mt-0.5 h-4 w-4 rounded focus:ring-vf-blue ${
                        errors.terms ? 'text-red-500 border-red-300' : 'text-vf-blue border-gray-300'
                      }`} 
                    />
                    <div className="flex flex-col">
                      <label htmlFor="partner-terms" className={`text-[10px] leading-relaxed ${errors.terms ? 'text-red-600' : 'text-gray-600'}`}>
                        I represent the mentioned institution and agree to the <a href="#" className="text-vf-blue font-bold hover:underline">Partnership Terms</a> and <a href="#" className="text-vf-blue font-bold hover:underline">Privacy Policy</a>.
                      </label>
                      {errors.terms && (
                        <p className="mt-1 text-[9px] text-red-500 font-bold animate-in fade-in duration-200">
                          {errors.terms}
                        </p>
                      )}
                    </div>
                  </div>

                  <button type="submit" className="w-full py-4 bg-vf-blue text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-blue-900/10 flex items-center justify-center group text-sm">
                    Submit Inquiry
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <p className="text-[10px] text-gray-400 text-center italic">
                    Venture Forge reviews all partnership requests carefully to ensure alignment with our execution-first model.
                  </p>
                </form>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto animate-in zoom-in duration-500 space-y-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-vf-blue mb-2">Inquiry Received</h2>
                <p className="text-gray-500 text-sm">Reference ID: <span className="font-mono font-bold text-vf-blue">VF-PRT-{Math.floor(Math.random() * 90000) + 10000}</span></p>
              </div>

              <div className="bg-white p-8 border border-gray-100 rounded-3xl shadow-2xl space-y-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-vf-blue text-white text-xs font-bold flex items-center justify-center rounded-lg shrink-0 shadow-lg shadow-blue-900/20">1</div>
                  <div>
                    <h3 className="font-bold text-vf-blue text-base mb-1">Review & Verification</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Our Institutional Relations team is verifying your organization's background and alignment. This typically takes <strong>24-48 business hours</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-vf-blue text-white text-xs font-bold flex items-center justify-center rounded-lg shrink-0 shadow-lg shadow-blue-900/20">2</div>
                  <div>
                    <h3 className="font-bold text-vf-blue text-base mb-1">Briefing Invitation</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      You will receive an invite for a 15-minute introductory briefing call to your provided official email.
                    </p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-vf-blue text-white text-xs font-bold flex items-center justify-center rounded-lg shrink-0 shadow-lg shadow-blue-900/20">3</div>
                  <div>
                    <h3 className="font-bold text-vf-blue text-base mb-1">Formal Discussion</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Based on the briefing, we will initiate discussions regarding formal MoUs or collaboration frameworks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4">
                <button 
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center text-vf-blue font-bold text-sm hover:text-vf-orange transition-colors group"
                >
                  Return to Partnership Details
                  <Rocket className="ml-2 w-3.5 h-3.5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 text-center bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl font-bold text-vf-blue mb-1">Venture Forge</p>
          <p className="text-gray-600 text-sm">Building, fixing, and scaling startups through execution.</p>
        </div>
      </footer>
    </div>
  );
};

export default Partners;