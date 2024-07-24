import { useContext } from "react";
import {
  HomeGetterContext,
  HomeSetterContext,
} from "../../Context/HomeContext";

const DateFilter = () => {
  const { dateFilter } = useContext(HomeGetterContext);
  const { setDateFilter } = useContext(HomeSetterContext);

  const handleFilter = (e) => {
    setDateFilter(e.target.value);
  };

  return (
    <div className="mx-5">
      <input
        value={dateFilter}
        onChange={handleFilter}
        type="date"
        className="bg-transparent outline-none border border-neutral-200 text-neutral-600 py-1 px-3 rounded-lg focus:shadow-inner"
      />
    </div>
  );
};

export default DateFilter;
