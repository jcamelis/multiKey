test( "Each Iterator", function() {
  var firstKey1 = 'foo1';
  var firstKey2 = 'foo2';
  var firstKey3 = 'foo3';
  var secondKey1 = 'var1';
  var secondKey2 = 'var2';
  var secondKey3 = 'var3';
  var values = ['test0', 'test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8'];
  var map = new MultiKey();
  map.set([firstKey1, secondKey1], values[0]);
  map.set([firstKey1, secondKey2], values[1]);
  map.set([firstKey1, secondKey3], values[2]);
  map.set([firstKey2, secondKey1], values[3]);
  map.set([firstKey2, secondKey2], values[4]);
  map.set([firstKey2, secondKey3], values[5]);
  map.set([firstKey3, secondKey1], values[6]);
  map.set([firstKey3, secondKey2], values[7]);
  map.set([firstKey3, secondKey3], values[8]);
  var i = 0;
  map.each(function(){
    this.each(function(){
        ok( values[i] === this.value, "Passed!" );
        i++;
    });
  });
  
  
});

