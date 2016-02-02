var Calculator = require('./../../app/calculator'), calc;

module.exports = function () {
    this.Given(/^I have created my calculator$/, function () {
        calc = new Calculator();
    });
    
    this.Given(/^it has been cleared$/, function() {
        calc.clear();
    });
    
    this.When(/^I sum (.*) and (.*)$/, suming);
    this.When(/^I sum the result with (.*)$/, suming);
    function suming(firstOp, secondOp) {
        calc.sum(firstOp, this.isValidArg(secondOp) ? secondOp : undefined);
    }
    
    this.When(/^I multiple (.*) and (.*)$/, multipling);
    this.When(/^I multiple the result by (.*)$/, multipling);
    function multipling(firstOp, secondOp) {
        // console.log('multipling', secondOp);
        calc.multiple(firstOp, this.isValidArg(secondOp) ? secondOp : undefined);
    }
    
    this.When(/^I subtract (.*) and (.*)$/, subtracting);
    this.When(/^I subtract (.*) from the result$/, subtracting);
    function subtracting(firstOp, secondOp) {
        calc.subtract(firstOp, this.isValidArg(secondOp) ? secondOp : undefined);
    }
    
    this.When(/^I divide (.*) and (.*)$/, dividing);
    this.When(/^I divide the result by (.*)$/, dividing);
    function dividing(firstOp, secondOp) {
        calc.divide(firstOp, this.isValidArg(secondOp) ? secondOp : undefined);
    }

    this.Then(/^I should get (.*) as result$/, function (result, callback) {
        if (calc.result() === parseFloat(result)) {
            callback();
        } else {
            callback(new Error("Expected to be: " + result + ", but found: " + calc.result()));
        }
    });
};