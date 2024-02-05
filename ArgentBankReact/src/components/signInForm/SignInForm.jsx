import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../features/userManagement/userManagementActions";

const SignInForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.userManagement);

  useEffect(() => {
    console.log("Nouvel état après dispatch :", storeData.token);
  }, [storeData.token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(userEmail, password))
      .then(() => {
        navigate("/user");
        console.log("TOKEN après la requête du profil :", storeData.token);
        console.log('PROFILE :', storeData.profile);
      });
  };

  return (
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="userEmail">User Email</label>
              <input
                type="text"
                id="userEmail"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </main>
  );
};

export default SignInForm;
