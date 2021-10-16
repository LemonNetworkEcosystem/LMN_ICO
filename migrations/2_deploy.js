const { networks } = require("../truffle-config");

//* Contracts to deploy
const LMN_ICO = artifacts.require("ICO.sol");
const Fake = artifacts.require("LMN.sol");

module.exports = async function (deployer, _network, addresses) {
  console.log("Working on Deployment Enviroment 👁‍🗨");
  const [admin, _] = addresses;

  console.log(
    `Managing Deployment through: ${admin} \n on NETWORK: ${_network}`
  );

  // console.log("deployer.toString()");
  // console.log(deployer.address);
  console.log("admin.toString()");
  console.log(admin.toString());

  //! LMN Contract
  // await deployer.deploy(Fake);
  // const fake = await Fake.deployed();

  console.log("LMN ERC-20 should be deployed");
  // console.log(`LMN Total Supply is: ${web3.utils.fromWei(ttl)}`);
  //! LMN ICO SMART CONTRACT
  // await deployer.deploy(
  //   LMN_ICO,

  //   admin,
  //   fake.address
  // );

  // const lmn_ico = await LMN_ICO.deployed();
  // console.log("LMN ICO is published :)");
};
