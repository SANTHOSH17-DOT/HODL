/** @format */

import React from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { CONTRACT_ADDRESS } from "../../config";
import Hodl from "../../smart-contract/build/contracts/Hodl.json";

export const WithdrawContainer = ({ depositAmt, hodlTime }) => {
  const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: Hodl.abi,
    functionName: "withdraw",
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  return (
    <>
      <p> Amount deposited: {depositAmt / 1e18} ETH</p>
      <p> Freeze time: {new Date(hodlTime * 1000).toString()} </p>
      <button onClick={() => write?.()} className="btn">
        {" "}
        Withdraw{" "}
      </button>
    </>
  );
};
