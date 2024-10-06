```markdown
# Cross-Chain Deployment Guide (Using Wormhole)

## Steps:

1. **Install Wormhole CLI**:
   Install Wormhole globally:
   ```bash
   npm install -g @certusone/wormhole

	2.	Lock Tokens on Solana:
Transfer tokens from Solana to Ethereum:

wormhole transfer --source solana --target ethereum --amount <amount> --wallet /path/to/your/keypair.json


	3.	Mint Tokens on Ethereum:
After locking tokens on Solana, mint the equivalent tokens on Ethereum:

wormhole transfer --source ethereum --target solana --amount <amount> --wallet /path/to/your/keypair.json
