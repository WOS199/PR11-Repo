const Account = (props) => {
  const {accName, accId, accBalance} = props;
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{accName} ({accId})</h3>
        <p className="account-amount">${accBalance}</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

export default Account;
