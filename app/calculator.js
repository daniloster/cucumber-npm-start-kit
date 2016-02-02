module.exports = Calculator;

function Calculator() {
    var _result = 0;

    this.sum = sum;
    this.multiple = multiple;
    this.subtract = subtract;
    this.divide = divide;
    this.clear = clear;
    this.result = result;
    
    /////////////////////////////////

    function sum(firstOp, secondOp) {
        _result = parseFloat(firstOp) + parseFloat(secondOp || _result);
        return this;
    }

    function multiple(firstOp, secondOp) {
        _result = parseFloat(firstOp) * parseFloat(secondOp || _result);
        return this;
    }

    function subtract(firstOp, secondOp) {
        if (secondOp) {
            _result = parseFloat(firstOp) - parseFloat(secondOp);
        } else {
            _result = _result - parseFloat(firstOp);
        }
        return this;
    }

    function divide(firstOp, secondOp) {
        if (secondOp) {
            _result = parseFloat(firstOp) / parseFloat(secondOp);
        } else {
            _result = _result / parseFloat(firstOp);
        }
        return this;
    }

    function clear() {
        _result = 0;
        return this;
    }

    function result() {
        return _result;
    }
}