import React,{useState} from "react";
import HeaderLogic from "./HeaderLogic";
import styles from "./Header.module.css";
import { LOGO_URL,CART_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import Cart from "../CartDetails/CartDrawer";
const Header = () => {
  const { 
    btnName, 
    toggleButton,
    cartItems,
    loggedInUser
  } = HeaderLogic();
const [open,setOpen] = useState(false);
const toggleDrawer=()=>{
  setOpen(!open)
}
  return (
    <div className={styles.header}>
      <div className={styles.logocontainer}>
        <img className={styles.logo} src={LOGO_URL} alt="Logo" />
      </div>
      <div className={styles.navItems}>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          {/* <li>
           <Link to="/about">ABOUT</Link> 
          </li> */}
          <li>
            <Link to="/support">SUPPORT</Link>
          </li>
          <li onClick={toggleDrawer} className={styles.cartSec}>
            <img className={styles.cartlogo} src={CART_URL} alt="Cart" /> 
            <div  className={styles.cartLength}>
              <span>{cartItems.length}</span>
            </div>
          </li>
          <button className={styles.loginbtn} onClick={toggleButton}>
            {btnName}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
      {open && <div className={styles.overlay} onClick={toggleDrawer} />}
      
      <Cart onClose={toggleDrawer} isOpen={open} /> </div>
  );
};

export default Header;