"use client"
import { useEffect } from "react";
import { SiVoipdotms } from "react-icons/si";

const About = () => {
  // About information in a timeline format
  const aboutDetails = [
    {
      title: "Who I Am",
      value: "Rafi Ahmed, TypeScript Expert & Full-Stack Developer",
      details: [
        "3+ years full-stack developer from Bangladesh",
        "Specialized in scalable, user-centric applications",
        "Expert in frontend interfaces & backend systems",
        "Focus on clean code & performance optimization"
      ],
      icon: (
        <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      ),
    },
    {
      title: "My Journey",
      value: "From Curiosity to Professional Excellence",
      details: [
        "Started with HTML/CSS during university",
        "Weekend experiments evolved to deep passion",
        "Transformed from beginner to seasoned developer",
        "Now mentoring others in coding community"
      ],
      icon: (
        <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
    },
    // {
    //   title: "Technical Expertise",
    //   value: "MERN Stack & Modern Web Technologies",
    //   details: [
    //     "MERN stack: MongoDB, Express.js, React.js, Node.js",
    //     "Advanced TypeScript integration",
    //     "Next.js, Tailwind CSS, Firebase",
    //     "Vercel, Netlify, AWS deployment",
    //     "15+ production applications delivered"
    //   ],
    //   icon: (
    //     <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
    //     </svg>
    //   ),
    // },
    {
      title: "Frontend Development",
      value: "Modern UI/UX & Interactive Applications",
      details: [
        "React.js with advanced hooks and patterns",
        "Next.js for server-side rendering and optimization",
        "TypeScript for type-safe development",
        "Tailwind CSS for responsive design",
        "HTML5, CSS3, JavaScript (ES6+)"
      ],
      icon: (
        <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
    },
    {
      title: "Backend Development",
      value: "Scalable Server-Side Architecture",
      details: [
        "Node.js with Express.js framework",
        "RESTful API design and development",
        "JWT authentication and authorization",
        "Middleware implementation and optimization",
        "API documentation and testing"
      ],
      icon: (
        <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"></path>
        </svg>
      ),
    },
    {
      title: "Database Management",
      value: "Data Storage & Optimization",
      details: [
        "MongoDB with Mongoose ODM",
        "Database design and schema optimization",
        "Aggregation pipelines and complex queries",
        "Firebase Firestore for real-time data",
        "PostgreSQL for relational data management"
      ],
      icon: (
        <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
        </svg>
      ),
    },
    {
      title: "Deployment & DevOps",
      value: "Production-Ready Deployment",
      details: [
        "Vercel for Next.js applications",
        "Netlify for static site hosting",
        "Firebase Deployment",
        "Git/GitHub version control and CI/CD",
        "Performance monitoring and optimization"
      ],
      icon: (
        <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
        </svg>
      ),
    },
    {
      title: "AI & Modern Technologies",
      value: "Cutting-Edge Integration",
      details: [
        "OpenAI API integration for intelligent features",
        "Gemini AI for conversational interfaces",
        "Payment gateway integration (Stripe, etc.)",
        "Progressive Web App (PWA) development"
      ],
      icon: (
        <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
    },
    {
      title: "Development Tools",
      value: "Productivity & Code Quality",
      details: [
        "VS Code with advanced extensions",
        "npm/yarn package management",
        "ESLint and Prettier for code quality",
        "Postman for API testing",
        "Chrome DevTools for debugging"
      ],
      icon: (
        <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      ),
    },
    {
      title: "Problem-Solving Philosophy",
      value: "User-Centric & Innovation-Driven Approach",
      details: [
        "Focus on real user needs & pain points",
        "Clean, maintainable, scalable code",
        "Responsive design for all devices",
        "Performance & accessibility optimization",
        "Continuous learning mindset"
      ],
      icon: (
        <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      ),
    },
    {
      title: "Key Achievements",
      value: "Delivered 15+ Production Applications",
      details: [
        "Medimart e-commerce platform: Multi-vendor medicine marketplace",
        "Parcelo delivery system: Real-time parcel tracking dashboard",
        "AI-powered help desk: ChatGPT/Gemini integration",
        "E-commerce solutions: payment gateway integrations",
        "100+ algorithmic problems solved (Codeforces)"
      ],
      icon: (
        <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
        </svg>
      ),
    },
    {
      title: "Current Focus",
      value: "Advanced React Patterns & Cloud Architecture",
      details: [
        "Advanced React patterns & component architecture",
        "Redux Toolkit & Context API state management",
        "AWS cloud architecture & Docker containerization",
        "OpenAI/Gemini AI web integration",
        "PWA development & performance optimization"
      ],
      icon: (
        <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
        </svg>
      ),
    },
    {
      title: "Vision & Goals",
      value: "Building the Future of Web Technology",
      details: [
        "Join dynamic teams for innovative projects",
        "Leverage technical skills in growth environments",
        "Lead development teams & architect large-scale apps",
        "Mentor next generation developers",
        "Build impactful applications for users"
      ],
      icon: (
        <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
        </svg>
      ),
    },
  ];
  // Fade-in animation using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-10 bg-[#E80F88]"></div>
            <h3 className="text-xl font-medium text-[#E80F88]">GET TO KNOW ME</h3>
            <div className="h-1 w-10 bg-[#E80F88]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            About Me
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-[#E80F88]"></span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 mt-6">
            I&lsquo;m a dedicated web developer passionate about crafting impactful digital solutions. Learn more about my journey and expertise below.
          </p>
        </div>

        {/* Timeline for about details */}
        <div className="relative mb-16">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:-ml-0.5 h-full w-0.5 bg-gray-800"></div>

          {/* About detail items */}
          {aboutDetails.map((detail, index) => (
            <div
              key={index}
              className={`animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-${index * 200
                } mb-16 relative`}
            >
              <div
                className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-4 md:-translate-x-2.5 w-5 h-5 rounded-full bg-[#E80F88] z-10 border-4 border-black shadow-[0_0_10px_rgba(232,15,136,0.6)]">
                  <div className="absolute -inset-1 rounded-full border-2 border-pink-400 animate-ping opacity-20"></div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 pl-14 md:pl-0 md:px-8">
                  <div
                    className={`bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#E80F88] transition-all duration-300 shadow-lg relative ${index % 2 === 0 ? "md:mr-6" : "md:ml-6"
                      }`}
                  >
                    <div className="flex items-start">
                      <div className="hidden md:flex md:items-center md:justify-center mr-4 w-12 h-12 rounded-full bg-gray-800">
                        {detail.icon}
                      </div>

                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                          {detail.title}
                        </h3>
                        <p className="text-lg text-pink-400 font-medium">
                          {detail.value}
                        </p>
                        <ul>
                          {
                            detail.details.map((item, i) => <li className="flex items-center gap-2" key={i}><SiVoipdotms />{item}</li>)
                          }

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;