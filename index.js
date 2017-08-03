'use strict';
const fs = require('fs');

function onRequest(req, res) {
    req.res = res;
    if (req.url === '/') {
        fileRequest('/html/index.html', req);
    } else if (req.url.includes('static') === true) {
        const path = req.url.slice(7); // Remove /static
        fileRequest(path, req);
    } else {
        res.end();
    }
}

function fileRequest( path, reqRes ) {
    fs.readFile(__dirname + `/dist${path}`, function(error, data) {
        if (error !== null) {
            reqRes.res.statuscode = 500;
            reqRes.res.end();
        } else {
            reqRes.res.write(data);
            reqRes.res.end();
        }
    });
}

require( 'http' )
    .createServer(onRequest)
    .listen(8000);
