const Migrations = artifacts.require("Hodl");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};