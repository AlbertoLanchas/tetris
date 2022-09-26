import React from "react";

import "./GameStats.css";

const GameStats = ({ gameStats }) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  return (
    <>
      <ul className="GameStats GameStats__right">
        <li>Level</li>
        <li className="value">{level}</li>
        <li>Lines to level</li>
        <li className="value">{linesToLevel}</li>
        <li>Points</li>
        <li className="value">{points}</li>
      </ul>
      <div className="GameControls">
        <p className="GameControls_text">CONTROLS</p>
        <div className="controls">
          <ul className="controls_details">
            <li className="key">Arrow Left</li>
            <li className="key">Arrow Down</li>
            <li className="key">Arrow Right</li>
            <li className="key">Space Bar</li>
            <li className="key">P</li>
            <li className="key">Q</li>
          </ul>
          <ul className="controls_details">
            <li className="key">Left</li>
            <li className="key">Down</li>
            <li className="key">Right</li>
            <li className="key">FastDrop</li>
            <li className="key">Pause</li>
            <li className="key">Quit</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default React.memo(GameStats);
