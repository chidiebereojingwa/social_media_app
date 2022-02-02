import React from 'react';

export default function Login({setUser}) {
    const [username, setUsername] = React.useState("");

    function handleSubmit(event){        
        setUser(username)
    }

  return (
  <div>
     <h2>Please Login</h2>
    <form onSubmit={handleSubmit}>
        <input onChange={event => setUsername(event.target.value)} placeholder='input username' />
        <button type='submit'>Submit</button>
    </form>
   </div>
      );
}
