var helpers = require('../')
  , assert  = require("assert")
  
assert.equal(
  helpers.cssTag('foo.css'),
  "<link rel='stylesheet' href='foo.css' type='text/css' charset='utf-8'>"
)

assert.equal(
  helpers.cssTag('foo.css', {style: 'font-weight: bold'}),
  "<link style='font-weight: bold' rel='stylesheet' href='foo.css' type='text/css' charset='utf-8'>"
)

assert.equal(
  helpers.cssTag('foo.css', {href: 'bar.css'}),
  "<link href='foo.css' rel='stylesheet' type='text/css' charset='utf-8'>"
)