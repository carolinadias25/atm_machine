class Atm {
  constructor() {
    this.funds = 8000;
  }

  withdraw(amount) {
    this.funds -= amount;
  }
}

module.exports = Atm;
