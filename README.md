multiKey
========

Let you create a multi key array map.


Example: Setter and Getter
--------------------------
```javascript
var map = new Multikey();

map.set(['foo', 'var'], 'test1');

map.set(['foo2', 'var'], 'test2');

map.set(['foo', 'var2'], 'test3');

map.get('foo', 'var'); // return 'test1'

map.get('foo2', 'var'); // return 'test2'

map.get('foo', 'var2'); // return 'test3'
```

Methods:
--------

set([arg1[, arg2 [, argN]]], value);
```javascript
var map = new Multikey();

map.set(['foo', 'var'], 'value1');

```

get(arg1[, arg2 [, argN ] ]);
```javascript
var map = new Multikey();

map.get('foo', 'var'); // returns 'value1'
```

each(callback);
```javascript
var map = new Multikey();

map.each(function(index, mapItem){
	//your script
});
```

getKeys();
```javascript
var map = new Multikey();

map.set(['foo', 'var'], 'value1');

map.set(['foo1', 'var1'], 'value2');

map.set(['foo2', 'var3'], 'value3');

mar.getKeys(); // returns ['foo', 'foo1', 'foo2']
```
