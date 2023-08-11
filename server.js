const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const verificarRespostaRouter = require('./routes/verificarResposta');
app.use('/verificar-resposta', verificarRespostaRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});