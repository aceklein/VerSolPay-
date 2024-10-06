const ceramic = require('ceramic-sdk');

async function main() {
    const userDetails = {
        name: 'John Doe',
        email: 'john@example.com',
    };

    const did = await ceramic.createDid(userDetails);
    console.log(`DID created: ${did}`);
}

main().catch(err => {
    console.error(err);
});