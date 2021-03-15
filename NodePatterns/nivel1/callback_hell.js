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



const generatePromises = (array, inputFolder) => {
  const proimsesArray = [];
  for (file of array){
      
      // generates as many promises as the number of files
      proimsesArray.push(readFile(join(inputFolder, file), 'utf-8'));
      console.log(`The file ${file} has been read correctly`);
  }
  return proimsesArray;
}


const reverseFileText = async (inputFolder, outputFolder) => {

  // generates an array of files once the function has read the entire given folder
  const arrayFiles = await readdir(inputFolder);
  // generating an array of promises that return the data of the read files only when all the data has been read
  const arrayOfPromises = await generatePromises(arrayFiles, inputFolder);


  // iterating over the promises and solving them by writing the data collected before
  for (let i = 0; i < arrayOfPromises.length; i++){
      arrayOfPromises[i]
        .then((data) => {
          writeFile(join(outputFolder, arrayFiles[i]), reverseText(data));
          console.log(`The file: ${arrayFiles[i]} has been reverse written correctly, check the folder: ${basename(resolve(outputFolder))}`)
      })
  }
  return arrayFiles;
}

reverseFileText(inbox, outbox)
.catch((err) => console.log(err));

