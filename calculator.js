const operators = {
    '+': (a, b) => a+b,
    '-': (a, b) => a-b,
    '*': (a, b) => a*b,
    '/': (a, b) => a/b,
    'sqrt': (a) => a*a,
}

module.exports = function calculate(arr) {
    const stack = [];
    for (let i =0 ; i < arr.length; i++) {
        const value = arr[i];
        if (operators[value]) {
            const operator = operators[value];
            const operands = [];
            for (let j = 0 ; j < operator.length; j++) {
                operands.unshift(parseFloat(stack.pop()));
            }
            stack.push(operator(...operands));
        } else {
            stack.push(parseFloat(value));
        }
    }
    return stack[0];
}