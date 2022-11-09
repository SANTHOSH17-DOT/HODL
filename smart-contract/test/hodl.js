const Hodl = artifacts.require("Hodl");

contract("Hodl", accounts => {
  it("Deposit 1000 wei in the contract", async() => {
    const hodl = await Hodl.deployed();
    const acc1 = accounts[0];
    await hodl.deposit({ _freezeTime: 1668038177 }).send({ from: acc1, value: 1000 });
    const balance = await hodl.getBalance();
    assert.equal(balance, 1000, "Amount deposited is not 1000 wei");
  })
  it("Withraw deposit from the contract", async() => {
    const hodl = await Hodl.deployed();
    const acc1 = accounts[0];
    await hodl.withdraw().send({ from: acc1 });
    const contractBalance = await hodl.getBalance();
    const userBalance = await web3.eth.getBalance(acc1);
    assert.equal(userBalance, 1000, "Amount withdrawn is not 1000 wei");
    assert.equal(contractBalance, 0, "Amount withdrawn is not 1000 wei");
  })
})