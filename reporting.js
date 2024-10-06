const express = require('express');
const app = express();

// Endpoint to generate transaction reports
app.get('/api/reporting/transaction_report', (req, res) => {
    // Fetch transactions from the blockchain or database
    const transactions = [
        { txId: 'tx_1', status: 'completed', amount: 1.5, chain: 'Ethereum' },
        { txId: 'tx_2', status: 'pending', amount: 0.5, chain: 'Solana' }
    ];

    res.status(200).json({
        report: "Transaction Report",
        data: transactions
    });
});

// Endpoint to generate user activity reports
app.get('/api/reporting/user_activity', (req, res) => {
    const userActivity = [
        { userId: 'user_1', lastLogin: '2024-10-01', totalTransactions: 10 },
        { userId: 'user_2', lastLogin: '2024-09-25', totalTransactions: 5 }
    ];

    res.status(200).json({
        report: "User Activity Report",
        data: userActivity
    });
});

app.listen(3000, () => {
    console.log('Reporting API running on port 3000');
});