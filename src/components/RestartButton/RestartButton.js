import React from "react";

function RestartButton(props) {
  return (
    <button className="reset-button" type="button" {...props}>
      Reset the game
    </button>
  );
}

export default RestartButton;
