module.exports = {
  networks: {},
  compilers: {
    solc: {
      version: "0.6.0",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200, // Default: 200
        },
      },
    },
  },
};
