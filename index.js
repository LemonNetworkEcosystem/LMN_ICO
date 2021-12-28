const Web3 = require("web3");

const LMNPurchase = require("./src/abis/LMNPurchase.json");
const LMNExit = require("./src/abis/LMNExit.json");
const Vault = require("./src/abis/Vault.json");
const LemonNetworkVault = require("./src/abis/LemonNetworkVault.json");

//? Already Used
const ICO = require("./src/abis/ICO.json");

const RealG = require("./src/abis/RealG.json");

const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

//!PROVABI

const tokenABI = [
  {
    name: "Transfer",
    inputs: [
      { type: "address", name: "_from", indexed: true },
      { type: "address", name: "_to", indexed: true },
      { type: "uint256", name: "_value", indexed: false },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "Approval",
    inputs: [
      { type: "address", name: "_owner", indexed: true },
      { type: "address", name: "_spender", indexed: true },
      { type: "uint256", name: "_value", indexed: false },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "__init__",
    outputs: [],
    inputs: [
      { type: "bytes32", name: "_name" },
      { type: "bytes32", name: "_symbol" },
      { type: "uint256", name: "_decimals" },
      { type: "uint256", name: "_supply" },
    ],
    constant: false,
    payable: false,
    type: "constructor",
  },
  {
    name: "deposit",
    outputs: [],
    inputs: [],
    constant: false,
    payable: true,
    type: "function",
    gas: 74279,
  },
  {
    name: "withdraw",
    outputs: [{ type: "bool", name: "out" }],
    inputs: [{ type: "uint256", name: "_value" }],
    constant: false,
    payable: false,
    type: "function",
    gas: 108706,
  },
  {
    name: "totalSupply",
    outputs: [{ type: "uint256", name: "out" }],
    inputs: [],
    constant: true,
    payable: false,
    type: "function",
    gas: 543,
  },
  {
    name: "balanceOf",
    outputs: [{ type: "uint256", name: "out" }],
    inputs: [{ type: "address", name: "_owner" }],
    constant: true,
    payable: false,
    type: "function",
    gas: 745,
  },
  {
    name: "transfer",
    outputs: [{ type: "bool", name: "out" }],
    inputs: [
      { type: "address", name: "_to" },
      { type: "uint256", name: "_value" },
    ],
    constant: false,
    payable: false,
    type: "function",
    gas: 74698,
  },
  {
    name: "transferFrom",
    outputs: [{ type: "bool", name: "out" }],
    inputs: [
      { type: "address", name: "_from" },
      { type: "address", name: "_to" },
      { type: "uint256", name: "_value" },
    ],
    constant: false,
    payable: false,
    type: "function",
    gas: 110600,
  },
  {
    name: "approve",
    outputs: [{ type: "bool", name: "out" }],
    inputs: [
      { type: "address", name: "_spender" },
      { type: "uint256", name: "_value" },
    ],
    constant: false,
    payable: false,
    type: "function",
    gas: 37888,
  },
  {
    name: "allowance",
    outputs: [{ type: "uint256", name: "out" }],
    inputs: [
      { type: "address", name: "_owner" },
      { type: "address", name: "_spender" },
    ],
    constant: true,
    payable: false,
    type: "function",
    gas: 1025,
  },
  {
    name: "name",
    outputs: [{ type: "bytes32", name: "out" }],
    inputs: [],
    constant: true,
    payable: false,
    type: "function",
    gas: 723,
  },
  {
    name: "symbol",
    outputs: [{ type: "bytes32", name: "out" }],
    inputs: [],
    constant: true,
    payable: false,
    type: "function",
    gas: 753,
  },
  {
    name: "decimals",
    outputs: [{ type: "uint256", name: "out" }],
    inputs: [],
    constant: true,
    payable: false,
    type: "function",
    gas: 783,
  },
];

//!PROVABI

const testPurchaseLMN = async () => {
  const web3 = new Web3("http://localhost:9545");

  const id = await web3.eth.net.getId();
  console.log(id);

  const addresses = await web3.eth.getAccounts();

  const contract = new web3.eth.Contract(
    LMNPurchase.abi,
    LMNPurchase.networks[id].address
  );

  try {
    const addressToken = await contract.methods.token().call();
    console.log(addressToken);
    const rate = await contract.methods.rate().call();
    console.log(rate);
    const state = await contract.methods.state().call();
    console.log(state);
    const governance = await contract.methods.governance().call();
    console.log(governance);
  } catch (e) {
    console.log("e1");
    console.log(e);
  }

  const token = new web3.eth.Contract(tokenABI, RealG.networks[id].address);
  const buyingAmount = new web3.utils.BN("100000000000000000"); //1 ewt
  // 200000000000000000 == 2

  const gas = new web3.utils.BN("6000000");

  try {
    const purch = await contract.methods.purchase().send({
      from: addresses[1],
      value: buyingAmount,
    });
    console.log("⛔️ Test: CAN PURCHASE WITHOUT LMN!");
  } catch (error) {
    console.log("✅ Test: Can not Purchase without LMN ");
  }

  try {
    const some = await token.methods
      .transfer(LMNPurchase.networks[id].address, "10000000000000000000")
      .send({
        from: addresses[0],
      });
    const purch = await contract.methods.purchase().send({
      from: addresses[1],
      value: buyingAmount,
    });

    console.log("⛔️ Test: CAN PURCHASE WITHOUT Unlock!");
  } catch (error) {
    console.log("✅ Test: Can not Purchase without Unlock ");
  }

  try {
    const unlock = await contract.methods.unlock().send({
      from: addresses[1],
      value: "50000000000000000",
    });

    const result = await contract.methods.purchase().send({
      from: addresses[1],
      value: buyingAmount,
    });

    console.log("✅ Test: CAN PURCHASE");
  } catch (error) {
    console.log("⛔️ Test: CAN NOT PURCHASE");
  }

  try {
    const tokenBalanceContract = await token.methods
      .balanceOf(LMNPurchase.networks[id].address)
      .call();

    const back = await contract.methods
      .withdrawUnsoldTokens(tokenBalanceContract)
      .send({
        from: addresses[0],
      });
    const postWithTokenBalanceContract = await token.methods
      .balanceOf(LMNPurchase.networks[id].address)
      .call();
    console.log("✅ Test: CAN WITHDRAW UNSOLD TOKENS");
  } catch (e) {
    console.log("⛔️ Test: CAN NOT WITHDRAW UNSOLD TOKENS");
  }
};

const testExitLMN = async () => {
  const web3 = new Web3("http://localhost:9545");

  const id = await web3.eth.net.getId();
  console.log(id);

  const addresses = await web3.eth.getAccounts();

  const contract = new web3.eth.Contract(
    LMNExit.abi,
    LMNExit.networks[id].address
  );

  try {
    const addressToken = await contract.methods.token().call();
    console.log(addressToken);
    const rate = await contract.methods.rate().call();
    console.log(rate);
    const totalExit = await contract.methods.totalExit().call();
    console.log(totalExit);
    const governance = await contract.methods.governance().call();
    console.log(governance);
    const lmnSend = await contract.methods.lmnSend().call();
    console.log(lmnSend);
  } catch (e) {
    console.log("e1");
    console.log(e);
  }

  const token = new web3.eth.Contract(tokenABI, RealG.networks[id].address);
  const buyingAmount = new web3.utils.BN("100000000000000000"); //1 ewt
  // 200000000000000000 == 2

  const gas = new web3.utils.BN("6000000");

  try {
    //! Try to CASHBACK without EWT on Smart Contract
    const purch = await contract.methods.cashBack(100000000000000000).send({
      from: addresses[0],
    });
    console.log("⛔️ Test: CAN EXIT WITHOUT EWT!");
  } catch (error) {
    console.log("✅ Test: Can not Exit without EWT on Contract ");
  }

  console.log(LMNExit.networks[id].address);
  const contractAddress = LMNExit.networks[id].address;

  try {
    //! Try to CASHBACK without Approve of ERC20
    const balance = await web3.eth.getBalance(addresses[0]);
    console.log(balance);
    await web3.eth.sendTransaction({
      from: addresses[0],
      to: contractAddress,
      value: web3.utils.toWei("1"),
      gas: gas,
    });

    const purch = await contract.methods.cashBack("100000000000000000").send({
      from: addresses[0],
    });
    console.log("⛔️ Test: Can CashBack without ERC20 Approve!");
  } catch (error) {
    console.log("✅ Test: CAN NOT CashBack without ERC20 Approve");
  }

  try {
    //! Try to CASHBACK without Approve of ERC20
    const balance = await web3.eth.getBalance(addresses[0]);
    console.log(balance);
    await web3.eth.sendTransaction({
      from: addresses[0],
      to: contractAddress,
      value: web3.utils.toWei("1"),
      gas: gas,
    });

    await token.methods.approve(contractAddress, "100000000000000000").send({
      from: addresses[0],
    });

    const purch = await contract.methods.cashBack("100000000000000000").send({
      from: addresses[0],
    });
    console.log("⛔️ Test: Can CashBack without UNLOCK!");
  } catch (error) {
    console.log("✅ Test: Can not CashBack without Unlock");
  }

  try {
    //! Try to CASHBACK without Approve of ERC20

    await contract.methods.unlock().send({
      from: addresses[0],
      value: "5000000000000000",
    });
    const purch = await contract.methods.cashBack("100000000000000000").send({
      from: addresses[0],
    });
    console.log("✅ Test: Can CashBack");
  } catch (error) {
    console.log(error.toString());
    console.log("⛔️ Test: Can not CashBack");
  }
};

const testVault = async () => {
  const web3 = new Web3("http://localhost:9545");

  const id = await web3.eth.net.getId();
  console.log(id);

  const addresses = await web3.eth.getAccounts();

  const contract = new web3.eth.Contract(Vault.abi, Vault.networks[id].address);

  try {
    const addressToken = await contract.methods.token().call();
    console.log(addressToken);
    const lmnVault = await contract.methods.lmnVault().call();
    console.log(lmnVault);
    const lmn2Share = await contract.methods.lmn2Share().call();
    console.log(lmn2Share);
    const total_lmn = await contract.methods.total_lmn().call();
    console.log(total_lmn);
    const depositTimeLine = await contract.methods.depositTimeLine().call();
    console.log(depositTimeLine);
    const endTime = await contract.methods.endTime().call();
    console.log(endTime);
    const userInfo = await contract.methods.userInfo(addresses[0]).call();
    console.log(userInfo);
    const unlockList = await contract.methods.unlockList(addresses[0]).call();
    console.log(unlockList);
    const governance = await contract.methods.governance().call();
    console.log(governance);
  } catch (e) {
    console.log("Error while reading Contract Data");
    console.log(e);
  }

  const token = new web3.eth.Contract(tokenABI, RealG.networks[id].address);
  const depositAmount = new web3.utils.BN("100000000000000000"); //1 LMN
  // 200000000000000000 == 2

  const gas = new web3.utils.BN("6000000");

  try {
    //! Try to Deposit without unlocking on Smart Contract
    const depo = await contract.methods
      .depositVault("100000000000000000")
      .send({
        from: addresses[0],
      });
    console.log("⛔️ Test: CAN Deposit WITHOUT Unlocking!");
  } catch (error) {
    console.log("✅ Test: Can not Deposit without Unlocking");
  }

  try {
    //! Try to Deposit without Approve of ERC20
    await contract.methods.unlock().send({
      from: addresses[0],
      value: "5000000000000000",
    });

    const purch = await contract.methods
      .depositVault("100000000000000000")
      .send({
        from: addresses[0],
      });
    console.log("⛔️ Test: Can Deposit without ERC20 Approve!");
  } catch (error) {
    console.log("✅ Test: CAN NOT Deposit without ERC20 Approve");
  }

  try {
    //! Try to CASHBACK without Approve of ERC20

    await token.methods
      .approve(Vault.networks[id].address, "10000000000000000000")
      .send({
        from: addresses[0],
      });

    const stake = await contract.methods.depositVault("100000000000000").send({
      from: addresses[0],
      gas: gas,
    });
    console.log("✅ Test: Can Deposit");
  } catch (error) {
    console.log(error);
    console.log("⛔️ Test: Can not Deposit!");
  }

  setTimeout(async () => {
    try {
      await contract.methods.withdrawVault().send({
        from: addresses[0],
        gas: gas,
      });
      console.log("✅ Test: Can Withdraw");
    } catch (e) {
      console.log("⛔️ Test: Can not Withdraw!");
    }
  }, 240000);
};

const sendLmn2Vault0 = async () => {
  let provider = new HDWalletProvider(
    [process.env.MNEMONIC],
    "https://rpc.energyweb.org"
  );

  const web3 = new Web3(provider);
  const id = await web3.eth.net.getId();
  console.log(id);

  const addresses = await web3.eth.getAccounts();

  const contract = new web3.eth.Contract(Vault.abi, Vault.networks[id].address);

  try {
    const addressToken = await contract.methods.token().call();
    console.log(addressToken);
    const lmnVault = await contract.methods.lmnVault().call();
    console.log(lmnVault);
    const lmn2Share = await contract.methods.lmn2Share().call();
    console.log(lmn2Share);
    const total_lmn = await contract.methods.total_lmn().call();
    console.log(total_lmn);
    const depositTimeLine = await contract.methods.depositTimeLine().call();
    console.log(depositTimeLine);
    const endTime = await contract.methods.endTime().call();
    console.log(endTime);
    const userInfo = await contract.methods.userInfo(addresses[0]).call();
    console.log(userInfo);
    const unlockList = await contract.methods.unlockList(addresses[0]).call();
    console.log(unlockList);
    const governance = await contract.methods.governance().call();
    console.log(governance);
  } catch (e) {
    console.log("Error while reading Contract Data");
    console.log(e);
  }

  const token = new web3.eth.Contract(tokenABI, RealG.networks[id].address);
  const depositAmount = new web3.utils.BN("4000000000000000000000000"); //4,000,000 LMN
  const depositAmount1 = new web3.utils.BN("100000000000000000000000"); //100,000 LMN
  const otherWalletAmount = new web3.utils.BN("10000000000000000000"); //4,000 LMN
  // 200000000000000000 == 2

  const gas = new web3.utils.BN("6000000");

  // try {
  //   //! Sending ERC20 to Vault 0

  //   await token.methods
  //     .transfer(Vault.networks[id].address, depositAmount)
  //     .send({
  //       from: addresses[0],
  //     });

  //   console.log("✅ Test: Send 4,000 LMN to Vault 0");
  // } catch (error) {
  //   console.log(error);
  //   console.log("⛔️ Test: Can not Send 4,000 LMN to Vault 0!");
  // }

  // try {
  //   //! Sending ERC20 to Vault 1

  //   await token.methods
  //     .transfer(LemonNetworkVault.networks[id].address, depositAmount1)
  //     .send({
  //       from: addresses[0],
  //     });

  //   console.log("✅ Test: Send 1,000 LMN to Vault 1");
  // } catch (error) {
  //   console.log(error);
  //   console.log("⛔️ Test: Can not Send 1,000 LMN to Vault 1!");
  // }

  // try {
  //   //! Sending ERC20 to LMN Purchase

  //   await token.methods
  //     .transfer(LMNPurchase.networks[id].address, depositAmount1)
  //     .send({
  //       from: addresses[0],
  //     });

  //   console.log("✅ Test: Send 1,000 LMN to LMN Purchase");
  // } catch (error) {
  //   console.log(error);
  //   console.log("⛔️ Test: Can not Send 1,000 LMN to LMN Purchase!");
  // }

  // try {
  //   //! Sending EWT to LMN Exit

  //   const exitContract = await web3.eth.sendTransaction({
  //     from: addresses[0],
  //     to: LMNExit.networks[id].address,
  //     value: web3.utils.toWei("25"),
  //     gas: gas,
  //   });

  //   console.log("✅ Test: Send 25 EWT to LMN Exit");
  // } catch (error) {
  //   console.log(error);
  //   console.log("⛔️ Test: Can not Send25 EWT to LMN Exit!");
  // }

  // try {
  //   //! Sending ERC20 to Other Wallet

  //   await token.methods.transfer(addresses[1], otherWalletAmount).send({
  //     from: addresses[0],
  //   });
  //   console.log("✅ Test: Send 1,000 LMN to Wallet 1");
  // } catch (error) {
  //   console.log(error);
  //   console.log("⛔️ Test: Can not Send 1,000 LMN to Wallet 1!");
  // }

  // setTimeout(() => {
  //   console.log("🔐 Deposit Time is OVER");
  // }, 2 * 60000);
  // setTimeout(() => {
  //   console.log("🔓 Withdrawal Time is OPEN");
  // }, 5 * 60000);

  //TODO: Trying to be a BAD bitch
  console.log(`
  🔐 Testing LMN Exit.sol
  `);
  const exitContractLmn = new web3.eth.Contract(
    LMNExit.abi,
    LMNExit.networks[id].address
  );

  try {
    const exitContract = await web3.eth.sendTransaction({
      from: addresses[0],
      to: LMNExit.networks[id].address,
      value: web3.utils.toWei("25"),
      gas: gas,
    });

    await exitContractLmn.methods.withdrawEthers().send({
      from: addresses[1],
    });
    console.log("⛔️ Test: Can withdraw EWT from account[1]!");
  } catch (error) {
    console.log("✅ Test: Can not withdraw EWT from account[1]");
  }

  try {
    const ethers = await web3.eth.getBalance(LMNExit.networks[id].address);
    await exitContractLmn.methods.withdrawEthers(ethers).send({
      from: addresses[0],
    });
    console.log("✅ Test: Can withdraw EWT from account[0]");
  } catch (error) {
    console.log(error);
    console.log("⛔️ Test: Can not withdraw EWT from account[0]!");
  }

  try {
    const tokenBalances = await token.methods
      .balanceOf(LMNExit.networks[id].address)
      .call();
    const resp = await exitContractLmn.methods.withdrawUnsoldTokens().send({
      from: addresses[0],
    });

    console.log("⛔️ Test: Can withdraw LMN from account[1]!");
  } catch (error) {
    console.log("✅ Test: Can not withdraw LMN from account[1]");
  }

  try {
    const tokenBalances = await token.methods
      .balanceOf(LMNExit.networks[id].address)
      .call();
    const resp = await exitContractLmn.methods
      .withdrawUnsoldTokens(tokenBalances)
      .send({
        from: addresses[0],
      });

    console.log("✅ Test: Can withdraw LMN from account[0]");
  } catch (error) {
    console.log(error);

    console.log("⛔️ Test: Can not withdraw LMN from account[0]!");
  }

  console.log(`
  🔐 Testing LMN Purchase.sol
  `);
  const lemonPurchase = new web3.eth.Contract(
    LMNPurchase.abi,
    LMNPurchase.networks[id].address
  );

  // try {
  //   const tokenBalances = await token.methods
  //     .balanceOf(LMNPurchase.networks[id].address)
  //     .call();
  //   const resp = await lmn.methods.withdrawUnsoldTokens(tokenBalances).send({
  //     from: addresses[1],
  //   });

  //   console.log("⛔️ Test: Can withdraw LMN from account[1]!");
  // } catch (error) {
  //   // console.log(error);
  //   console.log("✅ Test: Can not withdraw LMN from account[1]");
  // }

  try {
    const tokenBalances = await token.methods
      .balanceOf(LMNPurchase.networks[id].address)
      .call();
    const resp = await lemonPurchase.methods
      .withdrawUnsoldTokens(tokenBalances)
      .send({
        from: addresses[0],
      });
    console.log("✅ Test: Can  withdraw LMN from account[0]");
  } catch (error) {
    console.log(error);
    console.log("⛔️ Test: Can not withdraw LMN from account[0]!");
  }

  // console.log(`
  // 🔐 Testing LMN ICO Vault.sol
  // `);

  // const Vault0 = new web3.eth.Contract(Vault.abi, Vault.networks[id].address);

  // try {
  //   const tokenBalances = await token.methods
  //     .balanceOf(Vault.networks[id].address)
  //     .call();

  //   const resp = await Vault0.methods.withdrawUnsoldTokens(tokenBalances).send({
  //     from: addresses[1],
  //   });
  //   console.log("⛔️ Test: Can withdraw LMN from account[1]!");
  // } catch (error) {
  //   console.log("✅ Test: Can not withdraw LMN from account[1]");
  // }

  // try {
  //   const tokenBalances = await token.methods
  //     .balanceOf(Vault.networks[id].address)
  //     .call();

  //   const resp = await Vault0.methods.withdrawUnsoldTokens(tokenBalances).send({
  //     from: addresses[0],
  //   });
  //   console.log("✅ Test: Can  withdraw LMN from account[0]");
  // } catch (error) {
  //   console.log(error);
  //   console.log("⛔️ Test: Can not withdraw LMN from account[0]!");
  // }

  // try {
  //   const balancede = await web3.eth.getBalance(Vault.networks[id].address);

  //   const resp = await Vault0.methods.withdrawEthers(balancede).send({
  //     from: addresses[1],
  //   });
  //   console.log("⛔️ Test: Can withdraw EWT from account[1]!");
  // } catch (error) {
  //   console.log("✅ Test: Can not withdraw EWT from account[1]!");
  // }

  // try {
  //   const balanced = await web3.eth.getBalance(Vault.networks[id].address);

  //   const resp = await Vault0.methods.withdrawEthers(balanced).send({
  //     from: addresses[0],
  //   });
  //   console.log("✅ Test: Can  withdraw EWT from account[0]");
  // } catch (error) {
  //   console.log("⛔️ Test: Can not withdraw EWT from account[0]!");
  // }

  // console.log(`
  // 🔐 Testing LMN Network Vault.sol
  // `);

  // const Vault0 = new web3.eth.Contract(
  //   LemonNetworkVault.abi,
  //   LemonNetworkVault.networks[id].address
  // );

  // try {
  //   const tokenBalances = await token.methods
  //     .balanceOf(LemonNetworkVault.networks[id].address)
  //     .call();

  //   const resp = await Vault0.methods.withdrawUnsoldTokens(tokenBalances).send({
  //     from: addresses[1],
  //   });
  //   console.log("⛔️ Test: Can withdraw LMN from account[1]!");
  // } catch (error) {
  //   console.log("✅ Test: Can not withdraw LMN from account[1]");
  // }

  // try {
  //   const tokenBalances = await token.methods
  //     .balanceOf(LemonNetworkVault.networks[id].address)
  //     .call();

  //   const resp = await Vault0.methods.withdrawUnsoldTokens(tokenBalances).send({
  //     from: addresses[0],
  //   });
  //   console.log("✅ Test: Can  withdraw LMN from account[0]");
  // } catch (error) {
  //   console.log(error);
  //   console.log("⛔️ Test: Can not withdraw LMN from account[0]!");
  // }

  // try {
  //   const balancede = await web3.eth.getBalance(
  //     LemonNetworkVault.networks[id].address
  //   );

  //   const resp = await Vault0.methods.withdrawEthers(balancede).send({
  //     from: addresses[1],
  //   });
  //   console.log("⛔️ Test: Can withdraw EWT from account[1]!");
  // } catch (error) {
  //   console.log("✅ Test: Can not withdraw EWT from account[1]!");
  // }

  // try {
  //   const balanced = await web3.eth.getBalance(
  //     LemonNetworkVault.networks[id].address
  //   );

  //   const resp = await Vault0.methods.withdrawEthers(balanced).send({
  //     from: addresses[0],
  //   });
  //   console.log("✅ Test: Can  withdraw EWT from account[0]");
  // } catch (error) {
  //   console.log("⛔️ Test: Can not withdraw EWT from account[0]!");
  // }

  // console.log("SENDING LMN to VAULTS");

  // try {
  //   //! Sending ERC20 to Vault 0

  //   await token.methods
  //     .transfer(Vault.networks[id].address, depositAmount)
  //     .send({
  //       from: addresses[0],
  //     });

  //   console.log("✅ Test: Send 4,000,000 LMN to Vault 0");
  // } catch (error) {
  //   console.log(error);
  //   console.log("⛔️ Test: Can not Send 4,000,000 LMN to Vault 0!");
  // }

  // try {
  //   //! Sending ERC20 to Vault 1

  //   await token.methods
  //     .transfer(LemonNetworkVault.networks[id].address, depositAmount1)
  //     .send({
  //       from: addresses[0],
  //     });

  //   console.log("✅ Test: Send 100,000 LMN to Vault 1");
  // } catch (error) {
  //   console.log(error);
  //   console.log("⛔️ Test: Can not Send 100,000 LMN to Vault 1!");
  // }
};

const checkContractsBalance = async () => {
  let provider = new HDWalletProvider(
    [process.env.MNEMONIC],
    "https://rpc.energyweb.org"
  );

  const web3 = new Web3(provider);
  const id = await web3.eth.net.getId();
  console.log(id);

  const addresses = await web3.eth.getAccounts();
  const token = new web3.eth.Contract(tokenABI, RealG.networks[id].address);

  try {
    //! Sending ERC20 to Vault 1

    const vaultToken = await token.methods
      .balanceOf(Vault.networks[id].address)
      .call({
        from: addresses[0],
      });
    const vaultEwt = await web3.eth.getBalance(Vault.networks[id].address);

    console.log(`Vault (LMN): ${web3.utils.fromWei(vaultToken)}`);
    console.log(`Vault (EWT): ${web3.utils.fromWei(vaultEwt)}`);

    const vaultToken1 = await token.methods
      .balanceOf(LemonNetworkVault.networks[id].address)
      .call({
        from: addresses[0],
      });
    const vaultEwt1 = await web3.eth.getBalance(
      LemonNetworkVault.networks[id].address
    );

    console.log(
      `Vault Lemon Network (LMN): ${web3.utils.fromWei(vaultToken1)}`
    );
    console.log(`Vault Lemon Network (EWT): ${web3.utils.fromWei(vaultEwt1)}`);

    const vaultToken2 = await token.methods
      .balanceOf(LMNPurchase.networks[id].address)
      .call({
        from: addresses[0],
      });
    const vaultEwt2 = await web3.eth.getBalance(
      LMNPurchase.networks[id].address
    );

    console.log(`LMN Purchase (LMN): ${web3.utils.fromWei(vaultToken2)}`);
    console.log(`LMN Purchase (EWT): ${web3.utils.fromWei(vaultEwt2)}`);

    const vaultToken3 = await token.methods
      .balanceOf(LMNExit.networks[id].address)
      .call({
        from: addresses[0],
      });
    const vaultEwt3 = await web3.eth.getBalance(LMNExit.networks[id].address);

    console.log(`LMN Exit (LMN): ${web3.utils.fromWei(vaultToken3)}`);
    console.log(`LMN Exit (EWT): ${web3.utils.fromWei(vaultEwt3)}`);
  } catch (error) {
    console.log(error);
    console.log("⛔️ Test: Can not Send 100,000 LMN to Vault 1!");
  }
};

const feedAllContracts = async () => {
  const web3 = new Web3("http://localhost:9545");
  const depositAmount = new web3.utils.BN("4000000000000000000000000"); //4,000,000 LMN
  const depositAmount1 = new web3.utils.BN("100000000000000000000000"); //100,000 LMN
  const id = await web3.eth.net.getId();
  console.log(id);

  const addresses = await web3.eth.getAccounts();
  const token = new web3.eth.Contract(tokenABI, RealG.networks[id].address);

  try {
    //! Sending ERC20 to Vault 0

    await token.methods
      .transfer(Vault.networks[id].address, depositAmount)
      .send({
        from: addresses[0],
      });

    console.log("✅ Test: Send 4,000,000 LMN to Vault 0");
  } catch (error) {
    console.log(error);
    console.log("⛔️ Test: Can not Send 4,000,000 LMN to Vault 0!");
  }

  try {
    //! Sending ERC20 to Vault 1

    await token.methods
      .transfer(LemonNetworkVault.networks[id].address, depositAmount1)
      .send({
        from: addresses[0],
      });

    console.log("✅ Test: Send 100,000 LMN to Vault 1");
  } catch (error) {
    console.log(error);
    console.log("⛔️ Test: Can not Send 100,000 LMN to Vault 1!");
  }

  try {
    //! Sending ERC20 to LMN Purchase

    await token.methods
      .transfer(LMNPurchase.networks[id].address, depositAmount1)
      .send({
        from: addresses[0],
      });

    console.log("✅ Test: Send 100,000 LMN to LMN Purchase");
  } catch (error) {
    console.log(error);
    console.log("⛔️ Test: Can not Send 100,000 LMN to LMN Purchase!");
  }

  try {
    //! Sending ERC20 to LMN Purchase

    await web3.eth.sendTransaction({
      from: addresses[3],
      to: LMNExit.networks[id].address,
      value: web3.utils.toWei("90"),
    });
    await web3.eth.sendTransaction({
      from: addresses[4],
      to: LMNExit.networks[id].address,
      value: web3.utils.toWei("90"),
    });

    console.log("✅ Test: Send 180 EWT to LMN Exit");
  } catch (error) {
    console.log(error);
    console.log("⛔️ Test: Can not Send 180 EWT to LMN Exit!");
  }
};

// testPurchaseLMN();

// testExitLMN();

// testVault();

// sendLmn2Vault0(); // Makes several SC Tests

// feedAllContracts();
checkContractsBalance();

//
//
//
//
//
//
//
//
//
//
//
//

// //TODO : Mainnet CODE Functions

// const withdrawUnsoldTokensICO = async () => {
//   let provider = new HDWalletProvider(
//     [process.env.MNEMONIC],
//     "https://rpc.energyweb.org"
//   );

//   const web3 = new Web3(provider);
//   const gas = new web3.utils.BN("6000000");
//   const gasPrice = new web3.utils.BN("9");
//   const id = await web3.eth.net.getId();

//   const addresses = await web3.eth.getAccounts();
//   try {
//     const icoContract = new web3.eth.Contract(
//       ICO.abi,
//       "0x1b3F1197A1eEdC27e364186e13F343e531e3Ac59"
//     );

//     const lemon = new web3.eth.Contract(
//       tokenABI,
//       "0xdBB49BE8562ca6E23B41B3BC7f76b00748EED557"
//     );

//     const balance = await lemon.methods
//       .balanceOf("0x1b3F1197A1eEdC27e364186e13F343e531e3Ac59")
//       .call();

//     console.log(balance);

//     await icoContract.methods.withdrawUnsoldTokens(balance).send({
//       from: addresses[0],
//       gas: gas,
//       gasPrice: gasPrice,
//     });
//     console.log("✅ Could withdraw UNSOLD LMN from ICO Contract");
//   } catch (e) {
//     console.log(e);
//     console.log("⛔️ Could not withdraw UNSOLD LMN from ICO Contract");
//   }
// };

// //TODO : Mainnet Functions

// withdrawUnsoldTokensICO();
