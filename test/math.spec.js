const assert = require('assert');
const Math = require('../Math.js')

describe('Math class', function() {

    // you can use it.only(); Or you can use skip

    it('Sum twu number', function(done) {
        const math = new Math();

        this.timeout(3000);

        math.sum(5, 5, value => {
            assert.equal(value, 10);
            done();
        });

        // try {
            // assert.equal(math.sum(5, 5,), 10);
        // } catch (error) {
        //     console.log('Error: ' + error);
        // }
    });

    it('Multiply two number', function () {
        const math = new Math();

        math.mult(5,5, value => {
            assert.equal(value, 25);
        });
    });
});