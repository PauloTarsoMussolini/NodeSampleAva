'use strict';
const policyValidatorPost = require('../validations/policyInformation-Post.validation');

exports.get = async (req, res, next) => {
    try {
        const { contract } = req;
        res.status(200).send({ success: true, message: 'get Policy success', data: req.body });
    } catch (err) {
        res.status(500).send({ success: false, message: 'Policy Controller get error', error: err.message });
    }
};

exports.post = async (req, res, next) => {
  
    try {
        const { contract } = req;

        const resultValidation = policyValidatorPost(req.body);    

        if(!resultValidation.isValid) {
            res.status(400).send({
                success: false,
                code: '100-1010',
                errors: resultValidation.errors
            }).end();
        }

        const overrides = {
            gasLimit: 9000000
        };

        const result = await contract.generatePolicy(req.body, overrides);

        res.status(201).send({
            success: true,
            code: '100-7016',
            message: 'Recorded Policy'  ,
            data: result
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            code: '100-7000',
            message: 'Internal error',
            error: err.message
        });    
    }
};

