import {approxEvaluate} from '../solver.js';
import parseMath from '../LatexMathParser/index.js';
import {describe, before, it} from 'mocha';
import assert from 'assert';

const input = '2 + 2';

describe('Equation', function() {
	
	it('should do math', function() {
		
		assert.deepEqual(approxEvaluate(parseMath('2+2')), 4);
		
	});
	
});