'use strict';
/*
 * 1: Create a temporary file with the webpack.entry structure for all the components
 * 2: Create a temporary index file so that you can bundle all in a single index file that is also added to the webpack.entry
 * 3: Copy the coresponded dts file in the dist folder (because ts places that file somewhere strange)
 */

const fs = require('fs-extra');
const path = require('path');
const config = require('../config.js');
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const componentsFolder = './' + config.build.componentsFolder + '/';
const tempFolder = './' + config.build.tempFolder;
const tempIndexFileName = 'index.ts';
const tempWebackEntryFileName = 'webpackEntryFile.js';
let webpackEntry = {}

console.log('Generating the ' + tempWebackEntryFileName + ' and ' +  tempIndexFileName + ' files from the ' + componentsFolder + ' folder');

// Write the file with webpackEntries when the reading of structure is done
function allComponentsRead() {
    
    // Create temporary folder
    if (!fs.existsSync(tempFolder)){
        fs.mkdirSync(tempFolder);
    }

    // Webpack entry contents (an object with all the components)
    let webpackEntryWithIndex = Object.assign({index: tempFolder + '/index'}, webpackEntry);
    let webpackEntryFileContents = 'module.exports = ' +  JSON.stringify(webpackEntryWithIndex);


    // Create a webpackEntryFile to be used in the webpack.config
    fs.writeFile(tempFolder + '/' + tempWebackEntryFileName, webpackEntryFileContents, { flag: 'w' }, (err) => {  
        if (err) throw err;
        console.log(tempWebackEntryFileName + ' saved!');
    });


    //Index file contents (file that imports all components and exports all as a single module)
    let indexContents = `
    ${Object.keys(webpackEntry).map((entry) => 
        `import ${entry.capitalize()} from '.${webpackEntry[entry]}';\n`).join('')} \n
        export default ${Object.keys(webpackEntry)[0].capitalize()} \n
        export {${Object.keys(webpackEntry).map((entry) => `${entry.capitalize()}`)}}`


    // Create a index file that bundles all toghether
    fs.writeFile(tempFolder + '/' + tempIndexFileName, indexContents, { flag: 'w' }, (err) => {  
        if (err) throw err;
        console.log(tempIndexFileName + ' file saved!');
    });


}

fs.readdir(componentsFolder, (err, folders) => {
    //Read all the folders and
    let i = 1;

    folders.forEach(folderName => {

        const fileName = folderName;
        const fileLocation = componentsFolder + folderName + '/' + folderName;

        // Add the components in the modulesObject
        webpackEntry[fileName.toLocaleLowerCase()] = fileLocation;

        // All the components read, write the temporary file (1)
        if(folders.length === i) {
            allComponentsRead();    
        }
        
        i++;
    });
  })

