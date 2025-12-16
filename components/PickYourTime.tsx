'use client';

import { Clock, Sunrise, Sun, Moon } from 'lucide-react';

export default function PickYourTime() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Floating glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-300/20 to-red-400/20 rounded-3xl blur-2xl animate-pulse" />

      {/* Card */}
      <div className="relative z-10 bg-white/90 backdrop-blur-xl border border-orange-200 rounded-2xl p-6 w-full max-w-xs shadow-xl animate-float">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Clock className="w-6 h-6 text-orange-500 animate-spin-slow" />
          <h4 className="text-lg font-bold text-gray-900">
            Pick Your Time
          </h4>
        </div>

        {/* Time Slots */}
        <div className="space-y-4">
          <TimeSlot
            icon={<Sunrise className="w-5 h-5 text-orange-500" />}
            title="Breakfast"
            time="7:00 – 9:00 AM"
            delay="delay-0"
          />
          <TimeSlot
            icon={<Sun className="w-5 h-5 text-yellow-500" />}
            title="Lunch"
            time="12:00 – 2:00 PM"
            delay="delay-150"
          />
          <TimeSlot
            icon={<Moon className="w-5 h-5 text-indigo-500" />}
            title="Dinner"
            time="7:00 – 9:00 PM"
            delay="delay-300"
          />
        </div>
      </div>
    </div>
  );
}

function TimeSlot({
  icon,
  title,
  time,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  time: string;
  delay: string;
}) {
  return (
    <div
      className={`flex items-center gap-4 bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 
      animate-slide-in ${delay} hover:scale-105 transition-transform`}
    >
      <div className="bg-white rounded-lg p-2 shadow">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-gray-900">{title}</p>
        <p className="text-sm text-gray-600">{time}</p>
      </div>
    </div>
  );
}
