const Migrations = artifacts.require("Migrations");
const SivaBitcoin = artifacts.require("SivaBitcoin");
module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(SivaBitcoin);
};
