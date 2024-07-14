import React from "react";
import { homeText } from "../../Global/text";

const SearchFilter = () => {
  return (
    <div className="">
      <input
        value={""}
        onChange={""}
        placeholder={homeText.SEARCH_BAR_PLACEHOLDER}
        className="bg-transparent outline-none border border-neutral-200 py-1 px-3 rounded-lg focus:shadow-inner"
      />
    </div>
  );
};

export default SearchFilter;
