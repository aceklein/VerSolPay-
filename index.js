const express = require('express');
const app = express();

// Import the specific API modules
const paymentRoutes = require('./payment');
const identityRoutes = require('./identity');
const crosschainRoutes = require('./crosschain');

// Middleware
app.use(express.json());

// Routes
app.use('/api/payment', paymentRoutes);
app.use('/api/identity', identityRoutes);
app.use('/api/crosschain', crosschainRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const app = express();
const liquidityRoutes = require('./liquidity');

app.use(express.json());

// Register the liquidity API
app.use('/api/liquidity', liquidityRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});