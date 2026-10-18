/**
 * Represents a single node in a hierarchical structure.
 */
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

module.exports = TreeNode;
