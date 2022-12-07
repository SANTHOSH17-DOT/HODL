/** @format */

import styles from "./style.module.css";
import Hodl from "../../smart-contract/build/contracts/Hodl.json";
import { CONTRACT_ADDRESS } from "../../config";
import { useContractRead } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import DepositContainer from "../../components/depositContainer";
import WithdrawContainer from "../../components/withdrawContainer";
export const Main = () => {
  const { data: hodlTime } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: Hodl.abi,
    method: "getHodlTime",
  });
  const { data: depositAmt } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: Hodl.abi,
    method: "getDepositAmt",
  });

  return (
    <div className={styles.main_container}>
      <h1> HODL </h1>
      <ConnectButton />
      <DepositContainer />
      <WithdrawContainer depositAmt={depositAmt} hodlTime={hodlTime} />
    </div>
  );
};
