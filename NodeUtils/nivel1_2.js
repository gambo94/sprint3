
// EX 1
// create a function that prints a message recursively with a delay of 1 second

let displayedTimes = 0;

function messageDelayed(){
    if(displayedTimes === 4){
        return
    } else {
        console.log('I am a 1 second delayed message');
        displayedTimes++;
        setTimeout(messageDelayed, 1000);
    }
    
}

setTimeout(messageDelayed, 1000);

// EX 2 create a function that if executed, prints his name in a file 

const fs = require('fs');

function writeOnFile(data){
    fs.writeFile('example.txt', data, 'utf8', (err) =>{
        if(err) return console.log(err);
        console.log('txt file created');
    });
}

writeOnFile('Federico');

// EX 3 

function readFromFile(){
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if(err) return console.log('Sorry couldnt read the fila');
        console.log('The file contains: ' + data);
    })
}

readFromFile();


// NIVEL 2
// Ex 1 create a function that zips the file created in Nivel 1
const zlib = require('zlib');
const folder = './';
const path = require('path');


// This method with the node core module ZLIB only zips one file at a time
// if you loop into the folder. For example, if you have multiple .txt file
// it will create a zip file for each one of them

const compress = zlib.createGzip();

function zippingFile(){
    // reading the folder collecting files into an array 
    fs.readdir(folder, (err, files) => {
        if(err) return console.log(err);
        // looping through the files
        files.forEach(file => {
            // filtering for just .txt extension files
            if (path.extname(file) == ".txt") {
                const input = fs.createReadStream(file);
                const output = fs.createWriteStream(file +='.gz');
                input.pipe(compress).pipe(output);
                console.log('zip file created');
            }
        });
    });
}

zippingFile();