import React, { Component } from "react";
 
import "./FirstBox.css";
import data from "../data.json";
import Keyss from "../components/Keyss";
 
 
class FirstBox extends Component {
   

  render() {
    return (
      <div className="FirstBox">
       
        <div className="rightplace">
          {data.keyyss.map((eachKeyss, index) => {
            return <Keyss Keyss={eachKeyss} key={index} />;
          })}
        </div>
         
      </div>
    );
  }
}

export default FirstBox;
