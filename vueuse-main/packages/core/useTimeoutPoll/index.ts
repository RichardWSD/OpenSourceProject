import { ref } from 'vue-demi'
import type { Awaitable, MaybeRef, Pausable, TimeoutFnOptions } from '@vueuse/shared'
import { tryOnScopeDispose, useTimeoutFn } from '@vueuse/shared'

export function useTimeoutPoll(fn: () => Awaitable<void>, interval: MaybeRef<number>, timeoutPollOptions?: TimeoutFnOptions): Pausable {
  const { start } = useTimeoutFn(loop, interval)

  const isActive = ref(false)

  async function loop() {
    if (!isActive.value)
      return

    await fn()
    start()
  }

  function resume() {
    if (!isActive.value) {
      isActive.value = true
      loop()
    }
  }

  function pause() {
    isActive.value = false
  }

  if (timeoutPollOptions?.immediate)
    resume()

  tryOnScopeDispose(pause)

  return {
    isActive,
    pause,
    resume,
  }
}
