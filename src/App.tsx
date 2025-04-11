import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, CheckCircle2, Users2, Zap, MessageSquare, Linkedin, Phone, Star, FileCheck, Brain, Target, Rocket, PenTool, BookOpen, Trophy, Sparkles, GraduationCap } from 'lucide-react';
import Events from './pages/Events';
import Timeline from './pages/Timeline';

function App() {
  const [activeReview, setActiveReview] = useState(0);
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const companyLogos = [
    { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Apple", url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Uber", url: "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" },
    { name: "Airbnb", url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToBlogs = () => {
    const blogsSection = document.getElementById('blogs-section');
    if (blogsSection) {
      window.scrollTo({
        top: blogsSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const uspItems = [
    {
      title: "Identify the levers to growth",
      description: "Identify the input levers to the north star & build the growth equation. Understand the nuke scenario for your goal & how far retention alone can solve growth.",
      icon: Target,
    },
    {
      title: "Convincing stakeholders",
      description: "Learn to go from looking at metrics in isolation, to going a level deeper & seeing them as a connected system. Build true conviction & defend strategic decisions.",
      icon: Users2,
    },
    {
      title: "Building growth models",
      description: "Master the art of creating comprehensive growth models that drive product success. Learn to identify and leverage key metrics that matter.",
      icon: Rocket,
    },
    {
      title: "Strategic thinking",
      description: "Develop the ability to think strategically about product growth and make data-driven decisions that impact business outcomes.",
      icon: Brain,
    },
    {
      title: "Hands-on execution",
      description: "Get practical experience in implementing growth strategies and measuring their impact through real-world case studies.",
      icon: PenTool,
    },
    {
      title: "Leadership skills",
      description: "Build the confidence and capabilities needed to lead product teams and drive organizational growth initiatives.",
      icon: Star,
    }
  ];

  const reviews = [
    {
      text: "The Product Sprints gave me exactly what I needed to land a PM role—real-world problem-solving, hands-on product challenges, and mentorship from top industry leaders. The structured sprints and case studies helped me think like a PM, and the exclusive network opened doors I never imagined. Highly recommend!🚀",
      name: "Akshay K. Verma",
      college: "IIT Kanpur",
      role: "Product Manager, HDFC Securities",
      linkedin: "https://www.linkedin.com/in/akshay-kumar-verma-326b03202/",
      image: "/images/akv.png"
    },
    {
      text: "Joining The Product Sprints was a game-changer for my product management career. The community's feedback on my PRDs and product strategies was invaluable. The mentorship and peer learning helped me develop a strategic mindset that's essential for product leadership.",
      name: "Muskan Goel",
      college: "IIT Roorkee",
      role: "Business Analyst, Tata 1mg",
      linkedin: "https://www.linkedin.com/in/-muskan-goel24/",
      image: "/images/mg.png"
    },
    {
      text: "The Product Sprints helped me transition from engineering to product management seamlessly. The practical approach and structured learning path were exactly what I needed to build confidence in my product decisions.",
      name: "Afraz Jamal",
      college: "IIT Kanpur",
      role: "Strategy Associate, BatterySmart",
      linkedin: "https://www.linkedin.com/in/afraz-jamal-081018232",
      image: "/images/aj.png"
    },
    {
      text: "What sets The Product Sprints apart is their practical approach to product management. The community's support in reviewing my work deliverables and the structured learning path helped me transition from engineering to product management seamlessly.",
      name: "Aditya Gupta",
      college: "IIT Ropar",
      role: "Associate Product Manager, Zomato",
      linkedin: "https://www.linkedin.com/in/aditya-gupta-pm/",
      image: "/images/ag.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation section */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
            <Link to="/">
              <img 
                src="/images/m2logo.gif"
                alt="The Product Sprints Logo" 
                className="h-20 md:h-28 w-auto max-w-none"
              />
            </Link>
           
            <div className="flex items-center gap-6">
              <a 
                href="https://www.linkedin.com/company/theproductsprints/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <Link 
                to="/events"
                className="text-gray-400 hover:text-white transition-colors text-lg"
              >
                Events
              </Link>
               <Link 
                to="/timeline"
                className="text-gray-400 hover:text-white transition-colors text-lg"
              >
                Timeline
              </Link>
              <a 
                href="#blogs-section" 
                onClick={scrollToBlogs}
                className="text-gray-400 hover:text-white transition-colors text-lg"
              >
                Blog
              </a>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfD6sRvW6NhUqbZn4JTsqPH5_p2DdRBn65SdatbxFCrfGApxw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 duration-300 shadow-lg hover:shadow-xl"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </nav>

    <Routes>
        <Route path="/events" element={<Events />} />
       <Route path="/timeline" element={<Timeline />} />
        <Route path="/" element={

          <>
            {/* Hero section */}
            <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute w-full h-full object-cover opacity-30"
                style={{ filter: 'brightness(1.4)' }}
              >
                <source src="bg.mp4" type="video/mp4" />
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]"></div>

              <motion.div 
                style={{ y }}
                className="container mx-auto px-4 relative z-10 mt-[-100px]"
              >
                <div className="max-w-4xl mx-auto text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient leading-tight">
                      Join The Product Sprints Community
                    </h1>
                    
                    <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed">
                      Connect with product leaders, share insights, and accelerate your product management career
                    </p>

                    <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 p-[1px] rounded-2xl mb-12">
                      <div className="bg-[#0a0a0a]/80 backdrop-blur-xl px-8 py-4 rounded-2xl">
                        <p className="text-lg md:text-xl font-medium text-gray-200">
                          An exclusive community for IIT, IIM Alumni and students
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-8">
                      <motion.a 
                        href="https://chat.whatsapp.com/LEMwE3NgrrAJPGFYUz3qok" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Join Now
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.a>

                      <p className="text-lg font-medium text-gray-400">
                        Get access to exclusive resources from Product Leaders
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
            </header>

            {/* Outcomes section */}
            <section className="py-32 bg-[#0a0a0a] text-white relative">
              <div className="container mx-auto px-6">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl font-semibold mb-24 text-center text-gray-400 tracking-wider uppercase"
                >
                  Outcomes You'll Get
                </motion.h2>
                
                <div className="max-w-6xl mx-auto">
                  <div className="space-y-40">
                    {uspItems.map((item, index) => (
                      <motion.div
                        key={index}
                        ref={el => cardRefs.current[index] = el}
                        data-index={index}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex flex-col items-start relative">
                          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600"></div>
                          <div className="flex items-center gap-6 mb-6">
                            <motion.div 
                              className="w-16 h-16 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center backdrop-blur-xl"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              <item.icon className="w-8 h-8 text-white" />
                            </motion.div>
                          </div>
                          <h3 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                            {item.title}
                          </h3>
                          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Company Logos Section */}
            <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
              <div className="container mx-auto px-4">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
                >
                  Our Alumni Work At Leading Companies
                </motion.h2>
                
                <div className="relative">
                  <div className="flex space-x-12 animate-scroll">
                    <div className="flex space-x-12 min-w-full">
                      {companyLogos.map((logo, index) => (
                        <motion.div 
                          key={index} 
                          className="w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <img 
                            src={logo.url} 
                            alt={logo.name} 
                            className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300"
                          />
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex space-x-12 min-w-full" aria-hidden="true">
                      {companyLogos.map((logo, index) => (
                        <motion.div 
                          key={`repeat-${index}`} 
                          className="w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <img 
                            src={logo.url} 
                            alt={logo.name} 
                            className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Cohort Details Section */}
            <section className="py-32 bg-[#0f0f0f] text-white relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-pink-900/5"></div>
              </div>
              
              <div className="container mx-auto px-6 relative">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    Crack Interviews & Build Products with Confidence
                  </h2>
                  
                  <p className="text-xl text-gray-400 mb-16 leading-relaxed">
                    Learn the technical skills that set you apart. Master system design, APIs, data pipelines, 
                    and more in this hands-on cohort.
                  </p>

                  <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-gray-800">
                      <h3 className="text-4xl font-bold text-white mb-2">1st May, 2025</h3>
                      <p className="text-gray-400 text-lg">4 weeks cohort</p>
                    </div>
                    <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-gray-800">
                      <h3 className="text-4xl font-bold text-white mb-2">40</h3>
                      <p className="text-gray-400 text-lg">Seats Available</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfD6sRvW6NhUqbZn4JTsqPH5_p2DdRBn65SdatbxFCrfGApxw/viewform" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105 duration-300"
                    >
                      Apply for the Cohort Now!
                    </a>

                    <a 
                      href="https://drive.google.com/file/d/1PakJmJxz6PxbjEy-EPkt-sXiddyKDCHf/view?usp=drive_link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#0a0a0a] border border-gray-800 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#111111] transition-all transform hover:scale-105 duration-300"
                    >
                      Download Curriculum
                    </a>

                    <a 
                      href="https://forms.gle/aWXxe9d1WVGE84p8A" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105 duration-300"
                    >
                      Avail a Free Demo!
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Meet the Mentor section */}
            <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
              <div className="container mx-auto px-4 relative">
                <div className="max-w-5xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                      Meet Your Mentor
                    </h2>
                  </div>
                  
                  <div className="bg-[#0f0f0f] rounded-3xl p-8 md:p-12 border border-gray-800">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-xl"></div>
                        <img 
                          src="/images/rohitfp.png"
                          alt="Rohit Verma"
                          className="w-64 h-64 rounded-full object-cover relative z-10 ring-4 ring-[#0a0a0a]"
                        />
                        <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-4">
                          <Star className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1 md:text-left text-center">
                        <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                          Rohit Verma
                        </h3>
                        <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                          <span className="bg-[#0a0a0a] px-4 py-2 rounded-full text-gray-300 text-sm">
                            Group Product Manager
                          </span>
                          <a 
                            href="https://www.linkedin.com/in/rohitverma141/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                          >
                            <Linkedin className="w-6 h-6" />
                          </a>
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                          Group Product Manager at Angel One with 9+ years in fintech, e-commerce, and travel. 
                          Expertise in product management, strategy, business growth, and innovation. 
                          IIM Bangalore alumnus, passionate about solving complex problems and driving impact.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                          <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-gray-800">
                            <h4 className="text-2xl font-bold text-purple-400">9+ Years</h4>
                            <p className="text-gray-400">Industry Experience</p>
                          </div>
                          <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-gray-800">
                            <h4 className="text-2xl font-bold text-pink-400">500+</h4>
                            <p className="text-gray-400">Students Mentored</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Enhanced Testimonials section */}
            <section className="py-32 bg-[#0f0f0f] relative overflow-hidden">
              <div className="container mx-auto px-4 relative">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    What Our Students Say
                  </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                  <div className="relative">
                    {reviews.map((review, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ 
                          opacity: index === activeReview ? 1 : 0,
                          x: index === activeReview ? 0 : 100,
                          scale: index === activeReview ? 1 : 0.95
                        }}
                        transition={{ duration: 0.5 }}
                        className={`flex items-start gap-8 bg-[#0a0a0a] rounded-2xl p-8 border border-gray-800 ${
                          index === activeReview ? '' : 'absolute top-0 left-0 right-0'
                        }`}
                      >
                        <motion.div 
                          className="relative min-w-[120px] h-[120px] rounded-full overflow-hidden"
                          whileHover={{ scale: 1.05 }}
                        >
                          <img
                            src={review.image}
                            alt={review.name}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        
                        <div className="flex-1">
                          <div className="relative">
                            <div className="absolute -top-4 -left-4 text-6xl text-gray-800 font-serif">"</div>
                            <p className="text-lg text-gray-300 leading-relaxed mb-6 relative z-10">
                              {review.text}
                            </p>
                          </div>

                          <div className="flex items-center justify-between mt-6">
                            <div>
                              <h4 className="font-semibold text-white">{review.name}</h4>
                              <p className="text-sm text-gray-400">{review.college}</p>
                              <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                                {review.role}
                              </p>
                            </div>
                            <motion.a
                              href={review.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-white transition-colors"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              <Linkedin className="w-6 h-6" />
                            </motion.a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex justify-center mt-8 gap-3">
                    {reviews.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setActiveReview(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === activeReview
                            ? 'bg-purple-600 scale-125'
                            : 'bg-gray-700 hover:bg-gray-600'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Blog section */}
            <section id="blogs-section" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
              <div className="container mx-auto px-4 relative">
                <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Product Management Insights
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  <div className="bg-[#0f0f0f] rounded-2xl p-8 border border-gray-800 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 group">
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
                      Thriving Beyond 2025: A Product Manager's Playbook
                    </h3>
                    <p className="text-gray-400 mb-6 line-clamp-3">
                      Welcome to the wild, wonderful—and sometimes worrisome—world of product management in 2025 and beyond. 
                      If you've been wondering what's next, this guide is for you.
                    </p>
                    <a 
                      href="https://medium.com/design-bootcamp/thriving-beyond-2025-a-product-managers-playbook-for-the-new-tech-era-d174a2669959" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                    >
                      Read more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  <div className="bg-[#0f0f0f] rounded-2xl p-8 border border-gray-800 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 group">
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
                      Top 10 AI Agents in 2025
                    </h3>
                    <p className="text-gray-400 mb-6 line-clamp-3">
                      AI won't replace you, but someone using AI will. Discover the top AI agents that are 
                      revolutionizing product management and how to leverage them effectively.
                    </p>
                    <a 
                      href="https://medium.com/design-bootcamp/top-10-ai-agents-in-2025-db41e98a4a68" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                    >
                      Read more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  <div className="bg-[#0f0f0f] rounded-2xl p-8 border border-gray-800 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 group">
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
                      PM Interview Question: Microsoft's AI Integration
                    </h3>
                    <p className="text-gray-400 mb-6 line-clamp-3">
                      Microsoft has been at the forefront of AI integration, embedding powerful tools like Copilot 
                      across its Office suite. Learn how to tackle this common interview question.
                    </p>
                    <a 
                      href="https://medium.com/design-bootcamp/pm-interview-question-microsoft-is-expanding-ai-integration-across-its-products-9dfc7751e189" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                    >
                      Read more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="flex justify-center mt-16">
                  <a 
                    href="https://rohitverma141.medium.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-all transform hover:scale-105 duration-300 inline-flex items-center gap-2"
                  >
                    Explore all articles <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </section>

            {/* Footer section */}
            <footer className="bg-[#0f0f0f] text-white py-16 border-t border-gray-800">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="flex flex-col items-center justify-center gap-8 mb-12">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                      Connect With Us
                    </h3>
                    
                    <div className="flex flex-wrap items-center justify-center gap-8">
                      <a 
                        href="https://www.linkedin.com/company/theproductsprints/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                      >
                        <div className="bg-[#0a0a0a] p-3 rounded-full group-hover:bg-[#111111]">
                          <Linkedin className="w-6 h-6" />
                        </div>
                        <span>Follow us on LinkedIn</span>
                      </a>
                      
                      <div className="flex items-center gap-3 text-gray-400">
                        <div className="bg-[#0a0a0a] p-3 rounded-full">
                          <Phone className="w-6 h-6" />
                        </div>
                        <span>+91 8318023406</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-gray-500">© 2024 The Product Sprints. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </footer>
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
