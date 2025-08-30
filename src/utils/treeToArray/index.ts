export interface TreeToArrayOptions<T> {
  idKey?: keyof T // 默认 'id'
  parentKey?: keyof T // 默认 'parentId'
  childrenKey?: keyof T // 默认 'children'
  keepChildren?: boolean // 是否保留 children 字段，默认 false
}

export function treeToArray<T extends Record<string, any>>(
  tree: T[],
  options: TreeToArrayOptions<T> = {},
): T[] {
  const {
    idKey = 'id',
    parentKey = 'parentId',
    childrenKey = 'children',
    keepChildren = false,
  } = options

  const result: T[] = []

  function traverse(nodes: T[], parentId: any) {
    nodes.forEach((node) => {
      const { [childrenKey]: children, ...rest } = node
      const flatNode = {
        ...rest,
        [parentKey]: parentId,
        ...(keepChildren ? { [childrenKey]: children } : {}),
      } as T

      result.push(flatNode)

      if (children && Array.isArray(children) && children.length > 0) {
        traverse(children, node[idKey])
      }
    })
  }

  traverse(tree, null)
  return result
}
