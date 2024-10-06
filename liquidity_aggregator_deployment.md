Deployment Guide

File: docs/deployment_guides/liquidity_aggregator_deployment.md

# Liquidity Aggregation and Yield Mining Rebalancer Deployment

## Steps:
1. Clone the repo:
   ```bash
   git clone https://github.com/unbnkd-dex/unbnkd-dex.git

	2.	Install dependencies:

npm install


	3.	Deploy smart contracts on Solana, Ethereum, BSC using the provided scripts:

bash deploy_sol.sh
bash deploy_eth.sh
bash deploy_bsc.sh


	4.	Start the services for liquidity aggregation, cross-chain transfers, and AI optimization:

node backend/services/liquidity_aggregator/aggregator.js
node backend/services/ai/optimizer.js
node backend/services/cross_chain_liquidity/cross_chain.js



Tools and Libraries:

	•	Serum, Raydium, Uniswap: For liquidity aggregation.
	•	LayerZero, Thorchain: For cross-chain swaps.
	•	Pyth Network: Provides real-time pricing for AI rebalancing.
	•	Metaplex: Tokenize strategies as NFTs.