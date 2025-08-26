interface TreeNode {
  id: number
  parentId: number | null
  children?: TreeNode[]
  [key: string]: any
}

export function treeToArray(tree: TreeNode[]): TreeNode[] {
  const result: TreeNode[] = []

  function traverse(nodes: TreeNode[], parentId: number | null) {
    nodes.forEach((node) => {
      const { children, ...rest } = node
      result.push({ ...rest, parentId })

      if (children && children.length > 0) {
        traverse(children, node.id)
      }
    })
  }

  traverse(tree, null)
  return result
}
