"use strict";
import antlr4 from "antlr4";
import LatexMathLexer from "./antlr/LatexMathLexer.js";
import LatexMathParser from "./antlr/LatexMathParser.js";
import LatexMathListener from "./antlr/LatexMathListener.js";
import AstBuilderVisitor, {Node} from "./AstBuilderVisitor.js"


export default function parseMath(str) {
  const chars = new antlr4.InputStream(str);
  const lexer = new LatexMathLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new LatexMathParser(tokens);
  parser.removeErrorListeners();
  parser.addErrorListener(new CustomErrorListener());
  parser.buildParseTrees = true;
  const tree = parser.start();
  const v = new AstBuilderVisitor();
  const result = v.visit(tree);
  return result;
}

class CustomErrorListener extends antlr4.error.ErrorListener {
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    if (offendingSymbol.text == "}") {
      throw "Unexpected symbol }. Possibly missing an argument";
    }
    throw "Unexpected symbol " + offendingSymbol.text;
  }
}
