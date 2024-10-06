const raydium = require('raydium-sdk');

async function getRaydiumLiquidity(poolId) {
  const pool = await raydium.getPool(poolId);
  return pool;
}

module.exports = { getRaydiumLiquidity };