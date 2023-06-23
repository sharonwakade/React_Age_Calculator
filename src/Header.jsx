import "./Header.css";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <>
      <div className="context">
        <h1> AGE CALCULATOR </h1>
       <div className="center-div" >
       <NavLink exact to="/calculate">
       <button className="button-82-pushable" >
          <span className="button-82-shadow"></span>
          <span className="button-82-edge" ></span>
          <span className="button-82-front text">Calculate Age</span>
        </button>
       </NavLink>
       </div>
      </div>

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Header;
