'use client';

const meals = [
  { title: 'Home-Style Comfort', emoji: '🍲', desc: 'Ghar jaisa khana' },
  { title: 'High-Protein Meals', emoji: '🥗', desc: 'Fitness focused meals' },
  { title: 'Balanced Thali', emoji: '🍛', desc: 'Daily nutrition' },
  { title: 'Light & Healthy', emoji: '🥙', desc: 'Easy on stomach' },
];

export default function PickYourMeal() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Pick Your Meal 🍽️
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Browse home-style comfort food or high-protein meals.
          Choose what fits your vibe.
        </p>
      </div>

      {/* Moving cards */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 animate-marquee w-max">
          {[...meals, ...meals].map((meal, i) => (
            <div
              key={i}
              className="min-w-[260px] bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{meal.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{meal.title}</h3>
              <p className="text-gray-600 text-sm">{meal.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
