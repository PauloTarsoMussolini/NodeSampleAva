const ValidationContract = require('./validator/fluent.validator');

function mutualPolicyInformation (mutualPolicy) {

    let mutualVerification = new ValidationContract();

    mutualVerification.isRequired(mutualPolicy.privateKey, 'privateKey is required');
    mutualVerification.isAddressValid(mutualPolicy.addressMutual,'100-1040 : Mutuals wallet address is invalid: ')
    mutualVerification.isRequired(mutualPolicy.addressMutual, '100-1050 : Mutuals wallet address is empty')

    return {
        isValid: mutualVerification.isValid(),
        errors: mutualVerification.errors()
    }
}

module.exports = mutualPolicyInformation;