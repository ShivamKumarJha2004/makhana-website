'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { ArrowRight, Sunrise, Utensils, Moon, Flame, Heart, Clock, DollarSign, Shield, Star, Check, X, IndianRupee } from 'lucide-react';
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
      title: 'High-Protein Power Pack',
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
      icon: IndianRupee,
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
    text: 'The protein meals are perfect for my fitness routine. Affordable and tasty!',
    rating: 5,
  },
  {
    name: 'Arjun K.',
    role: 'PG Resident',
    text: 'Delivery is always on time. Best decision for my daily meals.',
    rating: 5,
  },
  {
    name: 'Neha T.',
    role: 'MBA Student',
    text: 'Healthy, filling, and ghar-jaisa taste. Exactly what I needed.',
    rating: 5,
  },
  {
    name: 'Amit R.',
    role: 'Software Developer',
    text: 'Saves me so much time after work. Clean food and great portions.',
    rating: 5,
  },
  {
    name: 'Pooja K.',
    role: 'Hostel Student',
    text: 'Way better than hostel food. Feels like mom’s cooking.',
    rating: 5,
  },
  {
    name: 'Rohit V.',
    role: 'Fitness Enthusiast',
    text: 'High-protein meals actually keep me full and energized.',
    rating: 5,
  },
  {
    name: 'Sneha J.',
    role: 'Content Creator',
    text: 'Love the consistency and quality. No more random ordering.',
    rating: 5,
  },
  {
    name: 'Kunal P.',
    role: 'CA Aspirant',
    text: 'Perfect meals during long study hours. Light and nutritious.',
    rating: 5,
  },
  {
    name: 'Anjali D.',
    role: 'HR Executive',
    text: 'Affordable monthly plans and zero hassle. Totally worth it.',
    rating: 5,
  },
  {
    name: 'Vikas N.',
    role: 'Startup Founder',
    text: 'Reliable food during crazy workdays. Taste never disappoints.',
    rating: 5,
  },
  {
    name: 'Simran A.',
    role: 'Design Student',
    text: 'Healthy meals without cooking stress. Big win for me.',
    rating: 5,
  },
  {
    name: 'Manish G.',
    role: 'Sales Executive',
    text: 'Good portions and consistent taste. Much better than delivery apps.',
    rating: 5,
  },
  {
    name: 'Isha B.',
    role: 'Law Student',
    text: 'Light, balanced meals that don’t make me feel lazy.',
    rating: 5,
  },
  {
    name: 'Nikhil C.',
    role: 'Digital Marketer',
    text: 'Scheduled delivery is a game-changer. Food is always fresh.',
    rating: 5,
  },
  {
    name: 'Riya S.',
    role: 'BBA Student',
    text: 'Super affordable and tasty. Perfect for student life.',
    rating: 5,
  },
  {
    name: 'Saurabh L.',
    role: 'Gym Trainer',
    text: 'Clean ingredients and solid protein options. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Megha P.',
    role: 'PG Resident',
    text: 'No more worrying about lunch and dinner. Totally stress-free.',
    rating: 5,
  },
  {
    name: 'Akash Y.',
    role: 'Operations Executive',
    text: 'Feels like home food even after long office hours.',
    rating: 5,
  },
  {
    name: 'Tanvi R.',
    role: 'Psychology Student',
    text: 'Balanced meals that actually make you feel good.',
    rating: 5,
  }
]


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
              <span className="liquid-glass-text  text-glow">Ghar ka Khana,</span>
              <br />
              <span className="liquid-glass-text text-foreground">delivered on your schedule.</span>
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
                href="https://maakhana-survey.vercel.app/"
                className="inline-flex items-center space-x-2 glass-effect px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 gradient-border"
                target="_blank"
              >
                <span>Order Food Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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


      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-500/5 skew-y-3 transform origin-top-left pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* The Problem (The Struggle) */}
            <div className="space-y-6 order-2 lg:order-1 opacity-0 animate-slide-up stagger-1">
              <div className="bg-red-50/50 backdrop-blur-sm border border-red-100 p-8 rounded-3xl relative">
                <h3 className="text-2xl font-poppins font-bold text-red-800 mb-6 flex items-center">
                  <span className="bg-red-100 p-2 rounded-lg mr-3">�</span>
                  The Struggle
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 text-red-900/80">
                    <X className="w-5 h-5 mt-1 flex-shrink-0 text-red-500" />
                    <p>Oily, unhealthy PG food that ruins your gut.</p>
                  </div>
                  <div className="flex items-start space-x-3 text-red-900/80">
                    <X className="w-5 h-5 mt-1 flex-shrink-0 text-red-500" />
                    <p>Overpriced delivery apps draining your wallet.</p>
                  </div>
                  <div className="flex items-start space-x-3 text-red-900/80">
                    <X className="w-5 h-5 mt-1 flex-shrink-0 text-red-500" />
                    <p>Unreliable tiffin services with zero hygiene.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Solution (Maakhana) */}
            <div className="order-1 lg:order-2 opacity-0 animate-slide-up stagger-2">
              <div className="card-premium p-8 md:p-10 rounded-3xl border-2 border-orange-500/20 relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <div className="text-9xl">✨</div>
                </div>
                <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">
                  Enter <span className="text-gradient text-glow">MAAKHANA</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We fixed the daily food chaos. Healthy, home-style meals that fit your vibe and your budget.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-1.5 rounded-full text-green-600">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-foreground">Healthy & Home-cooked</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-1.5 rounded-full text-green-600">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-foreground">Pocket-friendly Prices</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-1.5 rounded-full text-green-600">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-foreground">Zero Compromise on Taste</span>
                  </div>
                </div>

                <Link
                  href="/meal-plans"
                  className="inline-flex items-center font-semibold text-orange-600 hover:text-orange-700 transition-colors group"
                >
                  <span>Check our Menu</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
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
<Swiper
  modules={[Autoplay]}
  loop={true}
  spaceBetween={32}
  autoplay={{
    delay: 1500,
    disableOnInteraction: false,
  }}
  slidesPerView={1}
  breakpoints={{
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
>
  {testimonials.map((testimonial, index) => (
    <SwiperSlide key={index}>
      <div className="card-premium p-8 rounded-2xl h-full">
        <div className="flex mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-orange-500 text-orange-500"
            />
          ))}
        </div>

        <p className="text-foreground mb-6 text-lg leading-relaxed">
          “{testimonial.text}”
        </p>

        <div>
          <p className="font-poppins font-semibold text-foreground">
            {testimonial.name}
          </p>
          <p className="text-sm text-muted-foreground">
            {testimonial.role}
          </p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>


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
