# treeToArray

## Demo

<demo vue="./example.vue" />

## 类型声明

```ts
interface TreeToArrayOptions<T> {
  idKey?: keyof T
  parentKey?: keyof T
  childrenKey?: keyof T
  keepChildren?: boolean
}
declare function treeToArray<T extends Record<string, any>>(tree: T[], options?: TreeToArrayOptions<T>): T[]
```
