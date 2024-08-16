import { useContext } from "react";
import { homeText } from "../../Global/text";
import {
  HomeGetterContext,
  HomeSetterContext,
} from "../../Context/HomeContext";

const SearchFilter = () => {
  const { setSearchTodo } = useContext(HomeSetterContext);
  const { searchTodo } = useContext(HomeGetterContext);

  const handleChange = (e) => {
    setSearchTodo(e.target.value);
  };

  return (
    <>
      <input
        value={searchTodo}
        onChange={handleChange}
        placeholder={homeText.SEARCH_BAR_PLACEHOLDER}
        className="bg-transparent outline-none border border-neutral-200 text-neutral-600 py-1 px-3 rounded-lg focus:shadow-inner"
      />
    </>
  );
};

export default SearchFilter;
