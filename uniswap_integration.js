const { ethers } = require('ethers');
const { ChainId, Token, WETH, Fetcher } = require('@uniswap/sdk');

async function getUniswapLiquidity(tokenAddress) {
  const pair = await Fetcher.fetchPairData(new Token(ChainId.MAINNET, tokenAddress, 18, 'DAI', 'WETH'));
  return pair;
}

module.exports = { getUniswapLiquidity };