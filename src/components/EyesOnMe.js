// Code EyesOnMe Component Here
import React from "react";

class EyesOnMe extends React.Component {
  onFocus = () => console.log("Good!");
  onBlur = () => console.log("Hey! Eyes on me!");

  render() {
    return (
      <div class="eyesOnMe">
        <button onBlur={this.onBlur} onFocus={this.onFocus}></button>
      </div>
    );
  }
}

export default EyesOnMe;
