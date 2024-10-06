const layerzero = require('layerzero-sdk');

async function main() {
    const chainFrom = 'SOLANA';
    const chainTo = 'ETHEREUM';
    const amount = 100;

    await layerzero.moveLiquidity(chainFrom, chainTo, amount);
    console.log('Liquidity moved successfully between chains');
}

main().catch(err => {
    console.error(err);
});