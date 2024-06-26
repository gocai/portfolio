import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Abouts from "./components/about/about";
import Portfoliotab from "./components/portfoliotab/portfoliotab";
import Contact from "./components/contact/contact";

import React from "react";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Intro />
        <Abouts />
        <Portfoliotab />
        <Contact />
    </div>
  );
}

export default App;
