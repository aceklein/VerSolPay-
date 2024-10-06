UNBNKD DEX Deployment Guide

## Prerequisites
- Node.js installed
- Solana CLI installed
- Hardhat installed for Ethereum deployments

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/unbnkd-dex/unbnkd-dex.git
   cd unbnkd-dex

	2.	Install dependencies:

npm install



Deployment Steps

Deploy Solana Contracts

bash deployments/solana/deploy_sol.sh

Deploy Ethereum Contracts

bash deployments/ethereum/deploy_eth.sh

Deploy BSC Contracts

bash deployments/bsc/deploy_bsc.sh

Deploy Cross-Chain Token Bridge

bash deployments/cross_chain/deploy_bridge.sh

Running the Application

	1.	Start the liquidity aggregator:

node backend/services/liquidity_aggregator/aggregator.js


	2.	Start the trading bots:

node backend/services/trading_bots/bot.js


	3.	Launch the AI dashboard:

node frontend/ai_dashboard/dashboard.js



Tools and Libraries

	•	Solana, Ethereum, BSC: For blockchain interactions.
	•	Drift Foundation, Raydium, Uniswap: For trading and liquidity operations.
	•	Streamflow, Ceramic, Metaplex: For various integrations.

## Decentralized Identity Verification
This section covers the integration of **Worldcoin** and **Reclaim** for identity verification.

### Setup
1. Ensure you have the **Worldcoin SDK** and **Reclaim SDK** installed in your backend project:
   ```bash
   npm install worldcoin-sdk reclaim-sdk

	2.	Use the following endpoints in your application to verify identities:
	•	POST /verify: Verify user identities using both Worldcoin and Reclaim.

Example Request

{
  "userAddress": "0x12345...",
  "userData": {
    "name": "John Doe",
    "email": "john@example.com"
  }
}

With these updates, your project now includes a complete decentralized identity verification system leveraging **Worldcoin** and **Reclaim**, ensuring robust user identity management across chains. This setup provides comprehensive coverage for identity verification, supporting PWD requirements through voice command integration and offline capabilities via the **Okto Wallet**.

If there are any other features or tools you want to implement or any other specific areas you'd like to expand upon, please let me know!