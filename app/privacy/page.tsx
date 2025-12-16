'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Lock, Info, Phone } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Navbar */}
      <Navbar />

      {/* PAGE WRAPPER (IMPORTANT FIX) */}
      {/* pt-20 = navbar height space */}
      <main className="pt-20">

        {/* HERO */}
        <section className="relative pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/15 via-orange-400/5 to-background"></div>

          <div className="relative max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 icon-box-glow">
              <Shield className="w-10 h-10 text-black" />
            </div>

            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
              <span className="text-gradient text-glow">Privacy Policy</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trust matters. Here’s how MAAKHANA protects your data.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-10">

            {/* Intro */}
            <div className="card-premium p-8 md:p-10 rounded-3xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                MAAKHANA (“we”, “our”, “us”) is a home-style tiffin service
                providing freshly cooked meals to students, working professionals,
                and residents. We respect your privacy and are committed to
                protecting your personal information.
              </p>
            </div>

            {/* Information Collected */}
            <div className="card-premium p-8 md:p-10 rounded-3xl">
              <div className="flex items-center mb-4 space-x-3">
                <Info className="w-6 h-6 text-orange-500" />
                <h2 className="text-2xl font-poppins font-bold">
                  Information We Collect
                </h2>
              </div>

              <ul className="space-y-3 text-lg text-muted-foreground">
                <li>• Name, phone number, email address</li>
                <li>• Delivery address</li>
                <li>• Meal preferences & subscription details</li>
                <li>• Basic technical data (IP, browser)</li>
              </ul>
            </div>

            {/* Usage */}
            <div className="card-premium p-8 md:p-10 rounded-3xl">
              <div className="flex items-center mb-4 space-x-3">
                <Lock className="w-6 h-6 text-orange-500" />
                <h2 className="text-2xl font-poppins font-bold">
                  How We Use Your Data
                </h2>
              </div>

              <ul className="space-y-3 text-lg text-muted-foreground">
                <li>• To prepare & deliver your meals on schedule</li>
                <li>• Order updates & customer support</li>
                <li>• Improving food quality & service</li>
              </ul>

              <p className="mt-4 font-semibold text-foreground">
                We never sell or rent your personal data.
              </p>
            </div>

            {/* Security */}
            <div className="card-premium p-8 md:p-10 rounded-3xl">
              <h2 className="text-2xl font-poppins font-bold mb-4">
                Data Security
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We use reasonable security measures to protect your data.
                However, no online service can guarantee 100% security.
              </p>
            </div>

            {/* Cookies */}
            <div className="card-premium p-8 md:p-10 rounded-3xl">
              <h2 className="text-2xl font-poppins font-bold mb-4">
                Cookies & Tracking
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our website may use cookies to improve user experience.
                You can disable cookies via browser settings.
              </p>
            </div>

            {/* Updates */}
            <div className="card-premium p-8 md:p-10 rounded-3xl">
              <h2 className="text-2xl font-poppins font-bold mb-4">
                Policy Updates
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This policy may be updated from time to time. Changes will be
                reflected on this page.
              </p>
            </div>

            {/* Contact */}
            <div className="card-premium p-8 md:p-10 rounded-3xl text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 icon-box-glow">
                <Phone className="w-7 h-7 text-black" />
              </div>

              <h2 className="text-2xl font-poppins font-bold mb-4">
                Contact Us
              </h2>

              <p className="text-lg text-muted-foreground">
                📧 support@maakhana.com <br />
                📞 +91-9315709293 <br />
                📍 Noida & Greater Noida
              </p>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
