const Reclaim = require('reclaim-sdk');
const { generateProof } = require('zk-snarks');

async function main() {
    const userData = {
        name: 'Jane Doe',
        email: 'jane@example.com',
    };

    const userId = await Reclaim.verify(userData);
    const proof = generateProof(userId);
    console.log(`Reclaim User ID: ${userId}, Proof: ${proof}`);
}

main().catch(err => {
    console.error(err);
});