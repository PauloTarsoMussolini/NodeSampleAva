'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/mutualPolicy.controller');
const useSignedContractGet = require('../middlewares/signed-factory.middlewareGet');

const contractSignedGet = useSignedContractGet();

router.get('/', contractSignedGet, controller.get);

module.exports = router;