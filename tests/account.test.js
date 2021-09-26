const { expect } = require("chai");

const Account = require("../src/account");
describe("Account class", () => {
  beforeEach(() => {
    accNumber = "12345678";
    correctPinCode = "1234";
    wrongPinCode = "0000";
    overdraft = 100;
    amount = 200;
    withdrawAmount = 50;
    account = new Account(accNumber, correctPinCode, amount, overdraft);
  });

  it("is expected to be initiased", () => {
    expect(account).to.be.an("object");
  });
  it("is exepected to be an instance of Account", () => {
    expect(account).to.be.instanceOf(Account);
  });
  it("is expected to hold an amount when initialized", () => {
    expect(account.getBalance(correctPinCode)).to.equal(
      console.log(`B ${amount}\n----`)
    );
  });
  it("is expected to reduce balance on sucessful withdraw", () => {
    account.withdraw(correctPinCode, withdrawAmount);
    expect(account.getBalance(correctPinCode)).to.equal(
      console.log(`B ${amount}\n----`)
    );
  });
  it("is expected return an input printed", () => {
    account.withdraw(wrongPinCode, withdrawAmount);
    expect(account.withdraw(correctPinCode, withdrawAmount)).to.equal(
      console.log(`W ${withdrawAmount}\n----`)
    );
  });
  describe("The Account should not dispense funds if the pin is incorrect", () => {
    it("is expected NOT to reduce account amount", () => {
      account.withdraw(wrongPinCode, 50);
      expect(account.getBalance(correctPinCode)).to.equal(
        console.log(`B ${amount}\n----`)
      );
    });
    it("is expected to return error status and message", () => {
      expect(account.withdraw(wrongPinCode, 50)).to.eql({
        status: "error",
        message: "ACCOUNT_ERR",
      });
    });
  });
  describe("Cannot dispense more money than it holds on the account, including the overdraft", () => {
    it("is expected to return error status and message", () => {
      expect(account.withdraw(correctPinCode, 800)).to.eql({
        status: "error",
        message: "FOUNDS_ERR",
      });
    });
    describe("Cannot get balance if pin is incorrect", () => {
      it("is expected to return error status and message", () => {
        expect(account.getBalance(wrongPinCode)).to.eql({
          status: "error",
          message: "ACCOUNT_ERR",
        });
      });
      it("is expected to return the balance if the pin is correct", () => {
        expect(account.getBalance(correctPinCode)).to.equal(
          console.log(`B ${amount}\n----`)
        );
      });
    });
  });
});
