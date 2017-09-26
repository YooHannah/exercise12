const assert = require('assert')
console.log(222)
let mod = null
global.define = function (fn) {
  const module = { exports: {} }
  fn(module, module.exports)
  mod = module
}
console.log(111,mod)
describe('loader', function () {
  it('可以通过 define 拿到数据', function () {
    require('../dist/index')
    console.log(mod)
    assert.equal(mod.exports, 'hello world')
  })
})