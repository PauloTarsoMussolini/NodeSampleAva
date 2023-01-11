const ValidationContract = require('./validator/fluent.validator');

function policyInformation (policy) {

    let policyVerification = new ValidationContract();

    policyVerification.isAddressValid(policy.addressPolicy,'100-1020 :Policys address is invalid: ')
    policyVerification.isRequired(policy.addressPolicy,'100-1030 :Policys address is empty: ')

    return {
        isValid: policyVerification.isValid(),
        errors: policyVerification.errors()
    }
}

module.exports = policyInformation;