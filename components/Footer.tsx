import Link from 'next/link';
import { Instagram, Facebook,  Mail, MapPin, Phone, ArrowUpRight, Heart } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/meal-plans', label: 'Meal Plans' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/survey', label: 'Early Access' },
    { href: '/contact_us', label: 'Contact Us' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/maakhana', label: 'Instagram', gradient: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500' },
    { icon: Facebook, href: 'https://facebook.com/maakhana', label: 'Facebook', gradient: 'hover:bg-blue-600' },
   { icon: FaXTwitter, href: "https://x.com/maakhana", label: "X",  gradient: "hover:bg-black hover:text-white transition-colors duration-200"}
  ];

  return (
    <footer className="relative bg-secondary/30 pt-20 pb-10 overflow-hidden">

      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 bg-white rounded-xl shadow-sm border border-border flex items-center justify-center group-hover:rotate-6 transition-transform duration-500">
                <Image
                  src="/maa_khaana.png"
                  alt="Maakhana Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-poppins font-bold text-foreground">
                MAA<span className="text-primary">KHANA</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Authentic, home-style meals delivered to your doorstep. <span className="font-semibold text-primary">Maakhana means "Maa ke haato ka khana".</span>
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 hover:text-white hover:-translate-y-1 hover:shadow-lg ${social.gradient}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Col */}
          <div className="lg:col-span-2">
            <h4 className="font-poppins font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Explore</h4>
            <ul className="space-y-3">
              {quickLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group">
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-3">
            <h4 className="font-poppins font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Service Areas</h4>
            <ul className="space-y-3">
              {[
                { name: 'Greater Noida', status: 'active' },
                { name: 'Noida Sector 62', status: 'coming' },
                { name: 'Noida Extension', status: 'coming' },
                { name: 'Delhi', status: 'coming' },
              ].map((area) => (
                <li key={area.name} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className={`w-1.5 h-1.5 rounded-full ${area.status === 'active' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-amber-400'}`} />
                  {area.name}
                  {area.status === 'coming' && <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">SOON</span>}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-poppins font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Get in Touch</h4>
            <div className="space-y-4">
              <a href="tel:+919315709293" className="flex items-center gap-3 p-3 rounded-xl bg-white border border-border hover:border-primary/50 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Call Us</p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">+91 9315709293</p>
                </div>
              </a>

              <a href="mailto:maakhanafoodservice@gmail.com" className="flex items-center gap-3 p-3 rounded-xl bg-white border border-border hover:border-primary/50 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Email Us</p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">maakhanafoodservice@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            © {currentYear} Maakhana. Crafted with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> in India.
          </p>
          <div className="flex gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/refund" className="hover:text-primary transition-colors">Refund</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
