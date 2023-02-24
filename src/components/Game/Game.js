import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import EnterForm from "../EnterForm";
import GuessList from "../GuessList";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [status, setStatus] = React.useState("running"); // running | won | lost

  const handleSubmit = (guess) => {
    const nextGuessList = [...guessList, guess];

    setGuessList(nextGuessList);

    if (guess === answer) {
      setStatus("won");
    } else if (nextGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
    }
  };

  return (
    <>
      <GuessList list={guessList} answer={answer} />
      <EnterForm onSubmit={handleSubmit} isDisabled={status !== "running"} />
      {status === "won" && <WonBanner numberOfAttempts={guessList.length} />}
      {status === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
