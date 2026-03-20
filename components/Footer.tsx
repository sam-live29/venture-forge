
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Github, Youtube, Mail, ArrowRight, Globe, Shield, FileText, Info, Rocket, Zap, Users, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'Home', path: '/', icon: <Globe className="w-4 h-4" /> },
      { name: 'About', path: '/about', icon: <Info className="w-4 h-4" /> },
      { name: 'Partners', path: '/partners', icon: <ArrowRight className="w-4 h-4" /> },
      { name: 'Transparency', path: '/transparency', icon: <Shield className="w-4 h-4" /> },
      { name: 'FAQ', path: '/faq', icon: <MessageSquare className="w-4 h-4" /> },
    ],
    programs: [
      { name: 'Startup OS', path: '/accelerator' },
      { name: 'Accelerator', path: '/accelerator' },
      { name: 'Apply as Founder', path: '/apply' },
    ],
    shortcuts: [
      { name: 'Apply Now', path: '/apply', icon: <Rocket className="w-4 h-4" />, color: 'bg-vf-blue' },
      { name: 'Partner with Us', path: '/partners', icon: <Users className="w-4 h-4" />, color: 'bg-vf-orange' },
      { name: 'Startup OS', path: '/accelerator', icon: <Zap className="w-4 h-4" />, color: 'bg-emerald-500' },
      { name: 'Contact Support', path: '/contact', icon: <MessageSquare className="w-4 h-4" />, color: 'bg-zinc-800' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Legal Notice', path: '/legal' },
    ],
    social: [
      { name: 'LinkedIn', url: 'https://linkedin.com/company/ventureforge', icon: <Linkedin className="w-5 h-5" /> },
      { name: 'GitHub', url: 'https://github.com/ventureforge', icon: <Github className="w-5 h-5" /> },
      { name: 'YouTube', url: 'https://youtube.com/@ventureforge', icon: <Youtube className="w-5 h-5" /> },
      { name: 'Twitter', url: 'https://twitter.com/ventureforge', icon: <Twitter className="w-5 h-5" /> },
      { name: 'Instagram', url: 'https://instagram.com/ventureforge', icon: <Instagram className="w-5 h-5" /> },
    ]
  };

  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 mt-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vf-blue via-vf-orange to-emerald-500"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-vf-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-vf-orange/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center group">
              <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                <img 
                  src="https://raw.githubusercontent.com/Venture-Forge/assets/main/logo.png" 
                  alt="Venture Forge" 
                  className="h-8 w-auto invert brightness-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.querySelector('.logo-text')?.classList.remove('hidden');
                  }}
                />
                <span className="logo-text hidden text-xl font-black text-white tracking-tighter">VENTURE FORGE</span>
              </div>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Venture Forge is a founder-first ecosystem helping early-stage startups through Startup OS — the operating system for execution-driven growth.
            </p>
            <div className="flex items-center space-x-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 text-zinc-400 hover:bg-vf-blue hover:text-white transition-all duration-300 border border-zinc-800"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Shortcuts Column */}
          <div>
            <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-8">Quick Actions</h3>
            <div className="grid grid-cols-1 gap-3">
              {footerLinks.shortcuts.map((shortcut) => (
                <Link 
                  key={shortcut.name}
                  to={shortcut.path}
                  className="flex items-center p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900 transition-all group"
                >
                  <div className={`w-8 h-8 rounded-lg ${shortcut.color} flex items-center justify-center text-white mr-3 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform`}>
                    {shortcut.icon}
                  </div>
                  <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">{shortcut.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="grid grid-cols-2 gap-8 lg:gap-4">
            <div>
              <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-8">Company</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-vf-blue mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-8">Programs</h3>
              <ul className="space-y-4">
                {footerLinks.programs.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-vf-orange mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-8">
            <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-8">Stay Updated</h3>
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50">
              <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                Join 2,000+ founders receiving our weekly execution playbook.
              </p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-vf-blue/50 focus:border-vf-blue transition-all text-white placeholder:text-zinc-600"
                />
                <button 
                  type="submit"
                  className="w-full py-3 bg-vf-blue text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-blue-600 transition-all active:scale-[0.98] shadow-lg shadow-vf-blue/20"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="flex items-center text-xs text-zinc-500 px-2">
              <Mail className="w-4 h-4 mr-3 text-vf-orange" />
              <a href="mailto:ventureforge.corp@gmail.com" className="hover:text-white transition-colors">ventureforge.corp@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-8">
            {footerLinks.legal.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">
              &copy; {currentYear} VENTURE FORGE. ALL SYSTEMS NOMINAL.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
