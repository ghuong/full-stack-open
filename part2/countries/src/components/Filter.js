import React from "react";

const Filter = ({ filter, handleFilterChange, isTooBroad }) => {
  const isTooBroadMessage = isTooBroad ? (
    <div>Too many matches, specify another filter</div>
  ) : null;

  return (
    <div>
      Find: <input value={filter} onChange={handleFilterChange} />
      {isTooBroadMessage}
    </div>
  );
};

export default Filter;
