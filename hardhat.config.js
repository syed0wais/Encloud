require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "48I6z9AbBFLwZVd30Tm6-PG6QqB0R-YE";
const SEPOLIA_PRIVATE_KEY = "04962a677bf1946c4c0713929cfef98f0ff45ea226ecdf00f4b24c4dfc486578";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    // hardhat: {
    //   chainId: 1337,

    // },

    sepolia : {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${SEPOLIA_PRIVATE_KEY}`]
    }

  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};

