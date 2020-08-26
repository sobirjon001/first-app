import React from "react";
import "./App.css";
import Profile from "./Profile";

function App() {
  let greeting = <h1>Hellow World</h1>;
  let detail = <p>name: Anna lastname: Bonna</p>;

  return (
    <div className="App">
      {greeting}
      {detail}
      <Profile />
    </div>
  );
}

export default App;
