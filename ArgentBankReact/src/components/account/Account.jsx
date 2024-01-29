const Account = (props) => {
  const {accName, accId, accBalance} = props;
  return (
    <section class="account">
      <div class="account-content-wrapper">
        <h3 class="account-title">{accName} ({accId})</h3>
        <p class="account-amount">${accBalance}</p>
        <p class="account-amount-description">Available Balance</p>
      </div>
      <div class="account-content-wrapper cta">
        <button class="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

export default Account;
