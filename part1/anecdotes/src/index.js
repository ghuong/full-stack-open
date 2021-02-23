import React, { useState } from "react";
import ReactDOM from "react-dom";

/**
 * * randomInteger
 * Returns a random integer in range [a, b), if both args provided;
 * If one arg, range is [0, a); if no args: range is [0, 1]
 */
function randomInteger(a, b) {
  let min, max;

  if (!arguments.length) {
    min = 0;
    max = 2;
  } else if (arguments.length === 1) {
    min = 0;
    max = a;
  } else {
    min = a;
    max = b - a;
  }
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * max) + min;
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = (props) => {
  const [selected, setSelected] = useState(
    randomInteger(props.anecdotes.length)
  );
  const [votes, setVotes] = useState(Array(props.anecdotes.length).fill(0));

  const handleNext = () => setSelected(randomInteger(props.anecdotes.length));

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected]++;
    setVotes(newVotes);
  };

  return (
    <>
      <div>{props.anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button handleClick={handleVote} text="vote" />
      <Button handleClick={handleNext} text="next anecdote" />
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
