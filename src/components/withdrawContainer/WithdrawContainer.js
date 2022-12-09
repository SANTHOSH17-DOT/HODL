/** @format */

import React from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { CONTRACT_ADDRESS } from "../../config";
import Hodl from "../../smart-contract/build/contracts/Hodl.json";
import styles from "./style.module.css";
export const WithdrawContainer = ({ depositAmt, hodlTime }) => {
  const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: Hodl.abi,
    functionName: "withdraw",
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  return (
    <div className={styles.withdraw_container}>
      <p>
        Amount deposited <b>{depositAmt} ETH</b>
      </p>
      <p>
        {" "}
        Freeze time <b>{new Date(hodlTime * 1000).toString()}</b>{" "}
      </p>
      <button
        disabled={hodlTime * 1000 > new Date()}
        onClick={() => write?.()}
        className={styles.withdraw_btn}
      >
        Withdraw
      </button>
    </div>
  );
};
