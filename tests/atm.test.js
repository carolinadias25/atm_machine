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
});
