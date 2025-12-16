'use client';

import { Search, Clock, CheckCircle, Repeat, MapPin, Shield, ThumbsUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Pick Your Meal',
      description: 'Browse home-style comfort food or high-protein gym meals. Choose what fits your vibe.',
      color: 'from-orange-300 to-orange-400',
    },
    {
      number: '02',
      icon: Clock,
      title: 'Pick Your Time',
      description: 'Select breakfast (7-9 AM), lunch (12-2 PM), or dinner (7-9 PM). Your schedule, your rules.',
      color: 'from-orange-400 to-orange-500',
    },
    {
      number: '03',
      icon: CheckCircle,
      title: 'Eat Stress-Free',
      description: 'Hot, fresh, hygienic meals delivered right to your door. No surge pricing. No BS.',
      color: 'from-orange-500 to-red-500',
    },
    {
      number: '04',
      icon: Repeat,
      title: 'Repeat Daily',
      description: 'Subscribe for weekly or monthly plans and save big. One less thing to worry about.',
      color: 'from-red-500 to-red-600',
    },
  ];

  const features = [
    {
      icon: MapPin,
      title: 'Delivery Zones',
      description: 'Currently serving Noida Sector 62, Greater Noida, and Noida Extension. More areas coming soon!',
    },
    {
      icon: Shield,
      title: 'FSSAI Certified',
      description: 'Our kitchen is FSSAI approved. Fresh ingredients, hygienic packaging, zero compromises.',
    },
    {
      icon: ThumbsUp,
      title: 'Quality Promise',
      description: "Not happy with your meal? We'll make it right. Customer satisfaction is our priority.",
    },
  ];

  const faqs = [
    {
      question: 'What are your delivery timings?',
      answer: 'Breakfast: 7-9 AM, Lunch: 12-2 PM, Dinner: 7-9 PM. Order before 11 PM for next day delivery.',
    },
    {
      question: 'Do you deliver on weekends?',
      answer: "Yes! We deliver 7 days a week. Your hunger doesn't take weekends off, neither do we.",
    },
    {
      question: 'Can I customize my meals?',
      answer: "Absolutely! Got dietary preferences? Let us know. We'll customize meals to fit your needs.",
    },
    {
      question: 'What about food safety?',
      answer: 'Our kitchen is FSSAI certified. We use fresh ingredients daily and maintain strict hygiene standards.',
    },
    {
      question: 'How do I cancel or pause my subscription?',
      answer: "Super easy. Just WhatsApp us 24 hours before your next delivery and we'll handle it.",
    },
    {
      question: "What if I'm not satisfied with my meal?",
      answer: "Hit us up immediately. We'll either replace it or refund you. Your satisfaction matters to us.",
    },
  ];

  return (
    <div className="min-h-screen bg-background noise-overlay relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="orb orb-orange w-96 h-96 -top-20 -left-20 opacity-40 float-slow"></div>
        <div className="orb orb-amber w-[500px] h-[500px] bottom-0 -right-40 opacity-30"></div>
        <div className="orb orb-orange w-64 h-64 top-1/2 left-10 opacity-30 float-medium"></div>
      </div>
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6">
            <span className="text-gradient text-glow">How It Works</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Getting good food has never been this easy. Four simple steps.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
              >
                <div className={`flex-shrink-0 w-full md:w-1/3 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="card-premium p-8 rounded-3xl group">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 icon-box-glow group-hover:scale-110 transition-transform`}>
                      <step.icon className="w-10 h-10 text-black" />
                    </div>
                    <div className="text-6xl md:text-7xl font-poppins font-bold text-orange-500 mb-4 group-hover:text-orange-500/20 transition-colors">
                      {step.number}
                    </div>
                  </div>
                </div>

                <div className={`flex-1 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-orange-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Why <span className="text-gradient text-glow">MAAKHANA</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              {"We're not just another food delivery app"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card-premium p-8 rounded-2xl group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-orange-500 rounded-2xl flex items-center justify-center mb-6 icon-box-glow group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-poppins font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              <span className="text-gradient">FAQs</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Got questions? We got answers.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card-premium p-6 md:p-8 rounded-2xl group"
              >
                <h3 className="text-xl md:text-2xl font-poppins font-bold mb-3 text-primary group-hover:text-amber-500 transition-colors">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-background to-orange-500/10">
        <div className="max-w-4xl mx-auto">
          <div className="card-premium p-8 md:p-12 rounded-3xl text-center">
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">
              Still have questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Hit us up on WhatsApp. We're here to help!
            </p>
            <Link
              href="https://maakhana-survey.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl pulse-glow btn-shine"
            >
              <span>Chat With Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            Ready to <span className="text-gradient">Start?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get early access discount. Takes 45 seconds. 🚀
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/meal-plans"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl pulse-glow btn-shine"
            >
              <span>View Meal Plans</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/survey"
              className="inline-flex items-center justify-center space-x-2 glass-effect px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 gradient-border"
            >
              <span>Get Early Access</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
