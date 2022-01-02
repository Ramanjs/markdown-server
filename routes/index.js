var express = require('express');
var router = express.Router();
const fs = require('fs');
const markdownIt = require('markdown-it');
const md = new markdownIt();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:id', (req, res) => {
  const fileName = req.params.id;
  console.log(fileName);
  const file = fs.readFileSync('../../iiitd/journals/' + fileName);
  const htmlResult = md.render(file.toString());
  res.send(htmlResult);
});

module.exports = router;
