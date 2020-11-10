/* @flow */

import { baseOptions } from './options'
import { createCompiler } from 'compiler/index'

// wsd: 使用函数柯里化技巧很好的实现了 baseOptions 的参数保留
const { compile, compileToFunctions } = createCompiler(baseOptions)

export { compile, compileToFunctions }
