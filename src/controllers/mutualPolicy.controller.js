'use strict';
 const mutualPolicyValidator = require('../validations/mutualPolicyInformation.validation');

exports.get = async (req, res, next) => {
    try {
        const values = req.query;
        const resultValidation = mutualPolicyValidator(values);    

        if(!resultValidation.isValid) {
            res.status(400).send({
                success: false,
                code: '100-1010',
                errors: resultValidation.errors
            }).end();
        };

        const privateKey = values.privateKey;
        const addressMutual = values.addressMutual

        const resultIsAdmin = await req.contract.isAdmin(addressMutual);

        if (!resultIsAdmin) {
            res.status(400).send({
                success: false,
                code: '100-1060',
                errors: ['Invalid Administrators wallet address']
            });
        }

        const result = await req.contract.consultMutualPolicies(addressMutual);

        res.status(200).send({
            success: true,
            code: '100-1000',
            message: 'Success!',
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


