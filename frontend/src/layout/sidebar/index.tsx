import * as _ from "./style";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import Logo from "../../assets/logo.png";
import MiniLogo from "../../public/logo-menor.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const changeVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <_.SidebarContainer isVisible={isVisible}>
      <NavLink to="/">
        <_.Logo src={isVisible ? Logo : MiniLogo} alt="logo" />
      </NavLink>
      <IoIosArrowBack className="arrow-sidebar" onClick={changeVisibility} />
    </_.SidebarContainer>
  );
};

export default Sidebar;
