import React from "react";

function EnterForm({ onSubmit, isDisabled }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  const handleSumbit = (event) => {
    event.preventDefault();

    onSubmit(tentativeGuess);

    setTentativeGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSumbit}>
      <label htmlFor="guess-input">Enter guess:</label>
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
    </form>
  );
}

export default EnterForm;
