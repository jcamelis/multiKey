multiKey
========

Let you create a multi key array map.


Example:
--------
```javascript
var map = new Multikey();

map.set(['foo', 'var'], 'test1');

map.set(['foo2', 'var'], 'test2');

map.set(['foo', 'var2'], 'test3');

map.get('foo', 'var'); // return 'test1'

map.get('foo2', 'var'); // return 'test2'

map.get('foo', 'var2'); // return 'test3'
```