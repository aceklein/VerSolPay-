UNBNKD API Reference

The API provides endpoints for initiating cross-chain payments, verifying identities, and interacting with the BNPL system.

Authentication
Endpoint: `/api/auth/login`  
Method:POST  
Parameters:
- `email`: User’s email address.
- `password`: User’s password.
Response:
json
{
  "token": "jwt_token"
}

API Reference

 1. Payment API

POST `/api/payment/initiate`
API Reference

1. Payment API

POST `/api/payment/initiate`

This endpoint initiates a cross-chain payment between blockchains (e.g., Ethereum to Solana).

Parameters:
- `fromChain` (string): Blockchain network to send payment from (e.g., "Ethereum").
- `toChain` (string): Blockchain network to receive payment (e.g., "Solana").
- `amount` (number): Amount of tokens to send.
- `recipient` (string): Wallet address of the recipient on the destination chain.

Sample Request:

json
{
  "fromChain": "Ethereum",
  "toChain": "Solana",
  "amount": 100,
  "recipient": "0xRecipientAddress"
}

This endpoint initiates a cross-chain payment between blockchains (e.g., Ethereum to Solana).

Parameters:
- `fromChain` (string): Blockchain network to send payment from (e.g., "Ethereum").
- `toChain` (string): Blockchain network to receive payment (e.g., "Solana").
- `amount` (number): Amount of tokens to send.
- `recipient` (string): Wallet address of the recipient on the destination chain.

Sample Request:

json
{
  "fromChain": "Ethereum",
  "toChain": "Solana",
  "amount": 100,
  "recipient": "0xRecipientAddress"
}

API Reference

3. Liquidity API

POST `/api/liquidity/provide`

This endpoint allows users to provide liquidity to cross-chain liquidity pools.

Parameters:
- `tokenA` (string): The address of token A.
- `tokenB` (string): The address of token B.
- `amountA` (number): The amount of token A to add to the liquidity pool.
- `amountB` (number): The amount of token B to add to the liquidity pool.

Sample Request:

json
{
  "tokenA": "TokenAAddress",
  "tokenB": "TokenBAddress",
  "amountA": 100,
  "amountB": 200
}
sample response
{
  "status": "Liquidity provided successfully",
  "tokenA": "TokenAAddress",
  "tokenB": "TokenBAddress",
  "amountA": 100,
  "amountB": 200
}