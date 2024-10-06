const serum = require('@project-serum/serum');

async function getLiquidity(poolId) {
  const market = await serum.Market.load(connection, poolId);
  return market;
}

module.exports = { getLiquidity };