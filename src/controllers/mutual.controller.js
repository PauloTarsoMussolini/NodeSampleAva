'use strict';
const ethers = require('ethers');
const mutualValidator = require('../validations/mutualInformation.validation');

exports.post = async (req, res, next) => {
    try {

        const resultValidation = mutualValidator(req.body);    

        if(!resultValidation.isValid) {
            res.status(400).send({
                success: false,
                code: '100-1010',
                errors: resultValidation.errors
            }).end();
        };

        const privateKey = req.body.privateKey;
        const addressMutual = req.body.addressMutual;

        const result = await req.contract.consultMutualPolicies(addressMutual);

        res.status(200).send({
            success: true,
            code: '100-1000',
            message: 'Success!',
            data: result
        });

    } catch (err) {

        console.log(err);

        res.status(500).send({
            success: false,
            code: '100-7000',
            message: 'Internal error',
            error: err.message
        });
    }
};



