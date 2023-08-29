const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const resposta = req.body.resposta; 
  console.log(resposta);
 
  if (resposta === 'sim') {
    res.json({ message: 'sucesso' });
  } else {
    res.json({ message: 'erro' });
  }
});


module.exports = router;