import antlr4 from "antlr4";
import LatexMathVisitor from "./antlr/LatexMathVisitor.js"
import LatexMathParser from "./antlr/LatexMathParser.js"
// This class defines a complete generic visitor for a parse tree produced by LatexMathParser.

const op = "operator";
const cnst = "constant";
const command = "command";
const id = "id";
const func = "function";

export const defaultOptions = {
  //when true, other tex commands will cause errors
  //when false, other tex commands act as if are labeled true in knownCommands
  onlyAllowKnownTexCommands: false,
  knownCommands: {
    "\\sqrt": "sqrt",
    "\\frac": "/",
    "\\sum": true,
    "\\prod": true,
  },
  //when true, other tex identifiers will cause errors
  //when false, other tex identifiers will be acceoted anyways
  onlyAllowKnownTexIdentifiers: false,
  knownIdentifiers: new Set([
    "\\alpha",
    "\\beta",
    "\\gamma",
    "\\phi",
    "\\theta",
    "\\pi",
    "\\tau"
  ]),
};

const alwaysFunctions = {
  "\\sin": "sin",
  "\\cos": "cos",
  "\\tan": "tan",
  "\\csc": "cosec",
  "\\cot": "cotan",
  "\\sec": "sec",
  "\\prod": "product",
  "\\sum": "sum",
  "\\int": "integral"
};

export default class AstBuilderVisitor extends LatexMathVisitor {

  constructor(options) {
    super()
    this.options = {...defaultOptions, ...options};
  }

  visitStart(ctx) {
    return this.visit(ctx.equation());
  }


	visitEquation(ctx) {
    const l = this.visit(ctx.l);
    if (ctx.r === null) {
      return l;
    }
    const r = this.visit(ctx.r);
	  return new Node(op, "=", [l,r]);
	}


	visitExpr(ctx) {
	  return this.visit(ctx.additiveExpression());
	}

  visitFunctionExpression(ctx) {
    if (ctx.skip != null) {
      return this.visit(ctx.skip);
    }
    let funcNode;
    if (ctx.id() != null) {
      funcNode = this.visit(ctx.id());
      funcNode.type += " " + func;
    }
    else { // if ctx.TEXFUNCTION() is not null
      funcNode = new Node(func, alwaysFunctions[ctx.TEXFUNCTION().getText()], null);
      funcNode.sub = ctx.sub != null ? this.visit(ctx.sub) : null;
    }
    if (ctx.sup != null) {
      funcNode.sup = this.visit(ctx.sup);
    }
    funcNode.children = [this.visit(ctx.children[ctx.children.length - 1])];
	  return funcNode;
	}

	visitFactorialExpression(ctx) {
    const child = this.visit(ctx.functionExpression());
    if (ctx.f === null)
      return child
	  return new Node(op, "!", [child]);
	}



	visitExponentialExpression(ctx) {
    const base = this.visit(ctx.factorialExpression());
    if (ctx.texOperand() === null)
      return base;
    const exponent = this.visit(ctx.texOperand());
    return new Node(op, "^", [base, exponent]);
	}


	visitSignExpression(ctx) {
	  const base = this.visit(ctx.exponentialExpression())
    let numberNegativesParity = 0;
    for (let c of ctx.s) {
      numberNegativesParity ^= c.getText() === "-";
    }
    if (numberNegativesParity === 1) {
      return new Node(op, "-", [base]);
    }
    return base;
	}



	visitMultiplicativeExpression(ctx) {
    let children = this.visit(ctx.children);
    let numerator = [];
    let denominator = [];
    let nextTarget = numerator;
    for (let i=0; i<children.length; i++) {
      let child = children[i];
      if (typeof child == "string") {
        if (child == "/") {
          nextTarget = denominator;
        }
        continue;
      }
      if (nextTarget == denominator && child.type.includes(func)) {
        child.inDenominator == true;
      }
      nextTarget.push(child);
      nextTarget = numerator;
    }
    let numeratorNode, denominatorNode;
    if (numerator.length == 1) {
      numeratorNode = numerator[0];
    }
    else {
      numeratorNode = new Node(op, "*", numerator)
    }
    if (denominator.length == 0) {
      return numeratorNode
    }
    else if (denominator.length == 1) {
      denominatorNode = denominator[0];
    }
    else {
      denominatorNode = new Node(op, "*", denominator);
    }
	  return new Node(op, "/", [numeratorNode, denominatorNode]);
	}


	visitAdditiveExpression(ctx) {
    let terms = [this.visit(ctx.e[0])];
    if (ctx.children.length == 1)
      return terms[0];
    for (let i=0; i<ctx.o.length; i++) {
      let child = this.visit(ctx.e[i+1])
      if (ctx.o[i].getText() == "-") {
        //if child already negated, remove negation
        if (child.type == op && child.value == "-") {
          terms.push(child.children[0]);
        }
        else {
          terms.push(new Node(op, "-", [child]));
        }
      }
      else {
        terms.push(child);
      }
    }
	  return new Node(op, "+", terms);
	}



	visitUnit(ctx) {
	  return this.visit(ctx.children[0]);
	}



	visitUnitexpr(ctx) {
	  let inside = this.visit(ctx.expr());
    inside.isInParenthesis = true;
    return inside;
	}



	visitNumber(ctx) {
	  return new Node(cnst, parseFloat(ctx.getText()), null);
	}



	visitCommand(ctx) {
    let children = this.visit(ctx.expr());
    for (let i=0; i<children.length; i++) {
      let child = children[i];
      child.bracketType = ctx.b[i].text;
    }
    let texCommand = ctx.TEXCOMMAND().getText();
    if (texCommand in alwaysFunctions) {
      throw `Function ${texCommand} was used as a command! Try using parenthesis for arguments?`
    }
    let resultNode;
    if (texCommand in this.options.knownCommands) {
      let replacementString = this.options.knownCommands[texCommand];
      if (replacementString === true) {
        resultNode = new Node(command, texCommand, children);
      }
      else {
        resultNode = new Node(op, replacementString, children);
      }
    }
    else if (this.options.onlyAllowKnownTexCommands) {
      throw `Unknown texCommand "${texCommand}" in input`
    }
    else {
      resultNode = new Node(command, texCommand, children);
    }
    return resultNode;
	}



	visitId(ctx) {
	  let name = ctx.name.text;
    if (this.options.onlyAllowKnownTexCommands && name.length>1 && !(name in this.options.knownIdentifiers)) {
      throw `Unknown identifier ${name} in ${ctx.getText()}`
    }
    let sub = ctx.texOperand();
    let node = new Node(id, name, null);
    if (sub != null) {
      node.sub = this.visit(sub);
    }
    node.originalText = ctx.getText();
    return node;
	}


	visitTexOperand(ctx) {
	  if (ctx.CHAR() != null) {
      return new Node(id, ctx.getText(), null);
    }
    if (ctx.DIGIT() != null) {
      return new Node(cnst, parseFloat(ctx.getText()), null)
    }
    return this.visit(ctx.equation());
	}

  // NOT USED
	// visitAddop(ctx) {
	//   return this.visitChildren(ctx);
	// }


	visitMulop(ctx) {
	  return ctx.getText();
	}
}

export class Node {
  constructor(type, value, children) {
    this.type = type;
    this.value = value;
    this.children = children;
  }
}
