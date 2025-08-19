import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Product Management Fellowship",
    date: "April 20, 2025",
    location: "Virtual",
    image: "/images/session1.jpg",
    description: "Deep dive into product strategy with industry experts. Learn frameworks for product success, for IITG students in collaboration with E-Cell IITG",
    attendees: 150
  },
  {
    id: 2,
    title: "Inter-IIT Product Case Competition",
    date: "May 19, 2025",
    location: "Virtual",
    image: "/images/session2.jpg",
    description: "Master the art of tracking and analyzing key product metrics for sustainable growth, in collaboration with 6 IITs",
    attendees: 600
  },
  {
    id: 3,
    title: "PM Masterclass",
    date: "June 7, 2025",
    location: "Virtual",
    image: "/images/session3.jpg",
    description: "Learn advanced user research techniques from leading product managers.",
    attendees: 100
  },
  {
    id: 4,
    title: "Guiding Interviews",
    date: "July 12, 2025",
    location: "Virtual",
    image: "/images/session4.jpg",
    description: "Master the art of successful product interview cases",
    attendees: 130
  },
  {
    id: 5,
    title: "How I'd Prepare For PM Interviews?",
    date: "July 24, 2025",
    location: "Virtual",
    image: "/images/session5.jpg",
    description: "From framing resume to solving product cases with a curated roadmap, with IIT Ropar",
    attendees: 200
  },
  {
    id: 6,
    title: "Ask Me Anything",
    date: "July 26, 2025",
    location: "Virtual",
    image: "/images/session6.jpg",
    description: "Master product analytics tools and metrics that drive growth with IIT Kanpur",
    attendees: 140
  },
  {
    id: 7,
    title: "GenAI for PM and startups",
    date: "August 4, 2025",
    location: "Virtual",
    image: "/images/session7.jpg",
    description: "What, Why and the roadmap, with IIT BHU students",
    attendees: 200
  },
  {
    id: 8,
    title: "Ideathon | IIT Guwahati",
    date: "August 9, 2025",
    location: "Virtual",
    image: "/images/session8.jpg",
    description: "Real Problems, Unreal Products",
    attendees: 200
  }
];

// --- ADDED: Sort events by date in descending order (latest first) ---
const sortedEvents = [...events].sort((a, b) => new Date(b.date) - new Date(a.date));

const Events = () => {
  const [showAll, setShowAll] = useState(false);
  // --- CHANGED: Use the new sortedEvents array ---
  const displayedEvents = showAll ? sortedEvents : sortedEvents.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-32">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Our Events
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join our exclusive events and workshops led by industry experts to accelerate your product management career
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {displayedEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0f0f0f] rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {event.description}
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {event.attendees} attendees
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-8">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#0f0f0f] text-white px-8 py-3 rounded-xl font-medium border border-gray-800 hover:border-purple-500 transition-all transform hover:scale-105 duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? 'Show Less' : 'Explore All Events'}
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfD6sRvW6NhUqbZn4JTsqPH5_p2DdRBn65SdatbxFCrfGApxw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105 duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply for the Cohort
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Events;
