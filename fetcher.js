const fs = require('fs');
//STILL NEED TO INMPLEMENT fs.write()

const request = require('request'); //use request library to make HTTP request
//const fs = require('fs'); //use Node's fs module to write the file
const url = process.argv.slice(2);//take in url as a command line argument
const inputURL = url.toString();
//console.log(inputURL)
//const indexFile = require('./index')
const file = process.argv.slice(3);
const localFile = file.toString();
//console.log(localFile)


const fetch = (input, localFile) => {
  request(input, (error, response, body) => {
    //console.log('error:', error); // Print the error if one occurred
    if (error) throw error
  
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    

//GOT IT WORKING UP UNTIL fs.writeFile
    //IS THERE AN EASIER WAY TO GET FILE SIZE
    // fs.writeFile(localFile, body, (error) => {
    //   if (error) {
    //     throw error
    //   } else {
    //         console.log('GOT FILE')
    // //     console.log(`Downloaded and saved ${}3261 bytes to ./index.html`)
    //   }
    // })
  });
}
fetch(inputURL);

// const getFileSize = () => {
//   const stats = fs. statSync('index.html');
//   const fileSizeInBytes = stats. size;
//   console.log(fileSizeInBytes)
// }
//getFileSize()




//Here's some pseudo-code ...

// const fecth = (url, localFile) => {
//    request(url, (error, response, body) {
//       if (error) {
//          throw error
//       } 
//         console.log(body)
      // fs.writefile('index.html', body, (error) => {
      //    if (error) {
      //      // Do Something
      //      console.log(error)
      //      throw error
      //    } else {
      //      // Do Something Else
      //      console.log(`Downloaded and saved ${}3261 bytes to ./index.html`)
        // }
      // })
//    })
//  }

