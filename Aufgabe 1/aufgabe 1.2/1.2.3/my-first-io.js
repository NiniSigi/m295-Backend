const fs = require('fs')
const data = fs.readFileSync(process.argv[2], 'utf-8');
const newCountLine = data.split('\n').length-1;
console.log(newCountLine)
