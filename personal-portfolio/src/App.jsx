import './App.css'

function App() {
  return (
    <>
      <nav className="navbar">
        <a href="#about">About</a>
        <a href="#stats">Stats</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="https://github.com/EnisseNd" target="_blank" rel="noopener noreferrer">GitHub</a>
      </nav>

      <div className="page">
        <header className="myname">
          <h1>Enisse Ndikumana</h1>
        </header>

        <section className="section" id="about">
          <h2 className="section-title">About Me</h2>
          <p>
            Hi! I'm Enisse, a Yale sophomore passionate about all steps of the software development process, from conception to execution.
            I'm mainly interested in software engineering (drivers, embedded), product management, and AI/ML.
          </p>
        </section>

        <section className="section" id="stats">
          <h2 className="section-title">Stats</h2>
          <ul className="stats">
            <li className="stat">
              <span className="stat-label">Age</span>
              <span className="stat-value">19</span>
            </li>
            <li className="stat">
              <span className="stat-label">Hometown</span>
              <span className="stat-value">Austin, TX</span>
            </li>
            <li className="stat">
              <span className="stat-label">Residence</span>
              <span className="stat-value">New Haven, CT (Boola Boola!!)</span>
            </li>
            <li className="stat">
              <span className="stat-label">Major</span>
              <span className="stat-value">Computer Science and Economics</span>
            </li>
          </ul>
        </section>

        <section className="section" id="experience">
          <h2 className="section-title">Experience</h2>
          <div className="experience">
            <article className="exp">
              <h3>
                <a href="https://www.ni.com/en.html" target="_blank" rel="noopener noreferrer">
                  Emerson T&M (formerly NI) - SWE Intern
                </a>
              </h3>
              <p>
                Over the past <b>3 summers</b>, I have been a Software Engineering Intern at Emerson T&M. Some projects I've worked on while there have 
                been a <b>command-line interface</b> for EV battery test modules, a <b>code-generation plugin</b> for .NET Core, and research on <b>performance 
                optimizations</b> for state operations in RF Test composite devices.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="projects">
          <h2 className="section-title">Projects</h2>
          <div className="projects">
            <article className="project">
              <h3>
                <a href="https://github.com/EnisseNd/SponsorshipOptimizer" target="_blank" rel="noopener noreferrer">
                  Sponsorship Optimizer
                </a>
              </h3>
              <p>
                This was my first project experimenting with AI workflows and implementation. I created an <b>AI-powered</b> sponsorship outreach API using
                Python, FastAPI, PostgreSQL, and Groq/LLaMA 3.3 to streamline employer relationship management.
              </p>
            </article>

            <article className="project">
              <h3>
                <a href="https://github.com/EnisseNd/CurrencyConverter" target="_blank" rel="noopener noreferrer">
                  Currency Converter
                </a>
              </h3>
              <p>
                This project was undertaken to explore my love of the diverse countries on this planet,
                through a practical application that converts currency values between different countries using real-time exchange rates from an external API.
              </p>
            </article>

            <article className="project">
              <h3>
                <a href="https://github.com/EnisseNd/LangTranslator" target="_blank" rel="noopener noreferrer">
                  Language Translator
                </a>
              </h3>
              <p>
                This project was created to facilitate communication across different languages by
                translating text input from one language to another using an external translation API.
              </p>
            </article>

            <article className="project">
              <h3>
                <a href="https://github.com/EnisseNd/C2C-Chatbot" target="_blank" rel="noopener noreferrer">
                  Chatbot
                </a>
              </h3>
              <p>
                My first project was a rudimentary chatbot meant to respond to standard user queries.
                Plans are in the works to refactor and expand the abilities of this chatbot to be more interactive.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="contact">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-links">
            <a href="mailto:enisse.ndikumana@yale.edu">enisse.ndikumana@yale.edu</a>
            <a href="https://linkedin.com/in/enisse-ndikumana/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </section>
      </div>
    </>
  )
}

export default App