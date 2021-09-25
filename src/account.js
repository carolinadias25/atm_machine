class Account {
  constructor(number, pin, amount) {
    this.accNumber = number;
    this.pin = pin;
    this.balance = amount;
  }

  withdraw(pin, amount) {
    if (this.wrongPinIsProvided(pin)) {
      return { status: "error", message: "ACCOUNT_ERR" };
    } else if (this.balance < amount) {
      return { status: "error", message: "FOUNDS_ERR" };
    } else {
      console.log("here");
      this.balance -= amount;
    }
  }

  wrongPinIsProvided(pin) {
    return this.pin !== pin;
  }
}

module.exports = Account;
