const { expect } = require("chai");

const Atm = require("../src/atm");

describe("Atm class", () => {
  let subject;
  beforeEach(() => {
    subject = new Atm(8000);
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
  describe("The ATM cannot dispense more money than it holds", () => {
    it("is expected to return error status and message", () => {
      expect(subject.withdraw(9000, account, correctPinCode)).to.eql({
        status: "error",
        message: "ATM_ERR",
      });
    });
  });
});
