import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, ChevronDown, Menu, X, Star, Zap, Database, Brain } from 'lucide-react';
import projectImg from "./assets/resort.png";


const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = ['hero', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="portfolio">
      {/* Animated background particles */}
      <div className="bg-particles">
        <div 
          className="particle particle-1"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="particle particle-2" />
        <div className="particle particle-3" />
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo"> M.Y.JAASEEM AHAMED</div>
            
            <div className="nav-links desktop-nav">
              {['hero', 'projects', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`nav-link ${activeSection === item ? 'active' : ''}`}
                >
                  {item === 'hero' ? 'Home' : item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>

            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-nav-links">
              {['hero', 'projects', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="mobile-nav-link"
                >
                  {item === 'hero' ? 'Home' : item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="profile-container">
              <div className="profile-ring">
                <div className="profile-inner">
                  <span className="profile-text">JA</span>
                </div>
              </div>
            </div>
            
            <h1 className="hero-title">
              Hi, I'm JAASEEM AHAMED.M.Y
            </h1>
            
            <div className="role-badges">
              {[
                { icon: Code, text: 'Developer' },
                { icon: Zap, text: 'Problem Solver' },
                { icon: Database, text: 'Data Analyst' },
                { icon: Brain, text: 'AI Engineer' }
              ].map((item, index) => (
                <div key={index} className="role-badge">
                  <item.icon size={20} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            
            <p className="hero-description">
              Passionate AI & Data Science student turning intelligent systems into real-world solutions. 
              Specializing in machine learning, data-driven insights, and innovative web applications.
            </p>
            
            <div className="hero-actions">
              <button
                onClick={() => scrollToSection('projects')}
                className="cta-button"
              >
                View My Work
                <ChevronDown size={20} />
              </button>
            </div>
          </div>

          <div className="scroll-indicator">
            <ChevronDown size={32} />
          </div>
        </div>
      </section>


{/* Projects Section */}
<section id="projects" className="projects-section">
  <div className="container">
    <h2 className="section-title">Featured Projects</h2>
    
    <div className="projects-grid">
      <div className="project-card">
        <div className="project-layout">
          
          {/* Image Section */}
          <div className="project-image">
            <img 
              src={projectImg} 
              alt="Resort Booking Platform" 
              className="project-img"
            />
          </div>

          {/* Content Section */}
          <div className="project-content">
            <h3 className="project-title">
              A Responsive Booking Website For Resorts
            </h3>
            <p className="project-description">
              A full-stack room booking platform for Chennai Grand Residency resort in Kodaikanal. 
              Features real-time data handling, smooth UI/UX, and an integrated chatbot assistant 
              for enhanced customer interaction and streamlined reservations.
            </p>

            {/* Tech Stack */}
            <div className="tech-stack">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Vite'].map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>

            {/* Links */}
            <div className="project-links">
              <a
                href="https://chennai-grands.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link primary"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
              <a
                href="https://github.com/jaaseemahamed/chennai-grands"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link secondary"
              >
                <Code size={16} />
                Source Code
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>


      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          
          <div className="about-grid">
            <div className="about-content">
              <p className="about-text">
                I'm Jaseem Ahamed, an Artificial Intelligence and Data Science student passionate about 
                turning data and intelligent systems into real-world solutions. My interests span machine 
                learning, deep learning, forecasting, data-driven decision-making, and AI-powered applications.
              </p>
              <p className="about-text">
                I build projects that apply these concepts in practice, including custom hotel booking 
                websites, e-commerce platforms, and AI-driven automation tools. I bridge the gap between 
                research and everyday problem-solving through data visualization and interactive applications.
              </p>
            </div>
            
            <div className="skills-card">
              <h3 className="skills-title">Tech Stack</h3>
              <div className="skills-grid">
                {[
                  'JavaScript', 'HTML', 'CSS', 'Python', 
                  'Java', 'React', 'Node.js', 'AI/ML'
                ].map((skill) => (
                  <div key={skill} className="skill-item">
                    <div className="skill-dot"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">Let's Connect</h2>
            <p className="contact-description">
              Ready to collaborate or discuss exciting opportunities? I'd love to hear from you!
            </p>
            
            <div className="contact-links">
              <a
                href="mailto:jaseemahamed2004@gmail.com"
                className="contact-link primary"
              >
                <Mail size={20} />
                Email Me
              </a>
              <a
                href="https://github.com/jaaseemahamed"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link secondary"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link secondary"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>© {new Date().getFullYear()} Jaaseem Ahamed. Crafted with passion and code.</p>
          </div>
        </div>
      </footer>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.6;
        }

        html {
          scroll-behavior: smooth;
        }

        .portfolio {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
          color: white;
          position: relative;
          overflow-x: hidden;
        }

        .bg-particles {
          position: fixed;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          filter: blur(50px);
        }

        .particle-1 {
          width: 384px;
          height: 384px;
          background: rgba(59, 130, 246, 0.1);
          transition: all 0.3s ease-out;
          animation: pulse 2s infinite;
        }

        .particle-2 {
          top: 25%;
          left: 25%;
          width: 256px;
          height: 256px;
          background: rgba(147, 51, 234, 0.05);
          animation: bounce 3s infinite;
        }

        .particle-3 {
          bottom: 25%;
          right: 25%;
          width: 320px;
          height: 320px;
          background: rgba(236, 72, 153, 0.05);
          animation: pulse 4s infinite;
        }

        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 50;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
        }

        .logo {
          font-size: 24px;
          font-weight: bold;
          background: linear-gradient(45deg, #60a5fa, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .desktop-nav {
          display: flex;
          gap: 32px;
        }

        .nav-link {
          background: none;
          border: none;
          color: white;
          font-size: 16px;
          cursor: pointer;
          padding: 8px 0;
          border-bottom: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #60a5fa;
          border-bottom-color: #60a5fa;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }

        .mobile-menu {
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
        }

        .mobile-nav-links {
          padding: 16px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mobile-nav-link {
          background: none;
          border: none;
          color: white;
          font-size: 16px;
          cursor: pointer;
          text-align: left;
          padding: 8px 0;
          transition: color 0.3s ease;
        }

        .mobile-nav-link:hover {
          color: #60a5fa;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .hero-section {
          padding-top: var(--navbar-height, 80px);
          display: flex;
          align-items: center;
        }

        .hero-content {
          text-align: center;
          max-width: 800px;
        }

        .profile-container {
          margin-bottom: 32px;
        }

        .profile-ring {
          width: 128px;
          height: 128px;
          margin: 0 auto 32px;
          border-radius: 50%;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          padding: 4px;
          animation: spin 8s linear infinite;
        }

        .profile-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .profile-text {
          font-size: 36px;
          font-weight: bold;
        }

        .hero-title {
          font-size: clamp(48px, 8vw, 96px);
          font-weight: bold;
          margin-bottom: 24px;
          background: linear-gradient(45deg, #60a5fa, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: pulse 3s infinite;
        }

        .role-badges {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          margin-bottom: 32px;
        }

        .role-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          border-radius: 50px;
          background: rgba(30, 41, 59, 0.5);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(148, 163, 184, 0.2);
          transition: all 0.3s ease;
          font-size: 18px;
        }

        .role-badge:hover {
          transform: scale(1.05);
          border-color: rgba(59, 130, 246, 0.5);
        }

        .role-badge svg {
          color: #60a5fa;
        }

        .hero-description {
          font-size: 20px;
          color: #cbd5e1;
          margin-bottom: 48px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 24px;
        }

        .cta-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          background: linear-gradient(45deg, #2563eb, #7c3aed);
          border: none;
          border-radius: 50px;
          color: white;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
        }

        .cta-button:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 35px rgba(37, 99, 235, 0.4);
          background: linear-gradient(45deg, #1d4ed8, #6d28d9);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
          color: #94a3b8;
        }

        .section-title {
          font-size: clamp(36px, 6vw, 60px);
          font-weight: bold;
          text-align: center;
          margin-bottom: 64px;
          background: linear-gradient(45deg, #60a5fa, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .projects-section {
          padding: 80px 0;
          position: relative;
          z-index: 1;
        }

        .projects-grid {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .project-card {
          background: rgba(30, 41, 59, 0.5);
          backdrop-filter: blur(8px);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(148, 163, 184, 0.2);
          transition: all 0.5s ease;
        }

        .project-card:hover {
          transform: scale(1.02);
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 25px 50px rgba(59, 130, 246, 0.1);
        }

        .project-layout {
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 768px) {
          .project-layout {
            flex-direction: row;  
          }
        }
       .project-img {
        width: 100%;              /* make it scale inside the card */
        max-width: 400px;         /* prevent it from being too wide */
        height: auto;             /* keep aspect ratio */
        border-radius: 12px;      /* rounded corners */
        object-fit: cover;        /* nicely crop/fit image */
        display: block;
        margin: 0 auto 1rem auto; /* center with some space below */
}


        .project-placeholder {
          width: 100%;
          height: 256px;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .project-placeholder::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.2);
        }

        .project-placeholder svg,
        .project-placeholder h3 {
          position: relative;
          z-index: 1;
        }

        .project-placeholder h3 {
          margin-top: 16px;
          font-size: 20px;
          font-weight: bold;
        }

        .project-content {
          flex: 1;
          padding: 32px;
        }

        .project-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 16px;
          transition: color 0.3s ease;
        }

        .project-card:hover .project-title {
          color: #60a5fa;
        }

        .project-description {
          color: #cbd5e1;
          margin-bottom: 24px;
          line-height: 1.7;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .tech-tag {
          padding: 6px 12px;
          font-size: 14px;
          background: rgba(51, 65, 85, 0.5);
          border-radius: 20px;
          color: #60a5fa;
          border: 1px solid rgba(100, 116, 139, 0.3);
        }

        .project-links {
          display: flex;
          gap: 16px;
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .project-link.primary {
          background: #2563eb;
          color: white;
        }

        .project-link.primary:hover {
          background: #1d4ed8;
        }

        .project-link.secondary {
          border: 1px solid #64748b;
          color: white;
        }

        .project-link.secondary:hover {
          border-color: #475569;
          background: rgba(71, 85, 105, 0.1);
        }

        .about-section {
          padding: 80px 0;
          position: relative;
          z-index: 1;
        }

        .about-grid {
          display: grid;
          gap: 48px;
          align-items: center;
        }

        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .about-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .about-text {
          font-size: 18px;
          color: #cbd5e1;
          line-height: 1.7;
        }

        .skills-card {
          background: rgba(30, 41, 59, 0.5);
          backdrop-filter: blur(8px);
          border-radius: 16px;
          padding: 32px;
          border: 1px solid rgba(148, 163, 184, 0.2);
        }

        .skills-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 24px;
          color: #60a5fa;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .skill-dot {
          width: 12px;
          height: 12px;
          background: linear-gradient(45deg, #60a5fa, #a855f7);
          border-radius: 50%;
        }

        .skill-item span {
          color: #cbd5e1;
        }

        .contact-section {
          padding: 80px 0;
          position: relative;
          z-index: 1;
        }

        .contact-content {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-description {
          font-size: 20px;
          color: #cbd5e1;
          margin-bottom: 48px;
        }

        .contact-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .contact-link.primary {
          background: linear-gradient(45deg, #2563eb, #7c3aed);
          color: white;
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
        }

        .contact-link.primary:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 35px rgba(37, 99, 235, 0.4);
        }

        .contact-link.secondary {
          border: 1px solid #64748b;
          color: white;
        }

        .contact-link.secondary:hover {
          border-color: #475569;
          transform: scale(1.05);
        }

        .footer {
          padding: 32px 0;
          border-top: 1px solid rgba(148, 163, 184, 0.2);
          background: rgba(15, 23, 42, 0.5);
          backdrop-filter: blur(8px);
        }

        .footer-content {
          text-align: center;
          color: #94a3b8;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
          40%, 43% { transform: translateY(-20px); }
          70% { transform: translateY(-10px); }
          90% { transform: translateY(-4px); }
        }

        @media (max-width: 768px) {
          .role-badges {
            flex-direction: column;
            align-items: center;
          }
          
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .project-links {
            flex-direction: column;
          }
          
          .contact-links {
            flex-direction: column;
            align-items: center;
          }
          
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;