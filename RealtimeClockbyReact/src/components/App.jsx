import React, { useState } from "react";

function App() {
  setInterval(update, 1000);

  let time = new Date().toLocaleTimeString();

  const [state, setCount] = useState(time); //ye bhut main hai
  function update() {
    const newTime = new Date().toLocaleTimeString(); /// har baar new time update krne ke liya
    setCount(newTime);
  }

  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={update}>Get Time</button>
    </div>
  );
}

export default App;
