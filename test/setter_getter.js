test( "Simple Getter Setter", function() {
  var firstKey = 'foo';
  var secondKey = 'var';
  var value = 'test1';
  var map = new MultiKey();
  map.set([firstKey, secondKey], value);
  ok( value == map.get(firstKey, secondKey), "Passed!" );
});

test( "Re-write Getter Setter", function() {
  var key1 = 'foo';
  var key2 = 'var';
  var value = 'test1';
  var map = new MultiKey();
  map.set([key1, key2], value);
  
  var newValue = 'test new Value'; 
  
  map.set([key1, key2], newValue);
  
  ok( newValue == map.get(key1, key2), "Passed!" );
});

test( "Multiples First Key Getter Setter", function() {
  var firstKey1 = 'foo1';
  var firstKey2 = 'foo2';
  var secondKey = 'var';

  var value1 = 'test2';
  var value2 = 'test2';
  var map = new MultiKey();
  map.set([firstKey1, secondKey], value1);
  map.set([firstKey2, secondKey], value2);
  
  ok( value1 == map.get(firstKey1, secondKey), "Passed!" );
  ok( value2 == map.get(firstKey2, secondKey), "Passed!" );
});

test( "Multiples Second Key Getter Setter", function() {
  var fisrtKey = 'foo';
  var secondKey1 = 'var1';
  var secondKey2 = 'var2';
  var value1 = 'test1';
  var value2 = 'test2';
  var map = new MultiKey();
  map.set([fisrtKey, secondKey1], value1);
  map.set([fisrtKey, secondKey2], value2);
  
  ok( value1 == map.get(fisrtKey, secondKey1), "Passed!" );
  ok( value2 == map.get(fisrtKey, secondKey2), "Passed!" );
});

test( "Multiples Keys Getter Setter", function() {
  var fisrtKey1 = 'foo1';
  var fisrtKey2 = 'foo2';
  var secondKey1 = 'var1';
  var secondKey2 = 'var2';
  var value1 = 'test1';
  var value2 = 'test2';
  var value3 = 'test3';
  var value4 = 'test4';
  var map = new MultiKey();
  map.set([fisrtKey1, secondKey1], value1);
  map.set([fisrtKey2, secondKey1], value2);
  map.set([fisrtKey1, secondKey2], value3);
  map.set([fisrtKey2, secondKey2], value4);
  
  ok( value1 == map.get(fisrtKey1, secondKey1), "Passed!" );
  ok( value2 == map.get(fisrtKey2, secondKey1), "Passed!" );
  ok( value3 == map.get(fisrtKey1, secondKey2), "Passed!" );
  ok( value4 == map.get(fisrtKey2, secondKey2), "Passed!" );
});
