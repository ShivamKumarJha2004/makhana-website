'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, Instagram, Facebook, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { FaWhatsapp, FaX, FaXTwitter } from 'react-icons/fa6';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! We\'ll get back to you soon 🚀');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      value: "+91 9315709293",
      link: "tel:+919315709293",
      desc: "Mon-Sat, 9 AM - 8 PM",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      value: "maakhanafoodservice@gmail.com",
      link: "mailto:maakhanafoodservice@gmail.com",
      desc: "We reply within 24 hours",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Noida & Greater Noida",
      link: null,
      desc: "Currently serving NCR",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: "WhatsApp",
      value: "Chat with us",
      link: "https://wa.me/919315709293",
      desc: "Quick responses guaranteed",
      color: "from-green-600 to-green-500"
    }
  ];

  const faqs = [
    {
      q: "What are your delivery timings?",
      a: "We deliver breakfast (7-9 AM), lunch (12-2 PM), and dinner (7-9 PM). You can schedule your preferred time slot."
    },
    {
      q: "Do you cater to dietary preferences?",
      a: "Absolutely! We have meal plans for everyone - home-style comfort food, high-protein gym meals, veg, non-veg, and custom options."
    },
    {
      q: "What's your minimum order?",
      a: "No minimum order! You can order a single meal or subscribe to our weekly/monthly plans for better pricing."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-radial from-orange-200/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-gradient-radial from-amber-200/20 to-transparent rounded-full blur-3xl" />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 glass-light px-6 py-2.5 rounded-full mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Get In Touch</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight opacity-0 animate-fade-in-up stagger-1">
            Let's Talk! <span className="inline-block animate-wiggle">💬</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up stagger-2">
            Got questions? Ideas? Just wanna say hi? We're all ears. Hit us up anytime!
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-8 px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {contactInfo.map((info, idx) => (
              <Link
                key={idx}
                href={info.link || '#'}
                target={info.link?.startsWith('http') ? '_blank' : undefined}
                rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`card-premium p-6 rounded-2xl group ${!info.link ? 'cursor-default pointer-events-none' : ''} opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 icon-box-glow shadow-lg`}>
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold mb-1">{info.title}</h3>
                <p className="font-semibold mb-1 text-foreground">{info.value}</p>
                <p className="text-sm text-muted-foreground">{info.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* B2B & B2C Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-orange-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Who We Serve 🎯</h2>
            <p className="text-xl text-muted-foreground">From individuals to enterprises, we've got everyone covered</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* B2C Card */}
            <div className="card-premium rounded-3xl p-8 md:p-10 border-2 border-orange-200/50 hover:border-orange-400/50 transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 icon-box-glow shadow-lg">
                <span className="text-2xl">🍱</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Individual Orders</h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Perfect for students, working professionals, and gym enthusiasts who want healthy, home-cooked meals delivered.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Daily, weekly, or monthly subscriptions',
                  'Home-style comfort or high-protein meals',
                  'Choose breakfast, lunch, or dinner slots',
                  'Meal plans starting from ₹60 per meal',
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
              <Link
                href="https://wa.me/919315709293?text=Hi! I want to know more about individual meal plans"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-orange-500/20 btn-shine"
              >
                <Phone className="w-5 h-5" />
                Order Now
              </Link>
            </div>

            {/* B2B Card */}
            <div className="card-premium rounded-3xl p-8 md:p-10 border-2 border-blue-200/50 hover:border-blue-400/50 transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 icon-box-glow shadow-lg">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Corporate Solutions</h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Catering services for offices, PGs, hostels, gyms, and events. Keep your team fueled with quality meals.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Corporate meal plans for 10-500+ people',
                  'Monthly contracts with special rates',
                  'Office parties, training sessions, seminars',
                  'Tailored menu based on your requirements',
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
              <Link
                href="https://wa.me/919315709293?text=Hi! I want to discuss B2B partnership opportunities"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-blue-500/20 btn-shine"
              >
                <MessageSquare className="w-5 h-5" />
                Partner With Us
              </Link>
            </div>
          </div>

          {/* Help CTA */}
          <div className="mt-10 card-premium p-8 rounded-2xl text-center">
            <h4 className="text-2xl font-bold mb-3">Not Sure Which Plan is Right for You?</h4>
            <p className="text-muted-foreground text-lg mb-6">
              Drop us a message and we'll help you find the perfect meal solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+919315709293"
                className="inline-flex items-center justify-center gap-2 bg-foreground hover:bg-foreground/90 text-background px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </Link>
              <Link
                href="mailto:maakhanafoodservice@gmail.com.com"
                className="inline-flex items-center justify-center gap-2 glass-medium border-2 border-foreground/20 px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Form + Info */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
                  Send a Message
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Drop Us a Line 📨</h2>
                <p className="text-muted-foreground text-lg">
                  Fill out the form and we'll get back to you ASAP. Promise, no spam—just good vibes.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-border bg-card focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="What should we call you?"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-border bg-card focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="+91 9315709293"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-card focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="maakhanafoodservice@gmail.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-card focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-card focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Tell us everything..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 btn-shine"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>

            {/* Right Side */}
            <div className="space-y-6">
              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <MessageSquare className="w-12 h-12 mb-4 relative z-10" />
                <h3 className="text-2xl font-bold mb-2 relative z-10">Need Instant Help?</h3>
                <p className="mb-6 text-green-50 relative z-10">
                  WhatsApp us for quick responses. We're usually online and ready to help!
                </p>
                <Link
                  href="https://wa.me/919315709293"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-6 py-3 rounded-xl font-bold hover:bg-green-50 transition-all duration-300 hover:scale-105 w-full relative z-10"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp Us Now
                </Link>
              </div>

              {/* Business Hours */}
              <div className="card-premium p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center text-white icon-box-glow">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Business Hours</h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground">Monday - Saturday:</strong> 9:00 AM - 8:00 PM</p>
                  <p><strong className="text-foreground">Sunday:</strong> 10:00 AM - 6:00 PM</p>
                  <p className="text-sm mt-4 pt-4 border-t border-border">
                    📍 Deliveries happen throughout the day based on your meal schedule!
                  </p>
                </div>
              </div>

              {/* Quick FAQs */}
              <div className="card-premium p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  Quick Answers <span>💡</span>
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="pb-4 border-b border-border last:border-b-0 last:pb-0">
                      <h4 className="font-semibold mb-2">{faq.q}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="card-premium p-6 rounded-2xl">
                <h3 className="text-lg font-bold mb-4">Follow the Vibe 🔥</h3>
                <div className="flex gap-3">
                  <Link
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </Link>
                   <Link
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <FaXTwitter className="w-5 h-5" />
                    
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
