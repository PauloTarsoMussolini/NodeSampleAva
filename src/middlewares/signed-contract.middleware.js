const connectToContractPolicy = require('../services/policyContract.service');
const { fromPrivateKey } = require('../services/wallet.service');

function createUseContractSigned() {
  return async function useContract(req, res, next) {
    try {
      const { privateKey } = req.body;
      const { addressPolicy } = req.body;

      if (!addressPolicy)
        throw new Error('Necessário informar Endereço da Apólice');

      if (!privateKey)
        throw new Error('Necessário enviar a Private Key para assinar a transação');

      const signer = await fromPrivateKey(privateKey);
      req.contract = await connectToContractPolicy(addressPolicy); 
      req.contract = req.contract.connect(signer);
      console.log("req.contract.address : "+ req.contract.address);

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

module.exports = createUseContractSigned;