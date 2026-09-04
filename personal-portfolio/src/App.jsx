import './App.css'
import React from 'react'

function App() {
  return (
    <>
    <nav className="navbar">
      <a href="#about">About</a>
      <a href="#stats">Stats</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <a href="https://github.com/EnisseNd" target="_blank" rel="noopener noreferrer">GitHub</a>
    </nav>
    <div className="parent">
      <div className="children">
        <h1>Welcome to Enisse's Personal Portfolio</h1>
      </div>
      <div className="children">
        <h2 className="header2" id="about">About Me</h2>
        <h4>Hi! I'm Enisse, a Yale sophomore passionate about all steps of the software development process, from conception to execution.
          I'm mainly interested in software engineering (drivers, embedded), product management, and AI/ML.
        </h4>
      </div>
      <div className="children">
        <h2 className="header3" id="stats">Stats</h2>
          <p>Age: 19</p>
          <p>Hometown: Austin, TX</p>
          <p>Residence: New Haven, CT (Boola Boola!!)</p>
          <p>Major: Computer Science and Economics</p>
      </div>
      <div className="children">
        <h2 className="header3" id="projects"> Projects</h2>
        <h3>
            <a
            href="https://github.com/EnisseNd/SponsorshipOptimizer"
            target="_blank"
            rel="noopener noreferrer"
            >
              Sponsorship Optimizer
            </a>
          </h3>
          <p>
            This was my first project experimenting with AI workflows and implementation. I created an AI-powered sponsorship outreach API using 
            Python, FastAPI, PostgreSQL, and Groq/LLaMA 3.3 to streamline employer relationship management.
          </p>
          <h3>
            <a 
              href="https://github.com/EnisseNd/CurrencyConverter" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Currency Converter
            </a>
          </h3> 
          <p>This project was undertaken to explore my love of the diverse countires on this planet, 
            through a practical application that converts currency values between different countries using real-time exchange rates from an external API.
          </p>
          <h3>
            <a 
              href="https://github.com/EnisseNd/LangTranslator" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Language Translator
            </a>
          </h3>
          <p>This project was created to facilitate communication across different languages by 
            translating text input from one language to another using an external translation API.
          </p>
          <h3>
            <a 
              href="https://github.com/EnisseNd/C2C-Chatbot" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Chatbot
            </a>
          </h3>
          <p> My first project was a rudimentary chatbot meant to respond to standard user queries. 
            Plans are in the works to refactor and expand the abilities of this chatbot to be more interactive.
          </p>
      </div>
      <div className="children">
        <h2 className="header4" id="contact">Contact Me</h2>
          <h4>
            <a
            href='mailto:enisse.ndikumana@yale.edu'
            target="_blank"
            rel="noopener noreferrer"
            >
              enisse.ndikumana@yale.edu
            </a>
          </h4>
          <h4> 
            <a
            href='https://linkedin.com/in/enisse-ndikumana/'
            target="_blank"
            rel="noopener noreferrer"
            >
              LinkedIn 
            </a>
          </h4>
      </div>
    </div>
  </>
  )
}

export default App