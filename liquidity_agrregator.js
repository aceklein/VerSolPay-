const { getSerumLiquidity } = require('serum');
const { getRaydiumLiquidity } = require('raydium');
const { getUniswapLiquidity } = require('uniswap');
const { swapTokens } = require('thorchain');
const { optimizeYield } = require('./ai/optimizer');
const { automateRewards } = require('streamflow');
const { getRealTimePrice } = require('pyth');

async function aggregateLiquidity(chain, poolId, amount) {
  let liquidityData;

  switch (chain) {
    case 'solana':
      liquidityData = await getSerumLiquidity(poolId);
      break;
    case 'ethereum':
      liquidityData = await getUniswapLiquidity(poolId);
      break;
    case 'bsc':
      liquidityData = await getRaydiumLiquidity(poolId);
      break;
    default:
      throw new Error('Unsupported chain');
  }

  const optimizedYield = optimizeYield(liquidityData, await getRealTimePrice(chain));
  const rewards = await automateRewards(poolId);

  return { liquidityData, optimizedYield, rewards };
}

module.exports = { aggregateLiquidity };