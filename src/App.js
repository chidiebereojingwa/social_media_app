import React from "react"
import { ReactDOM } from "react";

function App() {
  const [language, setlanguage] = React.useState('Python');

  function handleChangeLanguage (){    
    setlanguage("Javascript")
  }

  return (
    <div>
      <button onClick={handleChangeLanguage}>Change language</button>
      <p>I am learnig {language}</p>
    </div>
  );
}

export default App;
