const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const SocialNetwork = artifacts.require("SocialNetwork");
const HelloWorld = artifacts.require("HelloWorld");
const JackieToken = artifacts.require("JackieToken");


module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(SocialNetwork);
  deployer.deploy(HelloWorld);
  deployer.deploy(JackieToken);

};
