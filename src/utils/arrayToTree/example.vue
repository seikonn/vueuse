<script setup lang="ts">
import { arrayToTree } from '@seikonn/easyuse'

const items = [
  { id: 1, parentId: null, name: 'root' },
  { id: 2, parentId: 1, name: 'child1' },
  { id: 3, parentId: 1, name: 'child2' },
  { id: 4, parentId: 2, name: 'grandchild1' },
]
const tree = arrayToTree(items, {
  idKey: 'id',
  parentKey: 'parentId',
  childrenKey: 'nodes', // 改名为 nodes
  rootValue: null,
})
</script>

<template>
  <div>
    <h3>input:</h3>
    <pre>{{ JSON.stringify(items, null, 4) }}</pre>
    <h3>output:</h3>
    <pre>{{ JSON.stringify(tree, null, 4) }}</pre>
  </div>
</template>
