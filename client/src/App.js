import React from "react";
import "./App.css";
// import Counters from "./components/Counters";
// import List from "./components/List";
// import Spelling from "./components/Spelling";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
