require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};

// rinkeby:{
    //   url: process.env.RINKEBY_URL,
    //   accounts: [process.env.PRIVATE_KEY]
    // },