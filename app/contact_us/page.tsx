'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, Instagram, Facebook } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! We\'ll get back to you soon 🚀');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
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
      desc: "Mon-Sat, 9 AM - 8 PM"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      value: "hello@maakhana.com",
      link: "mailto:hello@maakhana.com",
      desc: "We reply within 24 hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Noida & Greater Noida",
      link: null,
      desc: "Currently serving NCR"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp",
      value: "Chat with us",
      link: "https://wa.me/919315709293",
      desc: "Quick responses guaranteed"
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
    
    <div  className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <Navbar/> 
     
      <section className="relative bg-gradient-to-br from-orange-500 to-amber-500 pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Let&apos;s Talk! 💬
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Got questions? Ideas? Just wanna say hi? We&apos;re all ears. Hit us up anytime!
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 px-6 -mt-10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <Link
                key={idx}
                href={info.link || '#'}
                target={info.link?.startsWith('http') ? '_blank' : undefined}
                rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-200 ${!info.link ? 'cursor-default pointer-events-none' : ''}`}
              >
                <div className="text-orange-500 mb-4">{info.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{info.title}</h3>
                <p className="text-gray-900 font-semibold mb-1">{info.value}</p>
                <p className="text-sm text-gray-600">{info.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* B2B & B2C Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Who We Serve 🎯</h2>
            <p className="text-xl text-gray-600">From individuals to enterprises, we&apos;ve got everyone covered</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* B2C Card */}
            <div className="bg-white rounded-3xl p-10 border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🍱</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">B2C - Individual Orders</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Perfect for students, working professionals, and gym enthusiasts who want healthy, home-cooked meals delivered to their doorstep.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold">✓</span>
                  <p className="text-gray-700"><strong>Flexible Plans:</strong> Daily, weekly, or monthly subscriptions</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold">✓</span>
                  <p className="text-gray-700"><strong>Custom Meals:</strong> Home-style comfort food or high-protein gym meals</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold">✓</span>
                  <p className="text-gray-700"><strong>Scheduled Delivery:</strong> Choose your breakfast, lunch, or dinner slots</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold">✓</span>
                  <p className="text-gray-700"><strong>Affordable Pricing:</strong> Meal plans starting from ₹60 per meal</p>
                </div>
              </div>
              <Link
                href="https://wa.me/919315709293?text=Hi! I want to know more about individual meal plans"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full"
              >
                <Phone className="w-5 h-5" />
                Order Now
              </Link>
            </div>

            {/* B2B Card */}
            <div className="bg-white rounded-3xl p-10 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">B2B - Corporate Solutions</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Catering services for offices, PGs, hostels, gyms, and events. Keep your team fueled with quality meals.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">✓</span>
                  <p className="text-gray-700"><strong>Bulk Orders:</strong> Corporate meal plans for 10-500+ people</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">✓</span>
                  <p className="text-gray-700"><strong>PG & Hostel Tie-ups:</strong> Monthly meal contracts with special rates</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">✓</span>
                  <p className="text-gray-700"><strong>Event Catering:</strong> Office parties, training sessions, seminars</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">✓</span>
                  <p className="text-gray-700"><strong>Custom Menu:</strong> Tailored meal options based on your requirements</p>
                </div>
              </div>
              <Link
                href="https://wa.me/919315709293?text=Hi! I want to discuss B2B partnership opportunities"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full"
              >
                <MessageSquare className="w-5 h-5" />
                Partner With Us
              </Link>
            </div>
          </div>

          {/* Extra Info */}
          <div className="mt-12 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-2xl p-8 border border-gray-200">
            <div className="text-center">
              <h4 className="text-2xl font-bold mb-3 text-gray-900">Not Sure Which Plan is Right for You?</h4>
              <p className="text-gray-600 text-lg mb-6">
                No worries! Drop us a message and we&apos;ll help you find the perfect meal solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:+919315709293"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </Link>
                <Link
                  href="mailto:hello@maakhana.com"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 border-2 border-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Form + Info */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Send Us a Message 📨</h2>
                <p className="text-gray-600 text-lg">
                  Fill out the form and we&apos;ll get back to you ASAP. Promise, no spam—just good vibes.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white text-gray-900"
                    placeholder="What should we call you?"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white text-gray-900"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white text-gray-900"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white text-gray-900"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none bg-white text-gray-900"
                    placeholder="Tell us everything..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </div>

            {/* Right Side - Quick Actions + FAQs */}
            <div className="space-y-8">
              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-2xl text-white shadow-xl">
                <MessageSquare className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Need Instant Help?</h3>
                <p className="mb-6 text-green-50">
                  WhatsApp us for quick responses. We&apos;re usually online and ready to help!
                </p>
                <Link
                  href="https://wa.me/919315709293"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-6 py-3 rounded-xl font-bold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 w-full"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp Us Now
                </Link>
              </div>

              {/* Business Hours */}
              <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
                <Clock className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Business Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Monday - Saturday:</strong> 9:00 AM - 8:00 PM</p>
                  <p><strong>Sunday:</strong> 10:00 AM - 6:00 PM</p>
                  <p className="text-sm text-gray-600 mt-4">
                    📍 Deliveries happen throughout the day based on your meal schedule!
                  </p>
                </div>
              </div>

              {/* Quick FAQs */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-bold mb-6 text-gray-900">Quick Answers 💡</h3>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                      <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                      <p className="text-sm text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Follow the Vibe 🔥</h3>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </Link>
                  <Link
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Facebook className="w-5 h-5" />
                    Facebook
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p className="text-lg">Made with 🧡 in Greater Noida</p>
          <p className="mt-2">Maakhana © 2024. All rights reserved.</p>
        </div>
      </footer>
      <Footer/>
    </div>
  );
}