import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import EnterForm from "../EnterForm";
import GuessList from "../GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  const handleSubmit = (guess) => {
    setGuessList((prevList) => [...prevList, guess]);
  };

  return (
    <>
      <GuessList list={guessList} answer={answer} />
      <EnterForm onSubmit={handleSubmit} />
    </>
  );
}

export default Game;
