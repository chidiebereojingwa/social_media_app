import React from "react"
import { ReactDOM } from "react";

function App() {
  // const [language, setlanguage] = React.useState('Python');
  // const [yearsExperience, setyearsExperience] = React.useState(0);

  const [developer, setdeveloper] = React.useState({
    language: "Python",
    yearsExperience: 0,
    isEmployed: false
  });

  React.useEffect(() => {
    document.title = "Chidiebere"
  })

  function handleChangeLanguage (){    
    setdeveloper({
      language: "JavaScript",
      yearsExperience: 0
    })
  }

  function handleChangeExperience (event){    
    setdeveloper({
      ...developer,
      yearsExperience: event.target.value
    })
  }

  function toggleEmployment (event){    
    setdeveloper((prevState)=> ({
      ...prevState,
      isEmployed: !prevState.isEmployed
    }))
  }

  return (
    <div>
      <button onClick={toggleEmployment}>Toggle Employement</button>
      <button onClick={handleChangeLanguage}>Change language</button>
      <div>
      <input type="number" onChange={handleChangeExperience} placeholder="type years of experience"/>
      </div>      
      <p>I am learnig {developer.language}</p>
      <p>I have {developer.yearsExperience} years of experience</p>
      <p>I am {developer.isEmployed ? "Employed" : "UnEmployed"}</p>
    </div>
  );
}

export default App;
