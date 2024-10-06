const synternet = require('synternet-sdk');

async function fetchTransactionData() {
  const data = await synternet.getTransactionData();
  return data;
}

module.exports = { fetchTransactionData };