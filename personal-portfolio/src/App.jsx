import './App.css'
import React from 'react'
import ReactDOM from 'react-dom'
import yalies from 'yalies'

function App() {
  return (
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
        <h2 id="me_header" className="header2">About Me</h2>
        <h4>Hi! I'm Enisse, a college freshman passionate about all steps of the software development process, from conception to execution.</h4>
      </div>
      <div className="children">
        <h2 className="header2">Stats</h2>
        <h4>Age: 18</h4>
        <h4>Hometown: Austin, TX</h4>
        <h4>Residence: New Haven, CT (Go bulldogs!!)</h4>
        <h4>Major: Computer Science</h4>
      </div>
    </div>
  )
}

export default App