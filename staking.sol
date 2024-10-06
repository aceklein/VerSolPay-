// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CrossChainStaking {
    struct Stake {
        uint256 amount;
        uint256 startTime;
        bool withdrawn;
    }

    mapping(address => Stake) public stakes;
    uint256 public rewardRate = 10; // Reward rate as a percentage

    // Function to initiate staking
    function stakeTokens(uint256 amount) public {
        require(amount > 0, "Cannot stake 0 tokens");
        stakes[msg.sender] = Stake({
            amount: amount,
            startTime: block.timestamp,
            withdrawn: false
        });
    }

    // Function to withdraw staked tokens with rewards
    function withdrawStake() public {
        Stake storage userStake = stakes[msg.sender];
        require(!userStake.withdrawn, "Already withdrawn");
        require(block.timestamp > userStake.startTime + 30 days, "Cannot withdraw before 30 days");

        uint256 reward = (userStake.amount * rewardRate) / 100;
        uint256 totalAmount = userStake.amount + reward;
        userStake.withdrawn = true;

        payable(msg.sender).transfer(totalAmount);
    }
}