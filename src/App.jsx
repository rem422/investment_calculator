import { useState } from 'react'
import Header from "./Components/Header/Header"
import UserInput from "./Components/UserInput/UserInput"
import Results from './Components/Results/Results';

function App() {
const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

const inputIsValid = userInput.duration >= 1;

const handleChange = (inputIdentifier, newValue) =>  {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
        };
    });
}

  return (
    <>
      <Header />
      <UserInput 
        userInput={userInput}
        onChange={handleChange}
      />
      {!inputIsValid && <p className='center'>Please enter duration greater than Zero.</p>  }
      {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App
