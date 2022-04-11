"use strict";


const approxEvaluateFunctions = {
  operatorFunctions: {
    "=" : function(node, symTab) {
      // TODO: account for approximation errors
      return approxEvaluate(node.children[0], symTab) == approxEvaluate(node.children[1], symTab);
    },
    "sqrt" : function(node, symTab) {
      let power = 2;
      let innerNode = node.children[0];
      if (innerNode.bracketType == "[") {
        power = approxEvaluate(innerNode, symTab);
        innerNode = node.children[1];
      }
      let innerValue = approxEvaluate(innerNode, symTab);
      return Math.pow(innerValue, 1/power);
    },
    "!" : function(node, symTab) {
      //TODO: Implement or import gamma function for factorial
      let innerValue = Math.round(approxEvaluate(node.children[0], symTab));
      let result = 1;
      for (let i = 2; i <= innerValue; i++) {
        result *= i;
      }
      return result;
    },
    "^" : function(node, symTab) {
      return Math.pow(approxEvaluate(node.children[0], symTab), approxEvaluate(node.children[1], symTab));
    },
    "*" : function(node, symTab) {
      let result = 1;
      for (let childResult of approxEvaluate(node.children, symTab)) {
        result *= childResult
      };
      return result;
    },
    "/" : function(node, symTab) {
      return approxEvaluate(node.children[0], symTab) / approxEvaluate(node.children[1], symTab);
    },
    "+" : function(node, symTab) {
      let result = 0;
      for (let childResult of approxEvaluate(node.children, symTab)) {
        result += childResult
      };
      return result;
    },
    "-" : function(node, symTab) {
      return -approxEvaluate(node.children[0], symTab);
    }
  },
  "operator" : function(node, symTab) {
    if (approxEvaluateFunctions.operatorFunctions[node.value] != undefined) {
      return approxEvaluateFunctions.operatorFunctions[node.value](node, symTab);
    }
    throw "Unknown operator type: " + node.value;
  },
  "constant" : function(node, symTab) {
    return node.value;
  },
  "command" : function(node, symTab) {
    throw node.type + "command not implemented";
  },
  "id" : function(node, symTab) {
    // TODO:
    if (false && node.value in symTab /*&& value is known*/) {
      return that.value;
    }
    throw "Unknown Variable " + node.value + " in expression!";
  },
  "id function" : function(node, symTab) {
    // TODO:
    if (false && node.value in symTab /*&& value is function*/) {
      return that.evauluate;
    }
    else if (false && node.value in symTab /*&& value is known*/) {
      return that.value;
    }
    throw "Unknown Variable " + node.value + " in expression!";
  },
  functionMethods : {
    genericFunction: function(node, symTab, func, powFunc=Math.pow) {
      if (node.sub != null) {
        throw " cannot have a subscript! " + node.sub;
      }
      let innerValue = func(approxEvaluate(node.children[0]));
      if (node.sup != undefined) {
        return powFunc(innerValue, approxEvaluate(node.sup, symTab));
      }
      return innerValue;
    },
    "sin" : function(node, symTab) {
      return approxEvaluateFunctions.functionMethods.genericFunction(node, symTab, Math.sin);
    },
    "cos" : function(node, symTab) {
      return approxEvaluateFunctions.functionMethods.genericFunction(node, symTab, Math.cos);
    },
    "tan" : function(node, symTab) {
      return approxEvaluateFunctions.functionMethods.genericFunction(node, symTab, Math.tan);
    },
    "cosec" : function(node, symTab) {
      return approxEvaluateFunctions.functionMethods.genericFunction(node, symTab, (v)=>1/Math.sin(v));
    },
    "cotan" : function(node, symTab) {
      return approxEvaluateFunctions.functionMethods.genericFunction(node, symTab, (v)=>1/Math.tan(v));
    },
    "sec" : function(node, symTab) {
      return approxEvaluateFunctions.functionMethods.genericFunction(node, symTab, (v)=>1/Math.cos(v));
    },
	  "arcsin" : function(node, symTab) {
      return approxEvaluateFunctions.functionMethods.genericFunction(node, symTab, Math.asin);
    },
    "arccos" : function(node, symTab) {
      return approxEvaluateFunctions.functionMethods.genericFunction(node, symTab, Math.acos);
    },
    "arctan" : function(node, symTab) {
      return approxEvaluateFunctions.functionMethods.genericFunction(node, symTab, Math.atan);
    },
    "arccsc" : function(node, symTab) {
      return approxEvaluateFunctions.functionMethods.genericFunction(node, symTab, (v)=>Math.asin(1/v));
    },
    "arccot" : function(node, symTab) {
      return approxEvaluateFunctions.functionMethods.genericFunction(node, symTab, (v)=>Math.PI/2 - Math.atan(v));
    },
    "arcsec" : function(node, symTab) {
      return approxEvaluateFunctions.functionMethods.genericFunction(node, symTab, (v)=>Math.acos(1/v));
    },
    "product" : function(node, symTab) {
      throw "Product Not Implemented"
    },
    "sum" : function(node, symTab) {
      throw "Sum Not Implemented"
    },
    "integral" : function(node, symTab) {
      throw "Integral Not Implemented"
    }
  },
  "function" : function(node, symTab) {
    if (approxEvaluateFunctions.functionMethods[node.value] != undefined) {
      return approxEvaluateFunctions.functionMethods[node.value](node, symTab);
    }
    throw "Unknown function type: " + node.value;
  }
}

export function approxEvaluate(rootNode, symTab) {
  if (Array.isArray(rootNode)) {
   return rootNode.map((child) => approxEvaluate(child, symTab));
 }
  // symTab has not been implemented yet
  if (approxEvaluateFunctions[rootNode.type] != undefined) {
    return approxEvaluateFunctions[rootNode.type](rootNode, symTab);
  }
  throw "Unknown node type: " + rootNode.type;
}
