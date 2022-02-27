import Web3 from "web3";

const getLibrary = (provider: any): Web3 => {
  const library = new Web3(provider);
  return library;
};

export default getLibrary;
