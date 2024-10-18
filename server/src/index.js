// importando pacote express
import express from 'express';

import { cadastroAula } from './controllers/AulaController.js';

//instalando objeto express
const app = express();
const porta = 5000;

//configurando comunicação como JSON
app.use(express.json());

//Rota de teste da API
app.get('/', (req, res) => {
  res.send('API Funcionando');
});

//Rotas de CRUD de aulas
app.post('/aula',cadastroAula);

app.get('/aula', (req,res) => {
  res.status(200).json([
    {
      data: 'T00:00:00.000Z',
      data_hora_inicio: 'T:00.000Z',
      data_hora_fim: 'T:00.000Z',
      turma: 'EMP-NBM-44',
      instrutor: 'JOEL HERBERT BARBOSA SILVA',
      unidade_curricular: 'NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.0000)',
      ambiente: 'VTRIA-3-SALA-3004',
      chave: null,
      id: '1300',
    }
  ]);
});

app.listen(porta, () => {
  console.log(`API funcionando da porta ${porta}`);
});
