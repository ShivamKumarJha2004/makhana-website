'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { ArrowRight, Sunrise, Utensils, Moon, Flame, Heart, Clock, DollarSign, Shield, Star, Check, X, IndianRupee, Zap, Leaf } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  const deliveryTimeline = [
    {
      icon: Sunrise,
      time: 'Breakfast',
      timing: '7 AM - 9 AM',
      description: 'Kickstart with energy-packed nutrition.',
      gradient: 'from-orange-400 to-amber-500',
      shadow: 'shadow-orange-500/20'
    },
    {
      icon: Utensils,
      time: 'Lunch',
      timing: '12 PM - 2 PM',
      description: 'Power through your day with balanced meals.',
      gradient: 'from-orange-500 to-red-500',
      shadow: 'shadow-red-500/20'
    },
    {
      icon: Moon,
      time: 'Dinner',
      timing: '7 PM - 9 PM',
      description: 'Light, wholesome end to your hustle.',
      gradient: 'from-indigo-500 to-purple-600',
      shadow: 'shadow-purple-500/20'
    },
  ];

  const mealTypes = [
    {
      title: 'Home Style Meals',
      description: 'Authentic flavors that taste just like Mom made them.',
      features: ['Dal Chawal', 'Roti Sabzi', 'Low Oil', 'Gut Friendly'],
      icon: Heart,
      bg: 'bg-orange-50',
      accent: 'text-orange-600',
      border: 'border-orange-100'
    },
    {
      title: 'High-Protein Power',
      description: 'Fuel your gains with macro-calculated meals.',
      features: ['30g+ Protein', 'Lean Meats', 'Complex Carbs', 'No Sugar'],
      icon: Zap,
      bg: 'bg-red-50',
      accent: 'text-red-600',
      border: 'border-red-100'
    },
  ];

  const testimonials = [
    { name: 'Rahul S.', role: 'Student', text: 'No more oily mess. This is actual food.', rating: 5 },
    { name: 'Priya M.', role: 'Corporate', text: 'Saves me 2 hours every day. Worth every rupee.', rating: 5 },
    { name: 'Arjun K.', role: 'Fitness Coach', text: 'The protein macros are actually accurate. Impressive.', rating: 5 },
    { name: 'Neha T.', role: 'Doctor', text: 'Hygienic and on time. My go-to between shifts.', rating: 5 },
    { name: 'Amit R.', role: 'Developer', text: 'Finally, a tiffin service that doesn’t bore me.', rating: 5 },
  ];

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden selection:bg-orange-100 selection:text-orange-900">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-[100px] animate-pulse-slow" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-red-100/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-sm font-bold tracking-wide mb-6">
              ❤️ Maakhana means "Maa ke haato ka khana"
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Ghar ka Khana,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 animate-gradient-x">
                Maa ke haath jaisa.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            Missing home food? We deliver <span className="text-foreground font-semibold">hygienic, home-style meals</span> that taste just like Mom made them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              href="/meal-plans"
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-primary px-8 font-medium text-white transition-all duration-300 hover:bg-orange-600 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
            >
              <span className="mr-2 text-lg">Check Meal Plans</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/survey"
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-border bg-white px-8 font-medium text-foreground transition-all duration-300 hover:bg-gray-50 hover:text-primary hover:border-primary/30"
            >
              Get Early Access
            </Link>
          </motion.div>

          {/* Hero Image / Poster */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 sm:mt-24 relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden glass-medium shadow-2xl border border-white/50"
          >
            {/* Desktop Image */}
            <div className="hidden md:block absolute inset-0">
              <Image
                src="/poster.png"
                alt="Delicious Healthy Food"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Mobile Image */}
            <div className="block md:hidden absolute inset-0 flex items-center justify-center">
              <Image
                src="/mobile_poster.png"
                alt="Delicious Healthy Food Mobile"
                fill
                priority
                className="object-contain scale-90"
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8">
              <p className="text-white/90 text-sm font-medium tracking-widest uppercase">Fresh • Hygienic • Affordable</p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* --- DELIVERY TIMELINE --- */}
      <section className="py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Clockwork precision. <br /><span className="text-primary">Zero delays.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliveryTimeline.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="relative p-8 rounded-3xl bg-white border border-border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-10 rounded-bl-full transition-transform group-hover:scale-110`} />

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-6 ${item.shadow}`}>
                  <item.icon className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-bold mb-2">{item.time}</h3>
                <p className="text-primary font-bold text-sm tracking-wide mb-4 uppercase">{item.timing}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BENTO GRID: WHY US --- */}
      <section className="py-24 px-4 sm:px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">Why <span className="text-primary">Maakhana?</span></h2>
            <p className="text-muted-foreground mt-4 text-lg">Because nothing beats Maa ke haato ka khana.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
            {/* Card 1: Large Feature */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 bg-white rounded-3xl p-8 md:p-12 border border-border flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-8">
                  <Leaf className="w-8 h-8" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Not Just Food. <br />It's <span className="text-green-600">Nutrition.</span></h3>
                <p className="text-muted-foreground text-lg max-w-md">
                  We don't use cheap palm oil or soda. Every meal is cooked with sunflower oil, fresh veggies, and high-quality proteins. It's food your mom would approve of.
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-green-50 rounded-full blur-3xl group-hover:bg-green-100 transition-colors duration-500" />
              <div className="mt-8 flex gap-3 flex-wrap">
                {['No Soda', 'Low Oil', 'Fresh Veggies'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-bold border border-green-100">{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* Card 2: Pocket Friendly */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 border border-border relative overflow-hidden group hover:shadow-lg transition-all component-highlight"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <IndianRupee className="w-24 h-24" />
              </div>
              <DollarSign className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Student Prices</h3>
              <p className="text-muted-foreground text-sm">Packages designed for your pocket money, not your salary.</p>
            </motion.div>

            {/* Card 3: Hygiene */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 border border-border relative overflow-hidden group hover:shadow-lg transition-all"
            >
              <Shield className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">FSSAI Certified</h3>
              <p className="text-muted-foreground text-sm">Commercial grade kitchen. Hairnets, gloves, and daily sanitization.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- MEAL TYPES --- */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {mealTypes.map((meal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative rounded-[2.5rem] p-10 ${meal.bg} border ${meal.border} hover:shadow-xl transition-all duration-500 group`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-white flex items-center justify-center ${meal.accent} shadow-sm mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <meal.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4">{meal.title}</h3>
                <p className="text-muted-foreground text-lg mb-8">{meal.description}</p>

                <ul className="space-y-4">
                  {meal.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm text-green-500">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SLIDER --- */}
      <section className="py-24 px-0 bg-gradient-to-b from-transparent to-orange-50/50">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Real Talk. <span className="text-gradient">Real Reviews.</span></h2>
        </div>

        <div className="w-full px-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white p-8 rounded-3xl border border-border shadow-soft h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-lg font-medium text-foreground mb-6 flex-grow">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center font-bold text-gray-500">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* --- APP DOWNLOAD CTA --- */}
      <section className="py-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto relative rounded-[3rem] bg-black px-6 py-14 md:p-20 text-center">

          {/* Background Glows (desktop only full size) */}
          <div className="hidden sm:block absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-600/30 rounded-full blur-[100px] animate-pulse-slow" />
          <div className="hidden sm:block absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[100px] animate-pulse-slow delay-700" />

          {/* Smaller glow for mobile */}
          <div className="sm:hidden absolute top-10 left-1/2 -translate-x-1/2 w-[260px] h-[260px] bg-orange-600/20 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-5">
              Hungry? <span className="text-orange-500">Download app.</span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Get exclusive discounts, live tracking, and manage your subscription in one tap.
              Available on iOS and Android.
            </p>

            {/* STORE BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center">
              <a
                href="#"
                className="transform hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1765951109/apple-store.svg_hsiado.svg"
                  alt="Download on the App Store"
                  width={180}
                  height={60}
                  className="object-contain"
                />
              </a>

              <a
                href="#"
                className="transform hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1765953824/google-play-badge-logo_as6rln.svg"
                  alt="Get it on Google Play"
                  width={180}
                  height={60}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
