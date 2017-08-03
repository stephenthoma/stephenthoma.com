'use strict';
const sass = require('node-sass');
const fs = require('fs');

function compileSass(options = {}) {
    options = Object.assign({style: 'expanded'}, options);

    if (!fs.existsSync(options.destinationDirectory)){
        fs.mkdirSync(options.destinationDirectory);
    }

    let result;
    fs.readdir(options.sourceDirectory, function( error, files ) {
        for ( let file of files ) {
            result = sass.renderSync({
                file: options.sourceDirectory + file,
                outputStyle: options.style
            });
            fs.writeFile(
                `${options.destinationDirectory}${file.split('.')[0]}.css`,
                result.css,
                function(error) {
                    if (error !== null) {
                        callback(error);
                    }
            });
        }
    });

};

compileSass({
    sourceDirectory: process.argv[2],
    destinationDirectory: process.argv[3],
    style: process.argv[4]
});
