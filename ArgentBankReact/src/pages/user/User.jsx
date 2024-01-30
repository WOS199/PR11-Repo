import Account from "../../components/account/Account";
import Layout from "../../layout/Layout";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import UserHeader from "../../components/userHeader/UserHeader";

const User = () => {
  const storedToken = useSelector((state) => state.userConnexion.token);
  
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.userConnexion);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (storedToken) {
        try {
          const profileApiUrl = "http://localhost:3001/api/v1/user/profile";
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
            dispatch({
              type: "userConnexion/addProfile",
              payload: {
                profile: profileInfos,
              }
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
      }
    };

    fetchUserProfile();
  }, [storedToken, dispatch]);

  console.log('PROFILE :', storeData.profile);

  if (!storedToken) {
    return <Navigate to="/signIn" />;
  }

  return (
    <Layout>
      <div className="main bg-dark">
        <UserHeader />
        <h2 className="sr-only">Accounts</h2>
        <Account
          accName="Argent Bank Checking"
          accId="x8349"
          accBalance="2,082.79"
        />
        <Account
          accName="Argent Bank Savings"
          accId="x6712"
          accBalance="10,928.42"
        />
        <Account
          accName="Argent Bank Credit Card"
          accId="x8349"
          accBalance="184.30"
        />
      </div>
    </Layout>
  );
};

export default User;
