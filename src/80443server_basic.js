const fs = require('fs');
const https = require('https');
const express = require('express');

const privatekey = fs.readFileSync(__dirname + '/my/private.pem', 'utf8');
const certkey = fs.readFileSync(__dirname + '/my/cert.pem', 'utf8');
const csrkey = fs.readFileSync(__dirname + '/my/csr.pem', 'utf8');

const sslkey = {
        key: privatekey,
        cert: certkey,
        ca: csrkey
};

const app = express();
const app443 = express();
const httpsServer = https.createServer(sslkey, app443);


app.get('/', (req, res) => {
        res.sendFile(__dirname + '/pages/index.html');
});
app443.get('/', (req, res) => {
        res.sendFile(__dirname + '/pages/index.html');
});


app.listen(80, () => {
        console.log('80 port server start');
});
httpsServer.listen(443, () => {
        console.log('443 port server start');
});
