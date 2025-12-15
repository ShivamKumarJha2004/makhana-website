'use client';

import { ArrowRight, Sunrise, Utensils, Moon, Flame, Heart, Clock, DollarSign, Shield, Star } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  const deliveryTimeline = [
    {
      icon: Sunrise,
      time: 'Breakfast',
      timing: '7 AM - 9 AM',
      description: 'Start your day right',
      color: 'from-orange-400 to-yellow-500',
    },
    {
      icon: Utensils,
      time: 'Lunch',
      timing: '12 PM - 2 PM',
      description: 'Fuel your hustle',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Moon,
      time: 'Dinner',
      timing: '7 PM - 9 PM',
      description: 'End it on a high note',
      color: 'from-orange-600 to-orange-800',
    },
  ];

  const mealTypes = [
    {
      title: 'Home Style Meals',
      description: 'Missing Ghar ka Khana? We got you covered with authentic home-cooked flavors.',
      features: ['Dal Chawal', 'Roti Sabzi', 'Mom-style Cooking', 'Zero Oil Guilt'],
      icon: Heart,
      color: 'orange',
    },
    {
      title: 'Gym Bro Protein Packs',
      description: 'Chasing gains? High-protein meals designed for your fitness goals.',
      features: ['35g+ Protein', 'Lean Meats', 'Controlled Carbs', 'Meal Prep Done'],
      icon: Flame,
      color: 'red',
    },
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: 'On Your Schedule',
      description: 'Pick your time slot. We deliver when you need it.',
    },
    {
      icon: DollarSign,
      title: 'Actually Affordable',
      description: 'No hidden costs. No surge pricing. Just fair prices.',
    },
    {
      icon: Shield,
      title: 'Hygienic AF',
      description: 'FSSAI approved kitchen. Fresh ingredients daily.',
    },
  ];

  const testimonials = [
    {
      name: 'Rahul S.',
      role: 'Engineering Student',
      text: 'Finally found food that tastes like home. No more oily PG mess food!',
      rating: 5,
    },
    {
      name: 'Priya M.',
      role: 'Working Professional',
      text: 'The protein meals are perfect for my gym routine. Affordable and tasty!',
      rating: 5,
    },
    {
      name: 'Arjun K.',
      role: 'PG Resident',
      text: 'Delivery is always on time. Best decision for my daily meals.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 noise-overlay">
        {/* Decorative Orbs */}
        <div className="orb orb-orange w-96 h-96 -top-48 -left-48 opacity-60"></div>
        <div className="orb orb-amber w-80 h-80 top-1/4 -right-40 opacity-40"></div>
        <div className="orb orb-orange w-64 h-64 bottom-20 left-1/4 opacity-30"></div>

        {/* Floating Food Emojis */}
        <div className="absolute top-32 left-[10%] text-5xl float-slow opacity-60 hidden md:block">🍛</div>
        <div className="absolute top-48 right-[15%] text-4xl float-medium opacity-50 hidden md:block" style={{ animationDelay: '1s' }}>🥗</div>
        <div className="absolute bottom-40 left-[8%] text-4xl float-medium opacity-40 hidden lg:block" style={{ animationDelay: '2s' }}>🍲</div>
        <div className="absolute bottom-32 right-[10%] text-5xl float-slow opacity-50 hidden lg:block" style={{ animationDelay: '0.5s' }}>🥘</div>
        <div className="absolute top-1/2 left-[5%] text-3xl float-slow opacity-30 hidden xl:block" style={{ animationDelay: '1.5s' }}>🌶️</div>
        <div className="absolute top-1/3 right-[8%] text-3xl float-medium opacity-35 hidden xl:block" style={{ animationDelay: '2.5s' }}>🍚</div>

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/15 via-orange-400/5 to-background"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-poppins font-bold mb-6 leading-tight">
              <span className="text-gradient text-glow">Ghar ka Khana,</span>
              <br />
              <span className="text-foreground">delivered on your schedule.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed opacity-0 animate-slide-up stagger-2">
              Home cooked meals. Zero hassle. Scheduled drops that fit your clock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-slide-up stagger-3">
              <Link
                href="/meal-plans"
                className="group inline-flex items-center space-x-2 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl pulse-glow btn-shine"
              >
                <span>Check Meal Plans</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/survey"
                className="inline-flex items-center space-x-2 glass-effect px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 gradient-border"
              >
                <span>Pass the Vibe Check</span>
              </Link>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryTimeline.map((slot, index) => (
              <div
                key={slot.time}
                className="card-premium p-6 rounded-2xl group opacity-0 animate-slide-up"
                style={{ animationDelay: `${0.5 + index * 0.15}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${slot.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 icon-box-glow`}>
                  <slot.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-poppins font-bold mb-2">{slot.time}</h3>
                <p className="text-primary font-semibold mb-2">{slot.timing}</p>
                <p className="text-muted-foreground">{slot.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="card-premium p-8 md:p-12 rounded-3xl">
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6 text-center">
              Yo! <span className="wave inline-block animate-bounce">👋</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                Living in <span className="text-primary font-semibold">Noida</span> or{' '}
                <span className="text-primary font-semibold">Greater Noida</span> usually means oily PG food or
                overpriced delivery apps.
              </p>
              <p className="text-2xl md:text-3xl font-poppins font-bold text-gradient text-glow">
                MAAKHANA fixes that.
              </p>
              <p>
                We bring you <span className="text-primary font-semibold">healthy, home-cooked meals</span> at prices
                that won't make you broke. Whether you miss ghar ka khana or you're grinding at the gym,
                we've got your back.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
              <span className="text-gradient text-glow">Meal Types</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pick what fits your vibe
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mealTypes.map((meal, index) => (
              <div
                key={meal.title}
                className="card-premium p-8 rounded-3xl group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 icon-box-glow">
                  <meal.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-4">
                  {meal.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  {meal.description}
                </p>
                <ul className="space-y-3">
                  {meal.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-orange-500/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            They aren't setting the prices.{' '}
            <span className="text-gradient text-glow">YOU are</span> 🫵
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            No surge pricing. No hidden fees. Just honest food at honest prices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="card-premium p-8 rounded-2xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 icon-box-glow">
                  <item.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-poppins font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <Link
            href="/meal-plans"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl pulse-glow btn-shine"
          >
            <span>Explore Plans</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
              <span className="text-gradient text-glow">Real Talk</span> from Real People
            </h2>
            <p className="text-xl text-muted-foreground">
              No cap. Just honest reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="card-premium p-8 rounded-2xl"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-foreground mb-6 text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-poppins font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto card-premium p-8 md:p-12 rounded-3xl text-center border-2 border-primary/20 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Order Faster on <span className="text-gradient">App</span> 📱
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Get exclusive app-only discounts, track your delivery in real-time, and manage your subscription with ease.
          </p>

    
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
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-background to-orange-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            Ready to <span className="text-gradient text-glow">Eat Better?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get early access discount. Takes 45 seconds. 🚀
          </p>
          <Link
            href="/survey"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-black px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl pulse-glow btn-shine"
          >
            <span>Get Early Access</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
