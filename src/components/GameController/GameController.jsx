import React from "react";
import "./GameController.css";

import { Action, actionForKey, actionIsDrop } from "../../business/Input";
import { playerController } from "../../business/PlayerController";

const GameController = ({
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer,
}) => {
  const onKeyUp = ({ code }) => {
    const action = actionForKey(code);
    // if (actionIsDrop(action)) resumeDropTime();
    if (action === Action.Quit) {
      setGameOver(true);
    }
  };

  const onKeyDown = ({ code }) => {
    const action = actionForKey(code);
    handleInput({ action });

    // if (action === Action.Pause) {
    //   if (dropTime) {
    //     pauseDropTime();
    //   } else {
    //     resumeDropTime();
    //   }
    // } else if (action === Action.Quit) {
    //   setGameOver(true);
    // } else {
    //   if (actionIsDrop(action)) pauseDropTime();
    //   if (!dropTime) {
    //     return;
    //   }
    // }
  };

  const handleInput = ({ action }) => {
    playerController({
      action,
      board,
      player,
      setPlayer,
      setGameOver,
    });
  };
  return (
    <input
      className="GameController"
      type="text"
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      autoFocus
    />
  );
};
export default GameController;
