<script setup lang="ts">
import { treeToArray } from '@seikonn/easyuse'

const tree = [
  {
    id: 1,
    parentId: null,
    name: 'root',
    children: [
      { id: 2, parentId: 1, name: 'child1' },
      { id: 3, parentId: 1, name: 'child2' },
    ],
  },
]
const array = treeToArray(tree, {
  childrenKey: 'children',
  keepChildren: false,
})
</script>

<template>
  <div>
    <h3>input:</h3>
    <pre>{{ JSON.stringify(tree, null, 4) }}</pre>
    <h3>output:</h3>
    <pre>{{ JSON.stringify(array, null, 4) }}</pre>
  </div>
</template>
