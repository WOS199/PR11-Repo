import { useSelector } from "react-redux";

const UserHeader = () => {

    const storedProfile = useSelector((state) => state.userConnexion.profile);
    const firstName = storedProfile.firstName;
    const lastName = storedProfile.lastName;

    return (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
    )
}

export default UserHeader