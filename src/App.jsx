import { useState } from 'react'
import { StrictMode } from 'react';
import Header from "./Components/Header/Header"
import UserInput from "./Components/UserInput/UserInput"
import Results from './Components/Results/Results';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <StrictMode>
        <Results input={userInput} />
      </StrictMode>      
    </>
  );
}

export default App;