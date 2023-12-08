const fs = require('fs')

let output: Array<number> = [];
let index: Array<string> = [];

fs.readFile('../data/data.txt', (err: any, data: any) => {
    data = data.toString().split(" ")

    for(let i = 0; i < data.length; i++) {

        if(index.includes(data[i])) {
            // Pass
        } else {
            index.push(data[i])
        }

        output.push(index.indexOf(data[i]))

    }

    try {
        fs.writeFileSync('../data/outdata.txt', output.toString());
        
      } catch (err) {

        console.error(err);

      }

})
