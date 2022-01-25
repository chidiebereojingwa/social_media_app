import React from "react"
import { ReactDOM } from "react";

function App() {
  const [language, setlanguage] = React.useState('Python');
  const [yearsExperience, setyearsExperience] = React.useState(0);

  function handleChangeLanguage (){    
    setlanguage("Javascript")
  }

  function handleChangeExperience (event){    
    setyearsExperience(event.target.value)
  }

  return (
    <div>
      
      <button onClick={handleChangeLanguage}>Change language</button>
      <div>
      <input type="number" onChange={handleChangeExperience} placeholder="type years of experience"/>
      </div>      
      <p>I am learnig {language}</p>
      <p>{yearsExperience}</p>
    </div>
  );
}

export default App;
