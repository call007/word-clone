import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
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
  const [keysStatus, setkeysStatus] = React.useState({});

  const handleSubmit = (guess) => {
    const nextGuessList = [...guessList, guess];
    setGuessList(nextGuessList);

    const newkeysStatus = checkGuess(guess, answer).reduce(
      (result, { letter, status }) => ({ ...result, [letter]: status }),
      {}
    );

    setkeysStatus({
      ...keysStatus,
      ...newkeysStatus,
    });

    if (guess === answer) {
      setStatus("won");
    } else if (nextGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
    }
  };

  return (
    <>
      <GuessList list={guessList} answer={answer} />
      <EnterForm
        onSubmit={handleSubmit}
        isDisabled={status !== "running"}
        keysStatus={keysStatus}
      />
      {status === "won" && <WonBanner numberOfAttempts={guessList.length} />}
      {status === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
