# arrayToTree

## Demo

<demo vue="./example.vue" />

## 类型声明

```ts
interface TreeNode<T> {
  children?: TreeNode<T>[]
  [key: string]: any
}
interface ArrayToTreeOptions<T> {
  idKey?: keyof T
  parentKey?: keyof T
  childrenKey?: string
  rootValue?: any
}
declare function arrayToTree<T extends Record<string, any>>(items: T[], options?: ArrayToTreeOptions<T>): TreeNode<T>[]
```
