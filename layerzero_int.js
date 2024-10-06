const { ethers } = require("hardhat");
const CrossChainTransfer = require("../../contracts/cross_chain/cross_chain_transfer.json"); // Adjust path as necessary

async function initiateTransfer(amount, dstChainId, dstAddress) {
    const [deployer] = await ethers.getSigners();
    const contract = new ethers.Contract("CROSS_CHAIN_CONTRACT_ADDRESS", CrossChainTransfer.abi, deployer);

    const tx = await contract.initiateTransfer(amount, dstChainId, dstAddress);
    await tx.wait();

    console.log(`Transfer of ${amount} initiated to ${dstAddress} on chain ID ${dstChainId}`);
}

module.exports = { initiateTransfer };