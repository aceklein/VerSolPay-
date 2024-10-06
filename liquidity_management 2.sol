// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IDEX {
    function addLiquidity(address tokenA, address tokenB, uint amountA, uint amountB) external;
}

contract LiquidityManagement {
    IDEX public dex;

    constructor(address _dex) {
        dex = IDEX(_dex);
    }

    function provideLiquidity(address tokenA, address tokenB, uint amountA, uint amountB) public {
        dex.addLiquidity(tokenA, tokenB, amountA, amountB);
    }
}