'use strict';
const adminValidator = require('../validations/adminInformation.validation');

exports.get = async (req, res, next) => {
    try {
        const resultValidation = adminValidator(req.query);    

        if(!resultValidation.isValid) {
            res.status(400).send({
                success: false,
                code: '100-1010',
                errors: resultValidation.errors
            }).end();
        }
        const { contract } = req;
        const result = await contract.isAdmin(req.query.addressWallet);
        if (result){
            res.status(201).send({
                success: true,
                code: '100-2030',
                message: 'É administrador do Contrato na Blockchain.'
            });
        } else {
            res.status(400).send({
                success: false,
                code: '100-2031',
                message: 'Não é administrador do Contrato na Blockchain.'
            });           
        }
    } catch (err) {
        res.status(500).send({
            success: false,
            code: '100-7000',
            message: 'Internal error',
            error: err.message
        });    
    }
};

exports.post = async (req, res, next) => {
    try {
        const resultValidation = adminValidator(req.body);    

        if(!resultValidation.isValid) {
            res.status(400).send({
                success: false,
                code: '100-1010',
                errors: resultValidation.errors
            }).end();
        }
        const { contract } = req;
        const result = await contract.addAdmin(req.body.address);
        if (result){
            res.status(201).send({
                success: true,
                code: '100-2010',
                message: 'Administrator added to the Factory Policy Smart Contract.'
            });
        }
    } catch (err) {
        res.status(500).send({
            success: false,
            code: '100-7000',
            message: 'Internal error',
            error: err.message
        });    
    }
};

exports.delete = async (req, res, next) => {
    try {
        const resultValidation = adminValidator(req.body);    

        if(!resultValidation.isValid) {
            res.status(400).send({
                success: false,
                code: '100-1010',
                errors: resultValidation.errors
            }).end();
        }

        const overrides = {
            gasLimit: 90000000
        };
        const { contract } = req;
        const result = await contract.removeAdmin(req.body.address,     overrides);

        if (result){
            res.status(201).send({
                success: true,
                code: '100-2020',
                message: 'Administrator removed from the Factory Policy Smart Contract.'
            });
        }
    } catch (err) {
        res.status(500).send({
            success: false,
            code: '100-7000',
            message: 'Internal error',
            error: err.message
        });    
    }
};
