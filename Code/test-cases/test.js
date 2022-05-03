import {approxEvaluate} from '../solver.js';
import parseMath from '../LatexMathParser/index.js';
import {describe, before, it} from 'mocha';
import {expect} from 'chai';
import assert from 'assert';
import solver from "../solver.js";
import { getAllEquations } from '../mathpix.js';

describe('OBerry Equation Test', function() {
	
	it('should do math', function() {
		
		assert.deepEqual(approxEvaluate(parseMath('(2*3)+5-9')), 2);
		
	});
	
	it('should do complex calculation', function() {
		
		assert.deepEqual(approxEvaluate(parseMath('((((9/3)+5-6+2)/4)*67)/2')), 33.5);
		
	});
	
	it('should calculate cos and sin', function() {
		
		assert.deepEqual(approxEvaluate(parseMath('(\\cos 0) * (\\sin 0)')), 0);
		
	});
	
	it('should calculate with pi', function() {
		
		expect(solver(parseMath('\\sin(\\pi/2)'))).to.eql([1]);
		
	});
	
});

const evalExpression = (input) => approxEvaluate(parseMath(input));

describe('verifying LaTeX string is solved: 1', function(){
it('\\frac{3}{2} should = 1.5 && \\frac{4}{8} should = .5', function(){
    const input = '\\frac{3}{2}';
    const input2 = '\\frac{4}{8}';
    const result = evalExpression(input);
    const result2 = evalExpression(input2);
    
    //our evalExpression return = the solution to the LaTeX input
    assert.equal(result, 1.5); 
    assert.equal(result2, .5);
});
});

describe('verifying list of LaTeX strings from MathPix: 1', function(){
it('should return an array of the LaTeX strings', async function(){

    //modify the LaTeX value in order to test a different LaTeX string
    const input = {
    "data": [
      {
        "type": "asciimath",
        "value": "lim_(x rarr3)((x^(2)+9)/(x-3))"
      },
      {
        "type": "latex",
        "value": "\\frac{3}{2}" //modify THIS
      },
      {
        "type": "latex",
        "value": "\\frac{4}{8}" //a 2nd equation has to be added in this way
      }
    ],
  };
   
  //result = list containing our "value"s
   let result = await getAllEquations(input);
   
   //check to see if our result is in the list returned from mathpix
   assert.ok(result.includes('\\frac{3}{2}'));
   assert.ok(result.includes('\\frac{4}{8}'));

   //checks the length of our list to ensure correct # of elements
   assert.equal(result.length, 2);
  });
});
//END TESTING LaTeX string '\\frac{3}{2}' = 3/2 = 1.5 && '\\frac{4}{8}' = 4/8 = 2



//START TESTING LaTeX string \sqrt[3]{5^{2}+\frac{1}{2}-\frac{-3}{2}} = 3
describe('verifying LaTeX string is solved: 2', function(){
  it('should return the result of \\sqrt[3]{5^{2}+\\frac{1}{2}-\\frac{-3}{2}}', function(){
      const input = '\\sqrt[3]{5^{2}+\\frac{1}{2}-\\frac{-3}{2}}';
      const result = evalExpression(input);
      //our evalExpression return = the solution to the LaTeX input
      assert.equal(result, 3); 
  });
});

describe('verifying list of LaTeX strings from MathPix: 2', function(){
  it("\\sqrt[3]{5^{2}+\\frac{1}{2}-\\frac{-3}{2}} should = 3", async function(){
  
      //modify the LaTeX value in order to test a different LaTeX string
      const input = {
      "data": [
        {
          "type": "asciimath",
          "value": "lim_(x rarr3)((x^(2)+9)/(x-3))"
        },
        {
          "type": "latex",
          "value": "\\sqrt[3]{5^{2}+\\frac{1}{2}-\\frac{-3}{2}}" //modify THIS!
        }
      ],
    };
     
     //result = list containing our "value"s
     let result = await getAllEquations(input);
     
     //check to see if our result is in the list returned from mathpix
     assert.ok(result.includes("\\sqrt[3]{5^{2}+\\frac{1}{2}-\\frac{-3}{2}}"));
     
     //checks the length of our list to ensure correct # of elements
     assert.equal(result.length, 1);
  });
});
//END TESTING LaTeX string \sqrt[3]{5^{2}+\frac{1}{2}-\frac{-3}{2}} = 3

