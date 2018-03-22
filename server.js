var express = require('express');
var app = express();
app.set('trust proxy', true)

app.get('/', (req,res)=>{
     var ip = req.headers['x-forwarded-for'];
     var info = {
         'ipaddress': req.ip,
         'language': req.headers["accept-language"].split(',')[0],
         'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
     };
     res.send(info);
 });


const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
