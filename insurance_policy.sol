// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract InsurancePolicy {
    struct Policy {
        address insured;
        uint256 premium;
        uint256 coverageAmount;
        bool isActive;
    }

    IERC20 public token;
    mapping(address => Policy) public policies;

    event PolicyPurchased(address indexed user, uint256 premium, uint256 coverageAmount);
    event ClaimMade(address indexed user, uint256 claimAmount);

    constructor(address _token) {
        token = IERC20(_token);
    }

    function purchasePolicy(uint256 premium, uint256 coverageAmount) public {
        require(policies[msg.sender].isActive == false, "Existing policy found");
        token.transferFrom(msg.sender, address(this), premium);
        
        policies[msg.sender] = Policy({
            insured: msg.sender,
            premium: premium,
            coverageAmount: coverageAmount,
            isActive: true
        });

        emit PolicyPurchased(msg.sender, premium, coverageAmount);
    }

    function claim() public {
        Policy memory policy = policies[msg.sender];
        require(policy.isActive, "No active policy");
        // Logic for claim assessment (to be implemented)
        
        // Transfer claim amount (dummy logic for this example)
        token.transfer(msg.sender, policy.coverageAmount);
        emit ClaimMade(msg.sender, policy.coverageAmount);
        
        // Set policy as inactive after claim
        policies[msg.sender].isActive = false;
    }
}