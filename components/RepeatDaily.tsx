'use client';

import { Repeat, CalendarDays, CalendarRange } from 'lucide-react';
import { useEffect, useState } from 'react';

const plans = [

  {
    title: 'Weekly Plan',
    desc: '7 days of hassle-free meals. Save more, worry less.',
    icon: CalendarDays,
    color: 'from-orange-400 to-orange-500',
  },
  {
    title: 'Monthly Plan',
    desc: 'Best value plan. Maximum savings. Ultimate peace of mind.',
    icon: CalendarRange,
    color: 'from-orange-500 to-red-500',
  },
];

export default function RepeatDaily() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % plans.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = plans[active].icon;

  return (
    <div className="card-premium p-8 md:p-10 rounded-3xl animate-float transition-all duration-500">
      <div
        className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${plans[active].color}
        flex items-center justify-center icon-box-glow bounce-soft`}
      >
        <CurrentIcon className="w-10 h-10 text-black" />
      </div>

      <h3 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
        {plans[active].title}
      </h3>

      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
        {plans[active].desc}
      </p>

      {/* Indicator dots */}
      <div className="flex gap-2">
        {plans.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === active
                ? 'bg-orange-500 w-6'
                : 'bg-orange-500/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
