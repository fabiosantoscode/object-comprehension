const assert = require('assert').strict || require('assert')
const oc = require('.')

assert.deepEqual(oc([1,2,3], item => [item, item]), {
  1: 1,
  2: 2,
  3: 3
})
