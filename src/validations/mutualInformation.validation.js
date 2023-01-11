const ValidationContract = require('./validator/fluent.validator');

function mutualInformation (mutual) {

    let mutualVerification = new ValidationContract();

    mutualVerification.isRequired(mutual.privateKey, 'privateKey is required');
    mutualVerification.isAddressValid(mutual.addressMutual,'100-1040 : Mutuals wallet address is invalid: ')
    mutualVerification.isRequired(mutual.addressMutual, '100-1050 : Mutuals wallet address is empty')

    return {
        isValid: mutualVerification.isValid(),
        errors: mutualVerification.errors()
    }
}

module.exports = mutualInformation;