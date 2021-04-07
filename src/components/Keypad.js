// Code Keypad Component Here
import React from "react";

class Keypad extends React.Component {
  handleInputPW = () => console.log("Entering Password");
  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.handleInputPW}></input>
      </div>
    );
  }
}

export default Keypad;
