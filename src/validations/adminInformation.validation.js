const ValidationContract = require('./validator/fluent.validator');

function adminInformation (admin) {

    let adminVerification = new ValidationContract();

    adminVerification.isAddressValid(admin.addressWallet ,'100-1060 : Admin address is invalid: ')
    adminVerification.isRequired(admin.addressWallet, '100-7003 : Address is empty')

    return {
        isValid: adminVerification.isValid(),
        errors: adminVerification.errors()
    }
}

module.exports = adminInformation;