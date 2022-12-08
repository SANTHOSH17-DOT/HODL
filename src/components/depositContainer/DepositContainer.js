/** @format */

import { ethers } from "ethers";
import React from "react";
import { useState } from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { CONTRACT_ADDRESS } from "../../config";
import Hodl from "../../smart-contract/build/contracts/Hodl.json";
import styles from "./style.module.css";

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
      value: ethers.utils.parseUnits(amt.toString(), 18),
    },
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  return (
    <div id="deposit_container">
      <div>
        <input
          type="number"
          placeholder="Deposit ETH"
          onChange={(e) =>
            setAmt((amt) => (e.target.value > 0 ? e.target.value : 0))
          }
          className={styles.input}
        />
      </div>
      <div>
        <label className={styles.bold_text}> HODL TIME </label>
        <input
          className={styles.date_input}
          type="datetime-local"
          onChange={(e) => handleFreezeTime(e.target.value)}
        />
        <button
          className={styles.deposit_btn}
          disabled={!write}
          onClick={() => write?.()}
        >
          Deposit
        </button>
      </div>
    </div>
  );
};
