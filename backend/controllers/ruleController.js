const Rule = require('../models/ruleModel');
const { parseRuleString, evaluateAST } = require('../utils/astUtils');

// Create a new rule
exports.createRule = async (req, res) => {
    try {
        const { ruleString } = req.body;
        const ruleAST = parseRuleString(ruleString); // Parse rule string into AST
        const newRule = new Rule({ ruleAST, ruleString });
        await newRule.save();
        res.json({ success: true, message: 'Rule created', rule: newRule });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Evaluate a rule
exports.evaluateRule = async (req, res) => {
    try {
        const { ruleId, userData } = req.body;
        const rule = await Rule.findById(ruleId);
        if (!rule) throw new Error('Rule not found');
        const result = evaluateAST(rule.ruleAST, userData); // Evaluate the AST based on the updated data
        res.json({ success: true, result });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
