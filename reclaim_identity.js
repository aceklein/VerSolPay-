const { verifyWithWorldcoin } = require('./worldcoin_identity');
const { verifyWithReclaim } = require('./reclaim_identity');

async function manageIdentity(userAddress, userData) {
  // Verify using Worldcoin
  const worldcoinIdentity = await verifyWithWorldcoin(userAddress);

  // Verify using Reclaim
  const reclaimIdentity = await verifyWithReclaim(userData);

  return {
    worldcoinIdentity,
    reclaimIdentity
  };
}

module.exports = { manageIdentity };