/**
 * Traverses a tree using Postorder (Left → Right → Root).
 * Iterative implementation using a stack.
 *
 * @param {TreeNode|null} root
 * @returns {Array}
 */
function postorderTraversal(root) {
    if (!root) return [];

    const traversalResult = [];
    const nodeStack = [root];

    while (nodeStack.length > 0) {
        const currentNode = nodeStack.pop();

        traversalResult.push(currentNode.value);

        // Left is pushed first so right is processed first.
        if (currentNode.left) {
            nodeStack.push(currentNode.left);
        }

        if (currentNode.right) {
            nodeStack.push(currentNode.right);
        }
    }

    return traversalResult.reverse();
}

module.exports = postorderTraversal;
