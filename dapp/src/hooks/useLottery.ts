import { useWeb3React } from "@web3-react/core";
import { useMemo } from "react";
import Web3 from "web3";
import { abi } from "../abi/Lottery.json";
import { AbiItem } from "web3-utils";

export const useLottery = () => {
  const web3 = useWeb3React<Web3>();

  const contract = useMemo(() => {
    if (web3.account) {
      return new web3.library!.eth.Contract(
        abi as AbiItem[],
        "0x5e6Fa6B6fd43Cf10f066a26F2D10b47574b8e60C"
      );
    }

    return null;
  }, [web3.library, web3.account]);

  return contract;
};
