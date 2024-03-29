import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isCodingChecked, setIsCodingChecked] = useState(false)
  const [isMusicChecked, setIsMusicChecked] = useState(false)
  const [isGamingChecked, setIsGamingChecked] = useState(false)
  const [showSubmit, setShowSubmit] = useState(false)

  const toggleCoding = () => setIsCodingChecked(!isCodingChecked)
  const toggleMusic = () => setIsMusicChecked(!isMusicChecked)
  const toggleGaming = () => setIsGamingChecked(!isGamingChecked)

  function onFormSubmit(event){
    event.preventDefault()
    setShowSubmit(true)
  }

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <div>
        <label htmlFor="email">Email:</label>
          <input
              type="text"
              value={email}
              id="email"
              placeholder={'email address'}
              onChange={(e)=>setEmail(e.target.value)}
          />
          <label htmlFor="name">Name:</label>
          <input
              type="text"
              value={name}
              id="name"
              placeholder={'name'}
              onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <h3>What are your interests?</h3>
        <div>
          <input
            type="checkbox"
            id="coding"
            checked={isCodingChecked}
            aria-checked={isCodingChecked}
            onChange={toggleCoding}
          />
          <label htmlFor="coding">Coding</label>
          <input
            type="checkbox"
            id="music"
            checked={isMusicChecked}
            aria-checked={isMusicChecked}
            onChange={toggleMusic}
          />
          <label htmlFor="music">Music</label>
          <input
            type="checkbox"
            id="gaming"
            checked={isGamingChecked}
            aria-checked={isGamingChecked}
            onChange={toggleGaming}
          />
          <label htmlFor="gaming">Gaming</label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {showSubmit ? <p>Subscribed!</p> : null}
    </main>
  );
}

export default App;
