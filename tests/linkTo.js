var helpers = require('../')
  , assert  = require("assert")

assert.equal(helpers.linkTo('text', '/'), "<a href='/'>text</a>")
assert.equal(helpers.linkTo('text', '/', {style: 'font-weight: bold'}), "<a style='font-weight: bold' href='/'>text</a>")