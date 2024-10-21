const express = require('express');
const { createRule, evaluateRule } = require('../controllers/ruleController');
const router = express.Router();

// Create a new rule
router.post('/create', createRule);

// Evaluate a rule
router.post('/evaluate', evaluateRule);

module.exports = router;
