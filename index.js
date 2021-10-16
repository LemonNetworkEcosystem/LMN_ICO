const Web3 = require("web3");
const ICO = require("./src/abis/ICO.json");
const Token = require("./src/abis/LMN.json");
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

const moveLMN = async () => {
  const web3 = new Web3("http://localhost:9545");
  // const web3 = new Web3(window.web3.currentProvider);

  // console.log(process.env.MNEMONIC);
  // const mySeed = [process.env.MNEMONIC];
  // console.log(mySeed);
  const id = await web3.eth.net.getId();
  console.log(id);

  const addresses = await web3.eth.getAccounts();
  const fakeToken = new web3.eth.Contract(
    Token.abi,
    Token.networks[id].address
  );

  const amount2Send = web3.utils.toBN(750);
  const amount2SendBack = web3.utils.toBN(50);
  try {
    fakeToken.methods.transfer(addresses[1], amount2Send.toString()).send({
      from: addresses[0],
      gas: 800000,
    });
    fakeToken.methods.transfer(addresses[0], amount2SendBack.toString()).send({
      from: addresses[1],
      gas: 800000,
    });
  } catch (e) {
    console.log(e.toString());
  }

  const balanceA = fakeToken.methods.balanceOf(addresses[0]).call();
  const balanceB = fakeToken.methods.balanceOf(addresses[1]).call();

  console.log(`Balance A --> ${balanceA}`);
  console.log(`Balance B --> ${balanceB}`);
};

const test = async () => {
  const web3 = new Web3("http://localhost:9545");
  // const web3 = new Web3(window.web3.currentProvider);

  // console.log(process.env.MNEMONIC);
  // const mySeed = [process.env.MNEMONIC];
  // console.log(mySeed);
  const id = await web3.eth.net.getId();
  console.log(id);

  const addresses = await web3.eth.getAccounts();
  const fakeToken = new web3.eth.Contract(
    Token.abi,
    Token.networks[id].address
  );
  const ico = new web3.eth.Contract(ICO.abi, ICO.networks[id].address);
  const tokensPreSell = await ico.methods.tokensSold().call();
  const norm_preSell = web3.utils.fromWei(tokensPreSell);
  console.log(web3.utils.fromWei(tokensPreSell));

  try {
    //! BUY Tokens to ICO
    const lmn_phase_1 = await ico.methods.phaseOneSupply().call();
    console.log(`LMN Phase 1: ${lmn_phase_1}`);
    const lmn_phase_2 = await ico.methods.phaseTwoSupply().call();
    console.log(`LMN Phase 2: ${lmn_phase_2}`);
    const lmn_phase_3 = await ico.methods.phaseThreeSupply().call();
    console.log(`LMN Phase 3: ${lmn_phase_3}`);

    const phase1time = await ico.methods.phaseOneTimeLock().call();
    console.log(phase1time);
    const phase2time = await ico.methods.phaseTwoTimeLock().call();
    console.log(phase2time);
    const phase3time = await ico.methods.phaseThreeTimeLock().call();
    console.log(phase3time);
    const currentBlock = await web3.eth.getBlock("latest");
    const timestamp = currentBlock.timestamp;
    console.log(timestamp);

    if (timestamp < phase1time) {
      console.log("PRE PHASE 1");
    } else if (timestamp > phase1time && timestamp < phase2time) {
      console.log("PHASE 1");
    } else if (timestamp > phase2time && timestamp < phase3time) {
      console.log("PHASE 2");
    } else if (timestamp > phase3time) {
      console.log("PHASE 3");
    }

    await web3.eth.sendTransaction({
      from: addresses[0],
      to: ICO.networks[id].address,
      value: web3.utils.toWei("14.35"),
      gas: 800000,
    });
    // await web3.eth.sendTransaction({
    //   from: addresses[1],
    //   to: ICO.networks[id].address,
    //   value: web3.utils.toWei("20"),
    //   gas: 800000,
    // });
    // await web3.eth.sendTransaction({
    //   from: addresses[3],
    //   to: ICO.networks[id].address,
    //   value: web3.utils.toWei("40"),
    //   gas: 800000,
    // });
    // await web3.eth.sendTransaction({
    //   from: addresses[4],
    //   to: ICO.networks[id].address,
    //   value: web3.utils.toWei("40"),
    //   gas: 800000,
    // });
    // await web3.eth.sendTransaction({
    //   from: addresses[5],
    //   to: ICO.networks[id].address,
    //   value: web3.utils.toWei("40"),
    //   gas: 800000,
    // });

    const ico_info = await ico.methods.weiRaised().call();
    const tokensSold = await ico.methods.tokensSold().call();
    const norm_sold = web3.utils.fromWei(tokensSold);
    const rate = await ico.methods.getCurrentRate().call();
    console.log(`The Current Rate Price is: 1 EWT == ${rate} LMN`);

    console.log(web3.utils.fromWei(ico_info));
    console.log(web3.utils.fromWei(tokensSold));
    const dif = norm_sold - norm_preSell;
    console.log(`Tokens SOLD in this purchase: ${dif}`);

    console.log("LOOKING FOR OTHERS LMN");
    const lmn_bal_0 = await ico.methods.getTokenCount().call({
      from: addresses[0],
    });
    console.log(`Account 0: ${web3.utils.fromWei(lmn_bal_0)}`);
    const lmn_bal_1 = await ico.methods.getTokenCount().call({
      from: addresses[1],
    });
    console.log(`Account 1: ${web3.utils.fromWei(lmn_bal_1)}`);
    const lmn_bal_2 = await ico.methods.getTokenCount().call({
      from: addresses[2],
    });
    console.log(`Account 2: ${web3.utils.fromWei(lmn_bal_2)}`);
  } catch (e) {
    console.log(e);
  }
};

