UNBKND Token Documentation

Overview
UNBKND is a special payment token linked to user identity, allowing for seamless transactions within the UNBNKD ecosystem. It is designed for cross-chain compatibility and is integrated with a decentralized identity verification system.

Token Features
- Identity Verification:Tokens are linked to user identities verified on-chain.
- Cross-Chain Compatibility**: Users can transfer UNBKND tokens across different blockchains using a bridge.
- Payment and Staking:Users can use UNBKND for payments and stake them for rewards.

Token Operations

Overview
The UNBKND Tokenis an NFT minted on the Solana blockchain using the Metaplex framework, representing a user's verified identity linked to the UNBNKD platform.

Minting Process

1.Prepare Assets:Create images and metadata for the token.
2. Upload to Arweave:Use the Metaplex CLI to upload assets:
   bash
   metaplex upload ./assets/unbknd --env devnet --keypair /path/to/your/keypair.json --reuse-uris

	3.	Create Candy Machine: Manage the minting process:

metaplex create_candy_machine -k /path/to/your/keypair.json --env devnet --price 0.01 --go-live-date "2024-01-01T00:00:00Z"


	4.	Mint Tokens: Allow users to mint tokens:

metaplex mint_one_token -k /path/to/your/keypair.json --env devnet



Cross-Chain Functionality

The UNBKND token can be transferred across different blockchains using the Wormhole bridge:

	1.	Lock Tokens on Solana: Users lock their tokens to prepare for cross-chain transfers.
	2.	Mint Equivalent Tokens on Destination Chain: Once locked, users can mint tokens on Ethereum or BSC.

Integration with Wormhole

For cross-chain functionality, integrate with Wormhole:

	•	Lock tokens on Solana.
	•	Call Wormhole’s mint function on the destination chain.

async function lockTokens(amount) {
    // Locking logic
}

async function mintTokensOnEthereum(recipient, amount) {
    // Minting logic
}


## Minting Process

1. **Prepare Assets**: Create images and metadata for the token.
2. **Upload to Arweave**: Use the Metaplex CLI to upload assets:
   ```bash
   metaplex upload ./assets/unbknd --env devnet --keypair /path/to/your/keypair.json --reuse-uris

	3.	Create Candy Machine: Manage the minting process:

metaplex create_candy_machine -k /path/to/your/keypair.json --env devnet --price 0.01 --go-live-date "2024-01-01T00:00:00Z"


	4.	Mint Tokens: Allow users to mint tokens:

metaplex mint_one_token -k /path/to/your/keypair.json --env devnet
