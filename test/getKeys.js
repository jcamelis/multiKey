module("Setter and Getter Test Module.");
test( "Simple Getter Setter", function() {
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


