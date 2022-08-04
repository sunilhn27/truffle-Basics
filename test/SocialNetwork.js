const SocialNetwork = artifacts.require("SocialNetwork");

contract('SocialNetwork', (accounts) => {
  it('My Test to check the getName', async () => {
    const socialNetworkInstance = await SocialNetwork.deployed()
    const name = await socialNetworkInstance.getName();
    assert.equal(name, "Sunil You Rock", "Wrong String");
  });

});
