const express = require('express');
const router = express.Router();
const fs = require('fs');
const markdownIt = require('markdown-it');
const md = new markdownIt();

router.get('/:id', (req, res) => {
  const fileName = req.params.id;
  console.log(fileName);
  const file = fs.readFileSync('../../../iiitd/journals/' + fileName);
  const htmlResult = md.render(file);
  res.send(htmlResult);
});

module.exports = router;
