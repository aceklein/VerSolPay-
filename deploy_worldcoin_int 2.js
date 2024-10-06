const Worldcoin = require('worldcoin-sdk');

async function main() {
    const userAddress = '0x123456...';
    const identity = await Worldcoin.verify(userAddress);
    console.log(`Worldcoin Identity: ${identity}`);
}

main().catch(err => {
    console.error(err);
});