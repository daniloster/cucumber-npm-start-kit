var Calculator = require('./../../app/calculator'), calc;

module.exports = function () {
    this.Given(/^I have created my calculator$/, function () {
        calc = new Calculator();
    });
    
    this.Given(/^it has been cleared$/, function() {
        calc.clear();
    });
    
    this.When(/^I sum (.*) and (.*)$/, suming);
    this.When(/^I sum the result with (.*)$/, function(firstOp) {
        suming(firstOp);
    });
    function suming(firstOp, secondOp) {
        calc.sum(firstOp, secondOp);
    }
    
    this.When(/^I multiple (.*) and (.*)$/, multipling);
    this.When(/^I multiple the result by (.*)$/, function multiplingFirstOp(firstOp){
        multipling(firstOp);
    });
    function multipling(firstOp, secondOp) {
        calc.multiple(firstOp, secondOp);
    }
    
    this.When(/^I subtract (.*) and (.*)$/, subtracting);
    this.When(/^I subtract (.*) from the result$/, function(firstOp) {
        subtracting(firstOp);
    });
    function subtracting(firstOp, secondOp) {
        calc.subtract(firstOp, secondOp);
    }
    
    this.When(/^I divide (.*) and (.*)$/, dividing);
    this.When(/^I divide the result by (.*)$/, function(firstOp) {
        dividing(firstOp);
    });
    function dividing(firstOp, secondOp) {
        calc.divide(firstOp, secondOp);
    }

    this.Then(/^I should get (.*) as result$/, function (result, callback) {
        if (calc.result() === parseFloat(result)) {
            callback();
        } else {
            callback(new Error("Expected to be: " + result + ", but found: " + calc.result()));
        }
    });
};