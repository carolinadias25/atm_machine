class Account {
  constructor(number, pin, amount, overdraft) {
    console.log(number, pin); //printing out input accNumber and pin
    console.log(amount, overdraft); //printing out input amount and over draft input
    this.accNumber = number;
    this.pin = pin;
    this.overdraft = overdraft;
    this.balance = amount;
  }
  withdraw(pin, amount) {
    console.log(`W ${amount}\n----`); //printing out W and the withdrawal amount
    if (this.wrongPinIsProvided(pin)) {
      return { status: "error", message: "ACCOUNT_ERR" };
    } else if (this.balance + this.overdraft < amount) {
      return { status: "error", message: "FOUNDS_ERR" };
    } else {
      this.balance -= amount;
      console.log(`B ${this.balance}\n----`); //printing out B and the balance amount
    }
  }

  wrongPinIsProvided(pin) {
    return this.pin !== pin;
  }
  getBalance(pin) {
    if (this.wrongPinIsProvided(pin)) {
      return { status: "error", message: "ACCOUNT_ERR" };
    } else {
      console.log(`B ${this.balance}\n----`); //printing out B and the balance amount
    }
  }
}

module.exports = Account;
