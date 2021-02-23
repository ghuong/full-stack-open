import React, { useState } from "react";
import ReactDOM from "react-dom";

const Feedback = ({ handleGoodVote, handleNeutralVote, handleBadVote }) => {
  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={handleGoodVote} text="Good" />
      <Button handleClick={handleNeutralVote} text="Neutral" />
      <Button handleClick={handleBadVote} text="Bad" />
    </div>
  );
};

const Statistics = ({ numGoodVotes, numNeutralVotes, numBadVotes }) => {
  const numVotes = numGoodVotes + numNeutralVotes + numBadVotes;
  const statsHeader = <h2>Statistics:</h2>;

  if (numVotes > 0) {
    const averageScore = (numGoodVotes - numBadVotes) / numVotes;
    const positivePercentage = (numGoodVotes / numVotes) * 100;

    return (
      <div>
        {statsHeader}
        <Statistic name="Good" value={numGoodVotes} />
        <Statistic name="Neutral" value={numNeutralVotes} />
        <Statistic name="Bad" value={numBadVotes} />
        <Statistic name="All" value={numVotes} />
        <Statistic name="Average" value={averageScore} />
        <Statistic name="Positive" value={positivePercentage} />
      </div>
    );
  } else {
    return (
      <div>
        {statsHeader}
        <p>No feedback given.</p>
      </div>
    );
  }
};

const Statistic = ({ name, value }) => (
  <p>
    {name}: {value}
  </p>
);

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  // TODO: save clicks of each button to its own state
  const [numGoodVotes, setGoodVotes] = useState(0);
  const [numNeutralVotes, setNeutralVotes] = useState(0);
  const [numBadVotes, setBadVotes] = useState(0);

  const incrementGoodVotes = () => setGoodVotes(numGoodVotes + 1);
  const incrementNeutralVotes = () => setNeutralVotes(numNeutralVotes + 1);
  const incrementBadVotes = () => setBadVotes(numBadVotes + 1);

  return (
    <>
      <Feedback
        handleGoodVote={incrementGoodVotes}
        handleNeutralVote={incrementNeutralVotes}
        handleBadVote={incrementBadVotes}
      />
      <Statistics
        numGoodVotes={numGoodVotes}
        numNeutralVotes={numNeutralVotes}
        numBadVotes={numBadVotes}
      />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
