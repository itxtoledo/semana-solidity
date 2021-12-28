const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", function (accounts) {
  beforeEach(async () => {
    contract = await HelloWorld.new();
  });

  it("need show our message", async () => {
    const message = await contract.greetings();

    assert("Ola semana solidity!" == message);
  });
});
