'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  FileText,
  Info,
  ShieldCheck,
  RefreshCw,
  Ban,
  Phone
} from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Navbar */}
      <Navbar />

      {/* MAIN WRAPPER (fix navbar overlap) */}
      <main className="pt-20">

        {/* HERO */}
        <section className="relative pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/15 via-orange-400/5 to-background"></div>

          <div className="relative max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 icon-box-glow">
              <FileText className="w-10 h-10 text-black" />
            </div>

            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
              <span className="text-gradient text-glow">Terms of Service</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before using MAAKHANA services.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-10">

            {/* Intro */}
            <div className="card-premium p-8 md:p-10 rounded-3xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to <strong>MAAKHANA</strong>. By accessing or using our
                website, mobile application, or tiffin services, you agree to
                comply with and be bound by these Terms of Service. If you do not
                agree, please do not use our services.
              </p>
            </div>

            {/* Service Overview */}
            <div className="card-premium p-8 md:p-10 rounded-3xl">
              <div className="flex items-center mb-4 space-x-3">
                <Info className="w-6 h-6 text-orange-500" />
                <h2 className="text-2xl font-poppins font-bold">
                  Our Services
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                MAAKHANA provides home-style cooked meals through scheduled
                tiffin deliveries. Services may vary by location, availability,
                and subscription plan.
              </p>
            </div>

            {/* User Responsibilities */}
            <div className="card-premium p-8 md:p-10 rounded-3xl">
              <div className="flex items-center mb-4 space-x-3">
                <ShieldCheck className="w-6 h-6 text-orange-500" />
                <h2 className="text-2xl font-poppins font-bold">
                  User Responsibilities
                </h2>
              </div>

              <ul className="space-y-3 text-lg text-muted-foreground">
                <li>• Provide accurate personal and delivery information</li>
                <li>• Ensure someone is available to receive the meal</li>
                <li>• Use the service for lawful purposes only</li>
              </ul>
            </div>

            {/* Payments */}
            <div className="card-premium p-8 md:p-10 rounded-3xl">
              <div className="flex items-center mb-4 space-x-3">
                <RefreshCw className="w-6 h-6 text-orange-500" />
                <h2 className="text-2xl font-poppins font-bold">
                  Payments & Subscriptions
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                All payments must be made in advance as per the selected plan.
                Subscription pricing, meal count, and delivery schedule are
                defined at the time of purchase.
              </p>
            </div>

            {/* Cancellation */}
            <div className="card-premium p-8 md:p-10 rounded-3xl">
              <div className="flex items-center mb-4 space-x-3">
                <Ban className="w-6 h-6 text-orange-500" />
                <h2 className="text-2xl font-poppins font-bold">
                  Cancellation & Refunds
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Meal cancellations or plan pauses must be requested in advance
                as per our cancellation policy. Refunds, if applicable, are
                processed at our discretion.
              </p>
            </div>

            {/* Liability */}
            <div className="card-premium p-8 md:p-10 rounded-3xl">
              <h2 className="text-2xl font-poppins font-bold mb-4">
                Limitation of Liability
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                MAAKHANA shall not be held liable for any indirect, incidental,
                or consequential damages arising from the use of our services,
                including delivery delays due to unforeseen circumstances.
              </p>
            </div>

            {/* Changes */}
            <div className="card-premium p-8 md:p-10 rounded-3xl">
              <h2 className="text-2xl font-poppins font-bold mb-4">
                Changes to Terms
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We reserve the right to update these Terms of Service at any
                time. Continued use of our services indicates acceptance of the
                updated terms.
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
