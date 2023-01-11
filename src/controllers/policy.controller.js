'use strict';
const policyValidatorGet = require('../validations/policyInformation-get.validation');
const policyValidatorPut = require('../validations/policyInformation-put.validation');
const setMsgEtherscan = require('../utils/setMsgEtherscan');

var policyData = {
    mutual:{
        wallets: []
     },
    coverages:{
        prizeAmount:"",
        fipePercentage: "",
        app: "",
        glasses: "",
        rcfMaterials: "",
        rcfBodily:"",
        reserveCar: "",
        franchise: "",
        productCoverage: []
    } ,
    policyInformation:{
        proposal: "",
        apolice: "",
        startValidity: "",
        endValidity: "",
        apoliceStatus:""
    },
    policyHoldedrData:{
        nameComplete: "",
        dateOfBirth: "",
        maritalStatus: "",
        pocket: "",
        cnpjCpf:"",
        gender: "",
        relationshipPolicyHolder:""
    },
    vehicleData:{
        type:"",
        maker: "",
        model: "",
        numerSlides: "",
        yearManufacture: "",
        yearModel: ""
    },
    vehicleDocuments:{
        licensePlate: "",
        chassis: "",
        renavam:"",
        fuel: "",
        newVehicle: "",
        vehicleFinaced:"",
        color: ""
    },
    driverData:{
        nameComplete: "",
        dateOfBirth: "",
        maritalStatus: "",
        pocket: "",
        cnpjCpf:"",
        gender: "",
        profession: "",
        cnh: "",
        dateFirstCnh: "",
        garage: "",
        usesWork: "",
        vehicleUse: ""
    }  
}

exports.post = async (req, res, next) => {
    try {

        const resultValidation = policyValidatorGet(req.body);    

        if(!resultValidation.isValid) {
            res.status(400).send({
                success: false,
                code: '',
                errors: resultValidation.errors
            }).end();
        }

        const { contract } = req;
        
        policyData.mutual = await contract.consultPolicyMutual();
        policyData.coverages = await contract.consultPolicyCoverage();
        policyData.policyInformation = await contract.consultPolicyInformation();
        policyData.policyHoldedrData = await contract.consultPolicyHolder();
        policyData.vehicleData = await contract.consultVehicle();
        policyData.vehicleDocuments = await contract.consultVehicleDocuments();
        policyData.driverData = await contract.consultDriver();

        res.status(200).send({ success: true, message: 'get Policy success', data: policyData });
    } catch (err) {
        res.status(500).send({ success: false, message: 'Policy Controller get error', error: err.message });
    }
};

exports.put = async (req, res, next) => {

    try {

        const resultValidation = policyValidatorPut(req.body);    

        if(!resultValidation.isValid) {
            res.status(400).send({
                success: false,
                code: '',
                errors: resultValidation.errors
            }).end();
        }

        const { contract } = req;
        
        const result = await contract.updateStatusPolicy(req.body.status);
        res.status(201).send({ success: true, message: 'post success', data: setMsgEtherscan(result.hash) });

    } catch (err) {
        res.status(500).send({ success: false, message: 'Policy Controller get error', error: err.message });
    }


};