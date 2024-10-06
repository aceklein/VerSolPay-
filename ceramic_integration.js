const ceramic = require('ceramic-sdk');

async function createDid(userDetails) {
  const did = await ceramic.createDid(userDetails);
  return did;
}

module.exports = { createDid };