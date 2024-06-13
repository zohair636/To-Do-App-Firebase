import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../Pages/Auth";

const Navigate = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigate;
