// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MultiSigWallet {
    uint constant MIN_SIGNATURES = 2;

    struct Transaction {
        address to;
        uint amount;
        uint approvals;
        bool executed;
    }

    address[] public owners;
    mapping(address => bool) public isOwner;
    Transaction[] public transactions;
    mapping(uint => mapping(address => bool)) public approvals;

    modifier onlyOwner() {
        require(isOwner[msg.sender], "Not an owner");
        _;
    }

    constructor(address[] memory _owners) {
        require(_owners.length > 1, "Owners required");

        for (uint i = 0; i < _owners.length; i++) {
            isOwner[_owners[i]] = true;
        }

        owners = _owners;
    }

    function submitTransaction(address to, uint amount) public onlyOwner {
        transactions.push(Transaction({
            to: to,
            amount: amount,
            approvals: 0,
            executed: false
        }));
    }

    function approveTransaction(uint txId) public onlyOwner {
        require(!transactions[txId].executed, "Transaction already executed");
        require(!approvals[txId][msg.sender], "Transaction already approved");

        approvals[txId][msg.sender] = true;
        transactions[txId].approvals++;

        if (transactions[txId].approvals >= MIN_SIGNATURES) {
            executeTransaction(txId);
        }
    }

    function executeTransaction(uint txId) internal {
        Transaction storage transaction = transactions[txId];

        require(transaction.approvals >= MIN_SIGNATURES, "Not enough approvals");
        require(!transaction.executed, "Transaction already executed");

        transaction.executed = true;
        payable(transaction.to).transfer(transaction.amount);
    }
}