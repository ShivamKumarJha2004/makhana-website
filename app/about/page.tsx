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
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Real Food, Real Love',
      desc: 'Every meal is cooked with the same care your mom would. No shortcuts, no compromises.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community First',
      desc: "We're not just feeding you—we're building a fam of health-conscious hustlers.",
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Zero Hassle Energy',
      desc: "Life's busy. We get it. That's why we handle the cooking so you can focus on crushing it.",
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Your Goals = Our Mission',
      desc: "Bulking? Cutting? Just hungry? We've got meal plans that actually work for YOU.",
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const team = [
    {
      role: 'The Vision',
      text: 'Started in a tiny kitchen in Greater Noida with one goal: make healthy eating accessible AF.',
      emoji: '💡',
    },
    {
      role: 'The Why',
      text: "Too many students and hustlers eating trash food. We said nah, there's gotta be a better way.",
      emoji: '🎯',
    },
    {
      role: 'The Movement',
      text: "Now we're serving hundreds of meals daily. Clean food. Fair prices. Zero excuses.",
      emoji: '🚀',
    },
  ];

  return (
    <main className="min-h-screen bg-background relative">
      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-radial from-orange-200/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-gradient-radial from-amber-200/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-radial from-orange-300/15 to-transparent rounded-full blur-3xl" />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 glass-light px-6 py-2.5 rounded-full mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              About Maakhana
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight opacity-0 animate-fade-in-up stagger-1">
            We're Not Just a
            <span className="block text-gradient text-glow">
              Food Service
            </span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up stagger-2">
            We're a movement to fix how next-gen hustlers eat. No more oily mess hall
            food. No more overpriced delivery apps. Just honest, home-cooked
            meals that fuel your grind.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="card-premium p-8 sm:p-12 md:p-16 rounded-3xl relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-400/10 to-amber-400/5 rounded-full blur-2xl" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
                <span className="text-gradient">The Story</span>
                <span className="text-3xl">📖</span>
              </h2>

              <div className="space-y-5 sm:space-y-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p>
                  Living in Noida or Greater Noida as a student or young
                  professional? It's a vibe… until your food options suck.
                </p>

                <div className="space-y-3 pl-6 border-l-4 border-gradient-to-b from-orange-500 to-amber-500 rounded-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🤢</span>
                    <p>Oily PG food that ruins your gut</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">💸</span>
                    <p>Overpriced delivery apps draining your wallet</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">⏰</span>
                    <p>No time for meal prep with your busy schedule</p>
                  </div>
                </div>

                <p>
                  We were tired of choosing between health and budget.
                  So we built <span className="font-bold text-gradient">Maakhana</span>. 🔥
                </p>

                <p className="font-semibold text-foreground text-xl">
                  Clean food. Fair pricing. Delivered on YOUR schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-orange-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We Stand For <span className="inline-block animate-wiggle">💯</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              These aren't buzzwords. This is our code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {values.map((item, i) => (
              <div
                key={i}
                className="card-premium p-8 rounded-3xl group opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 icon-box-glow shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              The Journey <span className="inline-block">🚀</span>
            </h2>
          </div>

          <div className="space-y-0">
            {team.map((item, i) => (
              <div
                key={i}
                className="relative pl-12 pb-8 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.3 + i * 0.15}s` }}
              >
                {/* Timeline line */}
                {i < team.length - 1 && (
                  <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-orange-200" />
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full border-4 border-background shadow-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                <div className="card-premium p-6 rounded-2xl ml-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <h3 className="text-xl font-bold text-gradient">
                      {item.role}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-orange-50/50 to-amber-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-30" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl icon-box-glow">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Mission <span className="inline-block">🎯</span>
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-foreground font-medium leading-relaxed">
            Make healthy, affordable, home-cooked food the{' '}
            <span className="text-gradient font-bold">default choice</span> in NCR.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500" />
            <div className="absolute inset-0 bg-dots-pattern opacity-20" />

            <div className="relative p-8 sm:p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to Join the Fam?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Eat better. Live better. No cap.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/meal-plans"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  <span>Check Meal Plans</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/survey"
                  className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
                >
                  <span>Take the Survey</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
