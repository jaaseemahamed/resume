import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, ChevronDown, Menu, X, Star, Zap, Database, Brain } from 'lucide-react';
import projectImg from "./assets/cgr.png";
import projectImg2 from "./assets/footwear site.png";
import projectImg3 from "./assets/sentiment.png";
import profilePhoto from "./assets/jazz.jpg";
import projectImg5 from "./assets/chatbot.png";
import projectImg6 from "./assets/drowsiness.png";
import './App.css';

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
            <div className="logo"></div>

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
          <div className="hero-layout">
            {/* Left Profile Image */}
            <div className="hero-profile-left">
              <div className="profile-image-container">
                <div className="profile-ring-large">
                  <div className="profile-inner-large">
                    <img
                      src={profilePhoto}
                      alt="Jaaseem Ahamed"
                      className="profile-photo"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="hero-content">
              <h5 className="hero-title">
                Hi, I'm <br /> <span style={{ whiteSpace: 'nowrap' }}>JAASEEM AHAMED.M.Y</span>
              </h5>

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
          </div>

          <div className="scroll-indicator">
            <ChevronDown size={32} />
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

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>

          <div className="projects-grid">
            {/* Project 1: Resort Booking */}
            <div className="project-card">
              <div className="project-layout">
                <div className="project-image">
                  <img
                    src={projectImg}
                    alt="Resort Booking Platform"
                    className="project-img"
                  />
                </div>

                <div className="project-content">
                  <h3 className="project-title">
                    A Responsive Booking Website For Resorts
                  </h3>
                  <p className="project-description">
                    A full-stack room booking platform for Chennai Grand Residency resort in Kodaikanal.
                    Features real-time data handling, smooth UI/UX, and an integrated telegram chatbot assistant
                    for enhanced customer interaction to book rooms and streamlined reservations.
                  </p>

                  <div className="tech-stack">
                    {['HTML', 'CSS', 'JavaScript', 'React', 'Vite'].map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>

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
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: Footwear E-Commerce */}
            <div className="project-card">
              <div className="project-layout">
                <div className="project-image">
                  <img
                    src={projectImg2}
                    alt="Footwear e-commerce website"
                    className="project-img"
                  />
                </div>
                <div className="project-content">
                  <h3 className="project-title">Footwear E-Commerce Website</h3>
                  <p className="project-description">
                    A modern footwear e-commerce website with product listing, cart system, and responsive design.
                    Built using React, Node.js. This model uses the telegram chatbot to make store the datas of the users and deployed on Vercel.
                  </p>

                  <div className="tech-stack">
                    {['React', 'Node.js', 'CSS', 'MongoDB', 'Vercel'].map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href="https://zam-zam-enterprice-5i5h.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link primary">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3: Sentiment Analysis App */}
            <div className="project-card">
              <div className="project-layout">
                <div className="project-image">
                  <img
                    src={projectImg3}
                    alt="Sentiment Analysis App"
                    className="project-img"
                  />
                </div>
                <div className="project-content">
                  <h3 className="project-title">Sentiment Analysis App</h3>
                  <p className="project-description">
                    A machine learning-powered web application that classifies movie reviews as positive or negative, built using TensorFlow, Flask, and a React frontend for smooth and responsive user interaction.
                  </p>

                  <div className="tech-stack">
                    {['Python', 'Flask', 'TensorFlow', 'React'].map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project 4: Islamic Chatbot */}
            <div className="project-card">
              <div className="project-layout">
                <div className="project-image">
                  <img
                    src={projectImg5}
                    alt="Islamic Chatbot"
                    className="project-img"
                  />
                </div>
                <div className="project-content">
                  <h3 className="project-title">Islamic Chatbot</h3>
                  <p className="project-description">
                    This project is a search engine–based model designed to help users explore and understand the Qur'an and Hadith. It allows users to ask questions and receive relevant verses and Hadith references as precise answers.
                  </p>

                  <div className="tech-stack">
                    {['Python', 'NLP', 'React', 'datasets'].map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href="https://islamic-chatbot-7n4ihs1ss-jaaseems-projects.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link primary"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 5: Drowsiness Detector */}
            <div className="project-card">
              <div className="project-layout">
                <div className="project-image">
                  <img
                    src={projectImg6}
                    alt="Drowsiness Detector"
                    className="project-img"
                  />
                </div>

                <div className="project-content">
                  <h3 className="project-title">
                    Drowsiness Detector
                  </h3>
                  <p className="project-description">
                    A real-time drowsiness detection web app built using React and Vite that monitors facial and eye movements through the webcam. The system detects signs of fatigue such as prolonged eye closure and alerts the user instantly.
                  </p>

                  <div className="tech-stack">
                    {['HTML', 'CSS', 'JavaScript', 'React', 'Vite'].map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href="https://safety-assistance.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link primary"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
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
              Ready to collaborate or discuss exciting opportunities? I'd like to hear from you!
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
    </div>
  );
};

export default Portfolio;