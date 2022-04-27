"use strict";

const defaultSymTab = new Map([
  ["\\pi", Math.PI],
  ["\\tau", 2*Math.PI],
  ["e", Math.E],
]);

export default function evalAll(...roots) {
  let results = roots.map((root) => {
    if (root instanceof Error) {
      return root.message;
    }
    try {
      return approxEvaluate(root, defaultSymTab);
    } catch (e) {
      return e;
    }
  });
  return results;
  // let numRoots = roots.length;
  // future code for handling definitions/equations
  // let isEquation = new Array(numRoots).fill(0);
  // for index in roots {
  //   let root = roots[index];
  //   if (root)
  //   if (root.type == "operator" && root.value == "=") {
  //     isEquation[index] |= 1;
  //   }
  // }
  //handle equations first to fill symTab
  // let equations = roots.filter((_, index) => isEquation[index]);
  // while (true) {
  //
  //
}

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
    const identifier = node.value;
    if (symTab.has(identifier)) {
      return symTab.get(identifier);
    }
    throw "Unknown Variable " + node.value + " in expression!";
  },
  "id function" : function(node, symTab) {
    return approxEvaluateFunctions["id"](node, symTab);
    // // TODO:
    // if (false && node.value in symTab /*&& value is function*/) {
    //   return that.evaluate;
    // }
    // else if (false && node.value in symTab /*&& value is known*/) {
    //   return that.value;
    // }
    // throw "Unknown Variable " + node.value + " in expression!";
  },
  functionMethods : {
    genericFunction: function(node, symTab, func, powFunc=Math.pow) {
      if (node.sub != null) {
        throw " cannot have a subscript! " + node.sub;
      }
      let innerValue = func(approxEvaluate(node.children[0], symTab));
      if (node.sup != undefined) {
        return powFunc(innerValue, approxEvaluate(node.sup, symTab));
      }
      return innerValue;
    },
    "sin" : function(node, symTab) {
      let power;
      if (node.sup && (power = approxEvaluate(node.sup, symTab)) == -1) {
        node.sup = undefined;
        return approxEvaluateFunctions.functionMethods["arcsin"](node, symTab);
      }
      return approxEvaluateFunctions.functionMethods.genericFunction(node, symTab, Math.sin);
    },
    "cos" : function(node, symTab) {
      let power;
      if (node.sup && (power = approxEvaluate(node.sup, symTab)) == -1) {
        node.sup = undefined;
        return approxEvaluateFunctions.functionMethods["arccos"](node, symTab);
      }
      return approxEvaluateFunctions.functionMethods.genericFunction(node, symTab, Math.cos);
    },
    "tan" : function(node, symTab) {
      let power;
      if (node.sup && (power = approxEvaluate(node.sup, symTab)) == -1) {
        node.sup = undefined;
        return approxEvaluateFunctions.functionMethods["arctan"](node, symTab);
      }
      return approxEvaluateFunctions.functionMethods.genericFunction(node, symTab, Math.tan);
    },
    "cosec" : function(node, symTab) {
      let power;
      if (node.sup && (power = approxEvaluate(node.sup, symTab)) == -1) {
        node.sup = undefined;
        return approxEvaluateFunctions.functionMethods["arccsc"](node, symTab);
      }
      return approxEvaluateFunctions.functionMethods.genericFunction(node, symTab, (v)=>1/Math.sin(v));
    },
    "cotan" : function(node, symTab) {
      let power;
      if (node.sup && (power = approxEvaluate(node.sup, symTab)) == -1) {
        node.sup = undefined;
        return approxEvaluateFunctions.functionMethods["arccot"](node, symTab);
      }
      return approxEvaluateFunctions.functionMethods.genericFunction(node, symTab, (v)=>1/Math.tan(v));
    },
    "sec" : function(node, symTab) {
      let power;
      if (node.sup && (power = approxEvaluate(node.sup, symTab)) == -1) {
        node.sup = undefined;
        return approxEvaluateFunctions.functionMethods["arcsec"](node, symTab);
      }
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
