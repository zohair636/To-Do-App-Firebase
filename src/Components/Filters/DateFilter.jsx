import React from "react";

const DateFilter = () => {
  return (
    <div className="mx-5">
      <input
        value={""}
        onChange={""}
        placeholder="Date filter"
        className="bg-transparent outline-none border border-neutral-200 py-1 px-3 rounded-lg focus:shadow-inner"
      />
    </div>
  );
};

export default DateFilter;
