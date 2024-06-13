import { useContext } from "react";
import Signin from "../Components/Form/Signin/Signin";
import Signup from "../Components/Form/Signup/Signup";
import { UserGetterProvider } from "../App";

const Auth = () => {
  const { activeForm } = useContext(UserGetterProvider);

  return (
    <>
      {activeForm === "Signup" && <Signup />}
      {activeForm === "Signin" && <Signin />}
    </>
  );
};

export default Auth;
