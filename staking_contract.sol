// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract StakingContract {
    IERC20 public token;
    
    mapping(address => uint256) public stakedAmount;
    mapping(address => uint256) public rewards;
    
    uint256 public totalStaked;
    uint256 public rewardRate = 5; // 5% annual rewards

    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount);
    event RewardsClaimed(address indexed user, uint256 reward);

    constructor(address _token) {
        token = IERC20(_token);
    }

    function stake(uint256 amount) public {
        require(amount > 0, "Must stake more than 0");
        token.transferFrom(msg.sender, address(this), amount);
        stakedAmount[msg.sender] += amount;
        totalStaked += amount;

        emit Staked(msg.sender, amount);
    }

    function unstake(uint256 amount) public {
        require(stakedAmount[msg.sender] >= amount, "Insufficient staked amount");
        stakedAmount[msg.sender] -= amount;
        totalStaked -= amount;
        token.transfer(msg.sender, amount);

        emit Unstaked(msg.sender, amount);
    }

    function claimRewards() public {
        uint256 reward = calculateRewards(msg.sender);
        rewards[msg.sender] += reward;
        // Transfer rewards (to be implemented)
        emit RewardsClaimed(msg.sender, reward);
    }

    function calculateRewards(address user) public view returns (uint256) {
        return (stakedAmount[user] * rewardRate) / 100; // Simplified reward calculation
    }
}