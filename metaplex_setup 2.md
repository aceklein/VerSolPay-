# Install Rust (if you haven't done so already)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env

# Install the Metaplex CLI
cargo install --locked metaplex-cli

#3. Configure Your Wallet

Make sure your wallet is connected and funded with SOL for transaction fees:

solana config set --keypair /path/to/your/keypair.json

#4. Upload Assets to Arweave

Once you have your assets ready, upload them using the Metaplex CLI:

metaplex upload ./assets --env devnet --keypair /path/to/your/keypair.json --reuse-uris

#5. Create Candy Machine

Create a new Candy Machine on Solana devnet:

metaplex create_candy_machine -k /path/to/your/keypair.json --env devnet --price 0.01 --go-live-date "2024-01-01T00:00:00Z"

#6. Mint UNBKND Tokens

Once the Candy Machine is live, you can mint your UNBKND tokens:

metaplex mint_one_token -k /path/to/your/keypair.json --env devnet