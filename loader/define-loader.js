module.exports = function(source){
	if (~this.request.indexOf('webpack\\buildin\\global.js')) {
		return source
	}else{
		return `
  global.define(function (module,exports){
   		${source}
   	})
   `
	}
}