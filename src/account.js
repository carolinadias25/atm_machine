class Account {
  constructor(number, pin, balanceAmount, overdraft) {
    this.accNumber = number;
    this.pin = pin;
    this.overdraft = overdraft;
    this.balance = balanceAmount;
  }
  withdraw(pin, amount) {
    console.log(`W ${amount}\n----`); //printing out W and the withdrawal amount
    if (this.wrongPinIsProvided(pin)) {
      return { status: "error", message: "ACCOUNT_ERR" };
    } else if (this.balance + this.overdraft < amount) {
      // if the amount is greater than the balance and the overdraft, return funds_err
      return { status: "error", message: "FUNDS_ERR" };
    } else {
      this.balance -= amount;
      console.log(`B ${this.balance}\n----`); //printing out B and the balance amount
    }
  }

  wrongPinIsProvided(pin) {
    return this.pin !== pin; // check if pin matches the correct this.pin
  }
  getBalance(pin) {
    if (this.wrongPinIsProvided(pin)) {
      return { status: "error", message: "ACCOUNT_ERR" }; //only gets access to balance if pin is correct
    } else {
      console.log(`B ${this.balance}\n----`); //printing out B and the balance amount
      return this.balance;
    }
  }
  printInput() {
    let printOut = `${this.accNumber} ${this.pin}\n${this.balance} ${this.overdraft}\n`; //printing out input accNumber, pin, balanceAmount and overdraft input
    return printOut;
  }
}

module.exports = Account;
