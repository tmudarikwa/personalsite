var express = require('express');
var router = express.Router();
var path = require('path');

var date = new Date();
/* download resume copy */
router.get('/downloadresume', function (req, res) {
   var file = path.join(__dirname, 'public/resume/TAKUNDA EUGENE MUDARIKWA - RESUME - 2018.pdf');
   res.download(file, function (err) {
       if (err) {
           console.log("Error");
           console.log(err);
       } else {
           console.log("Success");
       }
   });
   res.render('index', { title: 'Takunda Mudarikwa | Portifolio', year: date.getFullYear(), filedownload: 'success'});
});



module.exports = router;