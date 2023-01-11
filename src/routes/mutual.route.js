'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/mutual.controller');
const useSignedContractPost = require('../middlewares/signed-factory.middlewarePost');

const contractSignedPost = useSignedContractPost();

router.post('/', contractSignedPost, controller.post);

module.exports = router;