const { ChainId, Token, WETH, Fetcher } = require('@pancakeswap/sdk');

async function getPancakeLiquidity(tokenAddress) {
  const pair = await Fetcher.fetchPairData(new Token(ChainId.BSC, tokenAddress, 18, 'BNB', 'USDT'));
  return pair;
}

module.exports = { getPancakeLiquidity };