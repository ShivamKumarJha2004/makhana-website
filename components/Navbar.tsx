'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight, Phone, Mail } from 'lucide-react';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/meal-plans', label: 'Meal Plans' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/survey', label: 'Early Access' },
  { href: '/contact_us', label: 'Contact Us' },
];

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 8); // very small scroll
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        backdrop-blur-xl
        ${isScrolled
          ? 'bg-white/90 shadow-md py-2'
          : 'bg-white/10 py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group z-50">
            <div className="w-10 h-10 md:w-12 md:h-12    flex items-center justify-center transition-all duration-300 group-hover:scale-110">
              <Image
                src="/maa_khaana.png"
                alt="Maakhana Logo"
                width={50}
                height={50}
                priority
                className="object-contain w-8 h-8 md:w-10 md:h-10"
              />
            </div>
            <span className="text-xl md:text-2xl font-poppins font-bold text-[#FF6B00] drop-shadow-sm">
              MAAKHANA
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex items-center bg-white/20 backdrop-blur-md rounded-full px-2 py-1 border border-white/30">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm lg:text-base text-foreground/80 hover:text-orange-600 transition font-medium relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4 rounded-full" />
                </Link>
              ))}
            </div>

           <ul className="space-y-3">
              <li>
                <Link
                  href="tel:+919315709293"
                  className="flex items-center space-x-2 text-black hover:text-primary transition-colors duration-200 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 9315709293</span>
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@maakhana.com"
                  className="flex items-center space-x-2 text-black hover:text-primary transition-colors duration-200 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>hello@maakhana.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 p-2 rounded-lg hover:bg-black/10 transition"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden transition-all duration-300
          ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
        `}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-foreground hover:text-orange-600 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    
    </nav>
  );
}
