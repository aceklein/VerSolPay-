const Worldcoin = require('worldcoin-sdk');

async function verifyIdentity(userAddress) {
  const identity = await Worldcoin.verify(userAddress);
  return identity;
}

module.exports = { verifyIdentity };