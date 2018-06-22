
/*
 * Copy the coresponded dts file in the dist folder (because ts places that file somewhere strange)
 */
const fs = require('fs-extra');

const fileWalker = require('./utils/fileWalker');

const config = require('../config.js');

fileWalker("./" + config.build.distFolder, function (err, files) {
    if (err) {
        throw err;
    }
    const filterFiles = files.filter(((file) => {
        return file.endsWith('.d.ts');
    }))
    console.log(filterFiles);
    filterFiles.forEach(fileName => {
        console.log('element', fileName);
        const fileNameN = fileName.lastIndexOf('/');
        var fileNameFinalResult = fileName.substring(fileNameN + 1).toLocaleLowerCase();
        // With a callback:
        fs.copy(fileName, './dist/' + fileNameFinalResult, { flag: 'w'}, err => {
            if (err) return console.error(err)

            console.log(fileName, ' copied with success!', )
        }) // copies file
    });
});


console.log('Coping the d.ts files to the right location...');


