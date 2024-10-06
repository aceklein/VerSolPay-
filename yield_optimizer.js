// optimizer.js
const pyth = require('pyth');
const { optimizeLiquidity } = require('./ai_algorithms/optimizer_ai');
const streamflow = require('streamflow');

// Optimizes yield based on real-time data from Pyth Network
async function optimizeYield(chain, assetId, amount) {
  const priceFeed = await pyth.getPrice(assetId);

  // Perform AI-based optimization based on price feed
  const optimizedLiquidity = optimizeLiquidity(priceFeed, amount);

  // Automatic distribution of optimized yields
  const rewardData = await streamflow.distributeRewards(assetId);

  return { optimizedLiquidity, rewardData };
}

module.exports = { optimizeYield };