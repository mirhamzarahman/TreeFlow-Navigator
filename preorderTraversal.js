/**
 * Traverses a tree using Preorder (Root → Left → Right).
 * Iterative implementation using a stack.
 *
 * @param {TreeNode|null} root
 * @returns {Array}
 */
function preorderTraversal(root) {
    if (!root) return [];

    const visitedNodes = [];
    const nodeStack = [root];

    while (nodeStack.length > 0) {
        const currentNode = nodeStack.pop();

        visitedNodes.push(currentNode.value);

        // Right is pushed first so left is processed first.
        if (currentNode.right) {
            nodeStack.push(currentNode.right);
        }

        if (currentNode.left) {
            nodeStack.push(currentNode.left);
        }
    }

    return visitedNodes;
}

module.exports = preorderTraversal;
