import React, { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="fixed w-full top-4 z-50 px-4">
      <nav className="backdrop-blur-md bg-black/60 h-[72px] max-w-[900px] mx-auto rounded-[32px] border border-white/10">
        <div className="container mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-full relative">
            {/* Logo */}
            <a href="/" className="flex items-center absolute -top-14 md:left-0 left-1/2 md:transform-none -translate-x-1/2">
              <img 
                src="https://i.imgur.com/y0o5Ajk.png" 
                alt="Automatix - Home"
                className="h-[180px] w-auto object-contain"
                loading="eager"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'fallback-logo.png';
                }}
              />
            </a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8 ml-[200px]">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="nav-link text-white/80 hover:text-white transition-colors duration-300 text-base font-medium"
              >
                Comment ça marche?
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="nav-link text-white/80 hover:text-white transition-colors duration-300 text-base font-medium"
              >
                Tarifs
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="https://cal.automascale.com/alexisdubain/audit-offert"
                target="_blank"
                rel="noopener noreferrer"
                className="animated-button group py-3 px-6 text-sm relative inline-flex items-center"
              >
                <div className="glow-effect"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Votre audit offert!
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path 
                      d="M3.33337 8H12.6667" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M8 3.33337L12.6667 8.00004L8 12.6667" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden absolute right-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M4 6H20M4 12H20M4 18H20" 
                  stroke="#9CA3AF" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-[80px] left-0 w-full backdrop-blur-xl bg-black/80 rounded-2xl p-6 border border-white/10 shadow-lg md:hidden">
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="nav-link text-white/80 hover:text-white transition-colors duration-300 text-base font-medium text-left"
                >
                  Comment ça marche?
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="nav-link text-white/80 hover:text-white transition-colors duration-300 text-base font-medium text-left"
                >
                  Tarifs
                </button>
                <a
                  href="https://cal.automascale.com/alexisdubain/audit-offert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animated-button w-full justify-center mt-4 py-3 px-6 text-sm relative inline-flex items-center"
                >
                  <div className="glow-effect"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    Votre audit offert!
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 16 16" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path 
                        d="M3.33337 8H12.6667" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      <path 
                        d="M8 3.33337L12.6667 8.00004L8 12.6667" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}
