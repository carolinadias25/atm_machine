const { expect } = require("chai");

const Atm = require("../src/atm");

describe("Atm class", () => {
  let subject, account, correctPinCode, wrongPinCode, response;
  beforeEach(() => {
    subject = new Atm(8000);
  });
  before(() => {
    account = { pin: null, balance: null };
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
    expect(subject.balance).to.equal(8000);
  });
  describe("rejected withdrawal ", () => {
    it("is expected NOT to reduce ATM funds", () => {
      subject.withdraw(500, account, wrongPinCode);
      expect(subject.balance).to.equal(7500);
    });
    describe("when provided the wrong pin code", () => {
      beforeEach(() => {
        response = subject.withdraw(500, account, wrongPinCode);
      });

      it("is expected to return error status", () => {
        expect(response).to.have.deep.property("status", "error");
      });

      it("is expected to return error message", () => {
        expect(response).to.have.deep.property("message", "Incorrect pin");
      });
      describe("if account has a low balance", () => {
        beforeEach(() => {
          response = subject.withdraw(300, account, correctPinCode);
        });
        it("is expected to return error status", () => {
          expect(response).to.have.deep.property("status", "error");
        });

        it("is expected to return error message", () => {
          expect(response).to.have.deep.property("message", "FUNDS_ERR");
        });
      });
    });
  });
});
