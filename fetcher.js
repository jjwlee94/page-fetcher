let input = process.argv.splice(2);
let url = input[0];
let path = input[1];

const request = require ('request');
request(url, (error, response, body) => {
  // console.log('error:', error);
  // console.log('statusCode:', response && response.statusCode);
  const fs = require('fs');
  fs.writeFile(path, body, function(err) {
    if (err) {
      return console.log("Error");
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  })
})