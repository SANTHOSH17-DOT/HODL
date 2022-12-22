/** @format */

import { Button, useToast } from "@chakra-ui/react";
import React from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { CONTRACT_ADDRESS } from "../../config";
import Hodl from "../../smart-contract/build/contracts/Hodl.json";
import styles from "./style.module.css";
export const WithdrawContainer = ({
  depositAmt,
  hodlTime,
  setDepositAmt,
  setHodlTime,
}) => {
  const toast = useToast();
  const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: Hodl.abi,
    functionName: "withdraw",
  });
  const { data, isLoading, isSuccess, writeAsync, isError, error } =
    useContractWrite(config);
  const handleWithdraw = async () => {
    const res = await writeAsync?.();
    console.log(res, isError, isSuccess, error, data);
    if (isSuccess) {
      toast({
        title: "Amount withdrawn successfully",
        description: data.hash,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setDepositAmt(0);
      setHodlTime("");
    }
    if (isError) {
      toast({
        title: error,
        description: data.hash,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <div className={styles.withdraw_container}>
      <p>
        Amount deposited&gt; <b>{depositAmt} ETH</b>
      </p>
      <p>
        {" "}
        Freeze time&gt; <b>{new Date(hodlTime * 1000).toString()}</b>{" "}
      </p>
      <Button
        isDisabled={hodlTime * 1000 > new Date()}
        onClick={handleWithdraw}
        className={styles.withdraw_btn}
        isLoading={isLoading}
      >
        Withdraw
      </Button>
    </div>
  );
};
