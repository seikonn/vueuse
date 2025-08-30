export interface TreeNode<T> {
  children?: TreeNode<T>[]
  [key: string]: any
}

export interface ArrayToTreeOptions<T> {
  idKey?: keyof T // 默认 'id'
  parentKey?: keyof T // 默认 'parentId'
  childrenKey?: string // 默认 'children'
  rootValue?: any // 默认 null，决定哪些节点是根
}

export function arrayToTree<T extends Record<string, any>>(
  items: T[],
  options: ArrayToTreeOptions<T> = {},
): TreeNode<T>[] {
  const {
    idKey = 'id',
    parentKey = 'parentId',
    childrenKey = 'children',
    rootValue = null,
  } = options

  const map = new Map<any, TreeNode<T>>()
  const roots: TreeNode<T>[] = []

  // 先克隆节点并放到 map
  items.forEach((item) => {
    map.set(item[idKey], { ...item, [childrenKey]: [] })
  })

  // 建立父子关系
  items.forEach((item) => {
    const node = map.get(item[idKey])!
    if (item[parentKey] === rootValue) {
      roots.push(node)
    } else {
      const parent = map.get(item[parentKey])
      if (parent) {
        (parent[childrenKey] as TreeNode<T>[]).push(node)
      }
    }
  })

  return roots
}
