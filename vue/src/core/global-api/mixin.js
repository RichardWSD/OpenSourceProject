/* @flow */

import { mergeOptions } from '../util/index'

export function initMixin (Vue: GlobalAPI) {
  Vue.mixin = function (mixin: Object) {
    // wsd: 把全局的Mixin的options合并到Vue options
    this.options = mergeOptions(this.options, mixin)
    return this
  }
}
