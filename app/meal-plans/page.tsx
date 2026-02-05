'use client';

import { Check, Flame, Heart, Drumstick, Salad, Zap, Clock, Phone, Sparkles, ArrowRight, Star, Egg, Beef, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';

export default function MealPlans() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'veg' | 'nonveg' | 'gym'>('all');

  // Subscription plans based on PDF
  const subscriptionPlans = [
    {
      name: 'Standard Veg Plan',
      description: 'Pure vegetarian meals all 7 days',
      price: '₹ - ₹',
      period: 'per week',
      image: '/veg.png',
      category: 'veg',
      features: [
        'Breakfast, Lunch & Dinner',
        '7 Days Full Coverage',
        'Home-Style Cooking',
        'Free Delivery',
        'Weekly Menu Rotation'
      ],
      dailyCost: '₹',
      popular: true,
    },
    {
      name: 'Standard Non-Veg Plan',
      description: 'Vegetarian + Non-veg on Wed & Sun',
      price: '₹ - ₹',
      period: 'per week',
      image: '/non-veg.png',
      category: 'nonveg',
      features: [
        'Breakfast, Lunch & Dinner',
        'Non-veg on Wednesday & Sunday',
        'Chicken 140-160g portions',
        'Free Delivery',
        'Weekly Menu Rotation'
      ],
      dailyCost: '₹',
      badge: ''
    },
    {
      name: 'Gym Bro Pack (Veg)',
      description: 'High-protein, minimum 150g protein/day',
      price: '₹  ₹',
      period: 'per week',
      image: '/gym_bro_veg.png',
      category: 'gym',
      features: [
        'Min 150g Protein Daily',
        '5 Eggs Breakfast Daily',
        'Double Protein Portions',
        'Customizable Options',
        'Priority Delivery'
      ],
      dailyCost: '₹',
      highlight: true
    },
    {
      name: 'Gym Bro Pack (Non-Veg)',
      description: 'Maximum protein with chicken/fish',
      price: '₹ - ₹',
      period: 'per week',
      image: '/gym_bro_non-veg.png',
      category: 'gym',
      features: [
        '180-200g Chicken Breast',
        'Min 150g Protein Daily',
        '5 Eggs Breakfast Daily',
        'Customizable Options',
        'Priority Delivery'
      ],
      dailyCost: '₹',
      badge: ''
    },
  ];

  // Weekly Menu - Separate for Veg and Non-Veg
  const vegWeeklyMenu = [
    {
      day: 'Monday',
      dayNumber: '1',
      image: '/monday.png',
      breakfast: { name: 'Poha', details: '250-280g cooked with peanuts + banana/seasonal fruit' },
      lunch: { name: 'Arhar Dal + Aloo Gobhi', details: 'Rice + 2 rotis + salad' },
      dinner: { name: 'Seasonal Veg + Dal', details: '3 rotis + full bowl dal' },
      special: null,
      category: 'veg'
    },
    {
      day: 'Tuesday',
      dayNumber: '2',
      image: '/tuesday.png',
      breakfast: { name: 'Vegetable Dalia', details: '300g soft cooked, optional ghee' },
      lunch: { name: 'Rajma + Cabbage Peas', details: 'Rice + 2 rotis' },
      dinner: { name: 'Dal Khichdi', details: 'Rice + dal-heavy, optional ghee' },
      special: null,
      category: 'veg'
    },
    {
      day: 'Wednesday',
      dayNumber: '3',
      image: '/wednesday.png',
      breakfast: { name: 'Besan Chilla', details: '2 medium + chutney + small curd' },
      lunch: { name: 'Chole + Lauki Chana Dal', details: 'Rice + 2 rotis' },
      dinner: { name: 'Matar Mushroom + Dal', details: '3 rotis' },
      special: null,
      category: 'veg'
    },
    {
      day: 'Thursday',
      dayNumber: '4',
      image: '/thursday.png',
      breakfast: { name: 'Masala Oats', details: '300g thick Indian style + peanuts/sprouts' },
      lunch: { name: 'Dal Makhani (light)', details: 'Seasonal veg + rice + 2 rotis' },
      dinner: { name: 'Lemon Dal + Veg', details: 'Rice + seasonal vegetables' },
      special: null,
      category: 'veg'
    },
    {
      day: 'Friday',
      dayNumber: '5',
      image: '/friday.png',
      breakfast: { name: 'Aloo Paratha', details: '1 large shallow cooked + curd' },
      lunch: { name: 'Kadhi Pakoda + Jeera Aloo', details: 'Rice + 2 rotis' },
      dinner: { name: 'Paneer Bhurji', details: '120-140g paneer + 3 rotis + salad' },
      special: null,
      category: 'veg'
    },
    {
      day: 'Saturday',
      dayNumber: '6',
      image: '/saturday.png',
      breakfast: { name: 'Vegetable Sandwich', details: '2 filled triangles + chutney + fruit' },
      lunch: { name: 'Mix Dal + Bhindi Fry', details: 'Rice + 2 rotis' },
      dinner: { name: 'Veg Pulao', details: 'Generous portion + raita' },
      special: null,
      category: 'veg'
    },
    {
      day: 'Sunday',
      dayNumber: '7',
      image: '/sunday3.png',
      breakfast: { name: 'Cornflakes / Masala Oats', details: 'Milk + banana' },
      lunch: { name: 'Veg Pulao', details: 'Raita + papad' },
      dinner: { name: 'Mixed Veg Curry + Dal', details: '3 rotis + home-style' },
      special: null,
      category: 'veg'
    },
  ];

  const nonVegWeeklyMenu = [
    {
      day: 'Monday',
      dayNumber: '1',
      image: '/monday.png',
      breakfast: { name: 'Poha', details: '250-280g cooked with peanuts + banana/seasonal fruit' },
      lunch: { name: 'Arhar Dal + Aloo Gobhi', details: 'Rice + 2 rotis + salad' },
      dinner: { name: 'Seasonal Veg + Dal', details: '3 rotis + full bowl dal' },
      special: null,
      category: 'nonveg'
    },
    {
      day: 'Tuesday',
      dayNumber: '2',
      image: '/tuesday.png',
      breakfast: { name: 'Vegetable Dalia', details: '300g soft cooked, optional ghee' },
      lunch: { name: 'Rajma + Cabbage Peas', details: 'Rice + 2 rotis' },
      dinner: { name: 'Dal Khichdi', details: 'Rice + dal-heavy, optional ghee' },
      special: null,
      category: 'nonveg'
    },
    {
      day: 'Wednesday',
      dayNumber: '3',
      image: '/wednesday.png',
      breakfast: { name: 'Besan Chilla', details: '2 medium + chutney + small curd' },
      lunch: { name: 'Chole + Lauki Chana Dal', details: 'Rice + 2 rotis' },
      dinner: { name: 'Chicken Curry + Dal', details: 'Chicken 140-160g + 3 rotis' },
      special: { type: 'nonveg', text: 'Chicken Curry (140-160g)' },
      category: 'nonveg'
    },
    {
      day: 'Thursday',
      dayNumber: '4',
      image: '/thursday.png',
      breakfast: { name: 'Masala Oats', details: '300g thick Indian style + peanuts/sprouts' },
      lunch: { name: 'Dal Makhani (light)', details: 'Seasonal veg + rice + 2 rotis' },
      dinner: { name: 'Lemon Dal + Veg', details: 'Rice + seasonal vegetables' },
      special: null,
      category: 'nonveg'
    },
    {
      day: 'Friday',
      dayNumber: '5',
      image: '/friday.png',
      breakfast: { name: 'Aloo Paratha', details: '1 large shallow cooked + curd' },
      lunch: { name: 'Kadhi Pakoda + Jeera Aloo', details: 'Rice + 2 rotis' },
      dinner: { name: 'Paneer Bhurji', details: '120-140g paneer + 3 rotis + salad' },
      special: null,
      category: 'nonveg'
    },
    {
      day: 'Saturday',
      dayNumber: '6',
      image: '/saturday.png',
      breakfast: { name: 'Vegetable Sandwich', details: '2 filled triangles + chutney + fruit' },
      lunch: { name: 'Mix Dal + Bhindi Fry', details: 'Rice + 2 rotis' },
      dinner: { name: 'Veg Pulao', details: 'Generous portion + raita' },
      special: null,
      category: 'nonveg'
    },
    {
      day: 'Sunday',
      dayNumber: '7',
      image: '/sunday3.png',
      breakfast: { name: 'Cornflakes / Masala Oats', details: 'Milk + banana' },
      lunch: { name: 'Veg Pulao', details: 'Raita + papad' },
      dinner: { name: 'Chicken Masala + Dal', details: 'Chicken 140-160g + 3 rotis' },
      special: { type: 'nonveg', text: 'Chicken Masala (140-160g)' },
      category: 'nonveg'
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

  // Filter functions
  const filteredPlans = selectedFilter === 'all' 
    ? subscriptionPlans 
    : subscriptionPlans.filter(plan => plan.category === selectedFilter);

  const filteredMenu = selectedFilter === 'veg'
    ? vegWeeklyMenu
    : selectedFilter === 'nonveg'
    ? nonVegWeeklyMenu
    : selectedFilter === 'all'
    ? [...vegWeeklyMenu] // Show veg menu by default when 'all' is selected
    : [];

  const shouldShowGymSection = selectedFilter === 'all' || selectedFilter === 'gym';

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

          {/* Filter Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedFilter === 'all'
                  ? 'bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-foreground hover:bg-white/20 border border-border'
              }`}
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                All Plans
              </span>
            </button>
            <button
              onClick={() => setSelectedFilter('veg')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedFilter === 'veg'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-foreground hover:bg-white/20 border border-border'
              }`}
            >
              <span className="flex items-center gap-2">
                <Salad className="w-4 h-4" />
                Vegetarian
              </span>
            </button>
            <button
              onClick={() => setSelectedFilter('nonveg')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedFilter === 'nonveg'
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-foreground hover:bg-white/20 border border-border'
              }`}
            >
              <span className="flex items-center gap-2">
                <Drumstick className="w-4 h-4" />
                Non-Vegetarian
              </span>
            </button>
            <button
              onClick={() => setSelectedFilter('gym')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedFilter === 'gym'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-foreground hover:bg-white/20 border border-border'
              }`}
            >
              <span className="flex items-center gap-2">
                <Flame className="w-4 h-4" />
                Gym Bro Pack
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Weekly Menu Section */}
      {(selectedFilter === 'all' || selectedFilter === 'veg' || selectedFilter === 'nonveg') && (
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
                {selectedFilter === 'veg' && '7 days of pure vegetarian meals'}
                {selectedFilter === 'nonveg' && 'Non-veg days: Wednesday & Sunday'}
                {selectedFilter === 'all' && '7 days of delicious, home-style meals planned for you'}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                {(selectedFilter === 'all' || selectedFilter === 'veg') && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Vegetarian Daily</span>
                  </div>
                )}
                {(selectedFilter === 'all' || selectedFilter === 'nonveg') && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Non-Veg Wed & Sun</span>
                  </div>
                )}
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Cost Controlled</span>
                </div>
              </div>
            </div>

            {/* Menu Days Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMenu.map((day, index) => (
                <div
                  key={day.dayNumber}
                  className="card-premium rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 bg-white border border-border shadow-lg group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image Header */}
                  <div className="relative h-52 w-full overflow-hidden bg-white">
                    <Image
                      src={day.image}
                      alt={`${day.day} Menu`}
                      fill
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                      priority={index < 4}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <h3 className="text-xl font-poppins font-bold text-white drop-shadow-lg">
                        {day.day}
                      </h3>
                      {day.special && (
                        <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                          day.special.type === 'nonveg' 
                            ? 'bg-red-500 text-white' 
                            : 'bg-primary text-white'
                        }`}>
                          {day.special.type === 'nonveg' ? '🍗 Non-Veg' : '🌟 Special'}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-5">
                      {/* Breakfast */}
                      <div className="pb-4 border-b border-border">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-sm">
                            <Sun className="w-4 h-4 text-white" />
                          </div>
                          <p className="text-sm font-semibold text-primary">BREAKFAST</p>
                        </div>
                        <p className="font-semibold mb-1 text-foreground">{day.breakfast.name}</p>
                        <p className="text-sm text-muted-foreground">{day.breakfast.details}</p>
                      </div>

                      {/* Lunch */}
                      <div className="pb-4 border-b border-border">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-sm">
                            <Sun className="w-4 h-4 text-white" />
                          </div>
                          <p className="text-sm font-semibold text-primary">LUNCH</p>
                        </div>
                        <p className="font-semibold mb-1 text-foreground">{day.lunch.name}</p>
                        <p className="text-sm text-muted-foreground">{day.lunch.details}</p>
                      </div>

                      {/* Dinner */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center shadow-sm">
                            <Moon className="w-4 h-4 text-white" />
                          </div>
                          <p className="text-sm font-semibold text-primary">DINNER</p>
                        </div>
                        <p className="font-semibold mb-1 text-foreground">{day.dinner.name}</p>
                        <p className="text-sm text-muted-foreground">{day.dinner.details}</p>
                        {day.special && (
                          <div className="mt-3 p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                            <p className="text-xs font-semibold text-amber-600 mb-1">SPECIAL ADD-ON</p>
                            <p className="text-sm font-medium text-foreground">{day.special.text}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    
                  </div>
                </div>
              ))}
            </div>

            {/* Non-Veg Plan Note */}
            {(selectedFilter === 'all' || selectedFilter === 'nonveg') && (
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
            )}
          </div>
        </section>
      )}

      {/* Gym Bro Pack Section */}
      {shouldShowGymSection && (
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
              <div className="card-premium rounded-2xl overflow-hidden">
                <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50">
                  <Image
                    src="/gym-bro-breakfast.png"
                    alt="Gym Bro Breakfast"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-6">
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
              </div>

              <div className="card-premium rounded-2xl overflow-hidden">
                <div className="grid grid-cols-2 h-40 w-full overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
                  <div className="relative">
                    <Image
                      src="/gym-bro-veg-lunch.png"
                      alt="Gym Bro Veg Lunch"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                  </div>
                  <div className="relative">
                    <Image
                      src="/gym-bro-non-veg-lunch.png"
                      alt="Gym Bro Non-Veg Lunch"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                  </div>
                </div>
                <div className="p-6">
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
              </div>

              <div className="card-premium rounded-2xl overflow-hidden">
                <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-red-50 to-orange-50">
                  <Image
                    src="/gym-bro-dinner.png"
                    alt="Gym Bro Dinner"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                </div>
                <div className="p-6">
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
      )}

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
            {filteredPlans.map((plan) => (
              <div
                key={plan.name}
                className={`card-premium rounded-2xl overflow-hidden relative h-full flex flex-col transition-all duration-300 hover:scale-105 shadow-lg group
                  ${plan.popular ? 'border-2 border-primary shadow-xl' : ''}
                  ${plan.highlight ? 'border-2 border-red-500 shadow-xl' : 'border border-border'}`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`px-4 py-1 rounded-full text-xs font-bold shadow-lg ${
                      plan.name.includes('Non-Veg') 
                        ? 'bg-red-500 text-white' 
                        : 'bg-primary text-white'
                    }`}>
                      {plan.badge}
                    </div>
                  </div>
                )}

                {/* Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50">
                  <Image
                    src={plan.image}
                    alt={plan.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <div className="px-3 py-1 bg-primary text-white rounded-full text-xs font-bold">
                        Popular
                      </div>
                    </div>
                  )}
                </div>

                {/* Header */}
                <div className="text-center mb-6 pt-6 px-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 rounded-full border border-orange-200">
                    <span className="text-xs text-muted-foreground">Daily Cost:</span>
                    <span className="font-bold text-primary">{plan.dailyCost}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="text-center mb-6 px-6">
                  <div className="text-3xl font-bold mb-1 text-foreground">{plan.price}</div>
                  <p className="text-sm text-muted-foreground">{plan.period}</p>
                </div>

                {/* Features */}
                <div className="flex-grow mb-6 px-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="px-6 pb-6 mt-auto">
                  <Link
                    href="https://maakhana-survey.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center px-4 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl
                      ${plan.name.includes('Gym') 
                        ? 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white' 
                        : 'bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white'
                      }`}
                  >
                    Subscribe Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredPlans.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No plans available for this category.</p>
            </div>
          )}
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