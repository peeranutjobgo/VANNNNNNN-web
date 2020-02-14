import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import dummyText from "./DummyText";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section1
          subtitle={dummyText}
          id="section1"
        />
        <Section2
          subtitle={dummyText}
          id="section2"
        />
        <Section3
          subtitle={dummyText}
          id="section3"
        />
        <Section4
          subtitle={dummyText}
          id="section4"
        />
      </div>
    );
  }
}

export default App;
