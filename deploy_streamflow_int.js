const streamflow = require('streamflow-sdk');

async function main() {
    const poolId = 'POOL_ID_HERE';
    const rewards = await streamflow.distributeRewards(poolId);
    console.log(`Rewards distributed: ${rewards}`);
}

main().catch(err => {
    console.error(err);
});