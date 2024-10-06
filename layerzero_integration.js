const layerzero = require('layerzero-sdk');

async function moveLiquidity(chainFrom, chainTo, amount) {
  await layerzero.moveLiquidity(chainFrom, chainTo, amount);
  console.log('Liquidity moved successfully between chains');
}

module.exports = { moveLiquidity };