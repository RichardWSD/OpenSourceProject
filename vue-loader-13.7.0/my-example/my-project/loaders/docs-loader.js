module.exports = function (source, map) {
  console.log('====>', this.callback);
  this.callback(
    null,
    `export default function (Component) {
      Component.options.__docs = ${
        JSON.stringify(source)
      }
    }`,
    map
  )
}