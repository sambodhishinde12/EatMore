import React from "react";
import HeaderLogic from "./HeaderLogic";
import styles from "./Header.module.css";
import { LOGO_URL,CART_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const { btnName, toggleButton } = HeaderLogic();

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
          <li>
           <Link to="/about">ABOUT</Link> 
          </li>
          <li>
            <Link to="/support">SUPPORT</Link>
          </li>
          <li>
           <Link to="/cart"> <img className={styles.cartlogo} src={CART_URL} alt="Cart" /> </Link>
          </li>
          <button className={styles.loginbtn} onClick={toggleButton}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;