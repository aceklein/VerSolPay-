// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TokenBridge {
    mapping(address => uint256) public balances;

    event TokenBridged(address indexed user, uint256 amount, string fromChain, string toChain);

    function bridgeTokens(uint256 amount, string memory fromChain, string memory toChain) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;

        // Simulate cross-chain transfer logic
        emit TokenBridged(msg.sender, amount, fromChain, toChain);
    }

    function deposit(uint256 amount) public {
        balances[msg.sender] += amount;
    }

    function withdraw(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
    }
}