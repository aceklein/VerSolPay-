// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CrossChainStaking {
    mapping(address => uint256) public stakedAmount;
    mapping(address => uint256) public rewardBalance;

    uint256 public totalStaked;

    function stakeTokens(uint256 amount) public {
        stakedAmount[msg.sender] += amount;
        totalStaked += amount;
    }

    function withdrawStake(uint256 amount) public {
        require(stakedAmount[msg.sender] >= amount, "Insufficient stake");
        stakedAmount[msg.sender] -= amount;
        totalStaked -= amount;
    }

    function claimStakeRewards() public {
        uint256 reward = stakedAmount[msg.sender] / 10; // 10% reward simplified
        rewardBalance[msg.sender] += reward;
        // Reward distribution logic
    }
}