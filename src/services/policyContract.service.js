const { Contract } = require('ethers');
const instanceProvider = require('./provider.service');
const PolicyContract = require('../../contracts/Policy.json');

require('dotenv').config();

async function connectToContractPolicy(addressPolicy) {

    if (!PolicyContract)
        throw new Error(`Policy contrat is not builded, compilecontract e save json file in contracts folder ;)`);      

    const contractPolicy = new Contract(addressPolicy, PolicyContract.abi, await instanceProvider());
    
    return contractPolicy;
}

module.exports = connectToContractPolicy;