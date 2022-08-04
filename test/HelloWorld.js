var HelloWorld = artifacts.require('./HelloWorld.sol');

contract("HelloWorld:getName", function(accounts) {
  it("should assert true", async function() {
    const contract = await HelloWorld.deployed();
    await contract.setNumber(54);
    await contract.getNumber();
    const result = await contract.getNumber.call();
    assert.isTrue(result == 54);


  });
});
