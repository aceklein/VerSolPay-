const { exec } = require('child_process');

async function integrateServices() {
    console.log('Deploying Serum Integration...');
    exec('node backend/deployments/solana/deploy_serum_integration.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error deploying Serum integration: ${error}`);
            return;
        }
        console.log(stdout);
    });

    console.log('Deploying Raydium Integration...');
    exec('node backend/deployments/solana/deploy_raydium_integration.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error deploying Raydium integration: ${error}`);
            return;
        }
        console.log(stdout);
    });

    console.log('Deploying Uniswap Integration...');
    exec('node backend/deployments/ethereum/deploy_uniswap_integration.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error deploying Uniswap integration: ${error}`);
            return;
        }
        console.log(stdout);
    });

    // Add more integrations as necessary
}

integrateServices();