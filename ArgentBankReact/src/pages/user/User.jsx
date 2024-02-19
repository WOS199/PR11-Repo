import Account from "../../components/account/Account";
import Layout from "../../layout/Layout";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import UserHeader from "../../components/userHeader/UserHeader";
import { fetchUserProfile } from "../../features/userManagement/userManagementActions";

const User = () => {
  const storedToken = useSelector((state) => state.userManagement.token);
  const dispatch = useDispatch();

  dispatch(fetchUserProfile(storedToken));
  
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
