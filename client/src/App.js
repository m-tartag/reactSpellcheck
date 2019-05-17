import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
// import Main from "./components/Main";
import Sandbox from "./components/Sandbox";

function App() {
  return (
    <div id="App-root">
      <Navbar />
      {/* <Main /> */}
      <Sandbox />
    </div>
  );
}

export default App;
