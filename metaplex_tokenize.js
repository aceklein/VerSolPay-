const metaplex = require('metaplex-sdk');

async function tokenizeLiquidityStrategy(strategyDetails) {
  const nft = await metaplex.createNFT({
    name: 'Liquidity Strategy NFT',
    symbol: 'LSNFT',
    uri: strategyDetails.uri,
  });

  return nft;
}

module.exports = { tokenizeLiquidityStrategy };