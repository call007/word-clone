import React from "react";

import Keyboard from "../Keyboard";

function EnterForm({ onSubmit, isDisabled, keysStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  const handleSumbit = (event) => {
    event.preventDefault();

    onSubmit(tentativeGuess);

    setTentativeGuess("");
  };

  const handleLetterClick = (letter) => {
    setTentativeGuess((guess) =>
      guess.length === 5 ? guess : `${guess}${letter}`
    );
  };

  return (
    <form onSubmit={handleSumbit}>
      <div className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <div className="guess-input-cover">
          <input
            id="guess-input"
            type="text"
            value={tentativeGuess}
            pattern="\w{5}"
            minLength={5}
            maxLength={5}
            title="5 letter word"
            required
            disabled={isDisabled}
            onChange={(event) => {
              setTentativeGuess(event.target.value.toUpperCase());
            }}
          />
          <button
            className="guess-submit-button"
            type="submit"
            aria-label="Submit"
          >
            <span aria-hidden="true">↵</span>
          </button>
        </div>
      </div>

      <Keyboard keysStatus={keysStatus} onClick={handleLetterClick} />
    </form>
  );
}

export default EnterForm;
