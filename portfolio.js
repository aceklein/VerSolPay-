const { getAssets } = require('okto-wallet');
const { getRealTimePrice } = require('pyth');

async function trackPortfolio(userId) {
  const assets = await getAssets(userId);
  const portfolioValue = await calculatePortfolioValue(assets);

  return { assets, portfolioValue };
}

async function calculatePortfolioValue(assets) {
  let totalValue = 0;
  for (let asset of assets) {
    const price = await getRealTimePrice(asset.symbol);
    totalValue += asset.amount * price;
  }
  return totalValue;
}

module.exports = { trackPortfolio };
