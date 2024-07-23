import React from "react";

const DateFilter = () => {
  const date = new Date();
  return (
    <div className="mx-5">
      <input
        value={date}
        onChange={""}
        placeholder="Date filter"
        type="date"
        className="bg-transparent outline-none border border-neutral-200 text-neutral-600 py-1 px-3 rounded-lg focus:shadow-inner"
      />
    </div>
  );
};

export default DateFilter;
