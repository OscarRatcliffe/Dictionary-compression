"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
let output = [];
let index = [];
fs.readFile('../data/testdata.txt', (err, data) => {
    data = data.toString().split(" ");
    for (let i = 0; i < data.length; i++) {
        if (index.includes(data[i])) {
            // Pass
        }
        else {
            index.push(data[i]);
        }
        output.push(index.indexOf(data[i]));
    }
    console.log(output);
});
