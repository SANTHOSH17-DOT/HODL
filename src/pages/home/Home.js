/** @format */

import React from "react";
import styles from "./style.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ClockAnimation from "../../lottie/clock.json";
import Lottie from "react-lottie-player";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import { Button } from "@chakra-ui/react";
export const Home = () => {
  const { isDisconnected, isConnecting } = useAccount();
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
            <Button
              background={"none"}
              _hover={{ background: "white", color: "#241c1d" }}
              isLoading={isConnecting}
              className={styles.enter_btn}
              onClick={enterHandler}
            >
              Enter
            </Button>
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
