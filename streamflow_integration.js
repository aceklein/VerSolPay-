const streamflow = require('streamflow-sdk');

async function automateRewards(poolId) {
  const rewards = await streamflow.distributeRewards(poolId);
  return rewards;
}

module.exports = { automateRewards };