//START TESTING LaTeX string '\sqrt{\left(3 * 2^{2}\right)^{2}+(3 !-1)^{2}}' = 13
describe('verifying LaTeX string is solved: 3', function(){
it('should return the result of input \\sqrt{\\left(3 * 2^{2}\\right)^{2}+(3 !-1)^{2}}', function(){
    const input = '\\sqrt{\\left(3 * 2^{2}\\right)^{2}+(3 !-1)^{2}}';
    
    const result = evalExpression(input);

    //our evalExpression return = the solution to the LaTeX input
    assert.equal(result, 13); 
});
});

describe('verifying list of LaTeX strings from MathPix: 3', function(){
it('should return an array of the LaTeX strings', async function(){

    //modify the LaTeX value in order to test a different LaTeX string
    const input = {
    "data": [
      {
        "type": "asciimath",
        "value": "lim_(x rarr3)((x^(2)+9)/(x-3))"
      },
      {
        "type": "latex",
        "value": "\\sqrt{\\left(3 * 2^{2}\\right)^{2}+(3 !-1)^{2}}" //modify THIS!
      }
    ],
  };
   
   //result = list containing our "value"s
   let result = await getAllEquations(input);
   
   //check to see if our result is in the list returned from mathpix
   assert.ok(result.includes('\\sqrt{\\left(3 * 2^{2}\\right)^{2}+(3 !-1)^{2}}'));

   //checks the length of our list to ensure correct # of elements
   assert.equal(result.length, 1);

  });
});
//END TESTING LaTeX string '\sqrt{\left(3 * 2^{2}\right)^{2}+(3 !-1)^{2}}' = 13

//START TESTING LaTeX string '\\(\\sin 16\\)' ~= -.2879
describe('verifying LaTeX string is solved: 4', function(){
  it('should return the result of \(\\sin 16\)', function(){
      const input = '\(\\sin 16\)';
  
      const result = evalExpression(input);
      let inRange = false;
      if(-.288 < result && result < -.287){inRange = true;}
      //our evalExpression return = the solution to the LaTeX input
      assert.ok(inRange, true);
  });
  });
  
  describe('verifying list of LaTeX strings from MathPix: 4', function(){
  it('should return an array of the LaTeX strings', async function(){
  
      //modify the LaTeX value in order to test a different LaTeX string
      const input = {
      "data": [
        {
          "type": "asciimath",
          "value": "lim_(x rarr3)((x^(2)+9)/(x-3))"
        },
        {
          "type": "latex",
          "value": "	\\(\\sin 16\\)" //modify THIS!
        }
      ],
    };
     
     //result = list containing our "value"s
     let result = await getAllEquations(input);
     
     //check to see if our result is in the list returned from mathpix
     assert.ok(result.includes('	\\(\\sin 16\\)'));
  
     //checks the length of our list to ensure correct # of elements
     assert.equal(result.length, 1);
  
    });
  });
  //END TESTING LaTeX string '\\(\\sin 16\\)' ~= -.2879

  //BEGIN TESTING LaTeX strings '\\(\\tan 13\\) ~= .46302 && '\\(\\cos -9\\)' ~= -.9111
  describe('verifying LaTeX string is solved: 5', function(){
    it('should return the result of \(\\tan 13\) and \(\\cos -9\)', function(){
        const input = '\(\\tan 13\)';
        const input2 = '\(\\cos -9\)';

        const result = evalExpression(input);
        const result2 = evalExpression(input2);
      
        let inRange = false;
        let inRange2 = false;

        if(.463 < result && result < .464){inRange = true;}
        if(-.912 < result2 && result2 < -.911){inRange2 = true;}
        
        //our evalExpression return = the solution to the LaTeX input
        assert.ok(inRange, true);
        assert.ok(inRange2, true);
    });
    });
    
    describe('verifying list of LaTeX strings from MathPix: 5', function(){
    it('should return an array of the LaTeX strings', async function(){
    
        //modify the LaTeX value in order to test a different LaTeX string
        const input = {
        "data": [
          {
            "type": "asciimath",
            "value": "lim_(x rarr3)((x^(2)+9)/(x-3))"
          },
          {
            "type": "latex",
            "value": "	\\(\\tan 13\\)" //modify THIS!
          },
          {
            "type": "latex",
            "value": "	\\(\\cos -9\\)" //modify THIS!
          }
        ],
      };
       
       //result = list containing our "value"s
       let result = await getAllEquations(input);
       
       //check to see if our result is in the list returned from mathpix
       assert.ok(result.includes('	\\(\\tan 13\\)'));
       assert.ok(result.includes('	\\(\\cos -9\\)'));
       //checks the length of our list to ensure correct # of elements
       assert.equal(result.length, 2);
    
      });
    });

