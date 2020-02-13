var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'depart sugar dash bench cabbage cliff bunker weekend quantum west raccoon news';

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      gas: 6500000,
      network_id: "5777"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC,"https://ropsten.infura.io/v3/bb0a3f4a2f4741c680d582fe64eac04d")
      },
      network_id: 3,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    }
  },
  compilers: {
    solc: {
      version: "0.4.24" // ex:  "0.4.20". (Default: Truffle's installed solc)
    }
 }
};