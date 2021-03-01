const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');


/* This function gets the home directory of the user depending on their OS environment */

const getHomeDir = () => {
    // getting user environment
    const env = process.env;

    // getting user home
    const home = env.HOME; // ex. in Windows: HOME: 'C:\\Users\\foo'

    // getting user depending on OS type
    const user = env.LOGNAME || env.USER || env.LNAME || env.USERNAME
    
    // Using these conditions to check the OS type and calling a function to generate the list of the user directory content 
    if (process.platform === 'win32'){
        const homeDirWindows = env.USERPROFILE || env.HOMEDRIVE + env.HOMEPATH || home || null;
        const command = 'dir';
        return getUserDirContent(homeDirWindows, command);
    }

    if (process.platform === 'darwin') {
        const homeDirMacOS = home || (user ? '/Users/' + user : null);
        const command = 'ls';
        return getUserDirContent(homeDirMacOS, command);
    }

    if (process.platform === 'linux') {
        const homeDirLinux = home || (process.getuid() === 0 ? '/root' : (user ? '/home/' + user : null));
        const command = 'ls';
        return getUserDirContent(homeDirLinux, command);
    }
    return console.log('Home directory not found');
}


/* This function displays the list of content of the home directory we get from the 'getHomeDir' using a child process */

const getUserDirContent = (foundHomeDirectory, command) => {
    exec(command, {cwd: foundHomeDirectory}, (err, stdout, stderr) => {
        if (err) { // command error
            console.log('error: ' + err);
            return
        }
        if (stderr){ // error after executing command
            console.log('stderr: ' + stderr);
        }
        console.log('stdout: ' + stdout);
    })
}

getHomeDir();