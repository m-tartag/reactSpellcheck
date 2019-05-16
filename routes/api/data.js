const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = express.Router();

// Schema

require('../../models/Words');

const Word = mongoose.model('Words');

// @route     GET api/index
// @desc      Index
// @access    Public

router.get('/', cors(), function(req, res) {
  const queryBuffer = req.query.word;
  const query = queryBuffer.replace(/[^A-Za-z]/g, '').toLowerCase();

  Word.find(
    {
      word: query,
    },
    function(err, result) {
      if (err) throw err;
      if (result) {
        res.send(result);
      } else {
        res.send(JSON.stringify({ error: 'Error' }));
      }
    }
  );
});

module.exports = router;
