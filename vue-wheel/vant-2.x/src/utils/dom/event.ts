import { isServer } from '..';
import { EventHandler } from '../types';

// eslint-disable-next-line import/no-mutable-exports
export let supportsPassive = false;

if (!isServer) {
  try {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
      // eslint-disable-next-line getter-return
      get() {
        /* istanbul ignore next */
        supportsPassive = true;
      },
    });
    window.addEventListener('test-passive', null as any, opts);
    // eslint-disable-next-line no-empty
  } catch (e) {}
}

export function on(
  target: EventTarget,
  event: string,
  handler: EventHandler,
  passive = false
) {
  if (!isServer) {
    target.addEventListener(
      event,
      handler,
      supportsPassive ? { capture: false, passive } : false
    );
  }
}

export function off(target: EventTarget, event: string, handler: EventHandler) {
  if (!isServer) {
    target.removeEventListener(event, handler);
  }
}

export function stopPropagation(event: Event) {
  event.stopPropagation();
}

export function preventDefault(event: Event, isStopPropagation?: boolean) {
  /* istanbul ignore else */
  // wsd: https://developer.mozilla.org/zh-CN/docs/Web/API/Event/cancelable
  /* 
    Event 实例的只读属性 cancelable 表明该事件是否可以被取消，当事件被阻止之后，该事件就好像没有被触发一样。如果事件不能被取消，则其 cancelable 属性的值为 false，且事件发生时无法在事件监听回调中停止事件。
    在许多事件的监听回调中调用preventDefault()前，都需要检查 cancelable 属性的值
  */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}
