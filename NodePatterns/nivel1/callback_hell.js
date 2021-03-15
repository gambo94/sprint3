const {
  readdir,
  readFile,
  writeFile
} = require("fs/promises");

const {
  join,
  basename,
  resolve
} = require("path");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
  .toString()
  .split("")
  .reverse()
  .join("");



const generateAndSolvePromises = (array, inputFolder, outputFolder) => {
  const proimsesArray = [];
  for (file of array){
      
    // generates as many promises as the number of files
      proimsesArray.push(readFile(join(inputFolder, file), 'utf-8'));
      console.log(`The file ${file} has been read correctly`);
  }

  // iterating over the promises and solving them by writing the data collected before
    for (let i = 0; i < proimsesArray.length; i++){
      proimsesArray[i]
        .then((data) => {
          writeFile(join(outputFolder, array[i]), reverseText(data))
            .then(() => console.log(array[i] + ' correctly reversed'))
            .catch((err) => console.log('Folder might not extist, make sure to create a folder named "outbox"', err));
      })
  }
return array;

}


const reverseFileText = async (inputFolder, outputFolder) => {

  // generates an array of files once the function has read the entire given folder
  const arrayFiles = await readdir(inputFolder);
  // generating an array of promises that return the data of the read files only when all the data has been read
  generateAndSolvePromises(arrayFiles, inputFolder, outputFolder);
}

reverseFileText(inbox, outbox)
.catch((err) => console.log(err));

