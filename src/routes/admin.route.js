'use strict';

const express = require('express');
const router = express.Router();

const useUnsignedContract = require('../middlewares/unsigne-factory.middleware');
const createUseContractSignedPost = require('../middlewares/signed-factory.middlewarePost');

const controller = require('../controllers/admin.controller');

const contractUnsigned = useUnsignedContract();
const contractSigned = createUseContractSignedPost();

router.get('/', [contractUnsigned], controller.get);
router.post('/', [contractSigned], controller.post);
router.delete('/', [contractSigned], controller.post);

module.exports = router;