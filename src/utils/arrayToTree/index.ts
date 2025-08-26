interface ArrayNode {
  id: number
  parentId: number | null
  children?: ArrayNode[]
  [key: string]: any
}
export function arrayToTree(items: ArrayNode[]): ArrayNode[] {
  const map = new Map<number, ArrayNode>()
  const roots: ArrayNode[] = []

  // 先把每个节点放到 map 中
  items.forEach((item) => {
    map.set(item.id, { ...item, children: [] })
  })

  // 建立父子关系
  items.forEach((item) => {
    const node = map.get(item.id)!
    if (item.parentId === null) {
      roots.push(node)
    } else {
      const parent = map.get(item.parentId)
      if (parent) {
        parent.children!.push(node)
      }
    }
  })

  return roots
}
