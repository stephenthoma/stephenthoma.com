'use strict';
const pug = require('pug');
const fs = require('fs');

function compileIndex(options) {
    const compiledFunction = pug.compileFile(options.sourceFile);
    fs.readFile( options.projectsFile, function( error, data ) {
        if (error !== null) {
            throw error;
        }

        if (!fs.existsSync('./dist/html')){
            fs.mkdirSync('./dist/html');
        }

        const projects = JSON.parse(data);
        const outputHTML = compiledFunction(projects);
        fs.writeFile(options.destinationFile, outputHTML, function(error) {
            if (error !== null) {
                throw error;
            }
        });
    });
}

compileIndex({
    sourceFile: process.argv[2],
    projectsFile: process.argv[3],
    destinationFile: process.argv[4],
});
