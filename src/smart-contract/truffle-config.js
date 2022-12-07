/** @format */

const HDWalletProvider = require("@truffle/hdwallet-provider");
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545, // Ganache Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    matic_test: {
      provider: () =>
        new HDWalletProvider(process.env.MNEMONIC, process.env.ALCHEMY_API_KEY),
      network_id: "80001",
      gas: 4465030,
    },
  },
  compilers: {
    solc: {
      // version: "0.5.1", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true, // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {
      //   // See the solidity docs for advice about optimization and evmVersion
      //   optimizer: {
      //     enabled: false,
      //     runs: 200,
      //   },
      //   evmVersion: "byzantium",
      // },
    },
  },
};