'use client';

import { Check, Flame, Heart, Drumstick, Salad, Zap, Clock, Phone, Sparkles, ArrowRight, Star, Egg, Beef,Sun, Moon} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MealPlans() {
  // Subscription plans based on PDF
  const subscriptionPlans = [
    {
      name: 'Standard Veg Plan',
      description: 'Pure vegetarian meals all 7 days',
      price: '₹2,310 - ₹2,520',
      period: 'per week',
      features: [
        'Breakfast, Lunch & Dinner',
        '7 Days Full Coverage',
        'Home-Style Cooking',
        'Free Delivery',
        'Weekly Menu Rotation'
      ],
      dailyCost: '₹110-120',
      popular: true,
    },
    {
      name: 'Standard Non-Veg Plan',
      description: 'Vegetarian + Non-veg on Wed & Sun',
      price: '₹2,625 - ₹2,835',
      period: 'per week',
      features: [
        'Breakfast, Lunch & Dinner',
        'Non-veg on Wednesday & Sunday',
        'Chicken 140-160g portions',
        'Free Delivery',
        'Weekly Menu Rotation'
      ],
      dailyCost: '₹125-135',
      badge: 'Most Popular'
    },
    {
      name: 'Gym Bro Pack (Veg)',
      description: 'High-protein, minimum 150g protein/day',
      price: '₹3,255 - ₹3,675',
      period: 'per week',
      features: [
        'Min 150g Protein Daily',
        '5 Eggs Breakfast Daily',
        'Double Protein Portions',
        'Customizable Options',
        'Priority Delivery'
      ],
      dailyCost: '₹155-175',
      highlight: true
    },
    {
      name: 'Gym Bro Pack (Non-Veg)',
      description: 'Maximum protein with chicken/fish',
      price: '₹3,885 - ₹4,410',
      period: 'per week',
      features: [
        '180-200g Chicken Breast',
        'Min 150g Protein Daily',
        '5 Eggs Breakfast Daily',
        'Customizable Options',
        'Priority Delivery'
      ],
      dailyCost: '₹185-210',
      badge: 'Max Gains'
    },
  ];

  // Weekly Menu from PDF
  const weeklyMenu = [
    {
      day: 'Monday',
      breakfast: { name: 'Poha', details: '250-280g cooked with peanuts + banana/seasonal fruit' },
      lunch: { name: 'Arhar Dal + Aloo Gobhi', details: 'Rice + 2 rotis + salad' },
      dinner: { name: 'Seasonal Veg + Dal', details: '3 rotis + full bowl dal' },
      special: null
    },
    {
      day: 'Tuesday',
      breakfast: { name: 'Vegetable Dalia', details: '300g soft cooked, optional ghee' },
      lunch: { name: 'Rajma + Cabbage Peas', details: 'Rice + 2 rotis' },
      dinner: { name: 'Dal Khichdi', details: 'Rice + dal-heavy, optional ghee' },
      special: null
    },
    {
      day: 'Wednesday',
      breakfast: { name: 'Besan Chilla', details: '2 medium + chutney + small curd' },
      lunch: { name: 'Chole + Lauki Chana Dal', details: 'Rice + 2 rotis' },
      dinner: { name: 'Matar Mushroom + Dal', details: '3 rotis' },
      special: { type: 'nonveg', text: 'Chicken Curry (140-160g)' }
    },
    {
      day: 'Thursday',
      breakfast: { name: 'Masala Oats', details: '300g thick Indian style + peanuts/sprouts' },
      lunch: { name: 'Dal Makhani (light)', details: 'Seasonal veg + rice + 2 rotis' },
      dinner: { name: 'Lemon Dal + Veg', details: 'Rice + seasonal vegetables' },
      special: null
    },
    {
      day: 'Friday',
      breakfast: { name: 'Aloo Paratha', details: '1 large shallow cooked + curd' },
      lunch: { name: 'Kadhi Pakoda + Jeera Aloo', details: 'Rice + 2 rotis' },
      dinner: { name: 'Paneer Bhurji', details: '120-140g paneer + 3 rotis + salad' },
      special: null
    },
    {
      day: 'Saturday',
      breakfast: { name: 'Vegetable Sandwich', details: '2 filled triangles + chutney + fruit' },
      lunch: { name: 'Mix Dal + Bhindi Fry', details: 'Rice + 2 rotis' },
      dinner: { name: 'Veg Pulao', details: 'Generous portion + raita' },
      special: null
    },
    {
      day: 'Sunday',
      breakfast: { name: 'Cornflakes / Masala Oats', details: 'Milk + banana' },
      lunch: { name: 'Veg Pulao', details: 'Raita + papad' },
      dinner: { name: 'Mixed Veg Curry + Dal', details: '3 rotis + home-style' },
      special: { type: 'nonveg', text: 'Chicken Masala / Egg Curry' }
    },
  ];

  // Gym Pack Customization Options
  const gymCustomizations = [
    {
      type: 'Breakfast Boost',
      icon: Egg,
      options: ['+2 Eggs (Standard)', '+4 Eggs (Extra)'],
      description: 'Add extra eggs to your morning meal'
    },
    {
      type: 'Protein Boost',
      icon: Drumstick,
      options: ['Paneer (120-140g)', 'Soya Chunks (60g)', 'Chicken Breast (180-200g)'],
      description: 'Add protein to lunch/dinner'
    },
    {
      type: 'Carb Management',
      icon: Flame,
      options: ['Extra Rotis (1-2)', 'Carb Reduction', 'Brown Rice Swap'],
      description: 'Adjust carbs to match your goals'
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-radial from-orange-200/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-gradient-radial from-amber-200/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-radial from-orange-300/15 to-transparent rounded-full blur-3xl" />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass-light px-6 py-2.5 rounded-full mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Delhi NCR's Favorite</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6 opacity-0 animate-fade-in-up stagger-1">
            <span className="text-gradient text-glow">Weekly Meal Plans</span><br />
            <span className="text-4xl md:text-6xl">That Hit Different</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-up stagger-2">
            Home-style comfort or gym-powered nutrition. Delivered fresh daily in Delhi NCR.
          </p>
        </div>
      </section>

      {/* Weekly Menu Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-orange-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg icon-box-glow">
                <Star className="w-7 h-7 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
              Weekly Menu Rotation
            </h2>
            <p className="text-xl text-muted-foreground">
              7 days of delicious, home-style meals planned for you
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Vegetarian Daily</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm">Non-Veg Wed & Sun</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Cost Controlled</span>
              </div>
            </div>
          </div>

          {/* Menu Days Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {weeklyMenu.map((day, index) => (
              <div
                key={day.day}
                className="card-premium rounded-2xl p-6 hover:scale-105 transition-transform duration-300 bg-white/5 backdrop-blur-sm border border-white/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-poppins font-bold text-gradient">
                    {day.day}
                  </h3>
                  {day.special && (
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                      day.special.type === 'nonveg' 
                        ? 'bg-red-500/20 text-red-400' 
                        : 'bg-primary/20 text-primary'
                    }`}>
                      {day.special.type === 'nonveg' ? '🍗 Non-Veg' : '🌟 Special'}
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  {/* Breakfast */}
                  <div className="pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                        <Sun className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-sm font-semibold text-primary">BREAKFAST</p>
                    </div>
                    <p className="font-medium mb-1">{day.breakfast.name}</p>
                    <p className="text-sm text-muted-foreground">{day.breakfast.details}</p>
                  </div>

                  {/* Lunch */}
                  <div className="pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                        <Sun className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-sm font-semibold text-primary">LUNCH</p>
                    </div>
                    <p className="font-medium mb-1">{day.lunch.name}</p>
                    <p className="text-sm text-muted-foreground">{day.lunch.details}</p>
                  </div>

                  {/* Dinner */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                        <Moon className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-sm font-semibold text-primary">DINNER</p>
                    </div>
                    <p className="font-medium mb-1">{day.dinner.name}</p>
                    <p className="text-sm text-muted-foreground">{day.dinner.details}</p>
                    {day.special && (
                      <div className="mt-3 p-2 bg-white/5 rounded-lg">
                        <p className="text-xs font-semibold text-amber-400 mb-1">SPECIAL ADD-ON</p>
                        <p className="text-sm">{day.special.text}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Kitchen Cost: ₹{day.day === 'Wednesday' || day.day === 'Sunday' ? '45-55' : '42-55'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Non-Veg Plan Note */}
          <div className="mt-12 p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl border border-red-500/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Drumstick className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Non-Veg Plan Details</h4>
                  <p className="text-muted-foreground">
                    Chicken served only on Wednesday & Sunday • 140-160g raw portion (≈110g cooked) • ₹100-110 weekly cost
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gym Bro Pack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50/30 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg icon-box-glow">
                <Flame className="w-7 h-7 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
              Gym Bro Pack
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Minimum 150g protein daily • Customizable for your gains
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full">
              <Zap className="w-4 h-4 text-primary" />
              <span className="font-semibold">Guaranteed High Protein</span>
            </div>
          </div>

          {/* Gym Pack Daily Structure */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="card-premium rounded-2xl p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                <Egg className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Breakfast</h3>
              <p className="text-primary font-semibold mb-2">Daily Standard</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>5 Whole Eggs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Carb Side (Poha/Oats/2 Brown Breads)</span>
                </li>
              </ul>
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-sm font-semibold text-amber-400">BOOST OPTIONS</p>
                <p className="text-sm">+2 or +4 Extra Eggs</p>
              </div>
            </div>

            <div className="card-premium rounded-2xl p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <Salad className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lunch</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-primary font-semibold mb-2">Vegetarian Option</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Double Dal + Soya Chunks (60g raw)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span>or Paneer 200g</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span>2 Rotis</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-red-400 font-semibold mb-2">Non-Veg Option</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-red-400" />
                      <span>Chicken Breast Curry (180-200g raw)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-red-400" />
                      <span>Small Dal + 2 Rotis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-premium rounded-2xl p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Drumstick className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Dinner</h3>
              <p className="text-primary font-semibold mb-2">Protein Options (Choose One)</p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-center gap-2 p-2 bg-white/5 rounded">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Paneer 150-200g</span>
                </li>
                <li className="flex items-center gap-2 p-2 bg-white/5 rounded">
                  <Check className="w-4 h-4 text-red-400" />
                  <span>Chicken 150g</span>
                </li>
                <li className="flex items-center gap-2 p-2 bg-white/5 rounded">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Egg Curry (3 Eggs)</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-muted-foreground">+ 3 Rotis + Light Vegetables</p>
              </div>
            </div>
          </div>

          {/* Customization Options */}
          <div className="bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Customization Rules</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {gymCustomizations.map((custom, index) => (
                <div key={custom.type} className="bg-white/5 rounded-xl p-5">
                  <custom.icon className="w-10 h-10 text-primary mb-3" />
                  <h4 className="font-bold mb-2">{custom.type}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{custom.description}</p>
                  <ul className="space-y-1">
                    {custom.options.map((option, idx) => (
                      <li key={idx} className="text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-black/30 rounded-lg text-center">
              <p className="text-sm text-muted-foreground">
                All customizations selected monthly only • Extra rotis allowed (1-2) • Carb reduction/swaps available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-background to-orange-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              <span className="text-gradient">Subscription Plans</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-2">
              Save more. Stress less. Eat better.
            </p>
            <p className="text-sm text-muted-foreground">
              All plans include breakfast, lunch & dinner • Delhi NCR delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subscriptionPlans.map((plan) => (
              <div
                key={plan.name}
                className={`card-premium rounded-2xl p-6 relative h-full flex flex-col transition-all duration-300 hover:scale-105
                  ${plan.popular ? 'border-2 border-primary shadow-xl' : ''}
                  ${plan.highlight ? 'border-2 border-red-500 shadow-xl' : ''}`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className={`px-4 py-1 rounded-full text-xs font-bold ${
                      plan.name.includes('Non-Veg') 
                        ? 'bg-red-500 text-white' 
                        : 'bg-primary text-black'
                    }`}>
                      {plan.badge}
                    </div>
                  </div>
                )}

                {/* Popular Tag */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-1 bg-primary text-black text-xs font-bold rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6 pt-2">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full">
                    <span className="text-xs">Daily Cost:</span>
                    <span className="font-bold">{plan.dailyCost}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold mb-1">{plan.price}</div>
                  <p className="text-sm text-muted-foreground">{plan.period}</p>
                </div>

                {/* Features */}
                <div className="flex-grow mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  href="https://maakhana-survey.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto w-full text-center px-4 py-3 rounded-xl font-semibold transition-all duration-300
                    ${plan.name.includes('Gym') 
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white' 
                      : 'bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-black'
                    }`}
                >
                  Subscribe Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Timing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto card-premium rounded-3xl p-8 md:p-12">
          <div className="text-center">
            <Clock className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
              Delivery Timing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-8">
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <p className="text-primary font-bold mb-2">Breakfast</p>
                <p className="text-2xl font-poppins font-bold">7 AM - 9 AM</p>
                <p className="text-sm text-muted-foreground mt-2">Fresh, hot & ready to start your day</p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <p className="text-primary font-bold mb-2">Lunch</p>
                <p className="text-2xl font-poppins font-bold">12 PM - 2 PM</p>
                <p className="text-sm text-muted-foreground mt-2">Perfect midday fuel</p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <p className="text-primary font-bold mb-2">Dinner</p>
                <p className="text-2xl font-poppins font-bold">7 PM - 9 PM</p>
                <p className="text-sm text-muted-foreground mt-2">Comfort food for the evening</p>
              </div>
            </div>
            <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
              <p className="text-muted-foreground">
                <span className="font-bold text-primary">Note:</span> Order before 11 PM for next day delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}