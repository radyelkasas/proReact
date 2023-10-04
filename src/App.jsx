import React, { useEffect, useState } from "react";
import NavBar from "./Companents/NavBar";
import Landing from "./Companents/Landing";
import Loding from "./Companents/Loding";
import About from "./Companents/About";
import Services from "./Companents/Services";
import Skills from "./Companents/Skills";
import Projects from "./Companents/Projects";
import Contact from "./Companents/Contact";
import Footer from "./Companents/Footer";

const App = () => {
  const [loding, setLoding] = useState(false);
  useEffect(() => {
    setLoding(true);
    setTimeout(() => {
      setLoding(false);
    }, 3000);
  }, []);
  return (
    <div className="app">
      {loding ? (
        <>
          <Loding />
        </>
      ) : (
        <>
          <NavBar />
          <Landing />
          <About />
          <Services />
          <Skills />
          <Projects />
          <Contact />
          {/* <Footer /> */}
        </>
      )}
    </div>
  );
};

export default App;
