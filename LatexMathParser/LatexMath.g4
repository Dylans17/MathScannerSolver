grammar LatexMath;

/*----------------------
 * Token Definitions
 *----------------------*/
DIGIT : [0-9] ;
OPERATORS: '+' | '-' | '/' | '*' | '=' | '^' | '!' | '_' ;
BRACKETS: '{' | '}' | '[' | ']' ;
LEFTPARENTHESIS: '\\left(' | '(' ;
RIGHTPARENTHESIS: '\\right)' | ')' ;
TEXFUNCTION: '\\sin' | '\\cos' | '\\tan' | '\\csc' | '\\cot' | '\\sec' | '\\prod' | '\\sum' | '\\int' ;
TEXCOMMAND: '\\' CHAR+ ;
CHAR : [a-zA-Z] ;

/*----------------------
 * Things to Skip
 *----------------------*/
WHITESPACE : [ \t\r\n]+ -> skip ;

/*----------------------
 * Parser Rules
 *----------------------*/

start: equation EOF ;
equation: l=expr ('=' r=expr)? ;
expr: additiveExpression ;

// Precedence Rules
functionExpression: TEXFUNCTION ('_' sub=texOperand)? ('^' sup=texOperand)? (unitexpr | multiplicativeExpression)
                  | id ('^' sup=texOperand)? unitexpr
                  | skip=unit ;
factorialExpression: functionExpression f='!'? ;
exponentialExpression: factorialExpression ('^' texOperand)? ;
signExpression: s+=addop* exponentialExpression ;
multiplicativeExpression: signExpression (mulop signExpression | exponentialExpression)* ;
additiveExpression: e+=multiplicativeExpression (o+=addop e+=multiplicativeExpression)* ;


unit: id | number | command | unitexpr ;
unitexpr: '(' expr ')' | '\\left(' expr '\\right)' ;
number: DIGIT+ ('.' DIGIT*)? | DIGIT* '.' DIGIT+ ;
command: TEXCOMMAND (b+='{' expr '}' | b+='[' expr ']')+ ;
id: (name=CHAR | name=TEXCOMMAND) ('_' texOperand)? ;
texOperand: CHAR | DIGIT | '{' equation '}' ;

addop: '+' | '-' ;
mulop: '*' | '\\cdot' | '/';
