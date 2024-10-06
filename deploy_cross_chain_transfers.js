const hre = require("hardhat");

async function main() {
    const LayerZeroEndpoint = "YOUR_LAYERZERO_ENDPOINT_ADDRESS"; // Replace with actual endpoint address
    const CrossChainTransfer = await hre.ethers.getContractFactory("CrossChainTransfer");
    const crossChainTransfer = await CrossChainTransfer.deploy(LayerZeroEndpoint);
    
    await crossChainTransfer.deployed();
    console.log("CrossChainTransfer deployed to:", crossChainTransfer.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });