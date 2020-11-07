import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div id="main">
        <ol key="relativeList">
          <li key="relativeListItem1">Shaik</li>
          <li key="relativeListItem2">Mohammed</li>
          <li key="relativeListItem3">Zubaidi</li>
        </ol>
      </div>
    );
  }
}

export default App;
