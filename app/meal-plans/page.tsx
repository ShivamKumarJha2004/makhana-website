'use client';

import { Check, Flame, Heart, Drumstick, Salad, Zap, Clock, Phone } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MealPlans() {
  const homeMeals = [
    {
      name: 'Dal Chawal Combo',
      description: 'Classic home-style comfort food',
      calories: '450-500',
      protein: '15g',
      price: '₹80',
      items: ['Yellow Dal', 'Steamed Rice', 'Green Chutney', 'Papad'],
      badge: '',
    },
    {
      name: 'Roti Sabzi Set',
      description: 'Fresh rotis with seasonal vegetables',
      calories: '400-450',
      protein: '12g',
      price: '₹90',
      items: ['3 Rotis', 'Seasonal Sabzi', 'Pickle', 'Salad'],
      badge: null,
    },
    {
      name: 'Rajma Chawal',
      description: 'North Indian favorite',
      calories: '500-550',
      protein: '18g',
      price: '₹95',
      items: ['Rajma Curry', 'Basmati Rice', 'Onion Raita', 'Papad'],
      badge: '',
    },
    {
      name: 'Mix Veg + Dal + Rice',
      description: 'Complete balanced meal',
      calories: '550-600',
      protein: '20g',
      price: '₹110',
      items: ['Mix Veg', 'Dal', 'Rice', 'Pickle', 'Salad'],
      badge: null,
    },
  ];

  const gymMeals = [
    {
      name: 'Chicken Breast Bowl',
      description: 'Lean protein for muscle gains',
      calories: '500-550',
      protein: '45g',
      price: '₹150',
      items: ['200g Grilled Chicken', 'Brown Rice', 'Steamed Broccoli', 'Salad'],
      badge: '',
    },
    {
      name: 'Paneer Power Pack',
      description: 'Vegetarian protein bomb',
      calories: '480-530',
      protein: '35g',
      price: '₹130',
      items: ['250g Grilled Paneer', 'Quinoa', 'Mixed Veggies', 'Hung Curd'],
      badge: '',
    },
    {
      name: 'Egg White Special',
      description: 'Pure protein, minimal fat',
      calories: '400-450',
      protein: '40g',
      price: '₹120',
      items: ['8 Egg Whites', 'Oats', 'Banana', 'Almonds'],
      badge: '',
    },
    {
      name: 'Chicken + Fish Combo',
      description: 'Double protein punch',
      calories: '600-650',
      protein: '50g',
      price: '₹180',
      items: ['150g Chicken', '100g Fish', 'Brown Rice', 'Veggies'],
      badge: '',
    },
  ];

  const subscriptionPlans = [
    {
      name: 'Weekly Plan',
      meals: '14 Meals',
      discount: '10%',
      price: '₹1,260',
      originalPrice: '₹1,400',
      features: ['2 Meals Daily', 'Pick Breakfast/Lunch/Dinner', 'Free Delivery', 'Flexible Menu','Nutrition Consultation'],
    },
    {
      name: 'Monthly Plan',
      meals: '60 Meals',
      discount: '20%',
      price: '₹4,800',
      originalPrice: '₹6,000',
      features: ['2 Meals Daily', 'Priority Delivery', 'Custom Menu', 'Weekend Coverage', 'Nutrition Consultation'],
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background noise-overlay relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="orb orb-orange w-96 h-96 -top-20 -left-20 opacity-40"></div>
        <div className="orb orb-amber w-[500px] h-[500px] top-1/4 -right-40 opacity-30 float-slow"></div>
        <div className="orb orb-orange w-64 h-64 bottom-20 left-10 opacity-30 float-medium"></div>
      </div>
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6">
            <span className="text-gradient text-glow">Meal Plans</span> That Slap
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose your vibe. Home-style comfort or gym bro gains.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-orange-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-4 mb-12">
            <Heart className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-center">
              Home Style Meals
            </h2>
          </div>
          <p className="text-center text-muted-foreground text-xl mb-12">
            Missing Ghar ka Khana? Here's your fix.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeMeals.map((meal) => (
              <div
                key={meal.name}
                className="card-premium rounded-2xl p-6 group"
              >
                {meal.badge && (
                  <div className="absolute top-4 right-4 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full shimmer overflow-hidden relative">
                    <span className="relative z-10">{meal.badge}</span>
                  </div>
                )}

                <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform icon-box-glow">
                  <Salad className="w-8 h-8 text-black" />
                </div>

                <h3 className="text-xl font-poppins font-bold mb-2">{meal.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{meal.description}</p>

                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span>{meal.calories} cal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Flame className="w-4 h-4 text-primary" />
                    <span>{meal.protein}</span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 mb-4">
                  <ul className="space-y-2 text-sm">
                    {meal.items.map((item) => (
                      <li key={item} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-3xl font-poppins font-bold text-gradient mb-4">
                  {meal.price}
                </div>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-black px-4 py-3 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg btn-shine"
                >
                  Order Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-4 mb-12">
            <Flame className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-center">
              Gym Bro Protein Packs
            </h2>
          </div>
          <p className="text-center text-muted-foreground text-xl mb-12">
            Chasing gains? These meals hit different.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gymMeals.map((meal) => (
              <div
                key={meal.name}
                className="card-premium rounded-2xl p-6 group border-2 border-primary/20"
              >
                {meal.badge && (
                  <div className="absolute top-4 right-4 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full shimmer overflow-hidden relative">
                    <span className="relative z-10">{meal.badge}</span>
                  </div>
                )}

                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform icon-box-glow">
                  <Drumstick className="w-8 h-8 text-black" />
                </div>

                <h3 className="text-xl font-poppins font-bold mb-2">{meal.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{meal.description}</p>

                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span>{meal.calories} cal</span>
                  </div>
                  <div className="flex items-center space-x-2 text-primary font-bold">
                    <Flame className="w-5 h-5 text-primary" />
                    <span className="text-lg">{meal.protein}</span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 mb-4">
                  <ul className="space-y-2 text-sm">
                    {meal.items.map((item) => (
                      <li key={item} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-3xl font-poppins font-bold text-gradient mb-4">
                  {meal.price}
                </div>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black px-4 py-3 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg btn-shine"
                >
                  Order Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-background to-orange-500/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              <span className="text-gradient">Subscription Plans</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Save more. Stress less. Eat better.
            </p>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
  {subscriptionPlans.map((plan) => (
    <div
      key={plan.name}
      className={`card-premium rounded-3xl p-8 relative h-full flex flex-col
      ${plan.popular ? 'border-2 border-primary shadow-2xl scale-105 z-10' : ''}`}
    >
      {/* Title */}
      <div className="text-center mb-6">
        <h3 className="text-3xl font-poppins font-bold mb-2">
          {plan.name}
        </h3>
        <p className="text-muted-foreground">
          {plan.meals}
        </p>
      </div>

      {/* Price */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-3 mb-2">
          <span className="text-5xl font-poppins font-bold text-gradient">
            {plan.price}
          </span>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <span className="text-muted-foreground line-through">
            {plan.originalPrice}
          </span>
          <span className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">
            Save {plan.discount}
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="border-t border-white/10 pt-6 mb-6 flex-grow">
        <ul className="space-y-4">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-black" />
              </div>
              <span className="text-foreground">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto flex items-center justify-center space-x-2 w-full px-6 py-4 rounded-xl 
        font-semibold text-lg transition-all duration-300 transform hover:scale-105
        bg-orange-400 hover:bg-orange-500 text-black shadow-md
        ${plan.popular ? 'shadow-lg glow-orange' : ''}`}
      >
        <Phone className="w-5 h-5" />
        <span>Subscribe Now</span>
      </a>
    </div>
  ))}
</div>

        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto card-premium rounded-3xl p-8 md:p-12">
          <div className="text-center">
            <Clock className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
              Delivery Timing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-primary font-bold mb-2">Breakfast</p>
                <p className="text-2xl font-poppins font-bold">7 AM - 9 AM</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-primary font-bold mb-2">Lunch</p>
                <p className="text-2xl font-poppins font-bold">12 PM - 2 PM</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-primary font-bold mb-2">Dinner</p>
                <p className="text-2xl font-poppins font-bold">7 PM - 9 PM</p>
              </div>
            </div>
            <p className="text-muted-foreground mt-6">
              Order before 11 PM for next day delivery
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
