import { useContext } from "react";
import Signin from "../Components/Form/Signin/Signin";
import Signup from "../Components/Form/Signup/Signup";
import { FormContextGetterProvider } from "../Context/FormContext";

const Auth = () => {
  const { activeForm } = useContext(FormContextGetterProvider);

  return (
    <>
      {activeForm === "Signup" && <Signup />}
      {activeForm === "Signin" && <Signin />}
    </>
  );
};

export default Auth;
