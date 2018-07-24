
/*
 * Copy the coresponded dts file in the dist folder 
 * (because ts places the files in the src/components folder with their own components too)
 */
const fs = require('fs-extra');

'use strict';
const fileWalker = require('./utils/fileWalker');

const config = require('../config.js');


fileWalker("./" + config.build.distFolder, function (err, files) {
    if (err) { throw err; }

    const filterFiles = files.filter(((file) => {
        return file.endsWith('.d.ts');
}))

    filterFiles.forEach(fileName => {

        const fileNameN = fileName.lastIndexOf('/');
        const fileNameFinalResult = fileName.substring(fileNameN + 1);
        const fileDestination = './'+config.build.distFolder+ '/' + fileNameFinalResult;

        fs.copy(fileName, './'+config.build.distFolder+ '/' + fileNameFinalResult, { flag: 'w'}, err => {
            if (err) return console.error(err);

            // Replace double dots with ./src/components 
            // if this file requires other components types
            // except the index that goes only one flor up
            const fileContents = fs.readFileSync(fileDestination, 'utf-8');
            let fileContentsNew;
            if(fileName.indexOf('index.d.ts') !== -1){
                fileContentsNew = fileContents.replace(/(\.\.)/gim, '.');
            } else {
                fileContentsNew = fileContents.replace(/(\.\.)/gim, './src/components');
            }
        
            //Write the file
            fs.writeFileSync(fileDestination, fileContentsNew, 'utf-8');

            console.log(fileName, ' copied with success!')
        })
    });
});