// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IdentityVerification {
    mapping(address => bool) public verifiedUsers;

    event IdentityVerified(address indexed user);

    // Function to verify a user's identity
    function verifyIdentity(address user) public {
        require(!verifiedUsers[user], "User already verified");
        verifiedUsers[user] = true;
        emit IdentityVerified(user);
    }

    // Check if a user is verified
    function isVerified(address user) public view returns (bool) {
        return verifiedUsers[user];
    }
}