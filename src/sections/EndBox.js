import React, { Component } from "react";

class EndBox extends Component {
  render() {
    return <div name="end" >
      <p className="fotterend" >Powerd by <a target={`_blank`} className="afotterend" href={`https://github.com/sararekab/resume`} >Create React App</a> on GitHub</p>
    </div>;
  }
}

export default EndBox;
