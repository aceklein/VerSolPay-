// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract YieldFarmingBSC {
    mapping(address => uint256) public deposits;
    mapping(address => uint256) public yieldEarned;

    uint256 public totalDeposits;
    uint256 public yieldRate = 8; // 8% per annum simplified

    function deposit(uint256 amount) public {
        deposits[msg.sender] += amount;
        totalDeposits += amount;
    }

    function calculateYield(address user) public view returns (uint256) {
        return deposits[user] * yieldRate / 100;
    }

    function claimYield() public {
        uint256 yield = calculateYield(msg.sender);
        yieldEarned[msg.sender] += yield;
        // Transfer yield logic
    }

    function withdraw(uint256 amount) public {
        require(deposits[msg.sender] >= amount, "Insufficient balance");
        deposits[msg.sender] -= amount;
        totalDeposits -= amount;
    }
}