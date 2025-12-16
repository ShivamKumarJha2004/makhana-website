'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'glass-effect shadow-md py-2'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-3 group z-50">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-orange-500/20">
              <Image
                src="/maa_khaana.png"
                alt="Maakhana Logo"
                width={50}
                height={50}
                className="object-contain w-8 h-8 md:w-10 md:h-10"
              />
            </div>
            <span className="text-xl md:text-2xl font-poppins font-bold text-[#FF6B00] drop-shadow-md pb-1">
              MAAKHANA
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <div className="flex items-center bg-white/5 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/10 mr-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm lg:text-base text-foreground/80 hover:text-orange-600 transition-colors duration-300 font-medium relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4 rounded-full opacity-0 group-hover:opacity-100"></span>
                </Link>
              ))}
            </div>

            <Link
              href="https://maakhana-survey.vercel.app/"
              target="_blank"
              className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/20"
            >
              <span>Order Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 text-foreground p-2 rounded-lg hover:bg-black/5 transition-colors"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-foreground hover:text-orange-600 transition-colors duration-200"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://maakhana-survey.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-orange-500/20 transform active:scale-95 transition-all"
          >
            <span>Order Food Now</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
