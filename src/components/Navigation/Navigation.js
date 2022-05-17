import { MdAddCircleOutline } from "react-icons/md";
import { RiHome2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { NavigationStyles } from "./NavigationStyles";

const Navigation = () => {
  const userName = useSelector(({ users }) => users.username);
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
          {userName && <span>{userName}</span>}
        </nav>
      </div>
    </NavigationStyles>
  );
};

export default Navigation;
