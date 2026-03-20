
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Accelerator from './pages/Accelerator';
import Partners from './pages/Partners';
import Apply from './pages/Apply';
import Transparency from './pages/Transparency';
import Methodology from './pages/Methodology';
import Team from './pages/Team';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Legal from './pages/Legal';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Startup OS', path: '/accelerator' },
    { name: 'Partners', path: '/partners' },
    { name: 'Methodology', path: '/methodology' },
    { name: 'Team', path: '/team' },
    { name: 'Transparency', path: '/transparency' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="https://raw.githubusercontent.com/Venture-Forge/assets/main/logo.png" 
                alt="Venture Forge" 
                className="h-12 w-auto py-1"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.querySelector('.logo-text')?.classList.remove('hidden');
                }}
              />
              <span className="logo-text hidden text-2xl font-bold text-vf-blue tracking-tight">VENTURE FORGE</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? 'text-vf-orange border-b-2 border-vf-orange'
                    : 'text-gray-600 hover:text-vf-blue transition-colors'
                } px-1 pt-1 text-sm font-medium`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/apply"
              className="bg-vf-blue text-white px-6 py-2.5 rounded-sm text-sm font-semibold hover:bg-slate-800 transition-all"
            >
              Apply as Founder
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-vf-blue focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-vf-blue hover:bg-gray-50"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/apply"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 mt-4 rounded-sm text-base font-semibold bg-vf-blue text-white text-center"
          >
            Apply as Founder
          </Link>
        </div>
      )}
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-transparent">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/accelerator" element={<Accelerator />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/transparency" element={<Transparency />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
