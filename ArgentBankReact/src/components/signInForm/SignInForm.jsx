import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const SignInForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginApiUrl = "http://localhost:3001/api/v1/user/login";
  const profileApiUrl = "http://localhost:3001/api/v1/user/profile";

  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.userConnexion);

  useEffect(() => {
    console.log("Nouvel état après dispatch :", storeData);
  }, [storeData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(loginApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          password: password,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        const { token } = responseData.body;
        localStorage.setItem("token", token);
        dispatch({
          type: "userConnexion/addToken",
          payload: {
            token: token
          }
        })


        try {
          const storedToken = localStorage.getItem("token");
          const profile = await fetch(profileApiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${storedToken}`,
            },
          });

          if (profile.ok) {
            console.log("La requête du profil a réussi");
            const profileData = await profile.json();
            const { body: profileInfos } = profileData;
            console.log("Profil reçu :", profileInfos);
            localStorage.setItem("profile", JSON.stringify(profileInfos));
            dispatch({
              type: "userConnexion/addProfile",
              payload: {
                profile: JSON.stringify(profileInfos)}
            })
          } else {
            console.error(
              "Erreur de la requête API:",
              profile.status,
              profile.statusText
            );
          }
        } catch (error) {
          console.error("Erreur lors de la requête API", error);
        }

        window.location.href = "/user";
      } else {
        console.error("Identifiants incorrects");
      }
    } catch (error) {
      console.error("Erreur lors de la requête API", error);
    }
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
