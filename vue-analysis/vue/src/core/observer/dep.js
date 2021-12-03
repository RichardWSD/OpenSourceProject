/* @flow */

import type Watcher from './watcher'
import { remove } from '../util/index'

let uid = 0

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
// wsd: 建立数据和watcher之间的桥梁
// 2021-12-03 依赖dep指的是属性，sub指的是视图/计算属性。视图用到了很多的属性（即依赖dep）,当视图更新时又会有这次新的依赖
// 对比两次依赖的列表，可以知道哪些依赖是新增/删除了的。同样需要维护依赖自身所知道哪些视图依赖了自己，当一些视图不再依赖自己的时候
// 把它从subs列表中移除，当依赖自己的值改变的时候就去更新到对应的视图
// Dep只在两个地方可以new，一个是Observe的构造函数内，另一个是defineReactive
export default class Dep {
  static target: ?Watcher; // wsd: 同一时间只会有一个watcher在计算
  id: number;
  subs: Array<Watcher>;

  constructor () {
    this.id = uid++
    this.subs = []
  }

  addSub (sub: Watcher) {
    this.subs.push(sub)
  }

  removeSub (sub: Watcher) {
    remove(this.subs, sub)
  }

  depend () {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  notify () {
    // stabilize the subscriber list first
    const subs = this.subs.slice()
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null
const targetStack = []

export function pushTarget (_target: ?Watcher) {
  if (Dep.target) targetStack.push(Dep.target)
  Dep.target = _target
}

export function popTarget () {
  Dep.target = targetStack.pop()
}
