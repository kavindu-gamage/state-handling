import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [counter, setCounter] = useState(0);
  const [firstname, setFirstName] = useState("");
  const [showWelcome, setShowWelcome] =useState(false);

  const increaseCounter=()=>(
    setCounter(counter+1)
  )

  const decreaseCounter=()=>(
    setCounter(counter-1)
  )
    
  const handleInput = (event) => (
  setFirstName (event.target.value)
  )

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowWelcome(true);
  }

  useEffect(()=> {
    document.title = "Greetings to " + firstname
  });

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button type='button' onClick={increaseCounter}>Increase</button>
      <button type='button' onClick={decreaseCounter}>Decrease</button>

      {showWelcome &&
        <h1>Hello {firstname}!</h1>
      }
      

      <form onSubmit={handleSubmit} >
        <input  type="text" onChange={handleInput} />
        <button type='submit' >Show</button>
      </form>
    </div>
  );
}

export default App;
