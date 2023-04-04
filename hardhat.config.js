require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",

  networks:{
    bnbt:{
      url: process.env.BNBt_RPC_URL,
      accounts:[
        process.env.PRIVATE_KEY,
      ],
    },
  },
  etherscan:{
    apiKey: process.env.ETHERSCAN_API,
  },
  gasReporter: {
    enabled: true,
    noColors: true,
    currency: "USD",
    token: "BNB",
    gasPriceApi: "https://api.bscscan.com/api?module=proxy&action=eth_gasPrice",
    coinmarketcap: process.env.COINMARKETCAP_API,
    outputFile: "gasReporter.txt",
  },
};
