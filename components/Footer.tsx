import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, Utensils } from 'lucide-react';
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
    { icon: Instagram, href: 'https://instagram.com/maakhana', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/maakhana', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/maakhana', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gradient-to-b from-orange-50 to-orange-100 border-t border-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
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
            <p className="text-muted-foreground text-sm leading-relaxed">
              Healthy, home-cooked, affordable meals delivered on your schedule. Zero hassle. Good food. No cap.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary border border-white/10 hover:border-primary flex items-center justify-center transition-all duration-300 group hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-foreground group-hover:text-black transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Noida Sector 62</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Greater Noida</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Noida Extension</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Delhi  (Coming SOON !)</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Contact Us</h3>
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
            <div className="mt-6 space-y-4">
              <a
                href="https://wa.me/919315709293"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-black px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 btn-shine w-full"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

             <div className="pt-4 border-t border-orange-200/50">
  <p className="text-xs text-muted-foreground mb-3 font-semibold">
    DOWNLOAD APP
  </p>

  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

    {/* Apple Store */}
    <button className="group flex items-center gap-4 bg-transparent px-6 py-4 rounded-2xl 
      hover:bg-gray-900 transition-all transform hover:scale-105 shadow-xl 
      w-56 justify-center">

      <div className="w-12 h-12 flex items-center justify-center group-hover:animate-bounce">
        <Image
          src="https://res.cloudinary.com/didkrwhbu/image/upload/v1765633044/461-4616252_apple-logo-apple-computer-transparent-iphone-apple-logo_x1t7hy.png"
          alt="Apple App Store"
          width={48}
          height={48}
          className="object-contain"
        />
      </div>

      <div className="text-left leading-tight transition-colors duration-300">
        <div className="text-xs text-black group-hover:text-white">
          Download on the
        </div>
        <div className="text-lg font-bold text-black group-hover:text-white">
          App Store
        </div>
      </div>
    </button>

    {/* Google Play */}
    <button className="group flex items-center gap-4 bg-transparent px-6 py-4 rounded-2xl 
      hover:bg-gray-900 transition-all transform hover:scale-105 shadow-xl 
      w-56 justify-center">

      <div className="w-12 h-12 flex items-center justify-center group-hover:animate-bounce">
        <Image
          src="https://res.cloudinary.com/didkrwhbu/image/upload/v1765632481/playstore_xpuxlq.jpg"
          alt="Google Play Store"
          width={48}
          height={48}
          className="object-contain"
        />
      </div>

      <div className="text-left leading-tight transition-colors duration-300">
        <div className="text-xs text-black group-hover:text-white">
          GET IT ON
        </div>
        <div className="text-lg font-bold text-black group-hover:text-white">
          Google Play
        </div>
      </div>
    </button>

  </div>
</div>

            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              {currentYear} MAAKHANA. All rights reserved. Made with love for next-gen hustlers.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/term-of-service" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
