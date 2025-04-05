import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, Users2, Zap, MessageSquare, Linkedin, Phone, Star, FileCheck, Brain, Target, Rocket, PenTool, BookOpen, Trophy, Sparkles, GraduationCap } from 'lucide-react';

function App() {
  const [activeReview, setActiveReview] = useState(0);
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState(new Set());

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
    },
    {
      text: "Joining The Product Sprints was a game-changer for my product management career. The community's feedback on my PRDs and product strategies was invaluable. The mentorship and peer learning helped me develop a strategic mindset that's essential for product leadership.",
      name: "Muskan Goel",
      college: "IIT Roorkee",
      role: "Business Analyst, Tata 1mg",
      linkedin: "linkedin.com/in/-muskan-goel24",
    },
    {
      text: "What sets The Product Sprints apart is their practical approach to product management. The community's support in reviewing my work deliverables and the structured learning path helped me transition from engineering to product management seamlessly.",
      name: "Afraz Jamal",
      college: "IIT Kanpur",
      role: "Strategy Associate, BatterySmart",
      linkedin: "linkedin.com/in/afraz-jamal-081018232",
    }
  ];

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

  const scrollToBlogs = (e: React.MouseEvent) => {
    e.preventDefault();
    const blogsSection = document.getElementById('blogs-section');
    if (blogsSection) {
      blogsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation section */}
      <nav className="relative bg-[#1a1a1a] py-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20 animate-pulse"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
            <img 
              src="/images/logo.png"
              alt="The Product Sprints Logo" 
              className="h-20 md:h-24 w-auto"
            />
            <div className="flex items-center gap-4 md:gap-6">
              <a 
                href="https://www.linkedin.com/company/theproductsprints/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-all duration-300"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
                  alt="LinkedIn" 
                  className="w-6 h-6"
                />
              </a>
              <a 
                href="#blogs-section" 
                onClick={scrollToBlogs}
                className="text-white hover:text-gray-300 transition-colors text-lg hover:scale-105 transform duration-300"
              >
                Blog
              </a>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfD6sRvW6NhUqbZn4JTsqPH5_p2DdRBn65SdatbxFCrfGApxw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 md:px-6 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 duration-300 shadow-lg hover:shadow-xl whitespace-nowrap text-sm md:text-base"
              >
                Apply for Cohort
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header section */}
      <header className="relative bg-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20 animate-pulse"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-40 left-0 w-24 h-24 border-2 border-purple-500/10 rotate-45"></div>
          <div className="absolute bottom-40 right-0 w-32 h-32 border-2 border-pink-500/10 rounded-full"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-purple-500/5 to-transparent rotate-12"></div>
          <div className="absolute top-1/3 right-10 w-20 h-20 bg-gradient-to-bl from-pink-500/5 to-transparent -rotate-12"></div>
        </div>

        <div className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white animate-gradient">
                  Join 
                  <span className="text-red-500 font-extrabold"> The Product Sprints </span> 
                  Community
                </h1>
              </div>
              
              <p className="text-xl mb-8 text-gray-300 transform hover:scale-105 transition-transform duration-300">
                Connect with product leaders, share insights, and accelerate your product management career
              </p>

              <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 p-[2px] rounded-lg mb-10 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105">
                <p className="bg-[#1a1a1a] text-lg font-bold px-8 py-3 rounded-lg">
                  An exclusive community for IIT, IIM Alumni and students
                </p>
              </div>

              <div className="flex flex-col items-center gap-8">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <a 
                    href="https://chat.whatsapp.com/LEMwE3NgrrAJPGFYUz3qok" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
                  >
                    Join Now <ArrowRight className="ml-2 w-5 h-5 animate-bounce" />
                  </a>
                </div>

                <div className="relative mt-6">
                  <div className="absolute -left-6 -right-6 top-0 h-full bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 blur-xl animate-pulse"></div>
                  <p className="relative text-lg font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
                    Enroll now & get access to Exclusive Community and Resources from Product Leaders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Outcomes section */}
      <section className="py-20 bg-[#1a1a1a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20 animate-pulse"></div>
        
        <div className="container mx-auto px-6 relative">
          <h2 className="text-2xl font-semibold mb-16 text-center">OUTCOMES YOU'LL GET</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="space-y-32">
              {uspItems.map((item, index) => (
                <div
                  key={index}
                  ref={el => cardRefs.current[index] = el}
                  data-index={index}
                  className={`transform transition-all duration-1000 ${
                    visibleCards.has(index.toString())
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-32'
                  }`}
                >
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-4xl font-bold mb-4">{item.title}</h3>
                    <p className="text-xl text-gray-400 max-w-2xl">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cohort Details section */}
      <section className="py-20 bg-[#2c2c2c] text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-extrabold mb-6 text-white">
              Crack Interviews & Build Products with <span className="text-red-500">Confidence</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Learn the technical skills that set you apart. Master system design, APIs, data pipelines, 
              and more in this hands-on cohort.
            </p>

            <div className="flex justify-center gap-16 mb-12">
              <div className="text-center transform hover:scale-105 transition-all duration-300">
                <h3 className="text-4xl font-bold text-white mb-2">1st April, 2025</h3>
                <p className="text-gray-400 text-lg">4 weeks cohort</p>
              </div>
              <div className="text-center transform hover:scale-105 transition-all duration-300">
                <h3 className="text-4xl font-bold text-white mb-2">40</h3>
                <p className="text-gray-400 text-lg">Seats Available</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 items-center">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfD6sRvW6NhUqbZn4JTsqPH5_p2DdRBn65SdatbxFCrfGApxw/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition duration-300 w-full max-w-md text-center transform hover:scale-105"
              >
                Apply for the Cohort Now!
              </a>

              <a 
                href="https://drive.google.com/file/d/1PakJmJxz6PxbjEy-EPkt-sXiddyKDCHf/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-gray-400 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-600 transition duration-300 w-full max-w-md text-center transform hover:scale-105"
              >
                Download Curriculum
              </a>

              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfIawc05rGI7vDBGY-BF7BAHP_bTve8QmBbstaByX0JacBwRw/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-500 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-red-400 transition duration-300 w-full max-w-md text-center transform hover:scale-105"
              >
                Avail a Free Demo!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Mentor section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-purple-500/10 rotate-45"></div>
          <div className="absolute bottom-1/4 right-10 w-16 h-16 border-2 border-pink-500/10 rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-red-500 bg-clip-text inline-block">
                Meet Your Mentor
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-md animate-pulse"></div>
                <img 
                  src="/images/rohit.jpg"
                  alt="Rohit Verma"
                  className="w-64 h-64 rounded-full object-cover relative z-10 ring-4 ring-white"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-4 shadow-lg">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="flex-1 md:text-left text-center">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Rohit Verma</h3>
                <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                  <span className="bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-1 rounded-full text-purple-700 font-medium">Group Product Manager</span>
                  <a 
                    href="https://www.linkedin.com/in/rohitverma141/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#0077b5] hover:text-[#00669c] transition-colors transform hover:scale-110 duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Group Product Manager at Angel One with 9+ years in fintech, e-commerce, and travel. Expertise in product management, strategy, business growth, and innovation. IIM Bangalore alumnus, passionate about solving complex problems and driving impact.
                </p>
                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto md:mx-0">
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <h4 className="font-bold text-purple-600">9+ Years</h4>
                    <p className="text-gray-600">Industry Experience</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <h4 className="font-bold text-pink-600">500+</h4>
                    <p className="text-gray-600">Students Mentored</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/3 left-5 w-24 h-24 border-2 border-purple-500/10 rotate-12"></div>
          <div className="absolute bottom-1/3 right-5 w-20 h-20 border-2 border-pink-500/10 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <div className="inline-block transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Aspiring Product Managers <span className="text-red-500">♥</span> The Product Sprints
              </h2>
            </div>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-500 transform ${
                    index === activeReview
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-full absolute top-0 left-0 right-0'
                  }`}
                >
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 text-6xl text-purple-100 font-serif z-0">"</div>
                    <div className="absolute -bottom-4 -right-4 text-6xl text-pink-100 font-serif rotate-180 z-0">"</div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900">{review.name}</h4>
                          <p className="text-sm text-gray-600">{review.college}</p>
                          <p className="text-sm bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-medium">
                            {review.role}
                          </p>
                        </div>
                      </div>

                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        {review.text}
                      </p>

                      <div className="flex justify-end">
                        <a
                          href={review.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0077b5] hover:text-[#00669c] transition-colors transform hover:scale-110 duration-300"
                        >
                          <Linkedin className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 gap-3">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeReview
                      ? 'bg-purple-600 scale-125'
                      : 'bg-gray-300 hover:bg-purple-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog section */}
      <section id="blogs-section" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Product Management Blogs</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-purple-500 transition-colors group transform hover:scale-105 duration-300 shadow-lg hover:shadow-xl">
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">Thriving Beyond 2025: A Product Manager's Playbook</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">Welcome to the wild, wonderful—and sometimes worrisome—world of product management in 2025 and beyond. If you've been wondering what's next, this guide is for you.</p>
              <a 
                href="https://medium.com/design-bootcamp/thriving-beyond-2025-a-product-managers-playbook-for-the-new-tech-era-d174a2669959" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700"
              >
                Read more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-purple-500 transition-colors group transform hover:scale-105 duration-300 shadow-lg hover:shadow-xl">
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">Top 10 AI Agents in 2025</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">AI won't replace you, but someone using AI will. Discover the top AI agents that are revolutionizing product management and how to leverage them effectively.</p>
              <a 
                href="https://medium.com/design-bootcamp/top-10-ai-agents-in-2025-db41e98a4a68" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700"
              >
                Read more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-purple-500 transition-colors group transform hover:scale-105 duration-300 shadow-lg hover:shadow-xl">
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">PM Interview Question: Microsoft's AI Integration</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">Microsoft has been at the forefront of AI integration, embedding powerful tools like Copilot across its Office suite. Learn how to tackle this common interview question.</p>
              <a 
                href="https://medium.com/design-bootcamp/pm-interview-question-microsoft-is-expanding-ai-integration-across-its-products-9dfc7751e189" 
                target="_blank"
                rel="no
                opener noreferrer"
                className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700"
              >
                Read more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <a 
            href="https://rohitverma141.medium.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
          >
            Explore all <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer section */}
      <footer className="relative bg-[#1a1a1a] text-white py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20 animate-pulse"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center gap-6 mb-8">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white animate-gradient">Contact Us</h3>
              <div className="flex items-center gap-8">
                <a 
                  href="https://www.linkedin.com/company/theproductsprints/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors transform hover:scale-105 duration-300 group"
                >
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-2 rounded-full group-hover:from-purple-500/20 group-hover:to-pink-500/20">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <span>Follow us on LinkedIn</span>
                </a>
                <div className="flex items-center gap-2 text-gray-300 group">
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-2 rounded-full group-hover:from-purple-500/20 group-hover:to-pink-500/20">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span>+91 8318023406</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-400">© 2024 The Product Sprints. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
