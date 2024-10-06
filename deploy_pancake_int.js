const { ethers } = require('hardhat');
const { ChainId, Fetcher, Token } = require('@uniswap/sdk');

async function main() {
    const tokenAddress = 'TOKEN_ADDRESS_HERE';
    const token = new Token(ChainId.MAINNET, tokenAddress, 18);

    const pair = await Fetcher.fetchPairData(token, WETH[ChainId.MAINNET]);
    console.log(`Uniswap Pair Data: ${pair}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });