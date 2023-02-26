import React from "react";

import Banner from "../Banner";
import RestartButton from "../RestartButton";

function WonBanner({ numberOfAttempts, handleRestartButtonClick }) {
  return (
    <Banner>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numberOfAttempts === 1 ? "1 guess" : `${numberOfAttempts} guesses`}
        </strong>
        .
      </p>

      <RestartButton onClick={handleRestartButtonClick} />
    </Banner>
  );
}

export default WonBanner;
