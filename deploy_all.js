const { exec } = require('child_process');

async function deployContracts() {
    console.log('Deploying Solana Contracts...');
    exec('solana program deploy backend/contracts/solana/liquidity_pool.so', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error deploying Solana contract: ${error}`);
            return;
        }
        console.log(stdout);
    });

    console.log('Deploying Ethereum Contracts...');
    exec('npx hardhat run backend/deployments/ethereum/deploy_insurance_policy.js --network yourNetwork', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error deploying Ethereum contract: ${error}`);
            return;
        }
        console.log(stdout);
    });

    console.log('Deploying BSC Contracts...');
    exec('npx hardhat run backend/deployments/bsc/deploy_staking_contract.js --network bscTestnet', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error deploying BSC contract: ${error}`);
            return;
        }
        console.log(stdout);
    });
}

deployContracts();