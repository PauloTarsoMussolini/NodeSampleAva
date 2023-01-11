const ValidationContract = require('./validator/fluent.validator');

function policyInformation (policy) {

    let policyVerification = new ValidationContract();

    policyVerification.isRequired(policy.privateKey, 'privateKey is required');
    policyVerification.isRequired(policy.addressPolicy, 'Address Policy is required');
 
    policyVerification.hasValue(policy.status, 'status is required')

    return {
        isValid: policyVerification.isValid(),
        errors: policyVerification.errors()
    }
}

module.exports = policyInformation;