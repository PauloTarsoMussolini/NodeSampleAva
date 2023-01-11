const { Wallet } = require('ethers');
const instanceProvider = require('./provider.service');

async function fromPrivateKey(privateKey) {
  return new Wallet(privateKey, await instanceProvider());
}

module.exports = { fromPrivateKey };