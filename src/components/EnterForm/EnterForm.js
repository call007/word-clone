import React from "react";

function EnterForm() {
  const [guess, setGuess] = React.useState("");

  const handleSumbit = (event) => {
    event.preventDefault();

    console.log({ guess });

    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSumbit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern="\w{5}"
        minLength={5}
        maxLength={5}
        title="5 letter word"
        required
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default EnterForm;
