var should = require('should');
var Calculator  = require('./app');

describe('Calculator', function() {
    describe('add()', function() {
        it('should return 3 when adding 1 and 2 and above 2', function() {
            // Making calci object
            var calci = new Calculator();
            calci.adder(1, 2).should.equal(3);
            calci.adder(1, 2).should.be.above(2);
        });
    });
    describe('substract()', function() {
        it('should return 3 when substracting 5 and 2 and above 2', function() {
            // Making calci object
            var calci = new Calculator();
            calci.substractor(5, 2).should.equal(3);
            calci.substractor(2, 5).should.equal(3);
            calci.substractor(5, 2).should.be.above(2);
            calci.substractor(2, 5).should.be.above(2);
        });
    });
    describe('multiply()', function() {
        it('should return 2 when multiplying 1 and 2 and above -2', function() {
            // Making calci object
            var calci = new Calculator();
            calci.multiplier(1, 2).should.equal(2);
            calci.multiplier(1, 2).should.be.above(-2);
        });
    });
});
