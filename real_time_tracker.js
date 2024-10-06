const { getRealTimePrice } = require('./integrations/pyth_integration');

async function trackPortfolio(userId, assets) {
    let totalValue = 0;

    for (const asset of assets) {
        const price = await getRealTimePrice(asset.symbol);
        totalValue += price * asset.amount;
    }

    return totalValue; // Total value of the portfolio
}

module.exports = { trackPortfolio };