const express = require('express');
const router = express.Router();

router.get('/:resposta', (req, res) => {
  const resposta = req.params.resposta;

  if (resposta === 'sim') {
    res.send('sucesso');
  } else {
    res.send('erro');
  }
});

module.exports = router;