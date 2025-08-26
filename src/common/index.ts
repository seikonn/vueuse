export interface TreeNode {
  id: number;
  parentId: number | null;
  name: string;
  children?: TreeNode[];
}