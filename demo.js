const TreeNode = require("./TreeNode");
const preorderTraversal = require("./preorderTraversal");
const postorderTraversal = require("./postorderTraversal");

// Example hierarchy
const hierarchy = new TreeNode(
    "CEO",
    new TreeNode(
        "Engineering",
        new TreeNode("Backend"),
        new TreeNode("Frontend")
    ),
    new TreeNode(
        "Sales",
        new TreeNode("Domestic"),
        new TreeNode("International")
    )
);

console.log("Preorder Traversal:");
console.log(preorderTraversal(hierarchy));

console.log("\nPostorder Traversal:");
console.log(postorderTraversal(hierarchy));
