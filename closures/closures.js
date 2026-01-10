//       lexical scopes - A function can access variables that are defined in the place where the function is written.
 // A closure is created when a function remembers variables from its lexical scope, even after the outer function has finished executing. 
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


// Lexical Scope = access kaha se milega
// Closure = yaad rakhna after execution