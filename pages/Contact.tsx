
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Phone, MapPin, Send, ArrowRight, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';
import { insforge } from '../lib/insforge';
import { ContactSchema } from '../lib/schemas';
import { z } from 'zod';
import DOMPurify from 'dompurify';
import { useRateLimit } from '../hooks/useRateLimit';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { isRateLimited, timeLeft, trigger: triggerRateLimit } = useRateLimit('contact_form', 60);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isRateLimited) {
      alert(`Too many requests. Please wait ${timeLeft} seconds before submitting again.`);
      return;
    }
    
    setErrors({});
    setIsSubmitting(true);
    
    // Deep sanitize fields to prevent XSS string injections
    const sanitizedData = {
      name: DOMPurify.sanitize(formState.name),
      email: DOMPurify.sanitize(formState.email),
      subject: DOMPurify.sanitize(formState.subject),
      message: DOMPurify.sanitize(formState.message)
    };
    
    try {
      ContactSchema.parse(sanitizedData);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        err.issues.forEach(issue => {
          if (issue.path[0]) newErrors[issue.path[0] as string] = issue.message;
        });
        setErrors(newErrors);
        setIsSubmitting(false);
        return;
      }
    }
    
    try {
      const { error } = await insforge.database.from('contact_messages').insert(sanitizedData);
      if (error) throw error;
      triggerRateLimit();
      setFormState({ name: '', email: '', subject: 'General Inquiry', message: '' });
      setIsSubmitted(true);
      window.scrollTo(0, 0);
    } catch (err) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white selection:bg-vf-orange/30">
      {/* Hero Section */}
      <section className="relative pt-6 pb-24 md:pt-8 md:pb-32 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-vf-blue leading-[0.9] tracking-tighter mb-8">
              GET IN <br />
              <span className="text-vf-orange italic">TOUCH</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-light">
              Have a question about our programs or want to partner with us? We're here to help you scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-vf-orange mb-4">Contact Info</h2>
                <h3 className="text-3xl font-bold text-vf-blue tracking-tight mb-8">How to reach us</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 text-vf-blue rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-vf-blue uppercase text-[10px] tracking-widest mb-1">Email Us</h4>
                      <p className="text-gray-600">ventureforge.corp@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-50 text-vf-orange rounded-xl flex items-center justify-center shrink-0">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-vf-blue uppercase text-[10px] tracking-widest mb-1">Office Hours</h4>
                      <p className="text-gray-600">Mon - Fri, 9am - 5pm IST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-vf-blue uppercase text-[10px] tracking-widest mb-1">Global Presence</h4>
                      <p className="text-gray-600">Remote-first with hubs in Kolkata, Delhi, Mumbai and Bangalore.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <h4 className="font-bold text-vf-blue mb-4">Radical Transparency</h4>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  We don't hide behind automated bots. Every inquiry is reviewed by an operator who understands the startup landscape.
                </p>
                <div className="flex items-center text-vf-orange font-bold text-[10px] uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4 mr-2" />
                  <span>Verified Response Policy</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-vf-blue/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              
              {isSubmitted ? (
                <div className="text-center py-12 relative z-10 animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-blue-50 text-vf-blue rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-vf-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-vf-blue mb-4">Message Sent!</h3>
                  <p className="text-gray-600 mb-8">Thank you for reaching out. We will get back to you shortly.</p>
                  <button onClick={() => setIsSubmitted(false)} className="px-6 py-3 bg-vf-blue text-white text-xs font-black uppercase tracking-widest rounded-lg hover:bg-slate-800 transition-colors">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Arjun Sharma"
                      className={`w-full bg-gray-50 border px-4 py-3 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-vf-blue/50 focus:border-vf-blue transition-all ${errors.name ? 'border-red-500' : 'border-gray-100'}`}
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                    {errors.name && <p className="text-[10px] text-red-500 mt-1 font-bold">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="arjun@ventureforge.in"
                      className={`w-full bg-gray-50 border px-4 py-3 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-vf-blue/50 focus:border-vf-blue transition-all ${errors.email ? 'border-red-500' : 'border-gray-100'}`}
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                    {errors.email && <p className="text-[10px] text-red-500 mt-1 font-bold">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Subject</label>
                  <select 
                    className={`w-full bg-gray-50 border px-4 py-3 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-vf-blue/50 focus:border-vf-blue transition-all ${errors.subject ? 'border-red-500' : 'border-gray-100'}`}
                    value={formState.subject}
                    onChange={(e) => setFormState({...formState, subject: e.target.value})}
                  >
                    <option>General Inquiry</option>
                    <option>Partnership Proposal</option>
                    <option>Press & Media</option>
                    <option>Other</option>
                  </select>
                  {errors.subject && <p className="text-[10px] text-red-500 mt-1 font-bold">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-[10px] font-black text-vf-blue uppercase tracking-widest mb-2">Message</label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="How can we help your venture?"
                    className={`w-full bg-gray-50 border px-4 py-3 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-vf-blue/50 focus:border-vf-blue transition-all resize-none ${errors.message ? 'border-red-500' : 'border-gray-100'}`}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                  {errors.message && <p className="text-[10px] text-red-500 mt-1 font-bold">{errors.message}</p>}
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-vf-blue text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center group shadow-lg shadow-vf-blue/20"
                >
                  Send Message
                  <Send className="ml-3 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-vf-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to build?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/apply" className="px-8 py-4 bg-vf-orange text-white font-bold rounded-sm hover:bg-orange-600 transition-all uppercase tracking-widest text-xs flex items-center group">
              Apply to Program
              <Zap className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a href="/accelerator" className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-sm hover:bg-white/10 transition-all uppercase tracking-widest text-xs">
              View Startup OS
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
