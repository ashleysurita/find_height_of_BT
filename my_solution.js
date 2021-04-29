class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function findHeight(root) {
    if(!root) return 0
    return 1 + Math.max(findHeight(root.left), findHeight(root.right))
}

// Test Cases
console.log(findHeight(null)) // 0
console.log(findHeight(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 2
console.log(findHeight(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 4
console.log(findHeight(new TreeNode())) // 1
