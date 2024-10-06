File Location: /docs/metaplex_setup.md

# Setting Up Metaplex and Minting the UNBKND NFT

This guide provides step-by-step instructions to set up Metaplex on Solana and create the UNBKND token as an NFT.

---

## 1. Setting Up Metaplex

### 1.1 Install the Metaplex CLI

If you haven’t installed Metaplex yet, you can do so using the following commands:

```bash
# Install Rust if you haven't done so
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env

# Install the Metaplex CLI
cargo install --locked metaplex-cli

1.2 Configure Your Wallet

Make sure your wallet is connected and funded with SOL for transaction fees:

solana config set --keypair /path/to/your/keypair.json


For more detailed instructions on uploading and minting the NFT, refer to the next section of the guide.

Continue with the next steps to upload assets, create the candy machine, and mint the token.



Documentation

- [Metaplex Setup Guide](./docs/metaplex_setup.md): Learn how to set up Metaplex and mint the UNBKND token on Solana.

