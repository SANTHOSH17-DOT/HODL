/** @format */

import styles from "./style.module.css";
import Hodl from "../../smart-contract/build/contracts/Hodl.json";
import { CONTRACT_ADDRESS } from "../../config";
import { useContractRead } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import DepositContainer from "../../components/depositContainer";
import WithdrawContainer from "../../components/withdrawContainer";
import { useState } from "react";
import { ethers } from "ethers";
import { useEffect } from "react";
export const Main = () => {
  // const { data: hodlTime } = useContractRead({
  //   address: CONTRACT_ADDRESS,
  //   abi: Hodl.abi,
  //   method: "getHodlTime",
  // });
  // const {
  //   data: depositAmt,
  //   isSuccess,
  //   isLoading,
  // } = useContractRead({
  //   address: CONTRACT_ADDRESS,
  //   abi: Hodl.abi,
  //   method: "getDepositAmt",
  // });
  const [depositAmt, setDepositAmt] = useState();
  const [hodlTime, setHodlTime] = useState();
  const getHodlTime = async () => {
    // const infuraProvider = new ethers.providers.InfuraProvider(
    //   "goerli",
    //   process.env.REACT_APP_INFURA_APIKEY
    // );
    // const signer = new ethers.Wallet(
    //   process.env.REACT_APP_PRIVATE_KEY,
    //   infuraProvider
    // );
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, Hodl.abi, signer);
    const hodltime = await contract.getHodlTime();
    return hodltime.toNumber();
  };
  const getDepositAmt = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, Hodl.abi, signer);
    const depositAmt = await contract.getDepositAmt();
    return depositAmt / 1e18;
  };
  useEffect(() => {
    getHodlTime().then((res) => setHodlTime(res));
    getDepositAmt().then((res) => setDepositAmt(res));
  }, []);
  return (
    <div className={styles.main_container}>
      <h1 className={styles.title}> HODL </h1>
      <ConnectButton />
      <DepositContainer />
      {depositAmt > 0 && (
        <WithdrawContainer
          depositAmt={depositAmt}
          hodlTime={hodlTime}
          setDepositAmt={setDepositAmt}
          setHodlTime={setHodlTime}
        />
      )}
    </div>
  );
};
