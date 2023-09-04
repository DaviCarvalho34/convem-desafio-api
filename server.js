const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const verifyResponseRouter = require('./routes/verifyResponse');
app.use('/verificar-resposta', verifyResponseRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});