var express = require('express');
var cors = require('cors');
require('dotenv').config()
const upload = require("./upload"); // upload.js imported here, as upload.js has multer imported, no need to import here

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.post("/api/fileanalyse", upload.single('upfile'), (req,res,next)=>{
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
  next();
})

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
