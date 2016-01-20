describe("Hello world", function() {
    beforeEach(function() {
        jasmine.addMatchers({
            toBeUpperCase: function(util, customEqualityTesters) {
                return {
                    compare: function(actual, expected) {
                        var passed = actual === actual.toUpperCase();
                        return {
                            pass: passed,
                            message: 'Expected ' + actual + (passed ? '' : ' not') + ' to equal ' + expected
                        };
                    }
                };
            }
        });
    });
    it("says hello world in capital", function() {
        expect(helloWorld()).toBeUpperCase("HELLO WORLD!");
    });
});
