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
  parser.buildParseTrees = true;
  const tree = parser.start();
  const v = new AstBuilderVisitor();
  const result = v.visit(tree);
  return result;
}

if (process.argv[2]) {
  console.log(parseMath);
  setInterval(() => {1}, 1 << 10);
}
