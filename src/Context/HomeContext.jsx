import { createContext, useState } from "react";

const HomeSetterContext = createContext();
const HomeGetterContext = createContext();

const HomeContext = ({ children }) => {
  const [createNewTodo, setCreateNewTodo] = useState([]);
  
  return (
    <HomeSetterContext.Provider value={{ setCreateNewTodo }}>
      <HomeGetterContext.Provider value={{ createNewTodo }}>
        {children}
      </HomeGetterContext.Provider>
    </HomeSetterContext.Provider>
  );
};

export default HomeContext;

export { HomeSetterContext, HomeGetterContext };
