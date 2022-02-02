import React from 'react';

export default function Header({user,setUser}) {
    const handleSubmit = (e) =>{
        setUser("")        
    }
  return (
  <div>
      <h2>Welcome dear {user}</h2>
      <button onSubmit={handleSubmit}>Logout</button>
  </div>
  );
}
