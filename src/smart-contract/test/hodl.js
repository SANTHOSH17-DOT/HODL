/** @format */

const Hodl = artifacts.require("Hodl");
const assert = require("assert");

contract("Hodl", (accounts) => {
  let hodl;
  let acc1;
  beforeEach(async() => {
    hodl = await Hodl.deployed();
    acc1 = await accounts[0];
    console.log(`Account address: ${acc1}`);
  });
  describe("Contract balance", () => {
    it("Should be 0", async() => {
      // console.log(Object.keys(hodl));
      const balance = await hodl.contract_balance();
      assert.equal(balance, 0);
    });
  });
  describe("Deposit", () => {
    it("Deposits 1000 wei in the contract with freeze time lesser than current time", async() => {
      // console.log(Object.keys(hodl.deposit));
      await hodl.deposit({
        _freezeTime: Math.floor(new Date().getTime() / 1000) - 1000,
      }, { from: acc1, value: 1000 });
      const balance = await hodl.getBalance();
      assert.notEqual(balance, 1000, "Amount deposited is 1000 wei");
    });
    // it("Deposits 1000 wei in the contract with freeze time greater than current time", async() => {
    //   await hodl
    //     .deposit({ _freezeTime: Date.now() + 60 * 1000 })
    //     .send({ from: acc1, value: 1000 });
    //   const balance = await hodl.getBalance();
    //   assert.equal(balance, 1000, "Amount deposited is not 1000 wei");
    // });
    // it("Deposits multiple times in the contract with freeze time greater than previous freeze time", async() => {
    //   await hodl
    //     .deposit({ _freezeTime: Date.now() + 60 * 1000 })
    //     .send({ from: acc1, value: 1000 });
    //   await hodl
    //     .deposit({ _freezeTime: Date.now() + 70 * 1000 })
    //     .send({ from: acc1, value: 1000 });
    //   const balance = await hodl.getBalance();
    //   assert.equal(balance, 1000, "Amount deposited is not 1000 wei");
    // });
    // it("Deposits multiple times in the contract with freeze time lesser than previous freeze time", async() => {
    //   await hodl
    //     .deposit({ _freezeTime: Date.now() + 60 * 1000 })
    //     .send({ from: acc1, value: 1000 });
    //   await hodl
    //     .deposit({ _freezeTime: Date.now() + 30 * 1000 })
    //     .send({ from: acc1, value: 1000 });
    //   const balance = await hodl.getBalance();
    //   assert.equal(balance, 1000, "Amount deposited is 1000 wei");
    // });
  });

  describe("Withdraw", () => {
    it("Withraw deposit from the contract", async() => {});
  });
});