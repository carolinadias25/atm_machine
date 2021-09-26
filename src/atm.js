class Atm {
  constructor(funds) {
    this.balance = funds;
  }

  withdraw(funds) {
    console.log(`${this.balance}\n----`); //printing out funds input
    if (this.balance < funds) {
      return { status: "error", message: "ATM_ERR" };
    } else {
      this.balance -= funds;
      console.log(`${this.balance}\n----`); //printing out funds input after withdrawal
    }
  }
}

module.exports = Atm;
