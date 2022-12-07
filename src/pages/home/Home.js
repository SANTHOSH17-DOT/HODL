/** @format */

import React from "react";
import styles from "./style.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ClockAnimation from "../../lottie/clock.json";
import Lottie from "react-lottie-player";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
export const Home = () => {
  const { isDisconnected } = useAccount();
  const navigate = useNavigate();
  const enterHandler = () => {
    navigate("/wallet");
  };
  return (
    <div className={styles.hero_container}>
      <div className={styles.text_container}>
        <div>
          <h1 className={styles.title}> HODL </h1>
          <p>A time lock wallet</p>
        </div>
        <div className={styles.btn_container}>
          {isDisconnected ? (
            <ConnectButton />
          ) : (
            <button className={styles.enter_btn} onClick={enterHandler}>
              Enter
            </button>
          )}
        </div>
      </div>

      <Lottie
        animationData={ClockAnimation}
        play
        style={{ width: 500, height: 500 }}
      />
    </div>
  );
};
