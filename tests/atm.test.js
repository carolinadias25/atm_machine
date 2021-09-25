const { expect } = require("chai");

const Atm = require("../src/atm");

describe("Atm class", () => {
  let subject, account, correctPinCode, wrongPinCode;
  beforeEach(() => {
    subject = new Atm(8000);
  });
  before(() => {
    account = { pin: "1234", balance: null };
    correctPinCode = "1234";
    wrongPinCode = "0000";
  });

  it("is expected to be initiased", () => {
    expect(subject).to.be.an("object");
  });
  it("is exepected ti be an instance of Atm", () => {
    expect(subject).to.be.instanceOf(Atm);
  });
  it("is expected to hold 8000 when initialized", () => {
    expect(subject.balance).to.equal(8000);
  });
  it("is expected to reduce balance on sucessful withdraw", () => {
    subject.withdraw(500, account, correctPinCode);
    expect(subject.balance).to.equal(7500);
  });
  describe("The ATM should not dispense funds if the pin is incorrect", () => {
    it("is expected NOT to reduce ATM funds", () => {
      subject.withdraw(500, account, wrongPinCode);
      expect(subject.balance).to.equal(8000);
    });
    it("is expected to return error status and message", () => {
      expect(subject.withdraw(500, account, wrongPinCode)).to.eql({
        status: "error",
        message: "Incorrect pin",
      });
    });
    describe("The ATM cannot dispense more money than it holds", () => {
      it("is expected to return error status and message", () => {
        expect(subject.withdraw(9000, account, correctPinCode)).to.eql({
          status: "error",
          message: "FUNDS_ERR",
        });
      });
    });
  });
});
