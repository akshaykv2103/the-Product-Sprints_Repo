import React from 'react';
import { ArrowRight, CheckCircle2, Users2, Zap, MessageSquare, Linkedin } from 'lucide-react';

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
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="#blogs-section" 
                onClick={scrollToBlogs}
                className="text-white hover:text-gray-300 transition-colors text-lg"
              >
                Blog
              </a>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfD6sRvW6NhUqbZn4JTsqPH5_p2DdRBn65SdatbxFCrfGApxw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Apply for Cohort
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-[#1a1a1a] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6">
              Join 
              <span className="text-red-500 font-extrabold"> The Product Sprints </span> 
              Community
            </h1>
            <p className="text-xl mb-4 text-gray-300">Connect with product leaders, share insights, and accelerate your product management career</p>
            <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 p-[2px] rounded-lg mb-6">
              <p className="bg-[#1a1a1a] text-lg font-bold px-6 py-2 rounded-lg">
                An exclusive community for IIT, IIM Alumni and students
              </p>
            </div>
            <div className="flex flex-col items-center gap-8">
              <a 
                href="https://chat.whatsapp.com/LEMwE3NgrrAJPGFYUz3qok" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Join Now <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <div className="relative mt-2">
                <div className="absolute -left-6 -right-6 top-0 h-full bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 blur-xl"></div>
                <p className="relative text-lg font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Enroll now & get access to Exclusive Community and Resources from Product Leaders
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Cohort Section */}
   <section className="bg-[#2c2c2c] text-white py-16">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto text-center">
      {/* Heading */}
      <h2 className="text-5xl font-extrabold mb-6 text-white">
        Crack Interviews & Build Products with <span className="text-red-500">Confidence</span>
      </h2>
      
      {/* Description */}
      <p className="text-xl text-gray-300 mb-12 leading-relaxed">
        Learn the technical skills that set you apart. Master system design, APIs, data pipelines, 
        and more in this hands-on cohort.
      </p>

      {/* Details Section */}
      <div className="flex justify-center gap-16 mb-12">
        <div className="text-center">
          <h3 className="text-4xl font-bold text-white mb-2">1st April, 2025</h3>
          <p className="text-gray-400 text-lg">4 weeks cohort</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold text-white mb-2">40</h3>
          <p className="text-gray-400 text-lg">Seats Available</p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-4 items-center">
        {/* Apply Now Button */}
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSfD6sRvW6NhUqbZn4JTsqPH5_p2DdRBn65SdatbxFCrfGApxw/viewform" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition duration-300 w-full max-w-md text-center"
        >
          Apply for the Cohort Now!
        </a>

        {/* Download Curriculum */}
        <a 
          href="https://drive.google.com/file/d/1PvTJKGmCG91HdpE9eipHrDzznwPcNFlg/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-transparent border-2 border-gray-400 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-600 transition duration-300 w-full max-w-md text-center"
        >
          Download Curriculum
        </a>

        {/* Free Demo */}
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSfIawc05rGI7vDBGY-BF7BAHP_bTve8QmBbstaByX0JacBwRw/viewform" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-red-500 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-red-400 transition duration-300 w-full max-w-md text-center"
        >
          Avail a Free Demo!
        </a>
      </div>
    </div>
  </div>
</section>


      {/* Meet the Mentor Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-red-500">Meet the Mentor</h2>
            <p className="text-xl text-gray-600 mb-12">
              Learn from an experienced product leader who has helped shape successful products at top tech companies
            </p>
            
            <div className="mb-8">
              <img 
                src="/images/rohit.jpg"
                alt="Rohit Verma"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">Rohit Verma</h3>
              <div className="flex justify-center items-center mb-4">
                <a 
                  href="https://www.linkedin.com/in/rohitverma141/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0077b5] hover:text-[#00669c] transition-colors"
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

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-[#f5f5f5] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="w-8 h-8 text-[#1a1a1a]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Network</h3>
              <p className="text-gray-600">Connect with experienced product leaders and mentors</p>
            </div>
            <div className="text-center">
              <div className="bg-[#f5f5f5] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-[#1a1a1a]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Exclusive Resources</h3>
              <p className="text-gray-600">Access curated content and practical tools</p>
            </div>
            <div className="text-center">
              <div className="bg-[#f5f5f5] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-[#1a1a1a]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Events</h3>
              <p className="text-gray-600">Participate in workshops and networking sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Aspiring Product Managers <span className="text-red-500">♥</span> The Product Sprints
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <p className="text-lg text-gray-700 mb-6">
                "The Product Sprints gave me exactly what I needed to land a PM role—real-world problem-solving, hands-on product challenges, and mentorship from top industry leaders. The structured sprints and case studies helped me think like a PM, and the exclusive network opened doors I never imagined. Highly recommend!🚀"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">Akshay K. Verma</h4>
                  <p className="text-sm text-purple-600">Product Manager, HDFC Securities</p>
                </div>
                <a
                  href="linkedin.com/in/akshay-kumar-verma-326b03202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0077b5] hover:text-[#00669c] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Management Blogs Section */}
      <section id="blogs-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Product Management Blogs</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-purple-500 transition-colors group">
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

            <div className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-purple-500 transition-colors group">
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

            <div className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-purple-500 transition-colors group">
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
         <div className="flex justify-center">
              <a 
                href="https://rohitverma141.medium.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Explore all <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join The Product Sprints?</h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-start space-x-4 mb-6">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Real-world Product Experience</h3>
                <p className="text-gray-600">Learn from practitioners who've built successful products at leading companies</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 mb-6">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Structured Learning Path</h3>
                <p className="text-gray-600">Follow a proven curriculum designed to accelerate your product management career</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Supportive Community</h3>
                <p className="text-gray-600">Connect with peers who share your passion for product development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Level Up Your Product Career?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Join The Product Sprints today and get access to our community of product leaders, exclusive resources, and networking opportunities.</p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfD6sRvW6NhUqbZn4JTsqPH5_p2DdRBn65SdatbxFCrfGApxw/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors inline-flex items-center mx-auto"
          >
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 The Product Sprints. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
