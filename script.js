var express = require('express');
var app = express();

app.get('/', (req,res)=>{
     var ip = req.connection.remoteAddress;
     var info = {
         'ipaddress': req.ip,
         'language': req.headers["accept-language"].split(',')[0],
         'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
     };
     res.send(info);
 });

app.listen(1337);
