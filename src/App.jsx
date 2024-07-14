import { createContext } from "react";
import Navigate from "./Routes/Navigate";
import CombinedContextProvider from "./Context/CombinedContextProvider";

export const UserSetterProvider = createContext();
export const UserGetterProvider = createContext();

const App = () => {

  return (
    <CombinedContextProvider>
      <Navigate />
    </CombinedContextProvider>
  );
};

export default App;
