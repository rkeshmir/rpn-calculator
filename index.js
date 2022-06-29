const readline = require('readline');
const calculate = require("./calculator");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

//  sample input:   6 8 4 + 3 2 + - *

rl.on('line', function(line){
    if (line.includes('exit'))
        process.exit(0);
    const arr = line.split(' ');
    console.log(calculate(arr));
})