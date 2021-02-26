import React from "react";
import Part from "./Part";

const Content = ({ course }) => {
  const parts = course.parts.map((part) =>
    <Part part={part} key={part.id} />
  );

  return <div>{parts}</div>;
};

export default Content;
