// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IDEX {
    function swapTokens(address fromToken, address toToken, uint256 amount) external;
}

contract DEXIntegration {
    IDEX public dex;

    constructor(address dexAddress) {
        dex = IDEX(dexAddress);
    }

    function swap(address fromToken, address toToken, uint256 amount) public {
        dex.swapTokens(fromToken, toToken, amount);
    }
}