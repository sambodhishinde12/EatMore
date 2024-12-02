import { useState,useContext } from "react";
import { useSelector } from "react-redux";
import UserContext from "../../utils/userContext";

const HeaderLogic = () => {
  const [btnName, setBtnName] = useState("Login");
  const {loggedInUser} = useContext(UserContext);
  
  const cartItems = useSelector((store) => store.cart.items);
  const toggleButton = () => {
    setBtnName(btnName === "Login" ? "Logout" : "Login");
  };

  return { btnName, toggleButton, cartItems, loggedInUser };
};

export default HeaderLogic;