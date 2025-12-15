'use client';

import { ArrowRight, Gift, Zap, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
export default function Survey() {
  return (
    <div className="min-h-screen bg-background noise-overlay relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="orb orb-orange w-96 h-96 -top-20 -left-20 opacity-40 float-slow"></div>
        <div className="orb orb-amber w-[500px] h-[500px] top-1/2 -right-40 opacity-30"></div>
        <div className="orb orb-orange w-64 h-64 bottom-20 left-10 opacity-30 float-medium"></div>
      </div>
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500 text-green-600 px-4 py-2 rounded-full mb-6 animate-bounce">
              <Gift className="w-5 h-5" />
              <span className="font-semibold">Early Access Discount</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6">
              Pass the <span className="text-gradient text-glow">Vibe Check</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Help us understand what you need. Get early bird pricing in return.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="card-premium p-6 rounded-2xl text-center group">
              <div className="icon-box-glow inline-flex p-3 rounded-xl mb-3">
                <Clock className="w-10 h-10 text-primary mx-auto" />
              </div>
              <p className="text-2xl font-poppins font-bold mb-2">45 Seconds</p>
              <p className="text-sm text-muted-foreground">Quick & Easy</p>
            </div>
            <div className="card-premium p-6 rounded-2xl text-center group border-2 border-primary/20">
              <div className="icon-box-glow inline-flex p-3 rounded-xl mb-3">
                <Zap className="w-10 h-10 text-primary mx-auto" />
              </div>
              <p className="text-2xl font-poppins font-bold mb-2">20% Off</p>
              <p className="text-sm text-muted-foreground">Early Access</p>
            </div>
            <div className="card-premium p-6 rounded-2xl text-center group">
              <div className="icon-box-glow inline-flex p-3 rounded-xl mb-3">
                <Gift className="w-10 h-10 text-primary mx-auto" />
              </div>
              <p className="text-2xl font-poppins font-bold mb-2">Priority</p>
              <p className="text-sm text-muted-foreground">First to Get Access</p>
            </div>
          </div>

          <div className="card-premium p-4 md:p-8 rounded-3xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 animate-gradient"></div>

            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-poppins font-bold mb-2">Order Your Food 🥘</h2>
              <p className="text-muted-foreground">Fill this quick form to place your order or set preferences.</p>
            </div>

            <div className="w-full h-[800px] md:h-[600px] bg-white rounded-xl overflow-hidden shadow-inner">
              <iframe
                src="https://maakhana-survey.vercel.app/"
                className="w-full h-full border-0"
                title="Maakhana Order Form"
              >Loading...</iframe>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">Having trouble loading the form?</p>
              <a
                href="https://maakhana-survey.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary hover:text-orange-600 font-semibold underline decoration-orange-300 decoration-2 underline-offset-4 transition-all"
              >
                <span>Open in New Tab</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="my-16 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent w-full max-w-sm"></div>
            <span className="px-4 text-muted-foreground font-poppins font-medium">OR</span>
            <div className="h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent w-full max-w-sm"></div>
          </div>

          <div className="card-premium p-8 md:p-12 rounded-3xl text-center border-2 border-primary/20 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Order Faster on App 📱
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
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-orange-500/10">
        <div className="max-w-4xl mx-auto">
          <div className="card-premium p-8 md:p-12 rounded-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
              What happens next?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2 group">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-300 to-orange-500 rounded-xl flex items-center justify-center mb-3 icon-box-glow group-hover:scale-110 transition-transform">
                  <span className="text-black font-bold">1</span>
                </div>
                <h3 className="font-poppins font-bold text-lg">We Review</h3>
                <p className="text-sm text-muted-foreground">
                  Our team reviews your preferences and dietary needs
                </p>
              </div>
              <div className="space-y-2 group">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-300 to-orange-500 rounded-xl flex items-center justify-center mb-3 icon-box-glow group-hover:scale-110 transition-transform">
                  <span className="text-black font-bold">2</span>
                </div>
                <h3 className="font-poppins font-bold text-lg">You Get Access</h3>
                <p className="text-sm text-muted-foreground">
                  Receive your early access discount code via email/WhatsApp
                </p>
              </div>
              <div className="space-y-2 group">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-300 to-orange-500 rounded-xl flex items-center justify-center mb-3 icon-box-glow group-hover:scale-110 transition-transform">
                  <span className="text-black font-bold">3</span>
                </div>
                <h3 className="font-poppins font-bold text-lg">Start Eating</h3>
                <p className="text-sm text-muted-foreground">
                  Order your first meal and enjoy premium food at early bird prices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">
            Questions about the survey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Hit us up on WhatsApp. We're here to help!
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 glass-effect px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 border border-orange-200 hover:border-orange-300"
          >
            <span>Chat With Us</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
