const connectToContractPolicyFactory = require('../services/factoryContract.service');

function useContract() {
  return async function useUnsigneContract(req, res, next) {
    try {
      req.contract = await connectToContractPolicyFactory();

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

module.exports = useContract;