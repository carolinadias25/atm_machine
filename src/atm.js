class Atm {
  constructor(amount) {
    this.balance = amount;
  }

  withdraw(amount, account, pin) {
    if (this.wrongPinIsProvided(account, pin)) {
      return { status: "error", message: "Incorrect pin" };
    } else if (this.balance < amount) {
      return { status: "error", message: "FUNDS_ERR" };
    } else {
      this.balance -= amount;
    }
  }

  wrongPinIsProvided(account, pin) {
    return account.pin !== pin;
  }

  getBalance() {
    return this.balance;
  }
}

module.exports = Atm;
