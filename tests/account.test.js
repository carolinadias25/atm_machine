const { expect } = require("chai");

const Account = require("../src/atm");
describe("Account class", () => {
  let account = new Account();

  it("is expected to be initiased", () => {
    expect(account).to.be.an("object");
  });
  it("is exepected ti be an instance of Account", () => {
    expect(account).to.be.instanceOf(Account);
  });
});
