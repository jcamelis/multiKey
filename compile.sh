if [ ! -f scripts/compiler.jar ]
then
    echo Downloading Closure Compiler
    wget http://closure-compiler.googlecode.com/files/compiler-latest.zip
    unzip compiler-latest.zip compiler.jar -d scripts/
    rm compiler-latest.zip
fi

echo Compiling and Minifying with Closure Compiler
java -jar scripts/compiler.jar --js jcamelis.multiKey.js --js_output_file jcamelis.multiKey.min.js

cat license.txt >> temp.txt
cat jcamelis.multiKey.min.js >> temp.txt
cat temp.txt > jcamelis.multiKey.min.js

rm temp.txt