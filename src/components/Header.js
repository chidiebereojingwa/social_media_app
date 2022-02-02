import React from 'react';

export default function Header({user,setUser}) {
    const handleSubmit = () =>{
        setUser("")        
    }
  return (
  <div>
      <h2>Welcome dear {user}</h2>
      <button onClick={handleSubmit}>Logout</button>
  </div>
  );
}
