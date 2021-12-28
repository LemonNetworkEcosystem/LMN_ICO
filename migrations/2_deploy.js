const { networks } = require("../truffle-config");

//* Contracts to deploy
// const LMN_ICO = artifacts.require("ICO.sol");
const LMNPurchase = artifacts.require("LMNPurchase.sol");
const LMNExit = artifacts.require("LMNExit.sol");
const Vault = artifacts.require("Vault.sol");
const LemonNetworkVault = artifacts.require("LemonNetworkVault.sol");
const Fake = artifacts.require("RealG.sol");

module.exports = async function (deployer, _network, addresses) {
  console.log("Working on Deployment Enviroment 👁‍🗨");
  const [admin, _] = addresses;

  console.log(
    `Managing Deployment through: ${admin} \n on NETWORK: ${_network}`
  );

  // ! LMN Contract
  // await deployer.deploy(Fake, 100000000);
  // const fake = await Fake.deployed();

  const lmnAddress = "0xdBB49BE8562ca6E23B41B3BC7f76b00748EED557";

  await deployer.deploy(
    LMNPurchase,
    admin, //! Profit wallet
    lmnAddress //! Token Address
  );
  const lmnPurchase = await LMNPurchase.deployed();

  await deployer.deploy(
    LMNExit,
    admin, //! Controls Contract
    lmnPurchase.address, //! Where LMN Go (ewtBack)
    lmnAddress //! Token Address
  );

  const lmnExit = LMNExit.deployed();

  await deployer.deploy(
    Vault,
    admin, //! Controls Contract
    lmnAddress //! Token Address
  );
  const vault = Vault.deployed();
  console.log(`LMN ICO Vault deployed to Net: ${_network}`);

  await deployer.deploy(
    LemonNetworkVault,
    admin, //! Controls Contract
    lmnAddress //! Token Address
  );
  const lemonVault = LemonNetworkVault.deployed();
};
