const layerzero = require('layerzero');

async function transferLiquidity(chainFrom, chainTo, amount) {
  try {
    await layerzero.moveLiquidity(chainFrom, chainTo, amount);
    console.log('Liquidity transferred successfully');
  } catch (err) {
    console.error('Liquidity transfer failed', err);
  }
}

module.exports = { transferLiquidity };