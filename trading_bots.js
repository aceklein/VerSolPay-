const drift = require('drift-sdk');
const { getRealTimePrice } = require('pyth');
const { automatePayouts } = require('streamflow');

async function executeTrade(userId, tradeDetails) {
  const priceFeed = await getRealTimePrice(tradeDetails.asset);

  if (priceFeed > tradeDetails.threshold) {
    await drift.executePerpetualTrade(userId, tradeDetails);
    const payouts = await automatePayouts(userId);
    return { status: 'Success', payouts };
  } else {
    return { status: 'Skipped - Price below threshold' };
  }
}

module.exports = { executeTrade };
