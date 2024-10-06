// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SolanaLiquidityPool {
    mapping(address => uint256) public deposits;
    mapping(address => uint256) public rewards;

    uint256 public totalDeposits;

    function deposit(uint256 amount) public {
        deposits[msg.sender] += amount;
        totalDeposits += amount;
    }

    function withdraw(uint256 amount) public {
        require(deposits[msg.sender] >= amount, "Insufficient balance");
        deposits[msg.sender] -= amount;
        totalDeposits -= amount;
    }

    function claimRewards() public {
        uint256 reward = calculateRewards(msg.sender);
        rewards[msg.sender] = reward;
        // Transfer reward logic
    }

    function calculateRewards(address user) internal view returns (uint256) {
        return deposits[user] * 5 / 100; // 5% annual yield simplified
    }
}