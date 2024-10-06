const raydium = require('raydium-sdk');

async function main() {
    const poolId = 'POOL_ID_HERE';
    const poolData = await raydium.getPool(poolId);
    console.log(`Raydium Pool Data: ${poolData}`);
}

main().catch(err => {
    console.error(err);
});