const { expect } = require("chai");

const Account = require("../src/account");
describe("Account class", () => {
  beforeEach(() => {
    correctPinCode = "1234";
    wrongPinCode = "0000";
    accNumber = "12345678";
    account = new Account(accNumber, correctPinCode, 200);
  });

  it("is expected to be initiased", () => {
    expect(account).to.be.an("object");
  });
  it("is exepected ti be an instance of Account", () => {
    expect(account).to.be.instanceOf(Account);
  });
  it("is expected to hold an amount when initialized", () => {
    expect(account.balance).to.equal(200);
  });
  it("is expected to reduce balance on sucessful withdraw", () => {
    account.withdraw(correctPinCode, 50);
    expect(account.balance).to.equal(150);
  });
  describe("The Account should not dispense funds if the pin is incorrect", () => {
    it("is expected NOT to reduce account amount", () => {
      account.withdraw(wrongPinCode, 50);
      expect(account.balance).to.equal(200);
    });
    it("is expected to return error status and message", () => {
      expect(account.withdraw(wrongPinCode, 50)).to.eql({
        status: "error",
        message: "ACCOUNT_ERR",
      });
    });
  });
  describe("Cannot dispense more money than it holds on the account", () => {
    it("is expected to return error status and message", () => {
      expect(account.withdraw(correctPinCode, 500)).to.eql({
        status: "error",
        message: "FOUNDS_ERR",
      });
    });
  });
});
