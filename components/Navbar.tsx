'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/meal-plans', label: 'Meal Plans' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/survey', label: 'Early Access' },
    { href: '/contact_us', label: 'Contact Us' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'glass-medium shadow-lg py-2'
          : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group z-50">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-500/20 backdrop-blur-sm rounded-xl border border-white/30" />
              <Image
                src="/maa_khaana.png"
                alt="Maakhana Logo"
                width={50}
                height={50}
                className="relative z-10 object-contain w-8 h-8 md:w-10 md:h-10"
              />
            </div>
            <span className="text-xl md:text-2xl font-poppins font-bold text-gradient drop-shadow-sm">
              MAAKHANA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <div className="flex items-center glass-light rounded-full px-2 py-1.5 mr-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm lg:text-base text-foreground/80 hover:text-primary transition-colors duration-300 font-medium group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 group-hover:w-3/4 rounded-full" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="https://maakhana-survey.vercel.app/"
              target="_blank"
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 group btn-shine"
            >
              <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
              <span>Order Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 text-foreground p-2.5 rounded-xl hover:bg-black/5 transition-all duration-300 active:scale-95"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 block w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'top-3 rotate-45' : 'top-1'}`} />
              <span className={`absolute left-0 top-3 block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 block w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'top-3 -rotate-45' : 'top-5'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex flex-col h-full pt-24 px-8 pb-8">
            <div className="flex-1 flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-semibold text-foreground hover:text-primary transition-all duration-300 py-3 px-4 rounded-xl hover:bg-orange-50 transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                    }`}
                  style={{ transitionDelay: `${150 + index * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className={`pt-6 border-t border-gray-100 transform transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '400ms' }}>
              <Link
                href="https://maakhana-survey.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-orange-500/25 transform active:scale-95 transition-all btn-shine"
              >
                <Sparkles className="w-5 h-5" />
                <span>Order Food Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
