class Atm {
  constructor(funds) {
    this.balance = funds;
  }

  withdraw(funds) {
    if (this.balance < funds) {
      return { status: "error", message: "ATM_ERR" };
    } else {
      this.balance -= funds;
    }
  }
}

module.exports = Atm;
