import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const timeline = [
  {
    week: 'Week 1',
    title: 'Fundamentals & Strategy',
    points: [
      'Strong Product Thinking & User-Centric Approach – Apply frameworks like JTBD and First Principles.',
      'Business Acumen & Market Strategy – Understand models, GTM strategies, and use RICE/Kano for planning.'
    ]
  },
  {
    week: 'Week 2',
    title: 'Product Execution & Problem-Solving',
    points: [
      'Data-Driven Decision Making – Learn AARRR metrics, run A/B tests, use SQL.',
      'Structured Problem-Solving – Crack guesstimates and case questions confidently.'
    ]
  },
  {
    week: 'Week 3',
    title: 'Product Design & Technical Fundamentals',
    points: [
      'Product Design & UX Thinking – Learn wireframing, UX best practices, accessibility.',
      'Technical Foundations – Grasp APIs, system design, and AI/ML integration.'
    ]
  },
  {
    week: 'Week 4',
    title: 'Communication, Leadership & Interview Prep',
    points: [
      'Execution & Leadership – Manage stakeholders, use execution frameworks.',
      'Career Readiness – Resume reviews, mock interviews, and final Q&A.'
    ]
  }
];

const Timeline = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-48 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            4-Week Timeline
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Dive deep into product thinking, analytics, design, and leadership through a structured and immersive learning experience.
          </p>
        </motion.div>

        {/* Timeline Cards */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {timeline.map((weekData, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0f0f0f] rounded-2xl border border-gray-800 hover:border-purple-500 transition-all duration-300 p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="w-5 h-5 text-purple-400" />
                <h3 className="text-2xl text-white font-semibold">
                  {weekData.week}: {weekData.title}
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {weekData.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Desktop Pricing Table */}
       {/* Desktop Pricing Cards (2 side-by-side) */}
<div className="hidden md:flex justify-center gap-8 mt-20 max-w-5xl mx-auto">
  {[
    {
      type: 'Basic',
      price: 'Rs. 7,999',
      old: 'Rs. 15,999',
      bg: 'bg-yellow-50',
      text: 'text-yellow-600',
      features: ["✅", "✅", "✅", "✅", "✅", "✅", "1", "❌", "❌", "❌"]
    },
    {
      type: 'Pro',
      price: 'Rs. 9,999',
      old: 'Rs. 19,999',
      bg: 'bg-green-50',
      text: 'text-green-600',
      features: ["✅", "✅", "✅", "✅", "✅", "✅", "4", "✅", "✅", "✅"]
    }
  ].map((plan, idx) => (
    <div
      key={idx}
      className={`rounded-xl shadow-md border w-full ${plan.bg} flex flex-col`}
    >
      <div className="p-6 text-center">
        <p className="text-xl font-bold text-gray-800">{plan.type}</p>
        <p className={`text-3xl font-bold mt-1 ${plan.text}`}>{plan.price}</p>
        <p className="line-through text-sm text-gray-500">{plan.old}</p>
      </div>

      <ul className="text-sm text-left px-6 pb-6 space-y-2 text-gray-700 font-medium flex-1">
        {[
          "Lecture Notes & Recordings",
          "Deck Making Masterclass & Recordings",
          "Case Assignments & Solutions",
          "Product Portfolio",
          "Graduation Project",
          "Exclusive Community Access",
          "Master Product Mocks",
          "Exclusive 1:1 Mentorship",
          "Resume Review & Feedback",
          "Free Access to Exclusive Sessions"
        ].map((feature, index) => (
          <li key={index} className="flex justify-between border-b pb-2">
            <span>{feature}</span>
            <span>{plan.features[index]}</span>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>



        {/* Mobile Pricing Cards */}
        <div className="block md:hidden mt-10 space-y-6">
          {["Basic", "Pro"].map((plan, planIndex) => {
            const isPro = plan === "Pro";
            const price = isPro ? "Rs. 9,999" : "Rs. 7,999";
            const oldPrice = isPro ? "Rs. 19,999" : "Rs. 15,999";
            const bgColor = isPro ? "bg-green-50" : "bg-yellow-50";
            const textColor = isPro ? "text-green-600" : "text-yellow-600";

            return (
              <div
                key={plan}
                className={`rounded-xl shadow-md overflow-hidden border ${bgColor}`}
              >
                <div className="p-4 text-center">
                  <p className="text-xl font-bold text-gray-800">{plan}</p>
                  <p className={`text-2xl font-bold mt-1 ${textColor}`}>{price}</p>
                  <p className="line-through text-sm text-gray-400">{oldPrice}</p>
                </div>

                <ul className="text-sm text-left px-6 pb-4 space-y-2 text-gray-700 font-medium">
                  {[
                    "Lecture Notes & Recordings",
                    "Deck Making Masterclass & Recordings",
                    "Case Assignments & Solutions",
                    "Product Portfolio",
                    "Graduation Project",
                    "Exclusive Community Access",
                    "Master Product Mocks",
                    "Exclusive 1:1 Mentorship",
                    "Resume Review & Feedback",
                    "Free Access to Exclusive Sessions"
                  ].map((feature, index) => {
                    let value = "❌";
                    if (index < 6) value = "✅";
                    else if (index === 6) value = isPro ? "4" : "1";
                    else if (isPro) value = "✅";

                    return (
                      <li key={index} className="flex justify-between">
                        <span>{feature}</span>
                        <span>{value}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
        <motion.a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfD6sRvW6NhUqbZn4JTsqPH5_p2DdRBn65SdatbxFCrfGApxw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg text-base font-semibold hover:opacity-90 transition-all transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Apply for the Cohort
        </motion.a>
      </div>
    </div>
  );
};

export default Timeline;