//BEGIN TESTING LaTeX strings '\\(\\tan 13\\) ~= .46302 && '\\(\\cos -9\\)' ~= -.9111
describe('verifying LaTeX string is solved: 6', function(){
  it('should return the result of tan and cos', function(){
      const input = '\(\\tan 13\)';
      const input2 = '\(\\cos -9\)';

      const result = evalExpression(input);
      const result2 = evalExpression(input2);
    
      let inRange = false;
      let inRange2 = false;

      if(.463 < result && result < .464){inRange = true;}
      if(-.912 < result2 && result2 < -.911){inRange2 = true;}
      
      //our evalExpression return = the solution to the LaTeX input
      assert.ok(inRange, true);
      assert.ok(inRange2, true);
  });
  });
  
  describe('verifying list of LaTeX strings from MathPix: 6', function(){
  it('should return an array of the LaTeX strings', async function(){
  
      //modify the LaTeX value in order to test a different LaTeX string
      const input = {
      "data": [
        {
          "type": "asciimath",
          "value": "lim_(x rarr3)((x^(2)+9)/(x-3))"
        },
        {
          "type": "latex",
          "value": "\\(\\tan 13\\)" //modify THIS!
        },
        {
          "type": "latex",
          "value": "\\(\\cos -9\\)" //modify THIS!
        }
      ],
    };
     
     //result = list containing our "value"s
     let result = await getAllEquations(input);
   
     //check to see if our result is in the list returned from mathpix
     assert.ok(result.includes('\\(\\tan 13\\)'));
     assert.ok(result.includes('\\(\\cos -9\\)'));
     //checks the length of our list to ensure correct # of elements
     assert.equal(result.length, 2);
  
    });
  });
//END TESTING LaTeX strings '\\(\\tan 13\\) ~= .46302 && '\\(\\cos -9\\)' ~= -.9111

//BEGIN TESTING LaTeX strings '\arcsin{\sqrt{\left(1 * 2^{2}\right)^{1/7}-(3 !-1)^{1/9}}}' ~= .1529 
describe('verifying LaTeX string is solved: 7', function(){
  it('should return the result of \\arcsin{\\sqrt{\\left(1 * 2^{2}\\right)^{1/7}-(3 !-1)^{1/9}}}', function(){
      const input = '\\arcsin\\sqrt{\\left(1 * 2^{2}\\right)^{\\frac{1}{7}}-(3 !-1)^{\\frac{1}{9}}}';
    
      const result = evalExpression(input);
    
      let inRange = false;
      
      if(.1529 < result && result < .153){inRange = true;}
	  
      
      //our evalExpression return = the solution to the LaTeX input
      assert.ok(inRange, true);
  });
  });
  
  describe('verifying list of LaTeX strings from MathPix: 7', function(){
  it('should return an array of the LaTeX strings', async function(){
  
      //modify the LaTeX value in order to test a different LaTeX string
      const input = {
      "data": [
        {
          "type": "asciimath",
          "value": "lim_(x rarr3)((x^(2)+9)/(x-3))"
        },
        {
          "type": "latex",
          "value": '\\arcsin{\\sqrt{\\left(1 * 2^{2}\\right)^{1/7}-(3 !-1)^{1/9}}}' //modify THIS!
        }
      ],
    };
     
     //result = list containing our "value"s
     let result = await getAllEquations(input);

     //check to see if our result is in the list returned from mathpix
     assert.ok(result.includes('\\arcsin{\\sqrt{\\left(1 * 2^{2}\\right)^{1/7}-(3 !-1)^{1/9}}}'));

     //checks the length of our list to ensure correct # of elements
     assert.equal(result.length, 1);
    });
  });
