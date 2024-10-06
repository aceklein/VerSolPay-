// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CrossChainPayment {
    address public owner;
    mapping(address => uint256) public balances;

    constructor() {
        owner = msg.sender;
    }

    // Deposit funds into the contract
    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    // Send payment to another address
    function sendPayment(address recipient, uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        balances[recipient] += amount;
    }

    // Withdraw funds from the contract
    function withdraw(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
    }
}