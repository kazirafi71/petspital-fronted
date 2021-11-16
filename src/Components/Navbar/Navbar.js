import React from "react";
import Styles from "./Navbar.module.css";
import navLogo from "../../assets/Navbar/logo.svg";
import playIcon from "../../assets/Navbar/playIcon.svg";
import fbIcon from "../../assets/Navbar/fbIcon.svg";

const Navbar = () => {
  return (
    <div>
      <div className={Styles.navbar_main_style}>
        <div className={Styles.left_style}>
          <img className={Styles.navLogo__style} src={navLogo} alt="" />
        </div>
        <div className={Styles.right_style}>
          <img className={Styles.navIcon__Style} src={playIcon} alt="" />
          <img className={Styles.navIcon__Style} src={fbIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
