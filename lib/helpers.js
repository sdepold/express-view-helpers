var helpers = {
  linkTo: function(text, url) {
    return "<a href='" + url + "'>" + text + "</a>"
  },
  cssTag: function(path) {
    return "<link rel='stylesheet' href='" + path + "' type='text/css' charset='utf-8'>"
  },
  jsTag: function(path) {
    return "<script type='text/javascript' src='" + path + "' charset='utf-8'></script>"
  },
  label: function(name, text) {
    return "<label for='" + name + "'>" + text + "</label>"
  },
  submitTag: function(text) {
    return "<input type='submit' value='" + text + "'>"
  },
  imageTag: function(src, alt) {
    return "<img src='" + src + "' alt='" + alt + "' />"
  },
  require: require
}

var injectInputHelper = function(helperName, type) {
  helpers[helperName] = function(name, value, options) {
    options = options || {}
    
    var result = "<input type='" + type + "' name='" + name + "'"
    
    if(options.id)
      result += " id='" + options.id + "'"
    
    return result + ">"
  }
}

var types = ['text', 'password']
types.forEach(function(type) { injectInputHelper(type + 'Field', type) })

module.exports = helpers