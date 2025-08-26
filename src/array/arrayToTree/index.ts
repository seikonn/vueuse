import { TreeNode } from "@/common";


export function arrayToTree(items: TreeNode[]): TreeNode[] {
  const map = new Map<number, TreeNode>();
  const roots: TreeNode[] = [];

  // 先把每个节点放到 map 中
  items.forEach((item) => {
    map.set(item.id, { ...item, children: [] });
  });

  // 建立父子关系
  items.forEach((item) => {
    const node = map.get(item.id)!;
    if (item.parentId === null) {
      roots.push(node);
    } else {
      const parent = map.get(item.parentId);
      if (parent) {
        parent.children!.push(node);
      }
    }
  });

  return roots;
}
