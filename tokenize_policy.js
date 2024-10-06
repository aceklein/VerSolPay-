const metaplex = require('metaplex-sdk');

async function tokenizeInsurancePolicy(policyDetails) {
  const nft = await metaplex.createNFT({
    name: 'Insurance Policy NFT',
    symbol: 'INFT',
    uri: policyDetails.uri,
  });

  return nft;
}

module.exports = { tokenizeInsurancePolicy };