import React from "react";

import { keyboardKeys } from "../../constants";

function Key({ status, onClick, children }) {
  const handleClick = (event) => {
    onClick(event.target.innerText);
  };

  return (
    <button
      className={status ? `keyboard-key ${status}` : "keyboard-key"}
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

function Keyboard({ keysStatus, onClick }) {
  return (
    <div className="keyboard">
      {keyboardKeys.map((row, index) => (
        <div key={index} className="keyboard-row">
          {row.map((key, keyIndex) => (
            <Key key={keyIndex} status={keysStatus[key]} onClick={onClick}>
              {key}
            </Key>
          ))}
        </div>
      ))}
    </div>
  );
}

// Some optimization for not re-render Keyboard at every added letter in the input
const areEqual = (prevProps, nextProps) => {
  const prevKeysStatusLength = Object.keys(prevProps.keysStatus).length;
  const nextKeysStatusLength = Object.keys(nextProps.keysStatus).length;

  if (prevKeysStatusLength === nextKeysStatusLength) {
    return true;
  }

  return false;
};

export default React.memo(Keyboard, areEqual);
