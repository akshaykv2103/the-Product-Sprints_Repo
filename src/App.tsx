import React from 'react';
import { ArrowRight, CheckCircle2, Users2, Zap, MessageSquare, Linkedin, Phone } from 'lucide-react';

function App() {
  const scrollToBlogs = (e: React.MouseEvent) => {
    e.preventDefault();
    const blogsSection = document.getElementById('blogs-section');
    if (blogsSection) {
      blogsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-[#1a1a1a] py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <img 
              src="/images/logo.png"
              alt="The Product Sprints Logo" 
              className="h-24 w-auto ml-8"
            />
            <div className="flex items-center gap-6 mr-8">
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
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 duration-300 shadow-lg hover:shadow-xl"
              >
                Apply for Cohort
              </a>
            </div>
          </div>
        </div>
      </nav>

      <header className="relative bg-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20 animate-pulse"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white animate-gradient">
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
                href="https://drive.google.com/file/d/1PvTJKGmCG91HdpE9eipHrDzznwPcNFlg/view?usp=sharing" 
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

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-red-500 bg-clip-text">Meet the Mentor</h2>
            <p className="text-xl text-gray-600 mb-12">
              Learn from an experienced product leader who has helped shape successful products at top tech companies
            </p>
            
            <div className="mb-8 transform hover:scale-105 transition-all duration-300">
              <img 
                src="/images/rohit.jpg"
                alt="Rohit Verma"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover ring-4 ring-purple-500/30"
              />
              <h3 className="text-2xl font-bold mb-2">Rohit Verma</h3>
              <div className="flex justify-center items-center mb-4">
                <a 
                  href="https://www.linkedin.com/in/rohitverma141/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0077b5] hover:text-[#00669c] transition-colors transform hover:scale-110 duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Group Product Manager at Angel One with 9+ years in fintech, e-commerce, and travel. Expertise in product management, strategy, business growth, and innovation. IIM Bangalore alumnus, passionate about solving complex problems and driving impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="w-8 h-8 text-[#1a1a1a]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Network</h3>
              <p className="text-gray-600">Connect with experienced product leaders and mentors</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-[#1a1a1a]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Exclusive Resources</h3>
              <p className="text-gray-600">Access curated content and practical tools</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-[#1a1a1a]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Events</h3>
              <p className="text-gray-600">Participate in workshops and networking sessions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <div className="inline-block transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Aspiring Product Managers <span className="text-red-500">♥</span> The Product Sprints
              </h2>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
                <div className="absolute inset-0 bg-white rounded-2xl"></div>
              </div>

              <div className="relative">
                <div className="mb-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    "The Product Sprints gave me exactly what I needed to land a PM role—real-world problem-solving, hands-on product challenges, and mentorship from top industry leaders. The structured sprints and case studies helped me think like a PM, and the exclusive network opened doors I never imagined. Highly recommend!🚀"
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="transform hover:translate-x-2 transition-transform duration-300">
                    <h4 className="font-semibold text-gray-900">Akshay K. Verma</h4>
                    <p className="text-sm bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-medium">
                      Product Manager, HDFC Securities
                    </p>
                  </div>
                  <a
                    href="linkedin.com/in/akshay-kumar-verma-326b03202"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0077b5] hover:text-[#00669c] transition-colors transform hover:scale-110 duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>

                <div className="absolute -top-4 -left-4 text-6xl text-gray-100 font-serif">"</div>
                <div className="absolute -bottom-8 -right-4 text-6xl text-gray-100 font-serif rotate-180">"</div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                rel="noopener noreferrer"
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

      <section className="bg-[#f5f5f5] py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Why Join The Product Sprints?</h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-start space-x-4 mb-6 transform hover:scale-105 transition-all duration-300">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Real-world Product Experience</h3>
                <p className="text-gray-600">Learn from practitioners who've built successful products at leading companies</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 mb-6 transform hover:scale-105 transition-all duration-300">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Structured Learning Path</h3>
                <p className="text-gray-600">Follow a proven curriculum designed to accelerate your product management career</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 transform hover:scale-105 transition-all duration-300">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Supportive Community</h3>
                <p className="text-gray-600">Connect with peers who share your passion for product development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Ready to Level Up Your Product Career?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Join The Product Sprints today and get access to our community of product leaders, exclusive resources, and networking opportunities.</p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfD6sRvW6NhUqbZn4JTsqPH5_p2DdRBn65SdatbxFCrfGApxw/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 duration-300 shadow-lg hover:shadow-xl inline-flex items-center mx-auto"
          >
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center gap-6 mb-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Contact Us</h3>
              <div className="flex items-center gap-8">
                <a 
                  href="https://www.linkedin.com/company/theproductsprints/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors transform hover:scale-105 duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                  <span>Follow us on LinkedIn</span>
                </a>
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-6 h-6" />
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
