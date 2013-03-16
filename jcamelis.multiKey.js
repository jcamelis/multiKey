/**
* @autor jcamelis at gmail.com
* @github https://github.com/jcamelis/multiKey
* @website http://jquerylab.com.ar	
*/
(function(){
	function MultiKey() {
		this.keys = {};
		this.value = null;
	}

	MultiKey.prototype.set = function(args, value) {
		var key = args.shift();
		if (!this.keys[key]) {
			this.keys[key] = new MultiKey(1);
		}
		if (args.length) {
			this.keys[key].set(args, value);	
		} else {
			this.keys[key].value = value;
		}
	}

	MultiKey.prototype.get = function() {
		if (!arguments.length) return null;
		var args = [];
		for (var i = 0; i < arguments.length; i++) {
			args.push(arguments[i]);
		}
		var key = args.shift();
		if (key && this.keys[key]) {
			return this.keys[key].get(args);
		}
		return this.value || this;
	}

	MultiKey.prototype.each = function(callback) {
		if (typeof callback !== 'function') return;
		var i = 0;
		for (var key in this.keys) {
			callback.apply(this.keys[key],[i, key]);
			i++;
		}
	}

	MultiKey.prototype.getKeys = function(callback) {
		var tmp = [];
		for (var key in this.keys) {
			tmp.push(key)
		}
		return tmp;
	}

window.MultiKey = MultiKey;
}());