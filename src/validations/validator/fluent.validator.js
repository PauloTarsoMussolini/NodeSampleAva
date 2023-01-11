'use strict';
var ethers = require('ethers');

let errors = [];

function ValidationContract() {
    errors = [];
}

ValidationContract.prototype.isAddressValid = (address, message) => {
    try{
        ethers.utils.getAddress(address)
    }catch{
        errors.push({ message: message + address });
    }
}

ValidationContract.prototype.isRequired = (value, message) => {
    if (!value || value.length <= 0)
        errors.push({ message: message });
}

ValidationContract.prototype.hasValue = (value, message) => {
    if (!value || value == "")
        errors.push({ message: message });
}

ValidationContract.prototype.isHigherZero = (value, message) => {
    if (!value || value > 0)
        errors.push({ message: message });
}

ValidationContract.prototype.hasMinLen = (value, min, message) => {
    if (!value || value.length < min)
        errors.push({ message: message });
}

ValidationContract.prototype.hasMaxLen = (value, max, message) => {
    if (!value || value.length > max)
        errors.push({ message: message });
}

ValidationContract.prototype.isFixedLen = (value, len, message) => {
    if (value.length != len)
        errors.push({ message: message });
}

ValidationContract.prototype.isEmail = (value, message) => {
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(value))
        errors.push({ message: message });
}

ValidationContract.prototype.exists = (value, message) => {
    if (typeof value === 'undefined')
        errors.push({ message: message });
}

ValidationContract.prototype.isValidDate = (value, message) => {
    const dateParseResult = Date.parse(value);
    
    if (dateParseResult <= 0)
        errors.push({ message: message });
}

ValidationContract.prototype.errors = () => { 
    return errors; 
}

ValidationContract.prototype.clear = () => {
    errors = [];
}

ValidationContract.prototype.isValid = () => {
    return errors.length == 0;
}

module.exports = ValidationContract;