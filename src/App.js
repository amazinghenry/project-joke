import './App.css';
import Joke from './components/Joke.js';
import myJokes from './components/jokesData.js'

function App() {
  const jokeElements = myJokes.map((newJoke)=>{
    return <
      Joke 
      setup = { newJoke.setup }
      punchline = { newJoke.punchline }
    />
  })

  return (
    <div className='App'>
      { jokeElements }
    </div>
  )
   
  }

export default App;
