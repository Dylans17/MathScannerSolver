#!/bin/bash
java -Xmx500M -cp "./antlr-4.9.3-complete.jar" org.antlr.v4.Tool -o ./antlr -visitor LatexMath.g4
javac ./antlr/*.java
java -Xmx500M -cp "./antlr-4.9.3-complete.jar" org.antlr.v4.Tool -Dlanguage=JavaScript -o ./antlr -visitor LatexMath.g4
