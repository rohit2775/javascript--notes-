//       lexical scopes - A function can access variables that are defined in the place where the function is written.

function bankAccount() {
  let balance = 1000;

  return {
    deposit(amount) {
      balance += amount;
      console.log(balance);
    },
    withdraw(amount) {
      balance -= amount;
      console.log(balance);
    }
  };
}

const account = bankAccount();
account.deposit(500) 


