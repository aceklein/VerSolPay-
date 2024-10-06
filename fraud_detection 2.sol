// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FraudDetection {
    address public owner;
    mapping(address => bool) public flaggedUsers;
    
    event UserFlagged(address indexed user);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    // Flag user for suspicious activity
    function flagUser(address user) public onlyOwner {
        flaggedUsers[user] = true;
        emit UserFlagged(user);
    }

    // Check if user is flagged
    function isFlagged(address user) public view returns (bool) {
        return flaggedUsers[user];
    }
}