import { useState } from "react";

const HeaderLogic = () => {
  const [btnName, setBtnName] = useState("Login");

  const toggleButton = () => {
    setBtnName(btnName === "Login" ? "Logout" : "Login");
  };

  return { btnName, toggleButton };
};

export default HeaderLogic;