import React from "react";

import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ value, answer }) {
  const lettersStatus = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) =>
        lettersStatus ? (
          <span key={num} className={`cell ${lettersStatus[num].status}`}>
            {lettersStatus[num].letter}
          </span>
        ) : (
          <span key={num} className="cell" />
        )
      )}
    </p>
  );
}

export default React.memo(Guess);
