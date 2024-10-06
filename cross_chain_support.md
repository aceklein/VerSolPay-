# Cross-Chain Support Deployment Guide

## Overview
This guide provides instructions for deploying the Cross-Chain Support feature using LayerZero.

## Prerequisites
- Ensure that you have the necessary tokens for deployment.
- Set up your LayerZero endpoint.

## Deployment Steps

1. **Deploy Cross-Chain Transfer Contract**
   - Navigate to the Cross-Chain deployment directory:
   ```bash
   cd deployments/cross_chain

	•	Deploy the Cross-Chain Transfer contract:

npx hardhat run deploy_cross_chain_transfer.js --network yourNetwork

	2.	Integration with LayerZero
	•	Ensure that the LayerZero integration code is correctly placed in the backend.
	•	Replace the CROSS_CHAIN_CONTRACT_ADDRESS with the actual deployed address.
	3.	Run the Application
	•	Start the backend server:

cd backend
node server.js



Testing

	•	Test cross-chain transfers by calling the initiateTransfer function with appropriate parameters.
	•	Verify that the events are emitted correctly during the transfer process.

Troubleshooting

	•	Ensure the LayerZero endpoint is functioning correctly.
	•	Check for errors in the transaction logs if transfers do not complete as expected.