async function transferAcrossChains(sourceTokenAddress, destinationChain, amount, recipient) {
    // Lock tokens on source chain
    await lockTokens(sourceTokenAddress, amount);

    // Send message to Wormhole
    const message = {
        amount: amount,
        recipient: recipient,
        tokenAddress: sourceTokenAddress
    };

    // Call Wormhole to transfer
    await wormholeBridge.send(message, destinationChain);
}