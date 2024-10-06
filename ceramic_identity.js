// ceramic_identity.js
const ceramic = require('ceramic-sdk');
const { generateProof } = require('zk-snarks');

async function createIdentity() {
  const did = await ceramic.createDid();
  const proof = generateProof(did); // zk-SNARK proof generation

  return { did, proof };
}

module.exports = { createIdentity };