import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Abouts from "./components/about/about";
import React from "react";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Intro />
        <Abouts />
    </div>
  );
}

export default App;