//END TESTING LaTeX string '\arcsin{\sqrt{\left(1 * 2^{2}\right)^{1/7}-(3 !-1)^{1/9}}}' ~= .1529 

//BEGIN TESTING LaTeX string '\\arctan{\\sqrt{\\left(1 * 2^{2}\\right)^{1/7}-(3 !-1)^{1/9}}}' ~= .1511
// && TESTING LaTeX String '\\arccos{\\sqrt{\\left(1 * 2^{2}\\right)^{1/7}-(3 !-1)^{1/9}}}' ~= 1.417
describe('verifying LaTeX string is solved: 8', function(){
  it('should return the result of arctan and arccos', function(){
      const input = '\\arctan\\sqrt{\\left(1 * 2^{2}\\right)^{1/7}-(3 !-1)^{1/9}}';
      const input2 = '\\arccos\\sqrt{\\left(1 * 2^{2}\\right)^{1/7}-(3 !-1)^{1/9}}';
    
      const result = evalExpression(input);
      const result2 = evalExpression(input2);
      
      let inRange = false;
      if(.1511 < result && result < .1512){inRange = true;}

      let inRange2 = false;
      if( 1.417 < result2 && result2 < 1.418) {inRange2 = true;}

      //our evalExpression return = the solution to the LaTeX input
      assert.ok(inRange, true);
      assert.ok(inRange2, true);
  });
  });
  
  describe('verifying list of LaTeX strings from MathPix: 8', function(){
  it('should return an array of the LaTeX strings', async function(){
  
      //modify the LaTeX value in order to test a different LaTeX string
      const input = {
      "data": [
        {
          "type": "asciimath",
          "value": "lim_(x rarr3)((x^(2)+9)/(x-3))"
        },
        {
          "type": "latex",
          "value": '\\arctan{\\sqrt{\\left(1 * 2^{2}\\right)^{1/7}-(3 !-1)^{1/9}}}' //modify THIS!
        },
        {
          "type": "latex",
          "value": '\\arccos{\\sqrt{\\left(1 * 2^{2}\\right)^{1/7}-(3 !-1)^{1/9}}}'
        }
      ],
    };
     
     //result = list containing our "value"s
     let result = await getAllEquations(input);

     //check to see if our result is in the list returned from mathpix
     assert.ok(result.includes('\\arctan{\\sqrt{\\left(1 * 2^{2}\\right)^{1/7}-(3 !-1)^{1/9}}}'));
     assert.ok(result.includes('\\arccos{\\sqrt{\\left(1 * 2^{2}\\right)^{1/7}-(3 !-1)^{1/9}}}'));
     //checks the length of our list to ensure correct # of elements
     assert.equal(result.length, 2);
    });
  });
//END TESTING LaTeX string '\\arctan{\\sqrt{\\left(1 * 2^{2}\\right)^{1/7}-(3 !-1)^{1/9}}}' ~= .1511

describe('Garcia Gomez Equation', function(){
    it('should math it', function(){
        assert.deepEqual(approxEvaluate(parseMath('3*4+5')), 17);
    });
	
	it('should math it2', function(){
        assert.deepEqual(approxEvaluate(parseMath('2^2')), 4);
    });
	
	it('should math it3', function(){
        assert.deepEqual(approxEvaluate(parseMath('2^2/4')), 1);
    });
	
	it('should math it4', function(){
        assert.deepEqual(approxEvaluate(parseMath('2^2/4')), 1);
    });
	
	it('should math it5', function(){
        assert.deepEqual(approxEvaluate(parseMath('2^8/4/5')), 12.8);
    });
	
	it('should math it6', function(){
        assert.deepEqual(approxEvaluate(parseMath('2^2/4')), 1);
    });

});