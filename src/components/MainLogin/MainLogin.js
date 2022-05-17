import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { MainLoginStyles } from "./MainLoginStyles";

const MainLogin = () => {
  const navigate = useNavigate();
  const loggedIn = useSelector(({ users }) => {
    if (users?.username) return true;
    else {
      return false;
    }
  });

  return (
    <MainLoginStyles>
      <div className="container">
        <div className="buttons">
          {loggedIn ? (
            <button className="button button-logout">LogOut</button>
          ) : (
            <button
              className="button button-login"
              onClick={() => navigate("/login")}
            >
              LogIn
            </button>
          )}
        </div>
      </div>
    </MainLoginStyles>
  );
};
export default MainLogin;
