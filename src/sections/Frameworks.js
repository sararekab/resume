import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import skilllanguagessss from "./Frameworks.json";
import data from "../data.json";
import SkillCard from '../components/SkillCard';
import DownIcon from "../components/DownIcon";
import { Link } from "react-scroll";
import "./Frameworks.css";

class Frameworks extends Component {
  render() {
    return (
      <div name="portfolioscrool">
        <Fullpage className="Frameworks">

          <h3 className="Frameworks" >{skilllanguagessss.title}</h3>
          <div className="cards-wrapper">
            {skilllanguagessss.items.map((eachSkill, index) => {
              eachSkill.content['backgroundcolor1'] = skilllanguagessss.backgroundcolor1
              eachSkill.content['backgroundcolor2'] = skilllanguagessss.backgroundcolor2
              return (
                <SkillCard className="Frameworks" key={index+'ssss'} skill={eachSkill} />
              );
            })}
          </div>
        </Fullpage>

        <Link
          activeClass="active"
          to="maincontentent"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
          delay={30}
        >
          <DownIcon
            icon={data.icons.UP}
            onClick={() => console.log()}
          />
        </Link>

      </div>
    );
  }
}

export default Frameworks;
