# find_height_of_BT

### Problem:
Javascript
```
class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function findHeight(root) {
    // Write your code here.
    return -1
}

// Test Cases
console.log(findHeight(null)) // 0
console.log(findHeight(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 2
console.log(findHeight(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 4
console.log(findHeight(new TreeNode())) // 1
```

Python
```
class TreeNode:
    def __init__(self, value = 0, left = None, right = None):
        self.value = value
        self.left = left
        self.right = right

def findHeight(root: TreeNode) -> int:
    # Write your code here.
    pass

# Test Cases
print(findHeight(None)) # 0
print(findHeight(TreeNode(1, TreeNode(2), TreeNode(3)))) # 2
print(findHeight(TreeNode(2, TreeNode(29, TreeNode(26)), TreeNode(4, None, TreeNode(2, TreeNode(9)))))) # 4
print(findHeight(TreeNode())) # 1
```
