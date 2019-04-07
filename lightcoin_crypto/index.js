let balance = 500.00;

class Account {

  constructor() {
    this.transactions = [];
  }

  get balance() {
    // Calculate the balance using the transaction objects.
    let balance = 0;
    for(let transaction of this.transactions) {
      balance += transaction.value;
    }
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  commit() {
    if(!this.isAllowed()) {
      return false;
    }
    this.time = new Date();
    this.account.addTransaction(this);
    return true;
  }

  testChildFun() {
    this.testFun();
    //this.testFun2();
  }

  testParentFun() {
    console.log("This is a transaction.");
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

  isAllowed() {
    // deposits always allowed thanks to capitalism.
    return true;
  }

  testFun() {
    this.testParentFun();
    console.log("This is a deposit.");
  }

}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

  isAllowed() {
    // note how it has access to this.account b/c of parent
    return (this.account.balance - this.amount >= 0);
  }

  // testFun2() {
  //   this.testParentFun();
  //   console.log("This is a withdraw.");
  // }

}

// DRIVER CODE (yes, keep everything in one file for now... b/c cog load)
const myAccount = new Account();

console.log('Starting Account Balance: ', myAccount.balance);

console.log('Attempting to withdraw even $1 should fail...');
const t1 = new Withdrawal(1.00, myAccount);

// console.log('Commit result:', t1.commit());
// console.log('Account Balance: ', myAccount.balance);

// console.log('Depositing should succeed...');
const t2 = new Deposit(9.99, myAccount);
t2.testChildFun();
t1.testChildFun();
// console.log('Commit result:', t2.commit());
// console.log('Account Balance: ', myAccount.balance);

// console.log('Withdrawal for 9.99 should be allowed...');
// const t3 = new Withdrawal(9.99, myAccount);
// console.log('Commit result:', t3.commit());

// console.log('Ending Account Balance: ', myAccount.balance);
// console.log("Lookings like I'm broke again");

// console.log('Account Transaction History: ', myAccount.transactions);