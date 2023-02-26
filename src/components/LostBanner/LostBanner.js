import React from "react";

import Banner from "../Banner";
import RestartButton from "../RestartButton";

function LostBanner({ answer, handleRestartButtonClick }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>

      <RestartButton onClick={handleRestartButtonClick} />
    </Banner>
  );
}

export default LostBanner;
