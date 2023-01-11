const ethers = require('ethers');
const { InfuraProvider } = require('ethers/providers');

require('dotenv').config();

const networkIdToNameMap = {
    1: 'mainnet',
    3: 'ropsten',
    4: 'rinkeby',
    42: 'kovan',
    1001: 'development'
};

async function instanceProvider() {
    let provider;
    const networkName = networkIdToNameMap[process.env.NETWORK_ID];

    switch (networkName) {
        case 'development':
            provider = new ethers.providers.JsonRpcProvider(`http://localhost:8545`);
            break;
        default:
            provider = new InfuraProvider(networkName, process.env.INFURA_API_KEY);
    }

    return provider;
};

module.exports = instanceProvider;