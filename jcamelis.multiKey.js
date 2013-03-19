/**
* @autor jcamelis at gmail.com
* @github https://github.com/jcamelis/multiKey
* @website http://jquerylab.com.ar
*/
(function(){
	/**
	 * @constructor
	 * @returns {void}
	 */
	function MultiKey() {
		this.keys = {};
		this.value = null;
	}
	/**
	 * @public 
	 * @param {array} args
	 * @param {Object} value
	 * @returns {this} Return this to allow chainning
	 */
	MultiKey.prototype.set = function(args, value) {
		var key = args.shift();
		if (!this.keys[key]) {
			this.keys[key] = new MultiKey();
		}
		if (args.length) {
			this.keys[key].set(args, value);	
		} else {
			this.keys[key].value = value;
		}
		return this;
	};
	/**
	 * @public
	 * @returns {value || Multikey instance}
	 */
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
	};
	/**
	 * @public 
	 * @param {function} callback
	 * @returns {void}
	 */
	MultiKey.prototype.each = function(callback) {
		if (typeof callback !== 'function') return;
		var i = 0;
		for (var key in this.keys) {
			callback.apply(this.keys[key],[i, key]);
			i++;
		}
	};
	/**
	 * @todo implements order
	 * @param {String} order
	 * @returns {Array}
	 */
	MultiKey.prototype.getKeys = function(order) {
		var tmp = [];
		for (var key in this.keys) {
			tmp.push(key);
		}
		return tmp;
	};
	/**
	 * 
	 * @returns {Object} key | value
	 */
	MultiKey.prototype.makeArray = function() {
		var result = {};
		if (!this.getKeys().length) {
			result = this.value;
		} else {
			this.each(function(index, key){
				result[key] = this.makeArray();
			});
		}
		return result;
	};

	window.MultiKey = function(keys, value) {
		var map = new MultiKey();
		if (keys && keys.length && value) {
			map.set(keys, value);
		}
		return map;
	};
}());