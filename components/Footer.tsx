import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, ArrowUpRight, Heart } from 'lucide-react';
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
    { icon: Instagram, href: 'https://instagram.com/maakhana', label: 'Instagram', gradient: 'from-pink-500 via-purple-500 to-orange-500' },
    { icon: Facebook, href: 'https://facebook.com/maakhana', label: 'Facebook', gradient: 'from-blue-600 to-blue-500' },
    { icon: Twitter, href: 'https://twitter.com/maakhana', label: 'Twitter', gradient: 'from-sky-500 to-blue-400' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/80 via-amber-50/60 to-orange-100/90" />
      <div className="absolute inset-0 bg-dots-pattern opacity-40" />

      {/* Decorative Orbs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-radial from-orange-300/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-radial from-amber-300/15 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-500/20 rounded-xl border border-orange-200/50" />
                <Image
                  src="/maa_khaana.png"
                  alt="Maakhana Logo"
                  width={50}
                  height={50}
                  className="relative z-10 object-contain w-10 h-10"
                />
              </div>
              <span className="text-2xl font-poppins font-bold text-gradient">
                MAAKHANA
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Healthy, home-cooked, affordable meals delivered on your schedule. Zero hassle. Good food. No cap.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-11 h-11 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg overflow-hidden`}
                  aria-label={social.label}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <social.icon className="relative z-10 w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-poppins font-bold mb-5 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-muted-foreground hover:text-primary transition-all duration-200 text-sm"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-poppins font-bold mb-5 text-foreground">Service Areas</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              {[
                { name: 'Noida Sector 62', active: true },
                { name: 'Greater Noida', active: true },
                { name: 'Noida Extension', active: true },
                { name: 'Delhi', active: false, coming: true },
              ].map((area) => (
                <li key={area.name} className="flex items-center gap-2.5">
                  <div className={`w-2 h-2 rounded-full ${area.active ? 'bg-green-500' : 'bg-amber-400'} ${area.active ? 'animate-pulse' : ''}`} />
                  <span>{area.name}</span>
                  {area.coming && (
                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">
                      Coming Soon
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-poppins font-bold mb-5 text-foreground">Contact Us</h3>
            <ul className="space-y-4 mb-6">
              <li>
                <Link
                  href="tel:+919315709293"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm group"
                >
                  <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                    <Phone className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span>+91 9315709293</span>
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@maakhana.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm group"
                >
                  <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                    <Mail className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span>hello@maakhana.com</span>
                </a>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919315709293"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25 hover:shadow-xl btn-shine"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>

            {/* App Store Buttons */}
            <div className="mt-6 pt-6 border-t border-orange-200/50">
              <p className="text-xs text-muted-foreground mb-4 font-semibold uppercase tracking-wider">
                Download App
              </p>
              <div className="flex gap-3">
                <button className="group flex items-center gap-2.5 bg-white hover:bg-gray-900 px-4 py-2.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg border border-gray-100 hover:border-gray-900 flex-1">
                  <Image
                    src="https://res.cloudinary.com/didkrwhbu/image/upload/v1765633044/461-4616252_apple-logo-apple-computer-transparent-iphone-apple-logo_x1t7hy.png"
                    alt="Apple App Store"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] text-gray-500 group-hover:text-gray-300 transition-colors">Get on</div>
                    <div className="text-xs font-bold text-gray-900 group-hover:text-white transition-colors">App Store</div>
                  </div>
                </button>
                <button className="group flex items-center gap-2.5 bg-white hover:bg-gray-900 px-4 py-2.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg border border-gray-100 hover:border-gray-900 flex-1">
                  <Image
                    src="https://res.cloudinary.com/didkrwhbu/image/upload/v1765632481/playstore_xpuxlq.jpg"
                    alt="Google Play Store"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] text-gray-500 group-hover:text-gray-300 transition-colors">Get on</div>
                    <div className="text-xs font-bold text-gray-900 group-hover:text-white transition-colors">Play Store</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-orange-200/60">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left flex items-center gap-1.5">
              © {currentYear} MAAKHANA. Made with
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              for next-gen hustlers.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary transition-colors relative group">
                Privacy Policy
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link href="/term-of-service" className="hover:text-primary transition-colors relative group">
                Terms of Service
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
