class ASTNode {
    constructor(type, left = null, right = null, value = null) {
        this.type = type;
        this.left = left;
        this.right = right;
        this.value = value;
    }
}

// Parse rule string into an AST (e.g., "age > 30 AND income > 50000 AND department == 'HR'")
const parseRuleString = (ruleString) => {
    // Example: Parse ruleString and construct the corresponding AST manually for now
    // Example string: "age > 30 AND income > 50000 AND spend < 1000 AND department == 'HR'"
    const ruleAST = new ASTNode('AND',
        new ASTNode('AND',
            new ASTNode('>', null, null, { key: 'age', value: 30 }),
            new ASTNode('>', null, null, { key: 'income', value: 50000 })
        ),
        new ASTNode('AND',
            new ASTNode('<', null, null, { key: 'spend', value: 1000 }),
            new ASTNode('==', null, null, { key: 'department', value: 'HR' })
        )
    );
    return ruleAST;
};

// Evaluate AST against user data
const evaluateAST = (node, data) => {
    if (node.type === 'AND') {
        return evaluateAST(node.left, data) && evaluateAST(node.right, data);
    } else if (node.type === '>') {
        return data[node.value.key] > node.value.value;
    } else if (node.type === '<') {
        return data[node.value.key] < node.value.value;
    } else if (node.type === '==') {
        return data[node.value.key] === node.value.value;
    }
    // Handle other operators (like OR) as needed
};

module.exports = { parseRuleString, evaluateAST };
