const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const response = req.body.response; 

  if (response === 'sim') {
    res.json({ message: 'sucesso' });
  } else {
    res.json({ message: 'erro' });
  }
  
});


module.exports = router;