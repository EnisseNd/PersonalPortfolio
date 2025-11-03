import './App.css'
import React from 'react'
import ReactDOM from 'react-dom'
import yalies from 'yalies'

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
      <img 
        src="https://i.pinimg.com/736x/9a/19/f8/9a19f88d93419de172d5b00eacf20d21.jpg"
        alt="Purple Cat on Windowsill" 
        height="300"
      />
      <div className="children">
        <h2 className="header2" id="about">About Me</h2>
        <h4>Hi! I'm Enisse, a college freshman passionate about all steps of the software development process, from conception to execution.</h4>
      </div>
      <div className="children">
        <h2 className="header3" id="stats">Stats</h2>
          <h4>Age: 18</h4>
          <h4>Hometown: Austin, TX</h4>
          <h4>Residence: New Haven, CT (Go bulldogs!!)</h4>
          <h4>Major: Computer Science</h4>
      </div>
      <div className="children">
        <h2 className="header3" id="projects"> Projects</h2>
          <h3>
            <a 
              href="https://github.com/EnisseNd/CurrencyConverter" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Currency Converter
            </a>
          </h3> 
          <h4>This project was undertaken to explore my love of the diverse countires on this planet, 
            through a practical application that converts currency values between different countries using real-time exchange rates from an external API.
          </h4>
          <h3>
            <a 
              href="https://github.com/EnisseNd/LangTranslator" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Language Translator
            </a>
          </h3>
          <h4>This project was created to facilitate communication across different languages by translating text input from one language to another using an external translation API.</h4>
          <h3>
            <a 
              href="https://github.com/EnisseNd/C2C-Chatbot" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Chatbot
            </a>
          </h3>
          <h4>My first project was is a rudimentary chatbot meant to resond to standard user queries. Plans are in the works to refactor and expand the abilities of this chatbot to be more interactive.</h4>
      </div>
      <div className="children">
        <h2 className="header4" id="contact">Contact Me</h2>
          <h4>Email: enisse.ndikumana@yale.edu</h4>
          <h4>LinkedIn: www.linkedin.com/in/enisse-ndikumana/</h4>
      </div>
    </div>
  </>
  )
}

export default App