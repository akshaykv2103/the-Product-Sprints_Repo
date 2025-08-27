import React from 'react';
import { motion } from 'framer-motion';
import { Star, Zap, Briefcase, Linkedin } from 'lucide-react';

// You can add as many mentors as you want here
const mentors = [
  {
    name: "Aditya Gupta",
    image: "/images/ag.png",
    intro: "Product Manager @ApnaMart with experience building products at Zomato | IIT Ropar graduate",
    rating: 4.9,
    reviews: 16,
    sessions: "5+",
    experience: "2 years",
    linkedin: "https://www.linkedin.com/in/aditya-gupta-pm/", // <-- ADDED LINKEDIN
    formLink: "https://forms.gle/3T14YiYRNbE1EnTY7"
  },
  {
    name: "Pratibha Anand",
    image: "/images/pa.png",
    intro: "Business Analyst at HiLabs, specializing in user acquisition and retention. IIT Kanpur alumnus.",
    rating: 4.8,
    reviews: 20,
    sessions: "8+",
    experience: "2 years",
    linkedin: "linkedin.com/in/pratibha-anand-932805210/", // <-- ADDED LINKEDIN
    formLink: "https://forms.gle/fMbZo6WqCw2nGj9Q9"
  },
  {
    name: "Muskan Goel",
    image: "/images/mg.png",
    intro: "Business Analyst at Tata 1mg, with diversified experience in user retention models. IIT Roorkee alumnus.",
    rating: 4.9,
    reviews: 25,
    sessions: "4+",
    experience: "2 years",
    linkedin: "https://www.linkedin.com/in/-muskan-goel24/", // <-- ADDED LINKEDIN
    formLink: "https://forms.gle/fMbZo6WqCw2nGj9Q9"
  },
{
    name: "Afraz Jamal",
    image: "/images/aj.png",
    intro: "Senior Strategy Associate at Battery Smart, with experience in scaling products. IIT Kanpur alumnus.",
    rating: 4.9,
    reviews: 25,
    sessions: "4+",
    experience: "2 years",
    linkedin: "https://www.linkedin.com/in/afraz-jamal-081018232/", // <-- ADDED LINKEDIN
    formLink: "https://forms.gle/fMbZo6WqCw2nGj9Q9"
  },
];

const MentorCard = ({ mentor, index }: { mentor: typeof mentors[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="bg-[#0f0f0f] rounded-2xl p-8 border border-gray-800 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
  >
    <div className="flex-grow">
      <img
        src={mentor.image}
        alt={mentor.name}
        className="w-32 h-32 rounded-full object-cover mx-auto mb-6 ring-4 ring-gray-800"
      />
      {/* --- MODIFIED SECTION START --- */}
      <div className="flex justify-center items-center gap-4 mb-2">
        <h3 className="text-2xl font-bold text-center text-white">{mentor.name}</h3>
        <a 
          href={mentor.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition-colors"
          aria-label={`${mentor.name}'s LinkedIn Profile`}
        >
          <Linkedin size={22} />
        </a>
      </div>
      {/* --- MODIFIED SECTION END --- */}

      <p className="text-gray-400 text-center mb-6">{mentor.intro}</p>

      <div className="flex justify-center items-center gap-6 text-gray-300 mb-6">
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-400" />
          <span>{mentor.rating}</span>
          <span className="text-gray-500">({mentor.reviews} reviews)</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center mb-8">
        <div className="bg-[#0a0a0a] p-4 rounded-lg">
          <Zap className="w-6 h-6 mx-auto text-purple-400 mb-2" />
          <p className="font-bold text-xl text-white">{mentor.sessions}</p>
          <p className="text-sm text-gray-500">Sessions</p>
        </div>
        <div className="bg-[#0a0a0a] p-4 rounded-lg">
          <Briefcase className="w-6 h-6 mx-auto text-pink-400 mb-2" />
          <p className="font-bold text-xl text-white">{mentor.experience}</p>
          <p className="text-sm text-gray-500">Experience</p>
        </div>
      </div>
    </div>

    <a
      href={mentor.formLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-center w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105 duration-300 mt-auto"
    >
      Book a Call
    </a>
  </motion.div>
);

function Mentors() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <div className="container mx-auto px-4 py-20">
        {/* Free Resume Review Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#0f0f0f] border border-purple-500/30 rounded-2xl text-center p-10 mb-20 shadow-lg shadow-purple-900/20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Reviewing Your Resume for PM Roles is FREE!
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            Your resume will be reviewed by our mentors with suggestions to make it perfect for product roles, all within 2 hours.
          </p>
          <a
            href="https://forms.gle/sbDXrd6nradokUwm6" // IMPORTANT: Add your resume review link here
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            Review Your Resume Now
          </a>
        </motion.div>

        {/* Mentor Selection Section */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-300">
          Schedule a 1:1 Call with a Mentor
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <MentorCard key={mentor.name} mentor={mentor} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mentors;
