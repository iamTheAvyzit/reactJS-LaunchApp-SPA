import React from "react";
import Header from "./components/Header";
import Feature from "./components/Feature";
import About from "./components/About";
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";

import './App.css'
import abtimg from './images/about.png'
import dwnldimg from './images/download.png'
import present from './images/presentation.png'

function App() {
  return (
    <div className="App">
        <Header/>
        <Feature/>
        <About image={abtimg} title="Comes with all you need for daily life" button="Get the App"/>
        <Presentation image={present}/>
        <About image={dwnldimg} title="24X7 chat support and with amazing regular feature updates" button="Download Now"/>
        <Contact/>
    </div>
  );
}

export default App;
