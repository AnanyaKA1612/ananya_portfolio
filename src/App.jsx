import './App.css';

function App() {
  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">ANANYA.</h2>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="tagline">✦ CREATIVE DEVELOPER & DESIGNER</span>
          <h1>
            Hello, I'm <span>Ananya K. A.</span>
          </h1>
          <h2>I turn ideas into digital experiences.</h2>
          <p>
            A BCA student and aspiring Full Stack Developer passionate about creating meaningful web applications, exploring new technologies, and turning imagination into reality.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">Explore My Work ↗</a>
            <a href="/resume.pdf" download target="_blank" rel="noreferrer" className="resume-btn">
              Download Resume 📥
            </a>
          </div>

          <div className="hero-footer">
            <span>📍 Bengaluru, India</span>
            <span>💻 MERN Stack Learner</span>
          </div>
        </div>

        <div className="hero-card">
          <div className="floating-badge">Available for Hire</div>
          <div className="profile-container">
            <div className="profile-glow"></div>
            <img
              src="/profile.jpg"
              alt="Ananya K. A."
              className="profile-photo"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="profile-placeholder" style={{ display: 'none' }}>
              <span>ANANYA</span>
            </div>
          </div>
          <h3>Creative Builder.</h3>
          <p>Learning today. Building tomorrow.</p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about" id="about">
        <div className="section-label">01 / THE DEVELOPER BEHIND THE SCREEN</div>
        <h2>More than just <span>writing code.</span></h2>

        <div className="about-content">
          <div className="about-text">
            <h3>Hi, I'm Ananya K. A. <span>✦</span></h3>
            <p>
              I'm a BCA student and aspiring Full Stack Developer who enjoys turning creative ideas into functional digital experiences.
            </p>
            <p>
              I'm building my skills in the MERN stack, exploring frontend design, backend development, and database management through hands-on projects.
            </p>
            <p>
              I don't believe in knowing everything from day one. I believe in asking questions, experimenting, learning from mistakes, and getting better with every line of code.
            </p>

            <div className="about-signature">
              <span>MY APPROACH</span>
              <h3>Stay curious. Build boldly. Keep growing.</h3>
            </div>
          </div>

          <div className="about-highlight">
            <div className="highlight-item">
              <span>01</span>
              <div>
                <h3>Curiosity</h3>
                <p>Exploring how technology can solve real problems.</p>
              </div>
            </div>
            <div className="highlight-item">
              <span>02</span>
              <div>
                <h3>Consistency</h3>
                <p>Showing up, practising, and improving every day.</p>
              </div>
            </div>
            <div className="highlight-item">
              <span>03</span>
              <div>
                <h3>Creativity</h3>
                <p>Giving ideas a digital form through code and design.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="skills" id="skills">
        <div className="section-label">02 / MY DEVELOPER TOOLKIT</div>
        <h2>Skills that turn <span>ideas into reality.</span></h2>
        <p className="skills-intro">
          A growing collection of technologies and tools I use to learn, experiment, and build digital experiences.
        </p>

        <div className="skills-grid">
          <div className="skill-card">
            <span className="skill-number">01 / INTERFACES</span>
            <div className="skill-icon">⌘</div>
            <h3>Frontend Development</h3>
            <p>Designing responsive, interactive, and user-friendly interfaces.</p>
            <div className="skill-tags">
              <span>HTML</span><span>CSS</span><span>JavaScript</span>
              <span>React</span><span>Bootstrap</span>
            </div>
          </div>

          <div className="skill-card">
            <span className="skill-number">02 / LOGIC</span>
            <div className="skill-icon">⚡</div>
            <h3>Backend Development</h3>
            <p>Developing server-side applications, APIs, and database connections.</p>
            <div className="skill-tags">
              <span>Node.js</span><span>Express.js</span>
              <span>MongoDB</span><span>REST APIs</span>
            </div>
          </div>

          <div className="skill-card">
            <span className="skill-number">03 / WORKFLOW</span>
            <div className="skill-icon">✦</div>
            <h3>Tools & Workflow</h3>
            <p>Organising projects, writing code, and managing development workflows.</p>
            <div className="skill-tags">
              <span>Git</span><span>GitHub</span><span>VS Code</span><span>Vite</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects" id="projects">
        <div className="section-label">03 / THINGS I'VE BUILT</div>
        <h2>Ideas turned into <span>projects.</span></h2>

        <div className="projects-grid">
          <div className="project-card">
            <div>
              <div className="project-top"><span>01 / MERN STACK</span><span>↗</span></div>
              <h3>MarketPro</h3>
              <p>A marketing campaign and lead conversion platform designed to track campaigns, manage leads, and understand performance.</p>
              <div className="project-tags">
                <span>React</span><span>Node.js</span><span>Express</span><span>MongoDB</span>
              </div>
            </div>
            <span className="project-status">In Progress</span>
          </div>

          <div className="project-card">
            <div>
              <div className="project-top"><span>02 / REACT</span><span>↗</span></div>
              <h3>Counter Dashboard</h3>
              <p>An interactive dashboard built with React to practise component-based development and state management.</p>
              <div className="project-tags">
                <span>React</span><span>JavaScript</span><span>CSS</span><span>Vite</span>
              </div>
            </div>
            <a href="https://github.com/AnanyaKA1612/Counter-Dashboard" target="_blank" rel="noreferrer" className="project-link">View Source Code ↗</a>
          </div>

          <div className="project-card">
            <div>
              <div className="project-top"><span>03 / EXPRESS & EJS</span><span>↗</span></div>
              <h3>BeatBox Music Library</h3>
              <p>A music library website built to explore Express routing, EJS templates, and dynamic content rendering.</p>
              <div className="project-tags">
                <span>Node.js</span><span>Express</span><span>EJS</span>
              </div>
            </div>
            <a href="https://github.com/AnanyaKA1612/BeatBox-Music-Library" target="_blank" rel="noreferrer" className="project-link">View Source Code ↗</a>
          </div>

          <div className="project-card">
            <div>
              <div className="project-top"><span>04 / CREATIVE DEV</span><span>↗</span></div>
              <h3>ChromaGrid</h3>
              <p>A creative web development project showcasing an interactive grid-based visual experience.</p>
              <div className="project-tags">
                <span>Web Development</span><span>UI Design</span>
              </div>
            </div>
            <a href="https://github.com/AnanyaKA1612/ChromaGrid-Project" target="_blank" rel="noreferrer" className="project-link">View Source Code ↗</a>
          </div>

          <div className="project-card">
            <div>
              <div className="project-top"><span>05 / REACT PROJECT</span><span>↗</span></div>
              <h3>Technika Course Listing</h3>
              <p>A course listing project designed to present learning opportunities through a structured interface.</p>
              <div className="project-tags">
                <span>React</span><span>JavaScript</span><span>CSS</span>
              </div>
            </div>
            <a href="https://github.com/AnanyaKA1612/Technika-Course-Listing" target="_blank" rel="noreferrer" className="project-link">View Source Code ↗</a>
          </div>

          <div className="project-card">
            <div>
              <div className="project-top"><span>06 / NODE & MONGODB</span><span>↗</span></div>
              <h3>Destiny Travels API</h3>
              <p>A travel destination API project practising backend development and CRUD operations.</p>
              <div className="project-tags">
                <span>Node.js</span><span>Express</span><span>MongoDB</span>
              </div>
            </div>
            <a href="https://github.com/AnanyaKA1612/Destiny-Travels-API" target="_blank" rel="noreferrer" className="project-link">View Source Code ↗</a>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section className="certifications" id="certifications">
        <div className="section-label">04 / KNOWLEDGE IN PROGRESS</div>
        <h2>Learning today. <span>Building tomorrow.</span></h2>
        <p className="cert-intro">
          Every certification represents a new skill, a new perspective, and another step forward.
        </p>

        <div className="cert-list">
          <div className="cert-item">
            <div className="cert-icon">01</div>
            <div>
              <h3>MERN Stack Development</h3>
              <p>Anudip Foundation</p>
              <span>Full Stack Development Training</span>
            </div>
            <span className="cert-arrow">↗</span>
          </div>

          <div className="cert-item">
            <div className="cert-icon">02</div>
            <div>
              <h3>Getting Started with Generative AI</h3>
              <p>IBM</p>
              <span>Artificial Intelligence</span>
            </div>
            <span className="cert-arrow">↗</span>
          </div>

          <div className="cert-item">
            <div className="cert-icon">03</div>
            <div>
              <h3>Project Management Fundamentals</h3>
              <p>IBM</p>
              <span>Project Management</span>
            </div>
            <span className="cert-arrow">↗</span>
          </div>

          <div className="cert-item">
            <div className="cert-icon">04</div>
            <div>
              <h3>Artificial Intelligence Fundamentals</h3>
              <p>IBM</p>
              <span>Artificial Intelligence</span>
            </div>
            <span className="cert-arrow">↗</span>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="education" id="education">
        <div className="section-label">05 / WHERE IT ALL COMES TOGETHER</div>
        <h2>My journey of <span>learning.</span></h2>

        <div className="education-card">
          <div className="education-details">
            <span className="education-tag">CURRENTLY PURSUING</span>
            <h3>Bachelor of Computer Applications (BCA)</h3>
            <p>Aditya Institute of Management Studies</p>
            <span className="education-note">
              Building a strong foundation in computer applications, programming, and software development while exploring full-stack web technologies.
            </span>
            <div className="education-year" style={{ marginTop: '1.2rem' }}>
              <span>ACADEMIC PERIOD: </span> 2024 — 2027
            </div>
          </div>
          <div className="education-symbol">A.</div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact" id="contact">
        <div className="section-label">06 / THE NEXT CONNECTION STARTS HERE</div>
        <h2>Let's turn the <span>next idea into reality.</span></h2>

        <div className="contact-card">
          <div>
            <span className="contact-small">HAVE SOMETHING IN MIND?</span>
            <h3>Let's start a conversation.</h3>
            <p>
              Whether it's an opportunity, project idea, or a conversation about tech, feel free to reach out.
            </p>
          </div>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Kaananya1@gmail.com" target="_blank" rel="noreferrer" className="contact-button">Let's Talk ↗</a>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/ananya-ka-a16561427/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/AnanyaKA1612" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>ANANYA.</h3>
        <p>Designed with curiosity. Built with consistency.</p>
        <span>© 2026 Ananya K. A. — All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;