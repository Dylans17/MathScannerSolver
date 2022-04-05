// Generated from LatexMath.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import LatexMathListener from './LatexMathListener.js';
import LatexMathVisitor from './LatexMathVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u001d\u00b7\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003+\n\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "2\n\u0005\u0003\u0005\u0003\u0005\u0005\u00056\n\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005:\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005?\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005D\n\u0005",
    "\u0003\u0006\u0003\u0006\u0005\u0006H\n\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0005\u0007M\n\u0007\u0003\b\u0007\bP\n\b\f\b\u000e\bS",
    "\u000b\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007",
    "\t\\\n\t\f\t\u000e\t_\u000b\t\u0003\n\u0003\n\u0003\n\u0003\n\u0007",
    "\ne\n\n\f\n\u000e\nh\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0005\u000bn\n\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0005\fx\n\f\u0003\r\u0006\r{\n\r\r\r\u000e",
    "\r|\u0003\r\u0003\r\u0007\r\u0081\n\r\f\r\u000e\r\u0084\u000b\r\u0005",
    "\r\u0086\n\r\u0003\r\u0007\r\u0089\n\r\f\r\u000e\r\u008c\u000b\r\u0003",
    "\r\u0003\r\u0006\r\u0090\n\r\r\r\u000e\r\u0091\u0005\r\u0094\n\r\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0006\u000e\u009f\n\u000e\r\u000e\u000e",
    "\u000e\u00a0\u0003\u000f\u0003\u000f\u0005\u000f\u00a5\n\u000f\u0003",
    "\u000f\u0003\u000f\u0005\u000f\u00a9\n\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00b1\n",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0002",
    "\u0002\u0013\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"\u0002\u0004\u0003\u0002\u0010\u0011\u0003\u0002",
    "\u0012\u0014\u0002\u00c2\u0002$\u0003\u0002\u0002\u0002\u0004\'\u0003",
    "\u0002\u0002\u0002\u0006,\u0003\u0002\u0002\u0002\bC\u0003\u0002\u0002",
    "\u0002\nE\u0003\u0002\u0002\u0002\fI\u0003\u0002\u0002\u0002\u000eQ",
    "\u0003\u0002\u0002\u0002\u0010V\u0003\u0002\u0002\u0002\u0012`\u0003",
    "\u0002\u0002\u0002\u0014m\u0003\u0002\u0002\u0002\u0016w\u0003\u0002",
    "\u0002\u0002\u0018\u0093\u0003\u0002\u0002\u0002\u001a\u0095\u0003\u0002",
    "\u0002\u0002\u001c\u00a4\u0003\u0002\u0002\u0002\u001e\u00b0\u0003\u0002",
    "\u0002\u0002 \u00b2\u0003\u0002\u0002\u0002\"\u00b4\u0003\u0002\u0002",
    "\u0002$%\u0005\u0004\u0003\u0002%&\u0007\u0002\u0002\u0003&\u0003\u0003",
    "\u0002\u0002\u0002\'*\u0005\u0006\u0004\u0002()\u0007\u0003\u0002\u0002",
    ")+\u0005\u0006\u0004\u0002*(\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002",
    "\u0002+\u0005\u0003\u0002\u0002\u0002,-\u0005\u0012\n\u0002-\u0007\u0003",
    "\u0002\u0002\u0002.1\u0007\u001a\u0002\u0002/0\u0007\u0004\u0002\u0002",
    "02\u0005\u001e\u0010\u00021/\u0003\u0002\u0002\u000212\u0003\u0002\u0002",
    "\u000225\u0003\u0002\u0002\u000234\u0007\u0005\u0002\u000246\u0005\u001e",
    "\u0010\u000253\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u000269\u0003",
    "\u0002\u0002\u00027:\u0005\u0016\f\u00028:\u0005\u0010\t\u000297\u0003",
    "\u0002\u0002\u000298\u0003\u0002\u0002\u0002:D\u0003\u0002\u0002\u0002",
    ";>\u0005\u001c\u000f\u0002<=\u0007\u0005\u0002\u0002=?\u0005\u001e\u0010",
    "\u0002><\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?@\u0003\u0002",
    "\u0002\u0002@A\u0005\u0016\f\u0002AD\u0003\u0002\u0002\u0002BD\u0005",
    "\u0014\u000b\u0002C.\u0003\u0002\u0002\u0002C;\u0003\u0002\u0002\u0002",
    "CB\u0003\u0002\u0002\u0002D\t\u0003\u0002\u0002\u0002EG\u0005\b\u0005",
    "\u0002FH\u0007\u0006\u0002\u0002GF\u0003\u0002\u0002\u0002GH\u0003\u0002",
    "\u0002\u0002H\u000b\u0003\u0002\u0002\u0002IL\u0005\n\u0006\u0002JK",
    "\u0007\u0005\u0002\u0002KM\u0005\u001e\u0010\u0002LJ\u0003\u0002\u0002",
    "\u0002LM\u0003\u0002\u0002\u0002M\r\u0003\u0002\u0002\u0002NP\u0005",
    " \u0011\u0002ON\u0003\u0002\u0002\u0002PS\u0003\u0002\u0002\u0002QO",
    "\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RT\u0003\u0002\u0002",
    "\u0002SQ\u0003\u0002\u0002\u0002TU\u0005\f\u0007\u0002U\u000f\u0003",
    "\u0002\u0002\u0002V]\u0005\u000e\b\u0002WX\u0005\"\u0012\u0002XY\u0005",
    "\u000e\b\u0002Y\\\u0003\u0002\u0002\u0002Z\\\u0005\f\u0007\u0002[W\u0003",
    "\u0002\u0002\u0002[Z\u0003\u0002\u0002\u0002\\_\u0003\u0002\u0002\u0002",
    "][\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^\u0011\u0003\u0002",
    "\u0002\u0002_]\u0003\u0002\u0002\u0002`f\u0005\u0010\t\u0002ab\u0005",
    " \u0011\u0002bc\u0005\u0010\t\u0002ce\u0003\u0002\u0002\u0002da\u0003",
    "\u0002\u0002\u0002eh\u0003\u0002\u0002\u0002fd\u0003\u0002\u0002\u0002",
    "fg\u0003\u0002\u0002\u0002g\u0013\u0003\u0002\u0002\u0002hf\u0003\u0002",
    "\u0002\u0002in\u0005\u001c\u000f\u0002jn\u0005\u0018\r\u0002kn\u0005",
    "\u001a\u000e\u0002ln\u0005\u0016\f\u0002mi\u0003\u0002\u0002\u0002m",
    "j\u0003\u0002\u0002\u0002mk\u0003\u0002\u0002\u0002ml\u0003\u0002\u0002",
    "\u0002n\u0015\u0003\u0002\u0002\u0002op\u0007\u0007\u0002\u0002pq\u0005",
    "\u0006\u0004\u0002qr\u0007\b\u0002\u0002rx\u0003\u0002\u0002\u0002s",
    "t\u0007\t\u0002\u0002tu\u0005\u0006\u0004\u0002uv\u0007\n\u0002\u0002",
    "vx\u0003\u0002\u0002\u0002wo\u0003\u0002\u0002\u0002ws\u0003\u0002\u0002",
    "\u0002x\u0017\u0003\u0002\u0002\u0002y{\u0007\u0015\u0002\u0002zy\u0003",
    "\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002",
    "|}\u0003\u0002\u0002\u0002}\u0085\u0003\u0002\u0002\u0002~\u0082\u0007",
    "\u000b\u0002\u0002\u007f\u0081\u0007\u0015\u0002\u0002\u0080\u007f\u0003",
    "\u0002\u0002\u0002\u0081\u0084\u0003\u0002\u0002\u0002\u0082\u0080\u0003",
    "\u0002\u0002\u0002\u0082\u0083\u0003\u0002\u0002\u0002\u0083\u0086\u0003",
    "\u0002\u0002\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0085~\u0003",
    "\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0094\u0003",
    "\u0002\u0002\u0002\u0087\u0089\u0007\u0015\u0002\u0002\u0088\u0087\u0003",
    "\u0002\u0002\u0002\u0089\u008c\u0003\u0002\u0002\u0002\u008a\u0088\u0003",
    "\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b\u008d\u0003",
    "\u0002\u0002\u0002\u008c\u008a\u0003\u0002\u0002\u0002\u008d\u008f\u0007",
    "\u000b\u0002\u0002\u008e\u0090\u0007\u0015\u0002\u0002\u008f\u008e\u0003",
    "\u0002\u0002\u0002\u0090\u0091\u0003\u0002\u0002\u0002\u0091\u008f\u0003",
    "\u0002\u0002\u0002\u0091\u0092\u0003\u0002\u0002\u0002\u0092\u0094\u0003",
    "\u0002\u0002\u0002\u0093z\u0003\u0002\u0002\u0002\u0093\u008a\u0003",
    "\u0002\u0002\u0002\u0094\u0019\u0003\u0002\u0002\u0002\u0095\u009e\u0007",
    "\u001b\u0002\u0002\u0096\u0097\u0007\f\u0002\u0002\u0097\u0098\u0005",
    "\u0006\u0004\u0002\u0098\u0099\u0007\r\u0002\u0002\u0099\u009f\u0003",
    "\u0002\u0002\u0002\u009a\u009b\u0007\u000e\u0002\u0002\u009b\u009c\u0005",
    "\u0006\u0004\u0002\u009c\u009d\u0007\u000f\u0002\u0002\u009d\u009f\u0003",
    "\u0002\u0002\u0002\u009e\u0096\u0003\u0002\u0002\u0002\u009e\u009a\u0003",
    "\u0002\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0\u009e\u0003",
    "\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1\u001b\u0003",
    "\u0002\u0002\u0002\u00a2\u00a5\u0007\u001c\u0002\u0002\u00a3\u00a5\u0007",
    "\u001b\u0002\u0002\u00a4\u00a2\u0003\u0002\u0002\u0002\u00a4\u00a3\u0003",
    "\u0002\u0002\u0002\u00a5\u00a8\u0003\u0002\u0002\u0002\u00a6\u00a7\u0007",
    "\u0004\u0002\u0002\u00a7\u00a9\u0005\u001e\u0010\u0002\u00a8\u00a6\u0003",
    "\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u001d\u0003",
    "\u0002\u0002\u0002\u00aa\u00b1\u0007\u001c\u0002\u0002\u00ab\u00b1\u0007",
    "\u0015\u0002\u0002\u00ac\u00ad\u0007\f\u0002\u0002\u00ad\u00ae\u0005",
    "\u0004\u0003\u0002\u00ae\u00af\u0007\r\u0002\u0002\u00af\u00b1\u0003",
    "\u0002\u0002\u0002\u00b0\u00aa\u0003\u0002\u0002\u0002\u00b0\u00ab\u0003",
    "\u0002\u0002\u0002\u00b0\u00ac\u0003\u0002\u0002\u0002\u00b1\u001f\u0003",
    "\u0002\u0002\u0002\u00b2\u00b3\t\u0002\u0002\u0002\u00b3!\u0003\u0002",
    "\u0002\u0002\u00b4\u00b5\t\u0003\u0002\u0002\u00b5#\u0003\u0002\u0002",
    "\u0002\u001b*159>CGLQ[]fmw|\u0082\u0085\u008a\u0091\u0093\u009e\u00a0",
    "\u00a4\u00a8\u00b0"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class LatexMathParser extends antlr4.Parser {

    static grammarFileName = "LatexMath.g4";
    static literalNames = [ null, "'='", "'_'", "'^'", "'!'", "'('", "')'", 
                            "'\\left('", "'\\right)'", "'.'", "'{'", "'}'", 
                            "'['", "']'", "'+'", "'-'", "'*'", "'\\cdot'", 
                            "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "DIGIT", "OPERATORS", "BRACKETS", 
                             "LEFTPARENTHESIS", "RIGHTPARENTHESIS", "TEXFUNCTION", 
                             "TEXCOMMAND", "CHAR", "WHITESPACE" ];
    static ruleNames = [ "start", "equation", "expr", "functionExpression", 
                         "factorialExpression", "exponentialExpression", 
                         "signExpression", "multiplicativeExpression", "additiveExpression", 
                         "unit", "unitexpr", "number", "command", "id", 
                         "texOperand", "addop", "mulop" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LatexMathParser.ruleNames;
        this.literalNames = LatexMathParser.literalNames;
        this.symbolicNames = LatexMathParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LatexMathParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.equation();
	        this.state = 35;
	        this.match(LatexMathParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	equation() {
	    let localctx = new EquationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LatexMathParser.RULE_equation);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        localctx.l = this.expr();
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LatexMathParser.T__0) {
	            this.state = 38;
	            this.match(LatexMathParser.T__0);
	            this.state = 39;
	            localctx.r = this.expr();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LatexMathParser.RULE_expr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.additiveExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionExpression() {
	    let localctx = new FunctionExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LatexMathParser.RULE_functionExpression);
	    var _la = 0; // Token type
	    try {
	        this.state = 65;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.match(LatexMathParser.TEXFUNCTION);
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===LatexMathParser.T__1) {
	                this.state = 45;
	                this.match(LatexMathParser.T__1);
	                this.state = 46;
	                localctx.sub = this.texOperand();
	            }

	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===LatexMathParser.T__2) {
	                this.state = 49;
	                this.match(LatexMathParser.T__2);
	                this.state = 50;
	                localctx.sup = this.texOperand();
	            }

	            this.state = 55;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 53;
	                this.unitexpr();
	                break;

	            case 2:
	                this.state = 54;
	                this.multiplicativeExpression();
	                break;

	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 57;
	            this.id();
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===LatexMathParser.T__2) {
	                this.state = 58;
	                this.match(LatexMathParser.T__2);
	                this.state = 59;
	                localctx.sup = this.texOperand();
	            }

	            this.state = 62;
	            this.unitexpr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 64;
	            localctx.skip = this.unit();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factorialExpression() {
	    let localctx = new FactorialExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LatexMathParser.RULE_factorialExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.functionExpression();
	        this.state = 69;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        if(la_===1) {
	            this.state = 68;
	            localctx.f = this.match(LatexMathParser.T__3);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exponentialExpression() {
	    let localctx = new ExponentialExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LatexMathParser.RULE_exponentialExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.factorialExpression();
	        this.state = 74;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 72;
	            this.match(LatexMathParser.T__2);
	            this.state = 73;
	            this.texOperand();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	signExpression() {
	    let localctx = new SignExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LatexMathParser.RULE_signExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LatexMathParser.T__13 || _la===LatexMathParser.T__14) {
	            this.state = 76;
	            localctx._addop = this.addop();
	            localctx.s.push(localctx._addop);
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 82;
	        this.exponentialExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiplicativeExpression() {
	    let localctx = new MultiplicativeExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LatexMathParser.RULE_multiplicativeExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.signExpression();
	        this.state = 91;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 89;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case LatexMathParser.T__15:
	                case LatexMathParser.T__16:
	                case LatexMathParser.T__17:
	                    this.state = 85;
	                    this.mulop();
	                    this.state = 86;
	                    this.signExpression();
	                    break;
	                case LatexMathParser.T__4:
	                case LatexMathParser.T__6:
	                case LatexMathParser.T__8:
	                case LatexMathParser.DIGIT:
	                case LatexMathParser.TEXFUNCTION:
	                case LatexMathParser.TEXCOMMAND:
	                case LatexMathParser.CHAR:
	                    this.state = 88;
	                    this.exponentialExpression();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 93;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	additiveExpression() {
	    let localctx = new AdditiveExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LatexMathParser.RULE_additiveExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        localctx._multiplicativeExpression = this.multiplicativeExpression();
	        localctx.e.push(localctx._multiplicativeExpression);
	        this.state = 100;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LatexMathParser.T__13 || _la===LatexMathParser.T__14) {
	            this.state = 95;
	            localctx._addop = this.addop();
	            localctx.o.push(localctx._addop);
	            this.state = 96;
	            localctx._multiplicativeExpression = this.multiplicativeExpression();
	            localctx.e.push(localctx._multiplicativeExpression);
	            this.state = 102;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unit() {
	    let localctx = new UnitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LatexMathParser.RULE_unit);
	    try {
	        this.state = 107;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 103;
	            this.id();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 104;
	            this.number();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 105;
	            this.command();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 106;
	            this.unitexpr();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unitexpr() {
	    let localctx = new UnitexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LatexMathParser.RULE_unitexpr);
	    try {
	        this.state = 117;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LatexMathParser.T__4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 109;
	            this.match(LatexMathParser.T__4);
	            this.state = 110;
	            this.expr();
	            this.state = 111;
	            this.match(LatexMathParser.T__5);
	            break;
	        case LatexMathParser.T__6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 113;
	            this.match(LatexMathParser.T__6);
	            this.state = 114;
	            this.expr();
	            this.state = 115;
	            this.match(LatexMathParser.T__7);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, LatexMathParser.RULE_number);
	    var _la = 0; // Token type
	    try {
	        this.state = 145;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 120; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 119;
	            		this.match(LatexMathParser.DIGIT);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 122; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,14, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 131;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	            if(la_===1) {
	                this.state = 124;
	                this.match(LatexMathParser.T__8);
	                this.state = 128;
	                this._errHandler.sync(this);
	                var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                    if(_alt===1) {
	                        this.state = 125;
	                        this.match(LatexMathParser.DIGIT); 
	                    }
	                    this.state = 130;
	                    this._errHandler.sync(this);
	                    _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	                }


	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 136;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===LatexMathParser.DIGIT) {
	                this.state = 133;
	                this.match(LatexMathParser.DIGIT);
	                this.state = 138;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 139;
	            this.match(LatexMathParser.T__8);
	            this.state = 141; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 140;
	            		this.match(LatexMathParser.DIGIT);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 143; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,18, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	command() {
	    let localctx = new CommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LatexMathParser.RULE_command);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.match(LatexMathParser.TEXCOMMAND);
	        this.state = 156; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 156;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case LatexMathParser.T__9:
	                this.state = 148;
	                localctx.s10 = this.match(LatexMathParser.T__9);
	                localctx.b.push(localctx.s10);
	                this.state = 149;
	                this.expr();
	                this.state = 150;
	                this.match(LatexMathParser.T__10);
	                break;
	            case LatexMathParser.T__11:
	                this.state = 152;
	                localctx.s12 = this.match(LatexMathParser.T__11);
	                localctx.b.push(localctx.s12);
	                this.state = 153;
	                this.expr();
	                this.state = 154;
	                this.match(LatexMathParser.T__12);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 158; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===LatexMathParser.T__9 || _la===LatexMathParser.T__11);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	id() {
	    let localctx = new IdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, LatexMathParser.RULE_id);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LatexMathParser.CHAR:
	            this.state = 160;
	            localctx.name = this.match(LatexMathParser.CHAR);
	            break;
	        case LatexMathParser.TEXCOMMAND:
	            this.state = 161;
	            localctx.name = this.match(LatexMathParser.TEXCOMMAND);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 166;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LatexMathParser.T__1) {
	            this.state = 164;
	            this.match(LatexMathParser.T__1);
	            this.state = 165;
	            this.texOperand();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	texOperand() {
	    let localctx = new TexOperandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, LatexMathParser.RULE_texOperand);
	    try {
	        this.state = 174;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LatexMathParser.CHAR:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 168;
	            this.match(LatexMathParser.CHAR);
	            break;
	        case LatexMathParser.DIGIT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 169;
	            this.match(LatexMathParser.DIGIT);
	            break;
	        case LatexMathParser.T__9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 170;
	            this.match(LatexMathParser.T__9);
	            this.state = 171;
	            this.equation();
	            this.state = 172;
	            this.match(LatexMathParser.T__10);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	addop() {
	    let localctx = new AddopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, LatexMathParser.RULE_addop);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        _la = this._input.LA(1);
	        if(!(_la===LatexMathParser.T__13 || _la===LatexMathParser.T__14)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mulop() {
	    let localctx = new MulopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, LatexMathParser.RULE_mulop);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LatexMathParser.T__15) | (1 << LatexMathParser.T__16) | (1 << LatexMathParser.T__17))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LatexMathParser.EOF = antlr4.Token.EOF;
LatexMathParser.T__0 = 1;
LatexMathParser.T__1 = 2;
LatexMathParser.T__2 = 3;
LatexMathParser.T__3 = 4;
LatexMathParser.T__4 = 5;
LatexMathParser.T__5 = 6;
LatexMathParser.T__6 = 7;
LatexMathParser.T__7 = 8;
LatexMathParser.T__8 = 9;
LatexMathParser.T__9 = 10;
LatexMathParser.T__10 = 11;
LatexMathParser.T__11 = 12;
LatexMathParser.T__12 = 13;
LatexMathParser.T__13 = 14;
LatexMathParser.T__14 = 15;
LatexMathParser.T__15 = 16;
LatexMathParser.T__16 = 17;
LatexMathParser.T__17 = 18;
LatexMathParser.DIGIT = 19;
LatexMathParser.OPERATORS = 20;
LatexMathParser.BRACKETS = 21;
LatexMathParser.LEFTPARENTHESIS = 22;
LatexMathParser.RIGHTPARENTHESIS = 23;
LatexMathParser.TEXFUNCTION = 24;
LatexMathParser.TEXCOMMAND = 25;
LatexMathParser.CHAR = 26;
LatexMathParser.WHITESPACE = 27;

LatexMathParser.RULE_start = 0;
LatexMathParser.RULE_equation = 1;
LatexMathParser.RULE_expr = 2;
LatexMathParser.RULE_functionExpression = 3;
LatexMathParser.RULE_factorialExpression = 4;
LatexMathParser.RULE_exponentialExpression = 5;
LatexMathParser.RULE_signExpression = 6;
LatexMathParser.RULE_multiplicativeExpression = 7;
LatexMathParser.RULE_additiveExpression = 8;
LatexMathParser.RULE_unit = 9;
LatexMathParser.RULE_unitexpr = 10;
LatexMathParser.RULE_number = 11;
LatexMathParser.RULE_command = 12;
LatexMathParser.RULE_id = 13;
LatexMathParser.RULE_texOperand = 14;
LatexMathParser.RULE_addop = 15;
LatexMathParser.RULE_mulop = 16;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LatexMathParser.RULE_start;
    }

	equation() {
	    return this.getTypedRuleContext(EquationContext,0);
	};

	EOF() {
	    return this.getToken(LatexMathParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.enterStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.exitStart(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LatexMathVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EquationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LatexMathParser.RULE_equation;
        this.l = null; // ExprContext
        this.r = null; // ExprContext
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.enterEquation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.exitEquation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LatexMathVisitor ) {
	        return visitor.visitEquation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LatexMathParser.RULE_expr;
    }

	additiveExpression() {
	    return this.getTypedRuleContext(AdditiveExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LatexMathVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LatexMathParser.RULE_functionExpression;
        this.sub = null; // TexOperandContext
        this.sup = null; // TexOperandContext
        this.skip = null; // UnitContext
    }

	TEXFUNCTION() {
	    return this.getToken(LatexMathParser.TEXFUNCTION, 0);
	};

	unitexpr() {
	    return this.getTypedRuleContext(UnitexprContext,0);
	};

	multiplicativeExpression() {
	    return this.getTypedRuleContext(MultiplicativeExpressionContext,0);
	};

	texOperand = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TexOperandContext);
	    } else {
	        return this.getTypedRuleContext(TexOperandContext,i);
	    }
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	unit() {
	    return this.getTypedRuleContext(UnitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.enterFunctionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.exitFunctionExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LatexMathVisitor ) {
	        return visitor.visitFunctionExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FactorialExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LatexMathParser.RULE_factorialExpression;
        this.f = null; // Token
    }

	functionExpression() {
	    return this.getTypedRuleContext(FunctionExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.enterFactorialExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.exitFactorialExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LatexMathVisitor ) {
	        return visitor.visitFactorialExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExponentialExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LatexMathParser.RULE_exponentialExpression;
    }

	factorialExpression() {
	    return this.getTypedRuleContext(FactorialExpressionContext,0);
	};

	texOperand() {
	    return this.getTypedRuleContext(TexOperandContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.enterExponentialExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.exitExponentialExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LatexMathVisitor ) {
	        return visitor.visitExponentialExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SignExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LatexMathParser.RULE_signExpression;
        this._addop = null; // AddopContext
        this.s = []; // of AddopContexts
    }

	exponentialExpression() {
	    return this.getTypedRuleContext(ExponentialExpressionContext,0);
	};

	addop = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AddopContext);
	    } else {
	        return this.getTypedRuleContext(AddopContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.enterSignExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.exitSignExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LatexMathVisitor ) {
	        return visitor.visitSignExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultiplicativeExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LatexMathParser.RULE_multiplicativeExpression;
    }

	signExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SignExpressionContext);
	    } else {
	        return this.getTypedRuleContext(SignExpressionContext,i);
	    }
	};

	mulop = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MulopContext);
	    } else {
	        return this.getTypedRuleContext(MulopContext,i);
	    }
	};

	exponentialExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExponentialExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExponentialExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.enterMultiplicativeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.exitMultiplicativeExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LatexMathVisitor ) {
	        return visitor.visitMultiplicativeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AdditiveExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LatexMathParser.RULE_additiveExpression;
        this._multiplicativeExpression = null; // MultiplicativeExpressionContext
        this.e = []; // of MultiplicativeExpressionContexts
        this._addop = null; // AddopContext
        this.o = []; // of AddopContexts
    }

	multiplicativeExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplicativeExpressionContext);
	    } else {
	        return this.getTypedRuleContext(MultiplicativeExpressionContext,i);
	    }
	};

	addop = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AddopContext);
	    } else {
	        return this.getTypedRuleContext(AddopContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.enterAdditiveExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.exitAdditiveExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LatexMathVisitor ) {
	        return visitor.visitAdditiveExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UnitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LatexMathParser.RULE_unit;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	unitexpr() {
	    return this.getTypedRuleContext(UnitexprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.enterUnit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.exitUnit(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LatexMathVisitor ) {
	        return visitor.visitUnit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UnitexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LatexMathParser.RULE_unitexpr;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.enterUnitexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.exitUnitexpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LatexMathVisitor ) {
	        return visitor.visitUnitexpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LatexMathParser.RULE_number;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LatexMathParser.DIGIT);
	    } else {
	        return this.getToken(LatexMathParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LatexMathVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LatexMathParser.RULE_command;
        this.s10 = null; // Token
        this.b = []; // of Tokens
        this.s12 = null; // Token
    }

	TEXCOMMAND() {
	    return this.getToken(LatexMathParser.TEXCOMMAND, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.enterCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.exitCommand(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LatexMathVisitor ) {
	        return visitor.visitCommand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LatexMathParser.RULE_id;
        this.name = null; // Token
    }

	CHAR() {
	    return this.getToken(LatexMathParser.CHAR, 0);
	};

	TEXCOMMAND() {
	    return this.getToken(LatexMathParser.TEXCOMMAND, 0);
	};

	texOperand() {
	    return this.getTypedRuleContext(TexOperandContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.exitId(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LatexMathVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TexOperandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LatexMathParser.RULE_texOperand;
    }

	CHAR() {
	    return this.getToken(LatexMathParser.CHAR, 0);
	};

	DIGIT() {
	    return this.getToken(LatexMathParser.DIGIT, 0);
	};

	equation() {
	    return this.getTypedRuleContext(EquationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.enterTexOperand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.exitTexOperand(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LatexMathVisitor ) {
	        return visitor.visitTexOperand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AddopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LatexMathParser.RULE_addop;
    }


	enterRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.enterAddop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.exitAddop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LatexMathVisitor ) {
	        return visitor.visitAddop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MulopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LatexMathParser.RULE_mulop;
    }


	enterRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.enterMulop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LatexMathListener ) {
	        listener.exitMulop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LatexMathVisitor ) {
	        return visitor.visitMulop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LatexMathParser.StartContext = StartContext; 
LatexMathParser.EquationContext = EquationContext; 
LatexMathParser.ExprContext = ExprContext; 
LatexMathParser.FunctionExpressionContext = FunctionExpressionContext; 
LatexMathParser.FactorialExpressionContext = FactorialExpressionContext; 
LatexMathParser.ExponentialExpressionContext = ExponentialExpressionContext; 
LatexMathParser.SignExpressionContext = SignExpressionContext; 
LatexMathParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext; 
LatexMathParser.AdditiveExpressionContext = AdditiveExpressionContext; 
LatexMathParser.UnitContext = UnitContext; 
LatexMathParser.UnitexprContext = UnitexprContext; 
LatexMathParser.NumberContext = NumberContext; 
LatexMathParser.CommandContext = CommandContext; 
LatexMathParser.IdContext = IdContext; 
LatexMathParser.TexOperandContext = TexOperandContext; 
LatexMathParser.AddopContext = AddopContext; 
LatexMathParser.MulopContext = MulopContext; 
