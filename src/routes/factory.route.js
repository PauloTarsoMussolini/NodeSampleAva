'use strict';

const express = require('express');
const router = express.Router();

const createUseContractSignedPost = require('../middlewares/signed-factory.middlewarePost');
const controller = require('../controllers/factory.controller');

const contractSigned = createUseContractSignedPost();

router.post('/', [contractSigned], controller.post);

module.exports = router;