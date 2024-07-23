import { createContext, useState } from "react";

const HomeSetterContext = createContext();
const HomeGetterContext = createContext();

const HomeContext = ({ children }) => {
  const [createNewTodo, setCreateNewTodo] = useState([]);
  const [fetchTodo, setFetchTodo] = useState([]);
  const [searchTodo, setSearchTodo] = useState("");

  return (
    <HomeSetterContext.Provider
      value={{ setCreateNewTodo, setSearchTodo, setFetchTodo }}
    >
      <HomeGetterContext.Provider
        value={{ createNewTodo, searchTodo, fetchTodo }}
      >
        {children}
      </HomeGetterContext.Provider>
    </HomeSetterContext.Provider>
  );
};

export default HomeContext;

export { HomeSetterContext, HomeGetterContext };
