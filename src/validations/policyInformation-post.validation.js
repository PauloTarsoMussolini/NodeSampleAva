const ValidationContract = require('./validator/fluent.validator');

function policyInformation (policy) {

    let policyVerification = new ValidationContract();

    const {
        mutual,
        coverage,
        policyInformation,
        policyHoldedrData,
        vehicleData,
        driverData
    } = policy;

    policyVerification.isRequired(policy.privateKey, 'privateKey is required');

    policyVerification.hasMinLen(mutual.wallets,1,'100-1050 : Mutuals wallet address is empty.')
    for (var i=0; i<mutual.wallets.length; i++){
        policyVerification.isAddressValid(mutual.wallets[i],'Mutuals wallet address is invalid: ')
    }

    policyVerification.hasValue(coverage.prizeAmount, 'coverage.prizeAmount is required')
    policyVerification.hasValue(coverage.fipePercentage, 'coverage.fipePercentage is required')
    policyVerification.hasValue(coverage.app, 'coverage.app is required')
    policyVerification.hasValue(coverage.glasses, 'coverage.glasses is required')
    policyVerification.hasValue(coverage.rcfMaterials, 'coverage.rcfMaterials is required')
    policyVerification.hasValue(coverage.rcfBodily, 'coverage.rcfBodily is required')
    policyVerification.hasValue(coverage.reserveCar, 'coverage.reserveCar is required')
    policyVerification.hasValue(coverage.franchise, 'coverage.franchise is required')
    policyVerification.hasMinLen(coverage.productCoverage, 1,'coverage.productCoverage is required')

    policyVerification.hasValue(policyInformation.proposal, 'policyInformation.proposal is required')
    policyVerification.hasValue(policyInformation.apolice, 'policy number is required.');
    policyVerification.hasMinLen(policyInformation.apolice,5,'policy number has no minimal length (5).')
    policyVerification.hasValue(policyInformation.startValidity, 'policy startValidity is required.');
    policyVerification.hasValue(policyInformation.endValidity, 'policy endValidity is required.');
    policyVerification.hasValue(policyInformation.apoliceStatus, '100-3030 : Policy status field is empty.');

    policyVerification.hasValue(policyHoldedrData.nameComplete, 'coverage.nameComplete is required')
    policyVerification.hasValue(policyHoldedrData.dateOfBirth, 'policyHoldedrData.dateOfBirth is required')
    policyVerification.hasValue(policyHoldedrData.maritalStatus, 'policyHoldedrData.maritalStatus is required')
    policyVerification.hasValue(policyHoldedrData.pocket, 'policyHoldedrData.pocket is required')
    policyVerification.hasValue(policyHoldedrData.cnpjCpf, 'policyHoldedrData.cnpjCpf is required')
    policyVerification.hasValue(policyHoldedrData.gender, 'policyHoldedrData.gender is required')
    policyVerification.hasValue(policyHoldedrData.relationshipPolicyHolder, 'policyHoldedrData.relationshipPolicyHolder is required')

    policyVerification.hasValue(vehicleData.typeParam, 'vehicleData.typeParam is required')
    policyVerification.hasValue(vehicleData.marker, 'vehicleData.marker is required')
    policyVerification.hasValue(vehicleData.model, 'vehicleData.model is required')
    policyVerification.hasValue(vehicleData.numerSlides, 'vehicleData.numerSlides is required')
    policyVerification.hasValue(vehicleData.yearManufacture, 'vehicleData.yearManufacture is required')
    policyVerification.hasValue(vehicleData.yearModel, 'vehicleData.yearModel is required')
    policyVerification.hasValue(vehicleData.licensePlate, 'vehicleData.licensePlate is required')
    policyVerification.hasValue(vehicleData.chassis, 'vehicleData.chassis is required')
    policyVerification.hasValue(vehicleData.renavam, 'vehicleData.renavam is required')
    policyVerification.hasValue(vehicleData.fuel, 'vehicleData.fuel is required')
    policyVerification.hasValue(vehicleData.newVehicle, 'vehicleData.newVehicle is required')
    policyVerification.hasValue(vehicleData.vehicleFinaced, 'vehicleData.vehicleFinaced is required')
    policyVerification.hasValue(vehicleData.color, 'vehicleData.color is required')

    policyVerification.hasValue(driverData.nameComplete, 'driverData.nameComplete is required')
    policyVerification.hasValue(driverData.dateOfBirth, 'driverData.dateOfBirth is required')
    policyVerification.hasValue(driverData.maritalStatus, 'driverData.maritalStatus is required')
    policyVerification.hasValue(driverData.pocket, 'driverData.pocket is required')
    policyVerification.hasValue(driverData.cpfCnpj, 'driverData.cpfCnpj is required')
    policyVerification.hasValue(driverData.gender, 'driverData.gender is required')
    policyVerification.hasValue(driverData.profession, 'driverData.profession is required')
    policyVerification.hasValue(driverData.cnh, 'driverData.cnh is required')
    policyVerification.hasValue(driverData.dateFirstCnh, 'driverData.dateFirstCnh is required')
    policyVerification.hasValue(driverData.garage, 'driverData.garage is required')
    policyVerification.hasValue(driverData.usesWork, 'driverData.usesWork is required')
    policyVerification.hasValue(driverData.vehicleUse, 'driverData.vehicleUse is required')

    return {
        isValid: policyVerification.isValid(),
        errors: policyVerification.errors()
    }
}

module.exports = policyInformation;