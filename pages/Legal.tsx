
import React from 'react';
import { motion } from 'motion/react';
import { Scale, Shield, AlertCircle, Mail } from 'lucide-react';

const Legal: React.FC = () => {
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
             <div className="w-16 h-16 bg-blue-50 text-vf-blue rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Scale className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-vf-blue leading-[0.9] tracking-tighter mb-8">
              LEGAL <br />
              <span className="text-vf-orange italic">NOTICE</span>
            </h1>
            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">General Disclosure & Information</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <h2 className="text-xl font-bold text-vf-blue mb-4">Corporate Information</h2>
              <div className="space-y-4 text-sm text-gray-600">
                <p><strong>Entity Name:</strong> Venture Forge Ecosystems</p>
                <p><strong>Headquarters:</strong> Distributed Global Network</p>
                <p><strong>Contact:</strong> ventureforge.corp@gmail.com</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-bold text-vf-blue flex items-center">
                <Shield className="w-5 h-5 mr-3 text-vf-orange" />
                Regulatory Compliance
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Venture Forge operates in compliance with relevant international startup regulations and data protection standards. We are not a financial institution or investment advisor. Our services are focused exclusively on startup execution and operational support.
              </p>
            </div>

            <div className="space-y-6">
               <h2 className="text-xl font-bold text-vf-blue flex items-center">
                <AlertCircle className="w-5 h-5 mr-3 text-vf-orange" />
                No Investment Advice
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm italic">
                The content on this website does not constitute financial, investment, or legal advice. All information is provided for educational and operational purposes for startup founders and ecosystem partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-xs">
          <p>For more specific legal inquiries, please contact our legal team.</p>
          <div className="mt-4 flex items-center justify-center space-x-4">
            <a href="mailto:ventureforge.corp@gmail.com" className="hover:text-vf-blue transition-colors flex items-center">
              <Mail className="w-3 h-3 mr-2" />
              Legal Support
            </a>
            <span>|</span>
            <a href="/terms" className="hover:text-vf-blue transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="/privacy" className="hover:text-vf-blue transition-colors">Privacy Policy</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
