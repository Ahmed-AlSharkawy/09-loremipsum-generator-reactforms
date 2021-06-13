import React, { useState } from 'react'
// import data from './data';

function App() {
  const [texts, setTexts] = useState([])
  const [count, setCount] = useState(1)
  const [letters, setLetters] = useState(100)

  const handleSubmit = (e) => {
    e.preventDefault()

    const amount = parseInt(count)
    const lets = parseInt(letters)

    if (amount > 0) {
      const characters = ' abcd efghijkl mnopqrst uvwxyz '
      const length = characters.length
      let paragraph = ''
      let result = []
      for (let i = 0; i < amount; i++) {
        for (let j = 0; j < lets; j++) {
          paragraph += characters.charAt(Math.floor(Math.random() * length))
        }
        result.push(paragraph)
        paragraph = ''
      }
      setTexts(result)
    }
  }
  return (
    <section className='section-center'>
      <h3>dumy text generator</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs</label>
        <input
          type='number'
          min='1'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <label htmlFor='letters'>Letters</label>
        <input
          type='number'
          min='100'
          name='letters'
          id='letters'
          value={letters}
          onChange={(e) => setLetters(e.target.value)}
        />
        <div className='form-btn'>
          <button type='submit' className='btn'>
            Generate
          </button>
        </div>
      </form>
      <article className='lorem-text'>
        {texts.length > 0 &&
          texts.map((text) => {
            return <p>{text}</p>
          })}
      </article>
    </section>
  )
}

export default App
