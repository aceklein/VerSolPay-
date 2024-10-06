const { Connection, clusterApiUrl } = require('@solana/web3.js');
const serum = require('@project-serum/serum');

async function main() {
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

    // Example of fetching a market
    const market = await serum.Market.load(connection, 'MARKET_ADDRESS_HERE');
    console.log(`Loaded market: ${market}`);
}

main().catch(err => {
    console.error(err);
});