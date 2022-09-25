import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import "./nav.css";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <AiOutlineHome />
      </NavLink>
      <NavLink
        to={"about"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <AiOutlineUser />
      </NavLink>
    </nav>
  );
};
