import { addToken, addProfile, updateUserName } from "./userManagementSlice";

export const signIn = (userEmail, password) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
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
      dispatch(addToken({ token }));

      // Appeler la fonction pour récupérer le profil après avoir obtenu le token
      dispatch(fetchUserProfile(token));
    } else {
      console.error("Identifiants incorrects");
    }
  } catch (error) {
    console.error("Erreur lors de la requête API", error);
  }
};

export const setNewUserName = (newUserName) => (dispatch, getState) => {
    /* const storedToken = getState().userManagement.token;
    const userNameApiUrl = "http://localhost:3001/api/v1/user/profile"; */
  
    // Dispatch immédiatement pour mettre à jour le nom d'utilisateur
    // dispatch(updateUserName({ userName: newUserName }));
  
    // Effectuer la requête asynchrone pour mettre à jour le profil
    /* fetch(userNameApiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storedToken}`,
      },
      body: JSON.stringify({
        userName: newUserName,
      }),
    })
      .then(response => {
        if (response.ok) {
          // Dispatch pour mettre à jour le profil après la requête asynchrone
          dispatch(fetchUserProfile(storedToken));
        } else {
          console.error("Erreur lors de la requête API (non OK)");
        }
      })
      .catch(error => {
        console.error("Erreur lors de la requête API", error);
      }); */
  };

export const fetchUserProfile = (token) => async (dispatch) => {
  try {
    const profileApiUrl = "http://localhost:3001/api/v1/user/profile";
    const profile = await fetch(profileApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (profile.ok) {
      console.log("La requête du profil a réussi");
      const profileData = await profile.json();
      const { body: profileInfos } = profileData;
      console.log("Profil reçu :", profileInfos);
      dispatch(addProfile({ profile: profileInfos }));
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
};
