/** @format */

import { ethers } from "ethers";
import React from "react";
import { useState } from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { CONTRACT_ADDRESS } from "../../config";
import Hodl from "../../smart-contract/build/contracts/Hodl.json";

export const DepositContainer = () => {
  const [amt, setAmt] = useState(0);
  const [freezeTime, setFreezeTime] = useState("");
  const handleFreezeTime = (time) => {
    setFreezeTime(Math.floor(Date.parse(time) / 1000));
  };
  const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: Hodl.abi,
    functionName: "deposit",
    args: [freezeTime],
    overrides: {
      value: `${ethers.utils.parseEther(amt)}`,
    },
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  return (
    <div id="deposit_container">
      <div>
        <label> Amount </label>
        <input
          type="text"
          placeholder="Deposit Eth"
          onChange={(e) => setAmt(e.target.value)}
        />
      </div>
      <div>
        <label> HODL time </label>
        <input
          type="datetime-local"
          onChange={(e) => handleFreezeTime(e.target.value)}
        />
        <button className="btn" disabled={!write} onClick={() => write?.()}>
          {" "}
          Deposit{" "}
        </button>
      </div>
    </div>
  );
};
