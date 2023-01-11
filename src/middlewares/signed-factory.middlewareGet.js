const connectToContractFactory = require('../services/factoryContract.service');
const { fromPrivateKey } = require('../services/wallet.service');

function createUseContractSignedGet() {
  return async function useContractGet(req, res, next) {
    try {

      const { privateKey } = req.query;

      if (!privateKey)
        throw new Error('you must be send the private key to sign transaction)');

      const signer = await fromPrivateKey(privateKey);
      req.contract = await connectToContractFactory();
      req.contract = req.contract.connect(signer);

      next();
    } catch (err) {
      res.status(500).send({
        success: false, 
        message: 'middleware error',
        error: err.message,
      });
    }
  };
}

module.exports = createUseContractSignedGet;