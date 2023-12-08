import { copyFileSync } from "fs";

const fs = require('fs')

let output: Array<number> = [];
let index: Array<string> = [];

fs.readFile('../data/testdata.txt', (err: any, data: any) => {
    data = data.toString().split(" ")

    for(let i = 0; i < data.length; i++) {

        if(index.includes(data[i])) {
            // Pass
        } else {
            index.push(data[i])
        }

        output.push(index.indexOf(data[i]))

    }
    
    console.log(output)

})
