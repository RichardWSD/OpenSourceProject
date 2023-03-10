import path from 'path'
import { markdownTable } from 'markdown-table'
import { getExportsSize } from 'export-size'
import filesize from 'filesize'
import fs from 'fs-extra'
import { version } from '../package.json'
import { packages } from '../meta/packages'

async function run() {
  // made shared library imported can resolve correctly
  const sharedPkgRoot = path.resolve(__dirname, '..', 'packages/shared')
  const sharedPkgDist = path.resolve(sharedPkgRoot, 'dist')
  await fs.copyFile(path.join(sharedPkgDist, 'index.mjs'), path.join(sharedPkgRoot, 'index.mjs'))

  let md = '# Export size\n\n'

  md += 'generated by [export-size](https://github.com/antfu/export-size)<br>\n'
  md += `version: ${version}<br>\n`
  md += `date: ${new Date().toISOString()}\n\n`

  md += '> Please note this is bundle size for each individual APIs (excluding Vue). '
  md += 'Since we have a lot shared utilities underneath each function, importing two '
  md += 'different functions does NOT necessarily mean the bundle size will be the sum of them (usually smaller). '
  md += 'Depends on the bundler and minifier you use, the final result might vary, this list is for reference only.'
  md += '\n\n'

  for (const pkg of [...packages.slice(1), packages[0]]) {
    const { exports, packageJSON } = await getExportsSize({
      pkg: `./packages/${pkg.name}/dist`,
      output: false,
      bundler: 'rollup',
      external: ['vue-demi', ...(pkg.external || [])],
      includes: ['@vueuse/shared'],
    })

    md += `<kbd>${packageJSON.name}</kbd>\n\n`

    md += markdownTable([
      ['Function', 'min+gzipped'],
      ...exports.map((i) => {
        return [`\`${i.name}\``, filesize(i.minzipped)]
      }),
    ])

    md += '\n\n'
  }
  await fs.removeSync(path.join(sharedPkgRoot, 'index.mjs'))
  await fs.writeFile('packages/export-size.md', md, 'utf-8')
}

run()
