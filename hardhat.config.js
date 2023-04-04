require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",

  networks:{
    bnbt:{
      url:"https://indulgent-newest-leaf.bsc-testnet.discover.quiknode.pro/8a8483b20d028a2b4ca603f1f86a6f1d702a6624/",
      accounts:[
        "14514ffed7250147e426e8a2c55aeec04ad9cc9ad045d94f57eb27ec80a47b6d",
      ],
    },
  },
  etherscan:{
    apiKey: "4415P85IB4M5H5DR6Q2FKYWU4XENPX1YG9",
  },
  gasReporter: {
    enabled: true,
  },
};
