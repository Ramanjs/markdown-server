var express = require('express');
var router = express.Router();
const fs = require('fs');
const marked = require('marked');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:id', (req, res) => {
  const fileName = req.params.id;
  console.log(fileName);
  const file = fs.readFileSync('../../iiitd/journals/' + fileName);
  const htmlResult = marked.parse(file.toString());
  res.send(htmlResult);
});

module.exports = router;
