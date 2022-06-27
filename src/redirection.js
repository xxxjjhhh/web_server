const express = require('express');
const app = express();

app.get('*', (req, res) => {
    let protocol =req.headers['X-Forwarded-Proto'] || req.protocol;

    if(protocol == 'http'){
        let redir = "https://" + req.headers.host + req.url;

        return res.redirect(redir);
    }
});

app.listen(80, () => {console.log('80 port server start');});
