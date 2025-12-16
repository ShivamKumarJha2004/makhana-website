'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen
        ? 'bg-white/95 backdrop-blur-lg border-b border-orange-100 shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
          
          <div className="w-10 h-10 bg-white-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 icon-box-glow">
            <Image
           src="/maa_khaana.png"
            alt="Food Icon"
              width={50}
           height={50}
            className="object-contain"
               />
           </div>
            <span className="text-2xl font-poppins font-bold text-gradient">
              MAAKHANA
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
           <ul className="space-y-3">
              <li>
                <Link
                  href="tel:+919315709293"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 9315709293</span>
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@maakhana.com"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>hello@maakhana.com</span>
                </a>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-white/95 backdrop-blur-lg border-b border-orange-100 shadow-lg">
          <div className="px-4 py-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link
                href="tel:+919315709293"
                className="flex items-center justify-center space-x-2 bg-gray-900 text-white px-4 py-3 rounded-full font-semibold w-full"
              >
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </Link>
              <a
                href="mailto:hello@maakhana.com"
                className="flex items-center justify-center space-x-2 bg-white border border-gray-200 text-gray-900 px-4 py-3 rounded-full font-semibold w-full"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
            <Link
              href="https://maakhana-survey.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-400 to-orange-500 text-black px-6 py-3 rounded-full font-semibold w-full btn-shine"
            >
              <Phone className="w-4 h-4" />
              <span>Order Now</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
