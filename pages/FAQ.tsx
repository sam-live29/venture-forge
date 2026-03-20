
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Search, MessageSquare, Zap, Target, ShieldCheck } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-vf-orange' : 'text-vf-blue group-hover:text-vf-blue/70'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-vf-orange text-white rotate-180' : 'bg-gray-100 text-gray-400'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-gray-600 leading-relaxed text-sm max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: "What is Venture Forge?",
      answer: "Venture Forge is a high-velocity startup execution system. We partner with elite founders to build and scale ventures through our proprietary Startup OS framework."
    },
    {
      question: "How does the selection process work?",
      answer: "We select builders, not just ideas. Our process involves a rigorous evaluation of founder grit, technical capability, and execution speed. We accept less than 1% of applicants."
    },
    {
      question: "What is Startup OS?",
      answer: "Startup OS is our execution engine—a modular system of tools, frameworks, and operator guidance designed to eliminate technical debt and accelerate growth."
    },
    {
      question: "Do you take equity?",
      answer: "Yes, we are aligned with your success. We invest our resources, expertise, and infrastructure in exchange for equity, ensuring our incentives are perfectly balanced with the founders'."
    },
    {
      question: "What stages do you work with?",
      answer: "We primarily focus on the seed through Series A stages, where execution speed and architectural foundations are most critical."
    },
    {
      question: "How is Venture Forge different from a traditional accelerator?",
      answer: "Traditional accelerators focus on theory and perks. We focus on execution and muscle. We don't just give advice; we help you build and scale your engine."
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white selection:bg-vf-orange/30">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-vf-blue leading-[0.9] tracking-tighter mb-8">
              COMMON <br />
              <span className="text-vf-orange italic">QUESTIONS</span>
            </h1>
            <div className="max-w-xl mx-auto relative mt-12">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search for answers..."
                className="w-full bg-gray-50 border border-gray-100 pl-12 pr-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-vf-blue/50 focus:border-vf-blue transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12 shadow-sm">
            {filteredFaqs.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {filteredFaqs.map((faq, i) => (
                  <FAQItem key={i} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <MessageSquare className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">No results found for your search.</p>
              </div>
            )}
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <div className="w-12 h-12 bg-blue-50 text-vf-blue rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-vf-blue mb-2">Build Fast</h4>
                <p className="text-xs text-gray-500">Learn how our systems accelerate your development lifecycle.</p>
             </div>
             <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <div className="w-12 h-12 bg-orange-50 text-vf-orange rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-vf-blue mb-2">Scale Real</h4>
                <p className="text-xs text-gray-500">Understand our approach to genuine market expansion.</p>
             </div>
             <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-vf-blue mb-2">Trust Policy</h4>
                <p className="text-xs text-gray-500">Read about our transparency and integrity standards.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-vf-blue mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-8 font-light">
            If you couldn't find the answer you were looking for, feel free to reach out to our team directly.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-vf-blue text-white font-bold rounded-sm hover:bg-slate-800 transition-all uppercase tracking-widest text-xs"
          >
            Contact Support
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
