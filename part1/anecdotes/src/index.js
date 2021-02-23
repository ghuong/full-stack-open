import React, { useState } from "react";
import ReactDOM from "react-dom";

/**
 * * randomInteger
 * Returns a random integer in range [min, max), if two args provided;
 * If one arg, range is [0, max); if no args: range is [0, 1]
 */
function randomInteger(a, b) {
  let min = a;
  let max = b - a;
  if (b === undefined) {
    min = 0;
    max = a;
  }

  if (a === undefined) {
    max = 2;
  }
  return Math.floor(Math.random() * Math.floor(max)) + Math.ceil(min);
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = (props) => {
  const [selected, setSelected] = useState(
    randomInteger(props.anecdotes.length)
  );

  const handleNext = () => setSelected(randomInteger(props.anecdotes.length));

  return (
    <>
      <div>{props.anecdotes[selected]}</div>
      <Button handleClick={handleNext} text="next" />
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
