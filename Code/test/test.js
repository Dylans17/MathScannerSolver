import assert from 'assert';
import {approxEvaluate} from '../solver.js';
import parseMath from '../LatexMathParser/index.js';
import {describe,before,it} from 'mocha';

const input =3*4;

describe('Equation', function(){
    it('should math it', function(){
        asser.deepEqual(approxEvaluate(parseMath(input), 12));
    });

});