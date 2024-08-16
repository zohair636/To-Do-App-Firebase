import { createContext, useState } from "react";

const HomeSetterContext = createContext();
const HomeGetterContext = createContext();

const HomeContext = ({ children }) => {
  const [createNewTodo, setCreateNewTodo] = useState([]);
  const [fetchTodo, setFetchTodo] = useState([]);
  const [searchTodo, setSearchTodo] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  return (
    <HomeSetterContext.Provider
      value={{ setCreateNewTodo, setSearchTodo, setFetchTodo, setDateFilter }}
    >
      <HomeGetterContext.Provider
        value={{ createNewTodo, searchTodo, fetchTodo, dateFilter }}
      >
        {children}
      </HomeGetterContext.Provider>
    </HomeSetterContext.Provider>
  );
};

export default HomeContext;

export { HomeSetterContext, HomeGetterContext };
