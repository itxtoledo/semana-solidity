import { useWeb3React } from "@web3-react/core";
import React from "react";
import { useLottery } from "../hooks/useLottery";

const Participate: React.FC = () => {
  const web3 = useWeb3React();
  const contract = useLottery();

  return !contract ? null : (
    <button
      onClick={() => {
        contract.methods.enter().send({
          from: web3.account,
          value: (0.1 * 1e18).toString(),
        });
      }}
    >
      Enter
    </button>
  );
};

export default Participate;
