import React, { Component } from "react";
import TitlesSection from "./sections/TitlesSection";
import AboutSection from "./sections/AboutSection";
import SkillSectionLanguages from "./sections/SkillSectionLanguages";
import DataBaseKoledge from "./sections/DataBaseKoledge";
import Frameworks from "./sections/Frameworks";
import SkillSection from "./sections/SkillSection";
import TeamWork from "./sections/TeamWork";
import Webservers from "./sections/Webservers";
import FirstBox from "./sections/FirstBox";
import EndBox from "./sections/EndBox";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div name="maincontentent">
        <input type="hidden" id="colorvalue" value="0" />
        <FirstBox />
        <TitlesSection />
        <AboutSection />
        <SkillSectionLanguages />
        <DataBaseKoledge />
        <Frameworks />
        <TeamWork />
        <Webservers />
        <SkillSection />
        <EndBox />

      </div>
    );
  }
}

export default App;
