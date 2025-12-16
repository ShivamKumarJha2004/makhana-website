'use client';

import { Truck, Flame, ShieldCheck, Smile } from 'lucide-react';

export default function EatStressFree() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Moving background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-amber-300/20 to-red-400/20 rounded-3xl blur-2xl animate-pulse" />

      {/* Card */}
      <div className="relative z-10 bg-white/90 backdrop-blur-xl border border-orange-200 rounded-2xl p-6 w-full max-w-xs shadow-xl animate-float">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-5">
          <Smile className="w-6 h-6 text-orange-500 bounce-soft" />
          <h4 className="text-lg font-bold text-gray-900">
            Eat Stress-Free
          </h4>
        </div>

        {/* Delivery animation row */}
        <div className="relative flex items-center justify-between mb-6">
          <Flame className="w-6 h-6 text-orange-500" />
          <div className="flex-1 mx-2 h-1 bg-orange-200 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-gradient-to-r from-orange-400 to-red-500 animate-delivery" />
          </div>
          <Truck className="w-7 h-7 text-orange-600 animate-truck" />
        </div>

        {/* Benefits */}
        <div className="space-y-4">
          <Feature
            icon={<Flame className="w-5 h-5 text-red-500" />}
            text="Hot & Fresh Meals"
            delay="delay-0"
          />
          <Feature
            icon={<ShieldCheck className="w-5 h-5 text-green-600" />}
            text="Hygienic Packaging"
            delay="delay-150"
          />
          <Feature
            icon={<Smile className="w-5 h-5 text-orange-500" />}
            text="Zero Stress, Zero Hassle"
            delay="delay-300"
          />
        </div>
      </div>
    </div>
  );
}

function Feature({
  icon,
  text,
  delay,
}: {
  icon: React.ReactNode;
  text: string;
  delay: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-xl px-4 py-3
      animate-slide-in ${delay} hover:scale-105 transition-transform`}
    >
      <div className="bg-white rounded-lg p-2 shadow">
        {icon}
      </div>
      <p className="font-medium text-gray-900">{text}</p>
    </div>
  );
}
