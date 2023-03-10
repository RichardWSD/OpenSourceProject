import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

// wsd: 这些都是挂载一些方法到Vue原型上
initMixin(Vue)
stateMixin(Vue)
// wsd：组件事件系统实现
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
