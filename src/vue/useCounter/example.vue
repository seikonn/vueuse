<script lang="ts" setup>
import { useCounter } from '.'

const { count, inc, dec } = useCounter()
</script>

<template>
  <div>
    <div>{{ count }}</div>
    <button @click="inc()">Increment</button>
  </div>
</template>

<style lang="scss" scoped>

</style>
