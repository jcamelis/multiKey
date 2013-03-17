java -jar scripts/compiler.jar --js jcamelis.multiKey.js --js_output_file jcamelis.multiKey.min.js

cat license.txt >> temp.txt
cat jcamelis.multiKey.min.js >> temp.txt
cat temp.txt > jcamelis.multiKey.min.js

rm temp.txt