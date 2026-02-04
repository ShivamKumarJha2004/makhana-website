'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = (): void => {
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

  return (
   <nav
  className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 bg-white lg:bg-transparent`}
>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group relative z-[101]">
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
              <Image
                src="/maa_khaana.png"
                alt="Maakhana Logo"
                width={60}
                height={60}
                priority
                className="object-contain w-full h-full drop-shadow-md rounded-full"
              />
            </div>
            <span className={`text-xl md:text-2xl font-poppins font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-foreground'}`}>
              MAA<span className="text-primary">KHANA</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className={`flex items-center rounded-full px-2 py-1.5 transition-all duration-300 ${isScrolled ? 'bg-secondary/50 border border-border/50' : 'bg-white/40 border border-white/40 backdrop-blur-sm'}`}>
              {navLinks.map((link) => {
  const isActive =
    link.href === '/'
      ? pathname === '/'
      : pathname.startsWith(link.href);
  return (
    <Link
      key={link.href}
      href={link.href}
      className={`relative px-5 py-2.5 text-sm font-semibold transition-colors group 
        ${isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`}
    >
      {link.label}
      <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 
        ${isActive ? 'w-1/2 opacity-100' : 'w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-100'}`} />
    </Link>
  );
})}
            </div>

            <div className="hidden xl:flex items-center gap-4 pl-4 border-l border-border/50">
              <a href="tel:+919315709293" className="group p-2 rounded-full hover:bg-orange-100 transition-colors">
                <Phone className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
              </a>
              <Link href="/contact_us" className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 transition-all active:scale-95">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 z-[201] relative group"
            aria-label="Toggle Menu"
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-white text-black' : 'bg-white/50 backdrop-blur-md text-black'}`}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
         <motion.div
  initial={{ opacity: 0, x: '100%' }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: '100%' }}
  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
  className="fixed inset-0 z-[200] bg-white text-foreground lg:hidden flex flex-col pt-[72px] px-6 overflow-y-auto"
>

            <div className="flex flex-col space-y-6">
              {navLinks.map((link, index) => {
  const isActive =
    link.href === '/'
      ? pathname === '/'
      : pathname.startsWith(link.href);
  return (
    <motion.div
      key={link.href}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.1 }}
    >
      <Link
        href={link.href}
        onClick={() => setIsOpen(false)}
        className={`block text-4xl font-poppins font-bold transition-colors tracking-tight ${isActive ? 'text-primary' : 'text-black hover:text-primary'}`}
      >
        {link.label}
      </Link>
    </motion.div>
  );
})}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto pb-12 space-y-6"
            >
              <div className="w-full h-[1px] bg-border" />
              <div className="flex flex-col gap-4">
                <a href="tel:+919315709293" className="flex items-center gap-4 text-lg font-medium text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  +91 9315709293
                </a>
                <a href="mailto:hello@maakhana.com" className="flex items-center gap-4 text-lg font-medium text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  hello@maakhana.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
