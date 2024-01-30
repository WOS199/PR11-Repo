import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const storedToken = useSelector((state) => state.userConnexion.token);
  const storedProfile = useSelector((state) => state.userConnexion.profile);
  const navigate = useNavigate();

  const handleNav = () => {
    !storedToken && navigate("/signIn");
  };

  const handleSignOut = () => {
    dispatch({
      type: "userConnexion/signOut",
    });
    navigate("/");
  };

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src="../../../src/assets/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href="#" onClick={handleNav}>
          <i className="fa fa-user-circle"></i>
          {!storedToken ? "Sign In" : storedProfile.userName}
        </a>
        {storedToken && (
          <a className="main-nav-item" href="#" onClick={handleSignOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </a>
        )}
      </div>
    </nav>
  );
};

export default Nav;
