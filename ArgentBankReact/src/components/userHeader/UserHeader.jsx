import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const UserHeader = () => {
  const storedProfile = useSelector((state) => state.userConnexion.profile);
  const storedToken = useSelector((state) => state.userConnexion.token);
  const firstName = storedProfile.firstName;
  const lastName = storedProfile.lastName;
  const userName = storedProfile.userName;
  const userNameApiUrl = "http://localhost:3001/api/v1/user/profile";
  const dispatch = useDispatch();

  const [isOpened, setIsOpened] = useState(false);
  const [newUserName, setNewUserName] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    setIsOpened(!isOpened);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(userNameApiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${storedToken}`,
        },
        body: JSON.stringify({
          userName: newUserName,
        }),
      });

      if (response.ok) {
        dispatch({
          type: "userConnexion/updateUserName",
          payload: {
            userName: newUserName,
          },
        });
      }
    } catch (error) {
      console.error("Erreur lors de la requête API", error);
    }
  };

  useEffect(() => {
    console.log(
      "Nouvel état username après dispatch :",
      storedProfile.userName
    );
  }, [storedProfile.userName]);

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstName} {lastName}
      </h1>
      <button className="edit-button" onClick={handleForm}>
        Edit Name
      </button>
      {isOpened && (
        <div className="sign-in-content">
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label className="edit-profile-label" htmlFor="userName">
                User Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder={userName}
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label className="edit-profile-label" htmlFor="firstName">
                First Name
              </label>
              <input
                className="desactivated-input"
                type="text"
                id="firstName"
                placeholder={firstName}
                readOnly
              />
            </div>
            <div className="input-wrapper">
              <label className="edit-profile-label" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="desactivated-input"
                type="text"
                id="lastName"
                placeholder={lastName}
                readOnly
              />
            </div>
            <button type="submit" className="sign-in-button">
              Enregistrer
            </button>
            <button className="cancel-button" onClick={handleForm}>
              Annuler
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserHeader;
