
import React from 'react';
import { motion } from 'motion/react';
import { FileText, CheckCircle2, AlertCircle, Scale, Mail } from 'lucide-react';

const Terms: React.FC = () => {
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
             <div className="w-16 h-16 bg-orange-50 text-vf-orange rounded-2xl flex items-center justify-center mx-auto mb-8">
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-vf-blue leading-[0.9] tracking-tighter mb-8">
              TERMS OF <br />
              <span className="text-vf-orange italic">SERVICE</span>
            </h1>
            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Last updated: March 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 prose prose-slate">
            <div>
              <h2 className="text-2xl font-bold text-vf-blue mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using the Venture Forge website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-vf-blue mb-4">2. Program Applications</h2>
              <p className="text-gray-600 leading-relaxed">
                Submission of an application does not guarantee acceptance into any Venture Forge program. We reserve the right to select participants based on our proprietary criteria.
              </p>
            </div>

            <div className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100 mb-8">
               <div className="flex items-center space-x-3 mb-4 text-vf-blue">
                 <Scale className="w-5 h-5" />
                 <h3 className="font-bold uppercase tracking-widest text-[10px]">Legal Alignment</h3>
               </div>
               <p className="text-sm text-gray-700 leading-relaxed">
                 Our terms are designed to protect both the builder and the ecosystem. We believe in radical transparency in all our legal interactions.
               </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-vf-blue mb-4">3. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                The content on this website, including logos, designs, and text, is the property of Venture Forge and is protected by intellectual property laws. Any unauthorized use is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-vf-blue mb-4">4. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                Venture Forge shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services or website.
              </p>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-red-50 rounded-2xl border border-red-100 italic text-red-800 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <p>These terms are subject to change without notice. It is your responsibility to review them periodically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-xs">
          <p>Need more clarification on our terms?</p>
          <div className="mt-4 flex items-center justify-center space-x-4">
            <a href="mailto:ventureforge.corp@gmail.com" className="hover:text-vf-blue transition-colors flex items-center">
              <Mail className="w-3 h-3 mr-2" />
              Email Legal Team
            </a>
            <span>|</span>
            <a href="/privacy" className="hover:text-vf-blue transition-colors">Privacy Policy</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
