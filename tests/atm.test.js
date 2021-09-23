const { expect } = require("chai");

const Atm = require("../src/atm");

describe("Atm class", () => {
  let subject;

  before(() => {
    subject = new Atm();
  });
  it("is expected to be initiased", () => {
    expect(subject).to.be.an("object");
  });
  it("is exepected ti be an instance of Atm", () => {
    expect(subject).to.be.instanceOf(Atm);
  });
  it("is expected to hold 8000 when initialized", () => {
    expect(subject.funds).to.equal(8000);
  });
  it.only("is expected to reduce funds on sucessful withdrawal", () => {
    subject.withdraw(500);
    expect(subject.funds).to.equal(7500);
  });
});
