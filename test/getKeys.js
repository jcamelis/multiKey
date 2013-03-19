module("getKeys Test Module.");
test( "getKeys First Level", function() {
	var map = MultiKey();
	
	var firstKeyArray = ['foo1', 'foo2', 'foo3'];
	
	var firstKey1 = firstKeyArray[0];
	var firstKey2 = firstKeyArray[1];
	var firstKey3 = firstKeyArray[2];

	map.set([firstKey1, 'var1'], 'test0');
	map.set([firstKey2, 'var2'], 'test1');
	map.set([firstKey3, 'var3'], 'test2');

	deepEqual(map.getKeys(), firstKeyArray, "Passed!");
});
test( "getKeys Second Level", function() {
	var map = MultiKey();
	
	var secondKeyArray = ['foo1', 'foo2', 'foo3'];
	
	var firstKey = 'foo';
	var secondKey1 = secondKeyArray[0];
	var secondKey2 = secondKeyArray[1];
	var secondKey3 = secondKeyArray[2];

	map.set([firstKey, secondKey1], 'test0');
	map.set([firstKey, secondKey2], 'test1');
	map.set([firstKey, secondKey3], 'test2');

	deepEqual(map.get(firstKey).getKeys(), secondKeyArray, "Passed!");
});


