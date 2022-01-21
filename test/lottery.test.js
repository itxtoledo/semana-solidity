const Lottery = artifacts.require("Lottery");

contract("Lottery", function ([accA, accB, accC]) {
  beforeEach(async () => {
    contract = await Lottery.new();
  });

  it("verify owner", async () => {
    const ownerAddress = await contract.OWNER();

    assert(ownerAddress === accA, "need to be equal");
  });

  it("can get players", async () => {
    const players = await contract.getPlayers();

    assert(players.length === 0, "need to be zero");
  });

  it("can check balance", async () => {
    const contractAddress = contract.address;
    const balance = await web3.eth.getBalance(contractAddress);

    const etherBalance = web3.utils.fromWei(balance, "ether");

    assert(etherBalance === "0", "need to be zero");
  });
});
