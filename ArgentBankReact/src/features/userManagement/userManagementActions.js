import { addToken, addProfile, updateUserName } from "./userManagementSlice";

export const signIn = (userEmail, password) => async (dispatch) => {
    console.log('SIGNIN THUNK')
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
      dispatch(fetchUserProfile(token));
    } else {
      console.error("Identifiants incorrects");
    }
  } catch (error) {
    console.error("Erreur lors de la requête API", error);
  }
};

export const updateUserNameAsync = (newUserName, storedToken) => async (dispatch) => {
    const userNameApiUrl = "http://localhost:3001/api/v1/user/profile";
  
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
        // Si la requête API réussit, dispatchez l'action avec le nouveau nom d'utilisateur
        dispatch(updateUserName({ userName: newUserName }));
      }
    } catch (error) {
      console.error("Erreur lors de la requête API", error);
      // Gérez les erreurs ici si nécessaire
    }
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
