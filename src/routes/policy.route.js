'use strict';

const express = require('express');
const router = express.Router();

//const useSignedContractGet = require('../middlewares/signed-contract.middlewareGet');
const useSignedContract = require('../middlewares/signed-contract.middleware');

const controller = require('../controllers/policy.controller');

//const contractSignedGet = useSignedContractGet();
const contractSigned = useSignedContract();

router.post('/', [contractSigned], controller.post);
router.put('/', [contractSigned], controller.put);

module.exports = router;