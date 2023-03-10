<template>
  <slot :handle-keydown="onKeydown" />
</template>
<script lang="ts">
import {
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  unref,
  watch,
} from 'vue'
import { EVENT_CODE } from '@element-plus/constants'
import { isString } from '@element-plus/utils'
import {
  focusFirstDescendant,
  focusableStack,
  getEdges,
  obtainAllFocusableElements,
  tryFocus,
} from './utils'
import {
  FOCUS_AFTER_RELEASED,
  FOCUS_AFTER_TRAPPED,
  FOCUS_AFTER_TRAPPED_OPTS,
  FOCUS_TRAP_INJECTION_KEY,
  ON_RELEASE_FOCUS_EVT,
  ON_TRAP_FOCUS_EVT,
} from './tokens'

import type { PropType } from 'vue'
import type { FocusLayer } from './utils'

export default defineComponent({
  name: 'ElFocusTrap',
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object as PropType<HTMLElement>,
    focusStartEl: {
      type: [Object, String] as PropType<'container' | 'first' | HTMLElement>,
      default: 'first',
    },
  },
  emits: [ON_TRAP_FOCUS_EVT, ON_RELEASE_FOCUS_EVT],
  setup(props, { emit }) {
    const forwardRef = ref<HTMLElement | undefined>()
    let lastFocusBeforeMounted: HTMLElement | null
    let lastFocusAfterMounted: HTMLElement | null

    const focusLayer: FocusLayer = {
      paused: false,
      pause() {
        this.paused = true
      },
      resume() {
        this.paused = false
      },
    }

    const onKeydown = (e: KeyboardEvent) => {
      if (!props.loop && !props.trapped) return
      if (focusLayer.paused) return

      const { key, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e
      const { loop } = props
      const isTabbing =
        key === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey

      const currentFocusingEl = document.activeElement
      if (isTabbing && currentFocusingEl) {
        const container = currentTarget as HTMLElement
        const [first, last] = getEdges(container)
        const isTabbable = first && last

        if (!isTabbable) {
          if (currentFocusingEl === container) e.preventDefault()
        } else {
          if (!shiftKey && currentFocusingEl === last) {
            e.preventDefault()
            if (loop) tryFocus(first, true)
          } else if (
            shiftKey &&
            [first, container].includes(currentFocusingEl as HTMLElement)
          ) {
            e.preventDefault()
            if (loop) tryFocus(last, true)
          }
        }
      }
    }

    provide(FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef,
      onKeydown,
    })

    watch(
      () => props.focusTrapEl,
      (focusTrapEl) => {
        if (focusTrapEl) {
          forwardRef.value = focusTrapEl
        }
      },
      { immediate: true }
    )

    const trapOnFocus = (e: Event) => {
      emit(ON_TRAP_FOCUS_EVT, e)
    }
    const releaseOnFocus = (e: Event) => emit(ON_RELEASE_FOCUS_EVT, e)
    const onFocusIn = (e: Event) => {
      const trapContainer = unref(forwardRef)
      if (focusLayer.paused || !trapContainer) return
      const target = e.target as HTMLElement | null
      if (target && trapContainer.contains(target)) {
        lastFocusAfterMounted = target
      } else {
        tryFocus(lastFocusAfterMounted, true)
      }
    }

    const onFocusOut = (e: Event) => {
      const trapContainer = unref(forwardRef)
      if (focusLayer.paused || !trapContainer) return

      if (
        !trapContainer.contains(
          (e as FocusEvent).relatedTarget as HTMLElement | null
        )
      ) {
        tryFocus(lastFocusAfterMounted, true)
      }
    }

    async function startTrap() {
      // Wait for forwardRef to resolve
      await nextTick()
      const trapContainer = unref(forwardRef)
      if (trapContainer) {
        focusableStack.push(focusLayer)
        const prevFocusedElement = document.activeElement
        lastFocusBeforeMounted = prevFocusedElement as HTMLElement | null
        const isPrevFocusContained = trapContainer.contains(prevFocusedElement)
        if (!isPrevFocusContained) {
          const focusEvent = new Event(
            FOCUS_AFTER_TRAPPED,
            FOCUS_AFTER_TRAPPED_OPTS
          )
          trapContainer.addEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus)
          trapContainer.dispatchEvent(focusEvent)
          if (!focusEvent.defaultPrevented) {
            nextTick(() => {
              if (!isString(props.focusStartEl)) {
                tryFocus(props.focusStartEl)
              } else if (props.focusStartEl === 'first') {
                focusFirstDescendant(
                  obtainAllFocusableElements(trapContainer),
                  true
                )
              }
              if (
                document.activeElement === prevFocusedElement ||
                props.focusStartEl === 'container'
              ) {
                tryFocus(trapContainer)
              }
            })
          }
        }
      }
      document.addEventListener('focusin', onFocusIn)
      document.addEventListener('focusout', onFocusOut)
    }

    function stopTrap() {
      document.removeEventListener('focusin', onFocusIn)
      document.removeEventListener('focusout', onFocusOut)
      const trapContainer = unref(forwardRef)

      if (trapContainer) {
        trapContainer.removeEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus)

        const releasedEvent = new Event(
          FOCUS_AFTER_RELEASED,
          FOCUS_AFTER_TRAPPED_OPTS
        )
        trapContainer.addEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus)
        trapContainer.dispatchEvent(releasedEvent)

        if (!releasedEvent.defaultPrevented) {
          tryFocus(lastFocusBeforeMounted ?? document.body, true)
        }

        trapContainer.removeEventListener(FOCUS_AFTER_RELEASED, trapOnFocus)
        focusableStack.remove(focusLayer)
      }
    }

    onMounted(() => {
      if (props.trapped) {
        startTrap()
      }

      watch(
        () => props.trapped,
        (trapped) => {
          if (trapped) {
            startTrap()
          } else {
            stopTrap()
          }
        }
      )
    })

    onBeforeUnmount(() => {
      if (props.trapped) {
        stopTrap()
      }
    })

    return {
      onKeydown,
    }
  },
})
</script>
