import assert from 'assert';
import {approxEvaluate} from '../solver.js';
import parseMath from '../LatexMathParser/index.js';
import {describe,before,it} from 'mocha';

const input =3*4;

describe('Equation', function(){
    it('should math it', function(){
        assert.deepEqual(approxEvaluate(parseMath('3*4+5')), 17);
    });

});

describe('Equation', function(){
    it('should math it', function(){
        assert.deepEqual(approxEvaluate(parseMath('2^2')), 4);
    });

});

describe('Equation', function(){
    it('should math it', function(){
        assert.deepEqual(approxEvaluate(parseMath('2^2/4')), 1);
    });

});

describe('Equation', function(){
    it('should math it', function(){
        assert.deepEqual(approxEvaluate(parseMath('2^8/4/5')), 12.8);
    });

});

describe('Equation', function(){
    it('should math it', function(){
        assert.deepEqual(approxEvaluate(parseMath('2^2/4')), 1);
    });

});