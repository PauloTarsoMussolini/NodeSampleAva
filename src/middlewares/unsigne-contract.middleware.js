const connectToContractPolicy = require('../services/policyContract.service');
const policyValidatorGet = require('../validations/policyInformation-get.validation');

function useContract() {
  return async function useUnsigneContract(req, res, next) {
    try {
      const values = req.query;
      const addressPolicy = values.addressPolicy

      const resultValidation = policyValidatorGet(addressPolicy);    

      if(!resultValidation.isValid) {
          res.status(400).send({
              success: false,
              code: '',
              errors: resultValidation.errors
          }).end();
      }

      req.contract = await connectToContractPolicy(addressPolicy);
      next();
    } catch (err) {
      res.status(500).send({
        success: false, 
        message: 'Policy middleware error',
        error: err.message,
      });
    }
  };
}

module.exports = useContract;