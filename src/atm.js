class Atm {
  constructor(funds) {
    this.balance = funds;
  }

  withdraw(funds, account, pin) {
    if (this.wrongPinIsProvided(account, pin)) {
      return { status: "error", message: "Incorrect pin" };
    } else if (this.balance < funds) {
      return { status: "error", message: "ATM_ERR" };
    } else {
      this.balance -= funds;
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
