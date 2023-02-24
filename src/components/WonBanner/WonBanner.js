import React from "react";

import Banner from "../Banner";

function WonBanner({ numberOfAttempts }) {
  return (
    <Banner>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numberOfAttempts === 1 ? "1 guess" : `${numberOfAttempts} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
