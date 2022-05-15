import { MdAddCircleOutline } from "react-icons/md";
import { RiHome2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { NavigationStyles } from "./NavigationStyles";

const Navigation = () => {
  return (
    <NavigationStyles>
      <div className="header">
        <div className="header__logoContainer">
          <img className="logo" src="images/logorobots.png" alt="logo robots" />
        </div>
        <nav className="header__nav">
          <ul className="header__icon">
            <li>
              <NavLink to="/home">
                <RiHome2Fill />
              </NavLink>
            </li>
            <li>
              <NavLink to="/new">
                <MdAddCircleOutline />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </NavigationStyles>
  );
};

export default Navigation;
