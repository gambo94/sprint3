const {
  readdir,
  readFile,
  writeFile
} = require("fs/promises");
const {
  join
} = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
  .toString()
  .split("")
  .reverse()
  .join("");



// this function receives the files of the array that it is generated
// and returns a promise that reads the file and returns the data has a 'resolve'
const loopAndRead =  (file) => {
  // looping throught the array to create a number of promises equal to the number of files
      return new Promise((resolve, reject) => {
        let data = readFile(join(inbox, file), "utf8");
        console.log('file: ' + file + ' read successfully');
        resolve(data) ;
      })
}

const promiseArray = [];
let fileNames = [];

// this function creates an array of promises which its number is equal
// to the number of files
const promiseCreator = (array) => {
  for (let i = 0; i < array.length; i++){
    // creating array of promises
    promiseArray.push(loopAndRead(array[i]));

    // pushing the filename into another array
    fileNames.push(array[i]);
  }
  // returns an array with promises (number equals to file(s))
  return Promise.all(promiseArray)
}


readdir(inbox)
  .then((filesArray) =>  promiseCreator(filesArray))
  .then((ArrayWithPromisedData) => {
    for (let i=0; i< ArrayWithPromisedData.length; i++ ){
      writeFile(join(outbox, fileNames[i]), reverseText(ArrayWithPromisedData[i]), "utf8");
      console.log('file: ' + fileNames[i] + ' has been reversed successfully');
    }
    fileNames = [];
    })
  .catch(error => console.log(error))

