const drift = require('drift-sdk');

async function executePerpetualTrade(userId, tradeDetails) {
  const result = await drift.placeOrder(userId, tradeDetails);
  return result;
}

module.exports = { executePerpetualTrade };