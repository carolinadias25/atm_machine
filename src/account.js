class Account {
  constructor(number, pin, amount, overdraft) {
    this.accNumber = number;
    this.pin = pin;
    this.overdraft = overdraft;
    this.balance = amount;
  }

  withdraw(pin, amount) {
    if (this.wrongPinIsProvided(pin)) {
      return { status: "error", message: "ACCOUNT_ERR" };
    } else if (this.balance + this.overdraft < amount) {
      return { status: "error", message: "FOUNDS_ERR" };
    } else {
      this.balance -= amount;
    }
  }

  wrongPinIsProvided(pin) {
    return this.pin !== pin;
  }
  getBalance(pin) {
    if (this.wrongPinIsProvided(pin)) {
      return { status: "error", message: "ACCOUNT_ERR" };
    } else {
      return this.balance;
    }
  }
}

module.exports = Account;
