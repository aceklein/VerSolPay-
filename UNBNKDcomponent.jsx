import React, { useState } from 'react';
import { Connection, PublicKey, Transaction } from '@solana/web3.js';
import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';

const UNBKNDComponent = () => {
    const [amount, setAmount] = useState('');
    const [recipient, setRecipient] = useState('');

    const handleMint = async () => {
        // Connect to Solana and mint UNBKND tokens
        const connection = new Connection('https://api.mainnet-beta.solana.com');
        const mintAddress = 'YourMintAddress'; // Replace with actual token mint address
        const userAccount = 'UserAccountPublicKey'; // Replace with user account

        const mint = new Token(connection, mintAddress, TOKEN_PROGRAM_ID, userAccount);
        await mint.mintTo(userAccount, userAccount, [], amount);
        alert(`Minted ${amount} UNBKND tokens to ${userAccount}`);
    };

    const handleTransfer = async () => {
        // Transfer UNBKND tokens to another user
        const connection = new Connection('https://api.mainnet-beta.solana.com');
        const mintAddress = 'YourMintAddress';
        const fromAccount = 'YourAccount';
        const toAccount = new PublicKey(recipient); 

        const mint = new Token(connection, mintAddress, TOKEN_PROGRAM_ID, fromAccount);
        await mint.transfer(fromAccount, toAccount, fromAccount, [], amount);
        alert(`Transferred ${amount} UNBKND tokens to ${recipient}`);
    };

    return (
        <div>
            <h1>UNBKND Token Management</h1>
            <input type="text" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <input type="text" placeholder="Recipient Address" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
            <button onClick={handleMint}>Mint UNBKND Tokens</button>
            <button onClick={handleTransfer}>Transfer UNBKND Tokens</button>
        </div>
    );
};

export default UNBKNDComponent;