const sendLMN2ICO = async () => {
  const web3 = new Web3("http://localhost:9545");

  const id = await web3.eth.net.getId();
  console.log(id);

  const addresses = await web3.eth.getAccounts();
  const fakeToken = new web3.eth.Contract(
    Token.abi,
    Token.networks[id].address
  );
  const ico = new web3.eth.Contract(ICO.abi, ICO.networks[id].address);
  const amount2Send = web3.utils.toBN(7500000);

  //! SEND THE LMN 2 the smart contract (ICO)
  try {
    await fakeToken.methods
      .transfer(ICO.networks[id].address, amount2Send.toString())
      .send({
        from: addresses[0],
        gas: 800000,
      });
    console.log(`The ${addresses[0]} send ${amount2Send} LMN`);

    const ico_info = await ico.methods.weiRaised().call();
    console.log(web3.utils.fromWei(ico_info));
  } catch (e) {
    console.log(e.toString());
  }
};

const checkLMNSupply = async () => {
  const web3 = new Web3("http://localhost:9545");
  // const web3 = new Web3(window.web3.currentProvider);

  // console.log(process.env.MNEMONIC);
  // const mySeed = [process.env.MNEMONIC];
  // console.log(mySeed);
  const id = await web3.eth.net.getId();
  console.log(id);

  const addresses = await web3.eth.getAccounts();
  const fakeToken = new web3.eth.Contract(
    Token.abi,
    Token.networks[id].address
  );
  try {
    const supply = await fakeToken.methods.balanceOf(addresses[0]).call();
    console.log(`Total SUPPLY: ${web3.utils.fromWei(supply)}`);
  } catch (e) {
    console.log(e);
  }
};

const sendAsendB = async () => {
  const web3 = new Web3("http://localhost:9545");
  // const web3 = new Web3(window.web3.currentProvider);

  // console.log(process.env.MNEMONIC);
  // const mySeed = [process.env.MNEMONIC];
  // console.log(mySeed);
  const id = await web3.eth.net.getId();
  console.log(id);

  const addresses = await web3.eth.getAccounts();

  for (let index = 0; index < 100; index++) {
    console.log(index + 1);
    if (index % 2 == 0) {
      await web3.eth.sendTransaction({
        from: addresses[0],
        to: addresses[1],
        value: web3.utils.toWei("20"),
      });
      console.log("A envia a B");
      let balA = await web3.eth.getBalance(addresses[0]);
      let balB = await web3.eth.getBalance(addresses[1]);
      console.log(`Balance Wallet A: ${balA}`);
      console.log(`Balance Wallet B: ${balB}`);
    } else {
      await web3.eth.sendTransaction({
        from: addresses[1],
        to: addresses[0],
        value: web3.utils.toWei("20"),
      });
      console.log("B envia a A");
      let balA = await web3.eth.getBalance(addresses[0]);
      let balB = await web3.eth.getBalance(addresses[1]);
      console.log(`Balance Wallet A: ${balA}`);
      console.log(`Balance Wallet B: ${balB}`);
    }
  }
  let balA = await web3.eth.getBalance(addresses[0]);
  let balB = await web3.eth.getBalance(addresses[1]);

  let baltotal = balA + balB;
  console.log(baltotal);
  console.log("Palomada Finished");
};

//TODO: Executable functions
moveLMN();
// test();

//!Important STEPs
// sendLMN2ICO()
//!END - Important STEPs

//checkLMNSupply();

// sendAsendB();
