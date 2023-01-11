const { Contract } = require('ethers');
const instanceProvider = require('./provider.service');
const PolicyFactoryContract = require('../../contracts/PolicyFactory.json');

require('dotenv').config();

async function connectToContractPolicyFactory() {

    if (!PolicyFactoryContract)
        throw new Error(`PolicyFactory contrat is not builded, compilecontract e save json file in contracts folder ;)`);

    const contractFactory = new Contract(process.env.POLICY_FACTORY_ADDRESS, PolicyFactoryContract.abi, await instanceProvider());
   // const contractFactory = new Contract("process.env.POLICY_FACTORY_ADDRESS", "", await instanceProvider());

    return contractFactory;
}

module.exports = connectToContractPolicyFactory;