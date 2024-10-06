const synternet = require('synternet-sdk');

async function main() {
    const data = await synternet.getTransactionData();
    console.log(`Transaction Data: ${data}`);
}

main().catch(err => {
    console.error(err);
});