# useCounter

## Demo

<demo vue="./example.vue" />

## 类型声明

```ts
interface UseCounterOptions {
  min?: number
  max?: number
}
interface UseCounterReturn {
  /**
   * The current value of the counter.
   */
  readonly count: Readonly<Ref<number>>
  /**
   * Increment the counter.
   *
   * @param {number} [delta=1] The number to increment.
   */
  inc: (delta?: number) => void
  /**
   * Decrement the counter.
   *
   * @param {number} [delta=1] The number to decrement.
   */
  dec: (delta?: number) => void
  /**
   * Get the current value of the counter.
   */
  get: () => number
  /**
   * Set the counter to a new value.
   *
   * @param val The new value of the counter.
   */
  set: (val: number) => void
  /**
   * Reset the counter to an initial value.
   */
  reset: (val?: number) => number
}
/**
 * Basic counter with utility functions.
 *
 * @param [initialValue]
 * @param options
 */
declare function useCounter(initialValue?: MaybeRef<number>, options?: UseCounterOptions): {
  count: any
  inc: (delta?: number) => number
  dec: (delta?: number) => number
  get: () => any
  set: (val: number) => number
  reset: (val?: any) => number
}
```
