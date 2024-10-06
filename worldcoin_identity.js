const Worldcoin = require('worldcoin-sdk');

async function verifyWithWorldcoin(userAddress) {
  const identity = await Worldcoin.verify(userAddress);
  return identity;
}

module.exports = { verifyWithWorldcoin };