const express = require('express');
const { submitRSVP } = require('../controllers/rsvpController');
const router = express.Router();

router.post('/:eventId', submitRSVP);

module.exports = router;