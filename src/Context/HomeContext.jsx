import { createContext, useState } from "react";

const HomeSetterContext = createContext();
const HomeGetterContext = createContext();

const HomeContext = ({ children }) => {
  const [createNewTodo, setCreateNewTodo] = useState([]);
  const [searchTodo, setSearchTodo] = useState('');

  return (
    <HomeSetterContext.Provider value={{ setCreateNewTodo, setSearchTodo }}>
      <HomeGetterContext.Provider value={{ createNewTodo, searchTodo }}>
        {children}
      </HomeGetterContext.Provider>
    </HomeSetterContext.Provider>
  );
};

export default HomeContext;

export { HomeSetterContext, HomeGetterContext };
