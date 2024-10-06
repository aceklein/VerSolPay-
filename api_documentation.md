```markdown
# UNBNKD DEX API Documentation

## Overview
The UNBNKD DEX API allows developers to interact with the decentralized exchange. Below are the endpoints available in the backend services.

## Endpoints

### 1. Identity Verification
- **POST /api/identity/verify**
  - **Description**: Verify user identity using Worldcoin and Reclaim.
  - **Request Body**:
    ```json
    {
      "userAddress": "0x123...",
      "userData": {
        "name": "John Doe",
        "email": "john@example.com"
      }
    }
    ```
  - **Response**:
    ```json
    {
      "success": true,
      "identities": {
        "worldcoinIdentity": {...},
        "reclaimIdentity": {...}
      }
    }
    ```

### 2. Liquidity Aggregation
- **GET /api/liquidity/aggregate**
  - **Description**: Aggregate liquidity from various sources.
  - **Query Parameters**:
    - `chain`: The blockchain to aggregate from (e.g., solana, ethereum).
    - `poolId`: The ID of the liquidity pool.
  - **Response**:
    ```json
    {
      "liquidityData": {...},
      "rewards": {...}
    }
    ```

### 3. Trading Bots
- **POST /api/bots/trade**
  - **Description**: Execute a trade using configured bots.
  - **Request Body**:
    ```json
    {
      "userId": "user123",
      "tradeDetails": {
        "asset": "SOL",
        "threshold": 100
      }
    }
    ```
  - **Response**:
    ```json
    {
      "status": "Success",
      "payouts": {...}
    }
    ```

## Additional Information
For more detailed information about the API or to report issues, please contact the development team.