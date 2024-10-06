require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
    solidity: "0.8.0",
    networks: {
        hardhat: {},
        ropsten: {
            url: process.env.INFURA_URL,
            accounts: [process.env.PRIVATE_KEY]
        },
        bscTestnet: {
            url: process.env.BSC_TESTNET_URL,
            accounts: [process.env.PRIVATE_KEY]
        }
    }
};