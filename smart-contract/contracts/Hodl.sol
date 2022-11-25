// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Hodl {
    mapping(address => uint256) balances;
    mapping(address => uint256) freeze_time;
    address owner;

    constructor() public {
        owner = msg.sender;
    }

    modifier withdraw_validation() {
        require(balances[msg.sender] > 0, "You have no balance");
        require(block.timestamp > freeze_time[msg.sender], "You have to wait");
        _;
    }

    modifier deposit_validation(address _user, uint256 _freezeTime) {
        require(msg.value > 0, "You have to send some ether");
        require(
            _freezeTime > block.timestamp,
            "The freeze time must be in the future"
        );
        require(
            _freezeTime > freeze_time[_user],
            "The freeze time must be greater than the previous freeze time"
        );
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner");
        _;
    }

    function contract_balance() public view onlyOwner returns (uint256) {
        return address(this).balance;
    }

    function deposit(uint256 _freezeTime)
        external
        payable
        deposit_validation(msg.sender, _freezeTime)
    {
        balances[msg.sender] += msg.value;
        freeze_time[msg.sender] = _freezeTime;
    }

    function withdraw() external withdraw_validation {
        uint256 amount = balances[msg.sender];
        balances[msg.sender] = 0;
        // msg.sender is an address payable(built-in)
        (msg.sender).transfer(amount);
    }

    function getDepositAmt() external view returns (uint256) {
        return balances[msg.sender];
    }

    function getHodlTime() external view returns (uint256) {
        return freeze_time[msg.sender];
    }
}
