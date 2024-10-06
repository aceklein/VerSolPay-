// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract LiquidityPool {
    IERC20 public token;  // Token being pooled
    address public owner;
    
    mapping(address => uint256) public deposits;  // User deposits
    uint256 public totalDeposits;

    event Deposited(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    event RewardsClaimed(address indexed user, uint256 amount);

    constructor(address _token) {
        token = IERC20(_token);
        owner = msg.sender;
    }

    function deposit(uint256 amount) public {
        require(amount > 0, "Amount must be greater than 0");
        token.transferFrom(msg.sender, address(this), amount);
        deposits[msg.sender] += amount;
        totalDeposits += amount;
        emit Deposited(msg.sender, amount);
    }

    function withdraw(uint256 amount) public {
        require(deposits[msg.sender] >= amount, "Insufficient balance");
        deposits[msg.sender] -= amount;
        totalDeposits -= amount;
        token.transfer(msg.sender, amount);
        emit Withdrawn(msg.sender, amount);
    }

    function claimRewards() public {
        // Logic to calculate and distribute rewards (to be implemented)
        uint256 rewardAmount = calculateRewards(msg.sender);
        // Transfer rewards logic
        emit RewardsClaimed(msg.sender, rewardAmount);
    }

    function calculateRewards(address user) internal view returns (uint256) {
        // Simplified reward calculation (to be implemented)
        return deposits[user] / 100; // 1% of deposits as rewards
    }
}