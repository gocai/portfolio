import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Abouts from "./components/about/about";
import Portfoliotab from "./components/portfoliotab/portfoliotab";
import React from "react";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Intro />
        <Abouts />
        <Portfoliotab />
    </div>
  );
}

export default App;
