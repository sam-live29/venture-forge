
import React from 'react';
import { motion } from 'motion/react';
import { Shield, Eye, Lock, Globe, Mail } from 'lucide-react';

const Privacy: React.FC = () => {
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
             <div className="w-16 h-16 bg-blue-50 text-vf-blue rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-vf-blue leading-[0.9] tracking-tighter mb-8">
              PRIVACY <br />
              <span className="text-vf-orange italic">POLICY</span>
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
              <h2 className="text-2xl font-bold text-vf-blue mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed">
                We collect information you provide directly to us when you apply for our programs, sign up for our newsletter, or contact us. This includes your name, email address, company details, and any other information you choose to provide.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-vf-blue mb-4">2. How We Use Your Information</h2>
              <ul className="space-y-3 text-gray-600 list-disc pl-5">
                <li>To evaluate and process your applications.</li>
                <li>To communicate with you about our services and updates.</li>
                <li>To improve and optimize our website and user experience.</li>
                <li>To comply with legal obligations and protect our rights.</li>
              </ul>
            </div>

            <div>
               <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 mb-8">
                  <div className="flex items-center space-x-3 mb-4 text-vf-orange">
                    <Lock className="w-5 h-5" />
                    <h3 className="font-bold uppercase tracking-widest text-[10px]">Security Protocol</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.
                  </p>
               </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-vf-blue mb-4">3. Data Sharing</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell your personal information. We may share data with trusted service providers who assist us in operating our website and providing our services, under strict confidentiality agreements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-vf-blue mb-4">4. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed">
                You have the right to access, correct, or delete your personal data. Contact us at ventureforge.corp@gmail.com to exercise these rights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-xs">
          <p>If you have any questions regarding this Privacy Policy, please reach out.</p>
          <div className="mt-4 flex items-center justify-center space-x-4">
            <a href="mailto:ventureforge.corp@gmail.com" className="hover:text-vf-blue transition-colors flex items-center">
              <Mail className="w-3 h-3 mr-2" />
              Contact Us
            </a>
            <span>|</span>
            <a href="/terms" className="hover:text-vf-blue transition-colors">Terms of Service</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
