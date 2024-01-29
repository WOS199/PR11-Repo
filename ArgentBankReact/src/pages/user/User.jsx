import Account from "../../components/account/Account";
import Layout from "../../layout/Layout";

const User = () => {
  return (
    <Layout>
      <div className="main bg-dark">
        <div class="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button class="edit-button">Edit Name</button>
        </div>
        <h2 class="sr-only">Accounts</h2>
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
