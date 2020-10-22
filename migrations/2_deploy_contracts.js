const erc20BasicCoin = artifacts.require("ERC20BasicCoin");

module.exports = function(deployer) {
  deployer.deploy(erc20BasicCoin, 10000);
};
