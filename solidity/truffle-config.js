const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");

const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    bscscan: "9AY8W5IVJKPYWHE42MAJZE1ACI1ADKANJI",
  },
  networks: {
    bsctest: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: mnemonic,
          },
          providerOrUrl: "https://data-seed-prebsc-1-s1.binance.org:8545",
        }),
      skipDryRun: true,
      network_id: "97",
    },
  },
  compilers: {
    solc: {
      version: "0.8.1",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200, // Default: 200
        },
      },
    },
  },
};
