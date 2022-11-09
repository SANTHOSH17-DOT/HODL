import './App.css';
import Web3 from 'web3';
import React, { useEffect, useState } from 'react';
import {CONTRACT_ADDRESS} from './config'
import Hodl from './Hodl.json'
function App() {
  let web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
  const instance = new web3.eth.Contract(Hodl.abi, CONTRACT_ADDRESS);
  const [acc, setAcc] = useState('');
  const [balance, setBalance] = useState('');
  const [amt, setAmt] = useState(0)
  const [depositAmt, setDepositAmt] = useState(0);
  const [freezeTime, setFreezeTime] = useState();
  const [hodlTime, setHodlTime] = useState();

  const handleFreezeTime = (time) => {
    setFreezeTime(Math.floor(Date.parse(time) / 1000))
  }
  const handleDeposit = async () => {
    console.log(amt,freezeTime)
    await instance.methods.deposit(freezeTime).send({from: acc, value: web3.utils.toWei(amt.toString(), 'ether')})
  }
  const handleWithdrawal = async () => {
    await instance.methods.withdraw().send({from: acc})
  }

  useEffect(() => {
    async function getAccDetails() {
      const accounts = await web3.eth.getAccounts();
      setAcc(accounts[0]);
      const bal = await web3.eth.getBalance(accounts[0]);
      setBalance(bal/1e18);
      console.log(instance)
      const res = await instance.methods.getDepositAmt().call({from:acc});
      console.log(res)
      // setDepositAmt(amount.toString())
      // setHodlTime(hodlTime.toString())
      // console.log(amount,hodlTime)
    }
    getAccDetails()
    // setInterval(getAccDetails)
    
  },[])
  return (
    <div className="App">
      <h1> HODL </h1>
      <h2> Account: {acc}</h2>
      <h2> Balance: {balance} ETH</h2>
      <div>
        <label> Amount </label>
        <input type="text" placeholder='Deposit Eth' onChange={e => setAmt(e.target.value)}/>
        
      </div>
      <div>
        <label> HODL time </label>
        <input type="datetime-local" onChange={e => handleFreezeTime(e.target.value)} />
        <button onClick={handleDeposit} > Deposit </button>
        
      </div>
      
      <div>
      </div>
      {depositAmt > 0 ? (<><p> Amount deposited: {depositAmt} </p>
      <p> Freeze time: {hodlTime} </p></>):(<p>No HODL</p>)}
      <button onClick={handleWithdrawal} > Withdraw </button>
    </div>
  );
}

export default App;