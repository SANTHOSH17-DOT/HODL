/** @format */

import { Button, Input } from "@chakra-ui/react";
import { ethers } from "ethers";
import React from "react";
import { useState } from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { CONTRACT_ADDRESS } from "../../config";
import Hodl from "../../smart-contract/build/contracts/Hodl.json";
import styles from "./style.module.css";
import { useToast } from "@chakra-ui/react";

export const DepositContainer = () => {
  const toast = useToast();
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
      value:
        amt > 0
          ? ethers.utils.parseUnits(amt.toString(), 18)
          : ethers.utils.parseUnits("0", 18),
    },
  });
  const { data, isLoading, isSuccess, isError, error, writeAsync } =
    useContractWrite(config);
  const handleDeposit = async () => {
    const res = await writeAsync?.();
    console.log(res, isError, isSuccess, error, data);
    if (isSuccess) {
      toast({
        title: "Amount deposited successfully",
        description: data.hash,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setAmt(0);
      setFreezeTime("");
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
    <div id="deposit_container">
      <div>
        <Input
          type="number"
          placeholder="Deposit ETH"
          value={amt}
          variant={"filled"}
          _focus={{ background: "white" }}
          onChange={(e) =>
            // setAmt((amt) => (e.target.value > 0 ? e.target.value : 0))
            setAmt(e.target.value)
          }
          className={styles.input}
        />
      </div>
      <div style={{ display: "flex" }}>
        <label className={styles.bold_text}> HODL TIME </label>
        <Input
          variant={"filled"}
          className={styles.date_input}
          type="datetime-local"
          // ISO time format as value
          value={
            freezeTime
              ? new Date(freezeTime * 1000 + 5.5 * 60 * 60 * 1000)
                  .toISOString()
                  .split(".")[0]
              : ""
          }
          onChange={(e) => handleFreezeTime(e.target.value)}
        />
      </div>
      <Button
        _disabled={{
          backgroundColor: "rgb(26, 27, 31,0.7)",
          cursor: "not-allowed",
        }}
        _hover={{ backgroundColor: "rgb(26, 27, 31,0.7)" }}
        isDisabled={!amt | !freezeTime}
        className={styles.deposit_btn}
        isLoading={isLoading}
        onClick={handleDeposit}
      >
        Deposit
      </Button>
    </div>
  );
};
