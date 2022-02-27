import React, { useEffect, useState } from "react";
import { useLottery } from "../hooks/useLottery";

const Players: React.FC = () => {
  const contract = useLottery();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (contract) {
      contract.methods.getPlayers().call((err: any, res: any) => {
        if (err) {
          console.error(err);
        } else {
          setPlayers(res);
        }
      });
    }
  }, [contract]);

  return (
    <ul>
      {players?.map((p) => (
        <li>{p}</li>
      ))}
    </ul>
  );
};

export default Players;
