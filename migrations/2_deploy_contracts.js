var MultiSigWallet = artifacts.require("SimpleMultiSigWallet.sol");

module.exports = deployer => {
  deployer.deploy(MultiSigWallet);
};
