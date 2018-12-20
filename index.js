'use strict'

module.exports = function(items, transformer) {
  var out = {}
  if (Object.fromEntries) {
    return Object.fromEntries(items.map(transformer))
  }
  items.forEach(function(item) {
    var transformed = transformer(item)
    out[transformed[0]] = transformed[1]
  })
  return out
}
