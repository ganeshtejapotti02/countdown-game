// import { useState } from "react";
// export default function Player() {

//   const [name,setName] = useState(null);
//   const [submitted, setSubmitted] = useState(false);

//   function handleChange(event)
//   {
//     setSubmitted(false);
//     setName(event.target.value);
//   }

//   function handleClick()
//   {
//     setSubmitted(true);
//   }

//   return (
//     <section id="player">
//       <h2>Welcome {submitted ? name : 'unknown entity'}</h2>
//       <p>
//         <input type="text" value={name} onChange={handleChange}/>
//         <button onClick={handleClick}>Set Name</button>
//       </p>
//     </section>
//   );
// }



import { useState, useRef } from "react";

export default function Player()
{
  const playerName = useRef();
  const [name,setName] = useState(null);

  function handleClick()
  {
    setName(playerName.current.value);
    playerName.current.value='';
  }

  return (
        <section id="player">
          <h2>Welcome {name!=='' ? name : 'unknown entity'}</h2>
          <p>
            <input type="text" ref={playerName} />
            <button onClick={handleClick}>Set Name</button>
          </p>
        </section>
      );

}
