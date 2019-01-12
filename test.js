function getTag(type) {
  Object.prototype.toString.call(type).slice(7,-1).toLowerCase()
}
const config = {
  'number': 'number',
  'string': 'string',
  'boolean': 'boolean'
}
const a = 1
console.log(config[getTag(a)])