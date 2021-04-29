class TreeNode:
    def __init__(self, value = 0, left = None, right = None):
        self.value = value
        self.left = left
        self.right = right

def findHeight(root: TreeNode) -> int:
    if not root:
        return 0
    return 1 + max(findHeight(root.left), findHeight(root.right))

# Test Cases
print(findHeight(None)) # 0
print(findHeight(TreeNode(1, TreeNode(2), TreeNode(3)))) # 2
print(findHeight(TreeNode(2, TreeNode(29, TreeNode(26)), TreeNode(4, None, TreeNode(2, TreeNode(9)))))) # 4
print(findHeight(TreeNode())) # 1
