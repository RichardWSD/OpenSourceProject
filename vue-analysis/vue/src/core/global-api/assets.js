/* @flow */

import { ASSET_TYPES } from 'shared/constants'
import { isPlainObject, validateComponentName } from '../util/index'

export function initAssetRegisters (Vue: GlobalAPI) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(type => {
    Vue[type] = function (
      id: string,
      definition: Function | Object
    ): Function | Object | void {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && type === 'component') {
          // wsd: 对组件名进行校验
          validateComponentName(id)
        }
        if (type === 'component' && isPlainObject(definition)) {
          // wsd: 没有定义name的话就以id为准
          definition.name = definition.name || id
          definition = this.options._base.extend(definition)
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition }
        }
        // wsd: 异步组件会走到这里，把工厂函数定义赋值
        this.options[type + 's'][id] = definition
        return definition
      }
    }
  })
}
