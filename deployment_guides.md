Contracts and Deployments

1. Liquidity Pool Contract (Solana)

	•	Location: backend/contracts/solana/liquidity_pool.sol
	•	Description: Handles deposits, withdrawals, and reward claims for liquidity providers on Solana.

2. Cross-Chain Staking Contract (Ethereum)

	•	Location: backend/contracts/ethereum/cross_chain_staking.sol
	•	Description: Allows staking across chains with rewards for maintaining staked assets.

3. Yield Farming Contract (BSC)

	•	Location: backend/contracts/bsc/yield_farming.sol
	•	Description: Users can deposit assets into yield farming pools to earn rewards on BSC.

4. AI Trading Bot Contract (Solana)

	•	Location: backend/contracts/solana/ai_trading_bot.sol
	•	Description: Automates trading based on AI strategies using real-time market data.

5. Cross-Chain Token Bridge Contract (All Chains)

	•	Location: backend/contracts/cross_chain/token_bridge.sol
	•	Description: Enables seamless cross-chain token transfers between Solana, Ethereum, and BSC.

Deployment

Solana

	•	Command: bash deployments/solana/deploy_sol.sh

Ethereum

	•	Command: bash deployments/ethereum/deploy_eth.sh

Binance Smart Chain

	•	Command: bash deployments/bsc/deploy_bsc.sh

Cross-Chain Token Bridge

	•	Command: bash deployments/cross_chain/deploy_bridge.sh

API Documentation

	•	Liquidity Aggregator: Aggregates liquidity from Serum, Raydium, and Uniswap pools.
	•	Yield Optimizer: AI-driven optimizer that rebalances liquidity for better yields.
	•	Cross-Chain Staking: Staking mechanism allowing users to earn rewards across chains.
	•	AI Trading Bot: Automates trading strategies based on market data.
	•	Token Bridge: Facilitates cross-chain asset transfers securely and efficiently.

How to Use

	1.	Clone the repository:

git clone https://github.com/unbnkd-dex/unbnkd-dex.git


	2.	Install dependencies:

cd UNBKD-DEX
npm install


	3.	Deploy contracts:

bash deployments/solana/deploy_sol.sh



Contributing

Please read our CONTRIBUTING.md for guidelines on how to contribute to the project.

# UNBNKD DEX Deployment Guide

## Overview
This guide will walk you through the steps necessary to deploy the smart contracts and integrate the services required for the UNBNKD DEX platform.

## Prerequisites
- **Node.js** installed on your machine.
- **Solana CLI** for Solana deployments.
- **Hardhat** for Ethereum and BSC deployments.
- **Access to necessary tokens** (for testing).

## Smart Contracts Deployment

### 1. Deploying the Liquidity Pool on Solana
1. Navigate to the Solana deployment directory:
   ```bash
   cd deployments/solana

	2.	Deploy the liquidity pool contract:

solana program deploy backend/contracts/solana/liquidity_pool.so



2. Deploying the Insurance Policy on Ethereum

	1.	Navigate to the Ethereum deployment directory:

cd deployments/ethereum


	2.	Deploy the insurance policy contract:

npx hardhat run deploy_insurance_policy.js --network yourNetwork



3. Deploying the Staking Contract on BSC

	1.	Navigate to the BSC deployment directory:

cd deployments/bsc


	2.	Deploy the staking contract:

npx hardhat run deploy_staking_contract.js --network bscTestnet



Integration Deployment

1. Deploying Serum Integration on Solana

	1.	Navigate to the Solana integration deployment directory:

cd deployments/solana


	2.	Run the Serum integration deployment:

node deploy_serum_integration.js



2. Deploying Raydium Integration on Solana

	1.	Run the Raydium integration deployment:

node deploy_raydium_integration.js



3. Deploying Uniswap Integration on Ethereum

	1.	Navigate to the Ethereum integration deployment directory:

cd deployments/ethereum


	2.	Run the Uniswap integration deployment:

node deploy_uniswap_integration.js



4. Deploying PancakeSwap Integration on BSC

	1.	Navigate to the BSC integration deployment directory:

cd deployments/bsc


	2.	Run the PancakeSwap integration deployment:

node deploy_pancake_integration.js



5. Deploying Drift Integration on Solana

	1.	Run the Drift integration deployment:

node deploy_drift_integration.js



6. Deploying Ceramic Integration

	1.	Run the Ceramic integration deployment:

node deploy_ceramic_integration.js



7. Deploying Streamflow Integration

	1.	Run the Streamflow integration deployment:

node deploy_streamflow_integration.js



8. Deploying Worldcoin Integration

	1.	Run the Worldcoin integration deployment:

node deploy_worldcoin_integration.js



9. Deploying Reclaim Integration

	1.	Run the Reclaim integration deployment:

node deploy_reclaim_integration.js



10. Deploying LayerZero Integration

	1.	Run the LayerZero integration deployment:

node deploy_layerzero_integration.js



11. Deploying Synternet Integration

	1.	Run the Synternet integration deployment:

node deploy_synternet_integration.js



Running the Application

	1.	Start the backend server:

cd backend
node server.js


	2.	Start the frontend application:

cd frontend
npm start



Monitoring and Maintenance

	•	Ensure to monitor contract interactions and transactions using block explorers or custom logging.
	•	Maintain regular updates of dependencies and libraries used in the project.

Troubleshooting

If you encounter issues during deployment:

	•	Ensure you have the correct network configuration.
	•	Double-check the contract addresses and API keys.
	•	Review logs for any error messages.

How to Use the Deployment Automation Scripts

	1.	Navigate to the Automation Directory:

cd backend/deployments/automation


	2.	Run the Deployment Script:
	•	To deploy all contracts:

node deploy_all.js

	•	To deploy all integrations:

node integrate_all.js

