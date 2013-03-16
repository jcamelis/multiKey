java -jar scripts/compiler.jar --js jcamelis.multiKey.js --js_output_file jcamelis.multiKey.js.min.js

cat license.txt >> temp.txt
cat jcamelis.multiKey.js.min.js >> temp.txt
cat temp.txt > jcamelis.multiKey.js.min.js

rm temp.txt