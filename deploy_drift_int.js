const drift = require('drift-sdk');

async function main() {
    const userId = 'USER_ID_HERE';
    const tradeDetails = {
        market: 'MARKET_ID',
        size: 1,
        price: 100,
    };

    const result = await drift.placeOrder(userId, tradeDetails);
    console.log(`Order placed: ${result}`);
}

main().catch(err => {
    console.error(err);
});