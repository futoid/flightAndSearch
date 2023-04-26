const express = require("express");
const router = express.Router();

const apiv1Router = require("./v1/index");

router.use('/v1' , apiv1Router);

module.exports = router;

