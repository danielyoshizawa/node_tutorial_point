var express = require('express');
var app = express();
var fs = require("fs");
var path = require('path');

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(multer({dest: path.join(__dirname, '/tmp/')}).any());

app.get('/fileUpload.html', function(req, res) {
   res.sendFile(__dirname + "/" + "fileUpload.html");
});

app.post('/file_upload', function (req, res) {
   console.log(req.files[0].originalname);
   console.log(req.files[0].path);
   console.log(req.files[0].type);
   var file = __dirname + "/" + req.files[0].originalname;

   fs.readFile( req.files[0].path, function (err, data) {
      fs.writeFile(file, data, function(err) {
         if(err) {
            console.log(err);
         } else {
            response = {
               message: 'File uploaded successfully',
               filename: req.files[0].originalname
            };
         };
         console.log(response);
         res.end( JSON.stringify(response));
       });
   });
   //console.log(req);
   //res.end("NOIS");

});

var server = app.listen(8081, function() {
   var host = server.address().address;
   var port = server.address().port;

   console.log("Example app listening at http://%s:%s", host, port);
});
