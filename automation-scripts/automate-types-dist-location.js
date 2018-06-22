const fs = require('fs');
const config = require('../config');

/*
 * Replace double dots
 */

function readWriteSync() {
    const indexFile = './' + config.build.distFolder + '/index.d.ts';
    const data = fs.readFileSync(indexFile, 'utf-8');

    var newValue = data.replace(/(\.\.)/gim, '.');

    fs.writeFileSync(indexFile, newValue, 'utf-8');

    console.log(indexFile + ' modifed complete');
}
readWriteSync();