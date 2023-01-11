const connectToContractFactory = require('../services/factoryContract.service');
const { fromPrivateKey } = require('../services/wallet.service');

function createUseContractSignedPost() {
  return async function useSignedContractPost(req, res, next) {
    try {

      const { privateKey } = req.body;

      if (!privateKey)
        throw new Error('Necessário informar Private Key para assinar a transação');

      const signer = await fromPrivateKey(privateKey);

      req.contract = await connectToContractFactory();
      req.contract = req.contract.connect(signer);

      const resultMutual = await req.contract.isMutual(signer.address);
      if (!resultMutual)
        throw new Error('Assinante da transação necessita ser Mútua');

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

module.exports = createUseContractSignedPost;