// okto_wallet.js
const OktoWallet = require('okto-wallet-sdk');

async function connectOktoWallet() {
  const wallet = new OktoWallet();
  await wallet.connect();
  
  // Manage assets across chains
  const solanaAssets = await wallet.getAssets('solana');
  const ethereumAssets = await wallet.getAssets('ethereum');
  
  console.log("Assets across chains:", { solanaAssets, ethereumAssets });
  
  return wallet;
}

module.exports = { connectOktoWallet };