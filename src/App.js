import React from "react";
import CreatePost from "./components/CreatePost";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  const [user, setUser] = React.useState("orji");
  const [posts, setPosts] = React.useState([]);
  console.log(user);

  React.useEffect(()=>{
    document.title = user ? `${user}'s Feed` : "Please Login";
  },[user])

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <>
      <Header user={user} setUser={setUser}/>
      <CreatePost user={user} setPosts={setPosts} posts={posts}/>
      {posts.map(post=>{
        <>
            {post.image && (
              <img
              style={{ height: 100, width:200, objectFit: 'cover'}}
              src={URL.createObjectURL(post.image)}
              alt="Post cover image"
              />
            )}
        </>
      })}
      </>
  );
}

export default App;

// first lesson

// // const endpoint = "https://github.com/users/codeartistryio"
// const endpoint = "https://api.coindesk.com/v1/bpi/currentprice.json"

// export default function App() {
//  const [coin, setCoin] = React.useState(null);
//   // React.useEffect(() => {
//   //   fetch(endpoint)
//   //     .then(res => res.json())
//   //     .then(data => setCoin(data))
//   // }, [])

//   // React.useEffect(async () => {
//   //   const res = await fetch(endpoint)
//   //    const data = await res.json();
//   //    setCoin(data)
//   // }, [])

//   React.useEffect(() => {
//     async function getCoin(){
//       const res = await fetch(endpoint)
//        const data = await res.json();
//        setCoin(data)
//     }
//     getCoin();
//   }, [])

//   console.log(coin)

//   return coin ? (
//    <div>
//       <p>{coin.disclaimer}</p>
//       {/* <p>{coin.bpi[0]}</p>
//       <p>{coin.bpi[0].rate}</p> */}
//     </div>
//       ) : <h1>Loading ....</h1>

// }

// //Using useEffect to track mouse movement

// // export default function App() {
// //   const [mousePosition, setMousePosition] = React.useState({x:0, y:0});

// //   React.useEffect(() => {

// //       document.addEventListener('mousemove', handleMouseMove)
// //     }, [])

// //   function handleMouseMove(event) {
// //     setMousePosition({ x: event.pageX, y: event.pageY})
// //   }

// //   return (
// //   <div>
// //       <p> X: {mousePosition.x}</p>
// //       <p> Y: {mousePosition.y}</p>
// //   </div>
// //   )
// // }

// // first deep with useEffect and useState

// // function App() {
// //   // const [language, setlanguage] = React.useState('Python');
// //   // const [yearsExperience, setyearsExperience] = React.useState(0);

// //   const [developer, setdeveloper] = React.useState({
// //     language: "Python",
// //     yearsExperience: 0,
// //     isEmployed: false
// //   });

// //   React.useEffect(() => {
// //     document.title = "Chidiebere"
// //   })

// //   function handleChangeLanguage (){
// //     setdeveloper({
// //       language: "JavaScript",
// //       yearsExperience: 0
// //     })
// //   }

// //   function handleChangeExperience (event){
// //     setdeveloper({
// //       ...developer,
// //       yearsExperience: event.target.value
// //     })
// //   }

// //   function toggleEmployment (event){
// //     setdeveloper((prevState)=> ({
// //       ...prevState,
// //       isEmployed: !prevState.isEmployed
// //     }))
// //   }

// //   return (
// //     <div>
// //       <button onClick={toggleEmployment}>Toggle Employement</button>
// //       <button onClick={handleChangeLanguage}>Change language</button>
// //       <div>
// //       <input type="number" onChange={handleChangeExperience} placeholder="type years of experience"/>
// //       </div>
// //       <p>I am learnig {developer.language}</p>
// //       <p>I have {developer.yearsExperience} years of experience</p>
// //       <p>I am {developer.isEmployed ? "Employed" : "UnEmployed"}</p>
// //     </div>
// //   );
// // }

// // export default App;
