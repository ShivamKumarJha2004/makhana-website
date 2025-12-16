'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
  Heart,
  Users,
  Zap,
  Target,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Real Food, Real Love',
      desc: 'Every meal is cooked with the same care your mom would. No shortcuts, no compromises.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community First',
      desc: "We're not just feeding you—we're building a fam of health-conscious hustlers.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Zero Hassle Energy',
      desc: "Life's busy. We get it. That's why we handle the cooking so you can focus on crushing it.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Your Goals = Our Mission',
      desc: "Bulking? Cutting? Just hungry? We've got meal plans that actually work for YOU.",
    },
  ];

  const team = [
    {
      role: 'The Vision',
      text: 'Started in a tiny kitchen in Greater Noida with one goal: make healthy eating accessible AF.',
    },
    {
      role: 'The Why',
      text: "Too many students and hustlers eating trash food. We said nah, there's gotta be a better way.",
    },
    {
      role: 'The Movement',
      text: 'Now we’re serving hundreds of meals daily. Clean food. Fair prices. Zero excuses.',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
        <Navbar />
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6 bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-amber-500/5 blur-3xl" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-100 px-6 py-2 rounded-full mb-6 border border-orange-200">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-700">
              About Maakhana
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            We&apos;re Not Just a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Food Service
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re a movement to fix how next-gen hustlers eats. No more oily mess hall
            food. No more overpriced delivery apps. Just honest, home-cooked
            meals that fuel your grind.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-10 md:p-16 border border-gray-200 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-orange-500">
              The Story 📖
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>
                Living in Noida or Greater Noida as a student or young
                professional? It&apos;s a vibe… until your food options suck.
              </p>

              <ul className="space-y-3 pl-6 border-l-4 border-orange-500">
                <li>🤢 Oily PG food</li>
                <li>💸 Overpriced delivery apps</li>
                <li>⏰ No time for meal prep</li>
              </ul>

              <p>
                We were tired of choosing between health and budget.
                So we built Maakhana. 🔥
              </p>

              <p className="font-semibold text-gray-900">
                Clean food. Fair pricing. Delivered on YOUR schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We Stand For 💯
            </h2>
            <p className="text-xl text-gray-600">
              These aren&apos;t buzzwords. This is our code.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="text-orange-500 mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            The Journey 🚀
          </h2>

          <div className="space-y-8">
            {team.map((item, i) => (
              <div key={i} className="relative pl-12 pb-8 border-l-2 border-orange-200">
                <span className="absolute left-0 top-0 w-6 h-6 -translate-x-[13px] bg-orange-500 rounded-full border-4 border-white" />
                <div className="bg-gray-50 p-6 rounded-xl border">
                  <h3 className="text-xl font-bold text-orange-500 mb-2">
                    {item.role}
                  </h3>
                  <p className="text-gray-700 text-lg">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <TrendingUp className="w-16 h-16 text-orange-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Mission 🎯
          </h2>
          <p className="text-2xl md:text-3xl text-gray-700 font-medium">
            Make healthy, affordable, home-cooked food the default choice in NCR.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Join the Fam?
            </h2>
            <p className="text-xl text-white mb-8">
              Eat better. Live better. No cap.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/plans"
                className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800"
              >
                Check Meal Plans
              </Link>

              <Link
                href="/survey"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100"
              >
                Take the Survey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t bg-gray-50">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p className="text-lg">Made with 🧡 in Greater Noida</p>
          <p className="mt-2">Maakhana © 2024</p>
        </div>
      </footer>
      <Footer />
    </main>
  );
}
