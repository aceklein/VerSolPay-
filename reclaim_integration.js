const Reclaim = require('reclaim-sdk');
const { generateProof } = require('zk-snarks');

async function verifyWithReclaim(userData) {
  const userId = await Reclaim.verify(userData);
  const proof = generateProof(userId);
  return { userId, proof };
}

module.exports = { verifyWithReclaim };