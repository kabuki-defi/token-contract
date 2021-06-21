const Token = artifacts.require("KabukiToken");

module.exports = function (deployer) {
  deployer.deploy(Token);
};
